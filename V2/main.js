// Smooth scrolling for project cards
const container = document.querySelector('.projects');
const cards = document.querySelectorAll('.project');

cards.forEach(card => {
    card.addEventListener('click', () => {
        const left = card.offsetLeft - container.offsetWidth / 2 + card.offsetWidth / 2;
        container.scrollTo({ left, behavior: 'smooth' });
    });
});

 // Shadow effect for scrollable projects section
const leftShadow = document.querySelector('.shadow-left');
const rightShadow = document.querySelector('.shadow-right');

function updateShadows() {
    const maxScroll = container.scrollWidth - container.clientWidth;

    leftShadow.style.opacity = container.scrollLeft > 0 ? 1 : 0;
    rightShadow.style.opacity = container.scrollLeft < maxScroll ? 1 : 0;
}

container.addEventListener('scroll', updateShadows);
updateShadows();
