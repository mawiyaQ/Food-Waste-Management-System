// Get elements
const donateButton = document.querySelector('.navbar-nav > li > .btn'); // The donation button
const donationPopup = document.getElementById('donationPopup'); // The popup
const closePopup = document.getElementById('closePopup'); // Close button inside the popup

// Show the popup when the donation button is clicked
donateButton.addEventListener('click', () => {
  donationPopup.style.display = 'flex';
});

// Close the popup when the close button is clicked
closePopup.addEventListener('click', () => {
  donationPopup.style.display = 'none';
});

// Close the popup if clicked outside the content
window.addEventListener('click', (e) => {
  if (e.target === donationPopup) {
    donationPopup.style.display = 'none';
  }
});
document.getElementById('donationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
  
    const donationAmount = document.getElementById('amount').value;
    if (donationAmount) {
      // Redirect to donation page with the amount as a URL parameter
      window.location.href = `donation.html?amount=${donationAmount}`;
    } else {
      alert('Please enter a donation amount.');
    }
  });
  