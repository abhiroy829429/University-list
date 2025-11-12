// Lead form submission controller
const config = require('../config');

// Validate webhook URL format
const isValidWebhookUrl = (url) => {
  return url && 
    url.startsWith('https://') && 
    url.includes('.m.pipedream.net') &&
    !url.includes('pipedream.com/@') &&
    !url.includes('/invite') &&
    !url.includes('/workflows');
};

const submitLead = async (req, res) => {
  const pipedreamUrl = config.pipedreamWebhookUrl;
  
  // Demo mode: If Pipedream is not configured or URL is invalid, log data and return success
  if (!pipedreamUrl || pipedreamUrl === 'https://your-pipedream-webhook-url.m.pipedream.net' || !isValidWebhookUrl(pipedreamUrl)) {
    if (pipedreamUrl && !isValidWebhookUrl(pipedreamUrl)) {
      console.log('\n⚠️  INVALID PIPEDREAM WEBHOOK URL ⚠️');
      console.log('Current URL:', pipedreamUrl);
      console.log('This does not appear to be a valid webhook URL.');
      console.log('A valid webhook URL should look like: https://xxxxx.m.pipedream.net');
      console.log('Please check docs/GET_WEBHOOK_URL.md for instructions on how to get the correct URL.');
      console.log('');
    }
    console.log('\n=== FORM SUBMISSION (Demo Mode - Pipedream not configured) ===');
    console.log('Submitted Data:', JSON.stringify(req.body, null, 2));
    console.log('To enable Pipedream integration:');
    console.log('1. Go to https://pipedream.com and create a free account');
    console.log('2. Create a new workflow → HTTP / Webhook');
    console.log('3. Copy the webhook URL (should end with .m.pipedream.net)');
    console.log('4. Add it to .env file as PIPEDREAM_WEBHOOK_URL');
    console.log('5. See docs/GET_WEBHOOK_URL.md for detailed instructions');
    console.log('===========================================================\n');
    
    // Return success in demo mode so user can test the form
    return res.json({ 
      success: true, 
      message: 'Form submitted successfully (Demo Mode - data logged to console)',
      demo: true
    });
  }
  
  try {
    console.log('\n=== FORM SUBMISSION TO PIPEDREAM ===');
    console.log('URL:', pipedreamUrl);
    console.log('Data:', JSON.stringify(req.body, null, 2));
    
    // Use built-in fetch (Node.js 18+)
    const response = await fetch(pipedreamUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body)
    });
    
    console.log('Response Status:', response.status, response.statusText);
    
    if (response.ok) {
      const responseData = await response.text();
      console.log('Response:', responseData || '(empty)');
      console.log('✅ Successfully sent to Pipedream!');
      console.log('===================================\n');
      
      res.json({ success: true, message: 'Form submitted successfully' });
    } else {
      const errorText = await response.text();
      console.error('❌ Pipedream returned error:', errorText);
      console.log('===================================\n');
      throw new Error('Pipedream request failed');
    }
  } catch (error) {
    console.error('❌ Error submitting to Pipedream:', error.message);
    console.error('Full error:', error);
    console.log('===================================\n');
    
    // Provide more detailed error message
    let errorMessage = 'Failed to submit form. Please try again later.';
    if (error.message.includes('fetch')) {
      errorMessage = 'Network error: Could not connect to Pipedream. Please check your internet connection and Pipedream URL.';
    } else if (error.message.includes('ENOTFOUND') || error.message.includes('getaddrinfo')) {
      errorMessage = 'Invalid Pipedream URL. Please check your PIPEDREAM_WEBHOOK_URL in .env file.';
    }
    
    res.status(500).json({ 
      success: false,
      error: errorMessage,
      details: config.nodeEnv === 'development' ? error.message : undefined
    });
  }
};

const testPipedream = async (req, res) => {
  const pipedreamUrl = config.pipedreamWebhookUrl;
  
  if (!pipedreamUrl || pipedreamUrl === 'https://your-pipedream-webhook-url.m.pipedream.net') {
    return res.json({
      configured: false,
      message: 'Pipedream webhook URL not configured. Please set PIPEDREAM_WEBHOOK_URL in .env file.',
      instructions: [
        '1. Go to https://pipedream.com and create a free account',
        '2. Create a new workflow → HTTP / Webhook',
        '3. Copy the webhook URL (should end with .m.pipedream.net)',
        '4. Add it to .env file as PIPEDREAM_WEBHOOK_URL',
        '5. Restart the server',
        'See docs/GET_WEBHOOK_URL.md for detailed instructions'
      ]
    });
  }
  
  if (!isValidWebhookUrl(pipedreamUrl)) {
    return res.json({
      configured: true,
      valid: false,
      message: 'Invalid Pipedream webhook URL format.',
      currentUrl: pipedreamUrl,
      expectedFormat: 'https://xxxxx.m.pipedream.net',
      error: 'The URL you provided is not a valid webhook URL. It appears to be a workflow page or invite link.',
      instructions: [
        'Your URL should end with .m.pipedream.net',
        'It should NOT contain /@, /invite, or /workflows',
        'See docs/GET_WEBHOOK_URL.md for instructions on how to get the correct URL'
      ]
    });
  }
  
  try {
    const testData = {
      test: true,
      message: 'This is a test submission from the verification endpoint',
      timestamp: new Date().toISOString()
    };
    
    console.log('\n=== TESTING PIPEDREAM CONNECTION ===');
    console.log('URL:', pipedreamUrl);
    console.log('Sending test data...');
    
    const response = await fetch(pipedreamUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData)
    });
    
    if (response.ok) {
      console.log('✅ Test successful! Pipedream is receiving data.');
      console.log('=====================================\n');
      res.json({
        configured: true,
        connected: true,
        status: response.status,
        message: 'Successfully connected to Pipedream! Check your Pipedream dashboard to see the test data.',
        pipedreamUrl: pipedreamUrl.replace(/https:\/\/([^.]+)\.m\.pipedream\.net/, 'https://pipedream.com/workflows/$1')
      });
    } else {
      throw new Error(`Pipedream returned status ${response.status}`);
    }
  } catch (error) {
    console.error('❌ Test failed:', error.message);
    console.log('=====================================\n');
    res.json({
      configured: true,
      connected: false,
      error: error.message,
      message: 'Failed to connect to Pipedream. Please check your webhook URL.'
    });
  }
};

module.exports = {
  submitLead,
  testPipedream
};

