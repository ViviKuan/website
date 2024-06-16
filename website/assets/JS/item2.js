function setRating(rating) {
    const stars = document.querySelectorAll('.star-rating .star-icon');

    stars.forEach((star, index) => {
        if (index < rating) {
            star.setAttribute('icon', 'mdi:star');
        } else {
            star.setAttribute('icon', 'mdi:star-outline');
        }
    });
}

