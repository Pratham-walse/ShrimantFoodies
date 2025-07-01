const form = document.getElementById('reviewForm');
const reviewsContainer = document.getElementById('reviewsContainer');
const ratingInput = document.getElementById('rating');
const ratingValue = document.getElementById('ratingValue');

ratingInput.addEventListener('input', () => {
    ratingValue.textContent = ratingInput.value;
});

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    const rating = ratingInput.value;

    const review = document.createElement('div');
    review.innerHTML = `<strong>${name}</strong> (Rating: ${rating}/5)<br><em>${message}</em><hr>`;
    
    reviewsContainer.prepend(review);

    form.reset();
    ratingValue.textContent = '3'; // Reset rating display
});