// Add interactivity here 
document.addEventListener('DOMContentLoaded', function() {
    // Example: Add hover effect to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.2)';
        });
        card.addEventListener('mouseout', () => {
            card.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
        });
    });
});
