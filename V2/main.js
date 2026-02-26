// Smooth scrolling for project cards
const container = document.querySelector('.projects');
const cards = document.querySelectorAll('.project');

cards.forEach(card => {
  // Click: center and mark selected
  card.addEventListener('click', () => {
    clearSelected(cards);
    card.classList.add('selected');
    card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    card.focus({ preventScroll: true });
  });

  // Keyboard: Enter or Space should behave like click
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      card.click();
    }
  });
});

function clearSelected(list) {
  list.forEach(c => c.classList.remove('selected'));
}

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

// Parallax effect for skill icons
const icons = document.querySelectorAll('.skill-icon');

document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 4;  // range: -2px to +2px
  const y = (e.clientY / window.innerHeight - 0.5) * 4;

  icons.forEach((icon, index) => {
    const depth = (index % 3 + 1) * 0.4; // gives each icon a slightly different movement
    icon.style.transform = `translate(${x * depth}px, ${y * depth}px)`;
  });
});
