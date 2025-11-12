// Mock data for universities

const overviews = {
  '1': {
    name: "TechVista University",
    established: "2010",
    location: "Bangalore, Karnataka",
    type: "Private",
    accreditation: "NAAC A+",
    students: "15000+",
    faculty: "500+"
  },
  '2': {
    name: "Global Excellence University",
    established: "2005",
    location: "Mumbai, Maharashtra",
    type: "Private",
    accreditation: "NAAC A++",
    students: "20000+",
    faculty: "700+"
  }
};

const courses = {
  '1': {
    university: "TechVista University",
    courses: [
      {
        id: 1,
        name: "Computer Science Engineering",
        duration: "4 years",
        fees: {
          annual: 250000,
          total: 1000000,
          range: "₹2,00,000 - ₹3,00,000 per year"
        },
        placements: {
          average: 850000,
          highest: 2500000,
          companies: ["Google", "Microsoft", "Amazon", "Infosys"]
        }
      },
      {
        id: 2,
        name: "Mechanical Engineering",
        duration: "4 years",
        fees: {
          annual: 200000,
          total: 800000,
          range: "₹1,80,000 - ₹2,20,000 per year"
        },
        placements: {
          average: 650000,
          highest: 1800000,
          companies: ["Tata Motors", "Mahindra", "L&T", "Bosch"]
        }
      },
      {
        id: 3,
        name: "Business Administration (MBA)",
        duration: "2 years",
        fees: {
          annual: 300000,
          total: 600000,
          range: "₹2,80,000 - ₹3,20,000 per year"
        },
        placements: {
          average: 1200000,
          highest: 3500000,
          companies: ["Deloitte", "PwC", "Accenture", "TCS"]
        }
      },
      {
        id: 4,
        name: "Electronics & Communication",
        duration: "4 years",
        fees: {
          annual: 220000,
          total: 880000,
          range: "₹2,00,000 - ₹2,40,000 per year"
        },
        placements: {
          average: 700000,
          highest: 2000000,
          companies: ["Samsung", "Qualcomm", "Intel", "Wipro"]
        }
      }
    ]
  },
  '2': {
    university: "Global Excellence University",
    courses: [
      {
        id: 1,
        name: "Computer Science Engineering",
        duration: "4 years",
        fees: {
          annual: 280000,
          total: 1120000,
          range: "₹2,50,000 - ₹3,10,000 per year"
        },
        placements: {
          average: 950000,
          highest: 3000000,
          companies: ["Apple", "Google", "Microsoft", "Amazon"]
        }
      },
      {
        id: 2,
        name: "Civil Engineering",
        duration: "4 years",
        fees: {
          annual: 210000,
          total: 840000,
          range: "₹1,90,000 - ₹2,30,000 per year"
        },
        placements: {
          average: 600000,
          highest: 1600000,
          companies: ["L&T", "Shapoorji Pallonji", "GMR", "IRCON"]
        }
      },
      {
        id: 3,
        name: "Business Administration (MBA)",
        duration: "2 years",
        fees: {
          annual: 320000,
          total: 640000,
          range: "₹3,00,000 - ₹3,40,000 per year"
        },
        placements: {
          average: 1400000,
          highest: 4000000,
          companies: ["McKinsey", "BCG", "Goldman Sachs", "JP Morgan"]
        }
      },
      {
        id: 4,
        name: "Data Science",
        duration: "4 years",
        fees: {
          annual: 260000,
          total: 1040000,
          range: "₹2,40,000 - ₹2,80,000 per year"
        },
        placements: {
          average: 1100000,
          highest: 2800000,
          companies: ["IBM", "Accenture", "TCS", "Cognizant"]
        }
      }
    ]
  }
};

const facilities = {
  '1': [
    "State-of-the-art laboratories",
    "Central library with 1,00,000+ books",
    "Hostel accommodation for 5000+ students",
    "Sports complex with Olympic-size swimming pool",
    "24/7 Wi-Fi campus",
    "Modern auditorium with 2000+ capacity",
    "Cafeteria and food courts",
    "Medical facilities with 24/7 ambulance"
  ],
  '2': [
    "Advanced research laboratories",
    "Digital library with 1,50,000+ books",
    "Hostel accommodation for 8000+ students",
    "International standard sports facilities",
    "Campus-wide high-speed internet",
    "Multi-purpose auditorium (3000+ capacity)",
    "Multiple dining options",
    "Full-fledged hospital on campus"
  ]
};

const placements = {
  '1': {
    year: "2024",
    totalOffers: 1200,
    averagePackage: 850000,
    highestPackage: 2500000,
    placementRate: "95%",
    topRecruiters: ["Google", "Microsoft", "Amazon", "Infosys", "TCS", "Wipro", "Accenture", "Deloitte"]
  },
  '2': {
    year: "2024",
    totalOffers: 1500,
    averagePackage: 1000000,
    highestPackage: 4000000,
    placementRate: "97%",
    topRecruiters: ["Apple", "Google", "Microsoft", "McKinsey", "Goldman Sachs", "Amazon", "BCG", "JP Morgan"]
  }
};

module.exports = {
  overviews,
  courses,
  facilities,
  placements
};

