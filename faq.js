function toggleFaq(button) {
    const answer = button.nextElementSibling;
    const isVisible = answer.style.display === "block";

    // Hide all answers
    document.querySelectorAll(".faq-answer").forEach((el) => {
        el.style.display = "none";
    });

    // Toggle the clicked answer
    answer.style.display = isVisible ? "none" : "block";
}