// API Base URL - Use relative URL for production compatibility
const API_BASE_URL = window.location.origin + '/api';

// Get URL parameter
function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  const results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Show alert message
function showAlert(message, type = 'success') {
  const alertDiv = document.getElementById('alert-message');
  if (!alertDiv) return;
  
  alertDiv.className = `alert alert-${type} show`;
  alertDiv.textContent = message;
  alertDiv.style.display = 'block';
  
  // Auto hide after 5 seconds
  setTimeout(() => {
    alertDiv.style.display = 'none';
    alertDiv.classList.remove('show');
  }, 5000);
  
  // Scroll to alert
  alertDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Modal functions
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
  }
}

// Close modal when clicking outside
window.onclick = function(event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.classList.remove('show');
      document.body.style.overflow = 'auto';
    }
  });
};

// Fetch courses and display in modal
async function loadCourseFees(universityId) {
  try {
    const response = await fetch(`${API_BASE_URL}/university/${universityId}/courses`);
    const data = await response.json();
    
    const modalContent = document.getElementById('fee-modal-content');
    if (!modalContent) return;
    
    let html = `
      <h2 style="margin-bottom: 1.5rem; color: #1f2937;">Course-wise Fee Structure</h2>
      <table class="fee-table">
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Duration</th>
            <th>Fee Range (Annual)</th>
            <th>Total Fee</th>
          </tr>
        </thead>
        <tbody>
    `;
    
    data.courses.forEach(course => {
      html += `
        <tr>
          <td><strong>${course.name}</strong></td>
          <td>${course.duration}</td>
          <td>${course.fees.range}</td>
          <td>₹${course.fees.total.toLocaleString('en-IN')}</td>
        </tr>
      `;
    });
    
    html += `
        </tbody>
      </table>
      <p style="margin-top: 1.5rem; color: #6b7280; font-size: 0.875rem;">
        * Fees are subject to change. Please contact the admission office for the latest fee structure.
      </p>
    `;
    
    modalContent.innerHTML = html;
    openModal('fee-modal');
  } catch (error) {
    console.error('Error loading course fees:', error);
    showAlert('Failed to load course fees. Please try again later.', 'error');
  }
}

// Validate phone number (10-digit India)
function validatePhone(phone) {
  const phoneRegex = /^[6-9]\d{9}$/;
  return phoneRegex.test(phone.replace(/\D/g, ''));
}

// Validate email
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Form submission handler
async function submitLeadForm(event, universityId) {
  event.preventDefault();
  
  const form = event.target;
  const formData = new FormData(form);
  
  const leadData = {
    fullName: formData.get('fullName'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    state: formData.get('state'),
    courseInterested: formData.get('courseInterested'),
    intakeYear: formData.get('intakeYear'),
    consent: formData.get('consent') === 'on',
    universityId: universityId,
    submittedAt: new Date().toISOString()
  };
  
  // Validation
  if (!leadData.fullName || leadData.fullName.trim().length < 3) {
    showAlert('Please enter a valid full name (minimum 3 characters).', 'error');
    return;
  }
  
  if (!validateEmail(leadData.email)) {
    showAlert('Please enter a valid email address.', 'error');
    return;
  }
  
  if (!validatePhone(leadData.phone)) {
    showAlert('Please enter a valid 10-digit Indian phone number.', 'error');
    return;
  }
  
  if (!leadData.state) {
    showAlert('Please select your state.', 'error');
    return;
  }
  
  if (!leadData.courseInterested) {
    showAlert('Please select a course.', 'error');
    return;
  }
  
  if (!leadData.intakeYear) {
    showAlert('Please select an intake year.', 'error');
    return;
  }
  
  if (!leadData.consent) {
    showAlert('Please accept the terms and conditions to proceed.', 'error');
    return;
  }
  
  // Disable submit button
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  submitBtn.disabled = true;
  submitBtn.textContent = 'Submitting...';
  
  let result = null;
  try {
    // Submit to server endpoint which proxies to Pipedream
    const response = await fetch(`${API_BASE_URL}/submit-lead`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(leadData)
    });
    
    result = await response.json();
    
    if (response.ok && result.success) {
      showAlert('Thank you! Your application has been submitted successfully. We will contact you soon.', 'success');
      form.reset();
    } else {
      throw new Error(result.error || 'Submission failed');
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    console.error('Full error details:', error);
    console.error('Server response:', result);
    
    // Show more detailed error message
    let errorMessage = 'Failed to submit the form. Please check your internet connection and try again.';
    if (result && result.error) {
      errorMessage = result.error;
    } else if (error.message) {
      errorMessage = error.message;
    }
    
    showAlert(errorMessage, 'error');
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = originalText;
  }
}

// Download brochure handler
function downloadBrochure(universityId) {
  // In a real implementation, this would download an actual PDF
  // For now, we'll show an alert
  showAlert('Brochure download will be available soon. Please contact us for more information.', 'success');
  
  // You can replace this with actual PDF download:
  // window.open(`/brochures/university-${universityId}.pdf`, '_blank');
}

// Load university data
async function loadUniversityData(universityId) {
  try {
    // Load overview
    const overviewResponse = await fetch(`${API_BASE_URL}/university/${universityId}/overview`);
    const overview = await overviewResponse.json();
    
    // Update page title
    document.title = `${overview.name} - University Landing Page`;
    
    // Load facilities
    const facilitiesResponse = await fetch(`${API_BASE_URL}/university/${universityId}/facilities`);
    const facilitiesData = await facilitiesResponse.json();
    
    // Load placements
    const placementsResponse = await fetch(`${API_BASE_URL}/university/${universityId}/placements`);
    const placements = await placementsResponse.json();
    
    // Update DOM elements if they exist
    const universityNameEl = document.getElementById('university-name');
    if (universityNameEl) {
      universityNameEl.textContent = overview.name;
    }
    
    // Update facilities list
    const facilitiesList = document.getElementById('facilities-list');
    if (facilitiesList) {
      facilitiesList.innerHTML = facilitiesData.facilities.map(facility => 
        `<li class="mb-2">${facility}</li>`
      ).join('');
    }
    
    // Update placements data
    const placementsEl = document.getElementById('placements-data');
    if (placementsEl) {
      placementsEl.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div class="card text-center">
            <div class="text-3xl font-bold text-blue-600 mb-2">${placements.placementRate}</div>
            <div class="text-gray-600">Placement Rate</div>
          </div>
          <div class="card text-center">
            <div class="text-3xl font-bold text-green-600 mb-2">₹${(placements.averagePackage / 100000).toFixed(1)}L</div>
            <div class="text-gray-600">Average Package</div>
          </div>
          <div class="card text-center">
            <div class="text-3xl font-bold text-purple-600 mb-2">₹${(placements.highestPackage / 100000).toFixed(1)}L</div>
            <div class="text-gray-600">Highest Package</div>
          </div>
          <div class="card text-center">
            <div class="text-3xl font-bold text-orange-600 mb-2">${placements.totalOffers}</div>
            <div class="text-gray-600">Total Offers</div>
          </div>
        </div>
        <div class="mt-4">
          <h3 class="text-xl font-semibold mb-3">Top Recruiters</h3>
          <div class="flex flex-wrap gap-2">
            ${placements.topRecruiters.map(recruiter => 
              `<span class="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">${recruiter}</span>`
            ).join('')}
          </div>
        </div>
      `;
    }
    
  } catch (error) {
    console.error('Error loading university data:', error);
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  // Get university ID from URL or data attribute
  const universityId = getUrlParameter('id') || document.body.getAttribute('data-university-id') || '1';
  
  // Load university data
  loadUniversityData(universityId);
  
  // Set up form handlers
  const leadForm = document.getElementById('lead-form');
  if (leadForm) {
    leadForm.addEventListener('submit', (e) => submitLeadForm(e, universityId));
  }
  
  // Set up CTA buttons
  const checkFeesBtn = document.getElementById('check-fees-btn');
  if (checkFeesBtn) {
    checkFeesBtn.addEventListener('click', () => loadCourseFees(universityId));
  }
  
  const downloadBrochureBtn = document.getElementById('download-brochure-btn');
  if (downloadBrochureBtn) {
    downloadBrochureBtn.addEventListener('click', () => downloadBrochure(universityId));
  }
  
  // Close modal button
  const closeModalBtn = document.querySelector('.close');
  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => closeModal('fee-modal'));
  }
});

