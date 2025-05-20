// Chart.js for myChart
const ctx = document.getElementById('myChart').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(248, 16, 66, 0.6)',
        'rgba(13, 151, 243, 0.6)',
        'rgba(248, 180, 10, 0.6)',
        'rgba(0, 255, 255, 0.6)',
        'rgba(90, 14, 241, 0.6)',
        'rgba(238, 125, 12, 0.6)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: { beginAtZero: true }
    }
  }
});

// Chart.js for earningsChart
const ctx3 = document.getElementById('earningsChart').getContext('2d');
new Chart(ctx3, {
  type: 'line',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(248, 16, 66, 0.6)',
        'rgba(13, 151, 243, 0.6)',
        'rgba(248, 180, 10, 0.6)',
        'rgba(0, 255, 255, 0.6)',
        'rgba(90, 14, 241, 0.6)',
        'rgba(238, 125, 12, 0.6)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 2,
      fill: false,
      tension: 0.4
    }]
  },
  options: {
    scales: {
      y: { beginAtZero: true }
    }
  }
});

// Button active state for sidebar navigation
const navButtons = document.querySelectorAll('.nav-button');
navButtons.forEach(btn => {
  btn.addEventListener('click', function() {
    navButtons.forEach(b => b.classList.remove('active'));
    this.classList.add('active');
  });
});

// Doctor modal logic
const doctors = [
  {
    name: "Dr. Alpha",
    experience: "30 Year Experience",
    img: "img/doctor1 (1).jpg",
    bio: "Dr. Alpha is a senior surgeon specializing in cardiac surgery with 30 years’ experience and numerous successful cases."
  },
  {
    name: "Dr. Beta",
    experience: "35 Year Experience",
    img: "img/doctor1 (5).jpg",
    bio: "Dr. Beta has been working in pediatric medicine for 35 years and is known for her compassionate care."
  },
  {
    name: "Dr. Gamma",
    experience: "40 Year Experience",
    img: "img/doctor1 (3).jpg",
    bio: "Dr. Gamma is a renowned neurologist, published widely and consulted internationally over his 40 year career."
  },
  {
    name: "Dr. Alpha",
    experience: "34 Year Experience",
    img: "img/doctor1 (4).jpg",
    bio: "Dr. Alpha also practices general medicine, with a special focus on preventive care and patient education."
  },
  {
    name: "Dr. Beta",
    experience: "37 Year Experience",
    img: "img/doctor1 (2).jpg",
    bio: "Dr. Beta is a specialist in orthopedics, having performed hundreds of successful joint replacement surgeries."
  }
];

// Modal creation
function createDoctorModal() {
  const modal = document.createElement('div');
  modal.className = 'doctor-modal';
  modal.innerHTML = `
    <div class="doctor-modal-content">
      <span class="doctor-modal-close">&times;</span>
      <div class="doctor-modal-body">
        <img class="doctor-modal-img" src="" alt="Doctor Large" />
        <div class="doctor-modal-info">
          <h2 class="doctor-modal-name"></h2>
          <h4 class="doctor-modal-exp"></h4>
          <p class="doctor-modal-bio"></p>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  // Close modal on X or outside click
  modal.querySelector('.doctor-modal-close').onclick = () => modal.style.display = 'none';
  modal.onclick = (e) => {
    if (e.target === modal) modal.style.display = 'none';
  };
  return modal;
}
const doctorModal = createDoctorModal();

function showDoctorModal(doctor) {
  doctorModal.querySelector('.doctor-modal-img').src = doctor.img;
  doctorModal.querySelector('.doctor-modal-name').textContent = doctor.name;
  doctorModal.querySelector('.doctor-modal-exp').textContent = doctor.experience;
  doctorModal.querySelector('.doctor-modal-bio').textContent = doctor.bio;
  doctorModal.style.display = 'flex';
}

// Attach click event to each .doctor
document.querySelectorAll('.doctor-img .doctor').forEach((el, idx) => {
  el.style.cursor = "pointer";
  el.addEventListener('click', () => showDoctorModal(doctors[idx]));
});

// Live date update (where "July 2024" was)
function updateCurrentDate() {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const today = new Date();
  const formatted = today.toLocaleDateString('en-GB', options); // e.g. "19 May 2025"
  const dateBtn = document.getElementById('current-date-btn');
  if (dateBtn) {
    dateBtn.innerHTML = formatted + ' <i class="fas fa-chevron-down text-xs"></i>';
  }
}
updateCurrentDate();