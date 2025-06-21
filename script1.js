const jobs = document.querySelectorAll('#jobs li');
const selectedJobInput = document.getElementById('selectedJob');
const form = document.getElementById('jobForm');
const confirmation = document.getElementById('confirmation');

// Select job from list
jobs.forEach(job => {
  job.addEventListener('click', () => {
    selectedJobInput.value = job.dataset.job;
  });
});

// Form submission
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const job = selectedJobInput.value;

  if (!job) {
    alert("Please select a job from the list!");
    return;
  }

  confirmation.innerText = `Thank you ${name}! Your application for "${job}" has been submitted.`;
  form.reset();
  selectedJobInput.value = '';
});