document.addEventListener("DOMContentLoaded", function() {
    var commentForm = document.getElementById("comment-form");

    commentForm.addEventListener("submit", function(event) {
        event.preventDefault();

        var name = document.getElementById("comment-name").value;
        var content = document.getElementById("comment-content").value;
        var rating = document.getElementById("comment-rating").value;

        var currentDate = new Date();
        var formattedDate = currentDate.getFullYear() + "-" + (currentDate.getMonth() + 1) + "-" + currentDate.getDate();

        var review = document.createElement("div");
        review.classList.add("review");

        var reviewHeader = document.createElement("div");
        reviewHeader.classList.add("review-header");

        var author = document.createElement("span");
        author.classList.add("review-author");
        author.textContent = "留言者: " + name;

        var date = document.createElement("span");
        date.classList.add("review-date");
        date.textContent = "日期: " + formattedDate;

        var starContainer = document.createElement("div");
        starContainer.classList.add("star");
        for (var i = 1; i <= 5; i++) {
            var starIcon = document.createElement("iconify-icon");
            starIcon.setAttribute("icon", "material-symbols:star" + (i <= rating ? "" : "-outline"));
            starIcon.setAttribute("width", "40");
            starIcon.classList.add("star-icon");
            starContainer.appendChild(starIcon);
        }

        reviewHeader.appendChild(author);
        reviewHeader.appendChild(date);
        reviewHeader.appendChild(starContainer);

        review.appendChild(reviewHeader);

        var reviewText = document.createElement("p");
        reviewText.classList.add("review-text");
        reviewText.textContent = content;

        review.appendChild(reviewText);

        var reviewsSection = document.querySelector(".reviews");
        reviewsSection.appendChild(review);

        // 清空表單
        commentForm.reset();
    });
});
