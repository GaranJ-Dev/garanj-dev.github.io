// Collapsible Tech Journey section
let coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let content = this.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}


// Draggable horizontal scroll for Projects section
const slider = document.querySelector('.projects');

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('dragging');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('dragging');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('dragging');
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 1.5;
  slider.scrollLeft = scrollLeft - walk;
});

// Center project cards on fresh page
window.addEventListener('load', () => {
  const slider = document.querySelector('.projects');
  const cards = slider.children;

  const middleIndex = Math.floor(cards.length / 2);
  const middleCard = cards[middleIndex];

  const offset = middleCard.offsetLeft - (slider.clientWidth / 2) + (middleCard.clientWidth / 2);

  slider.scrollLeft = offset;
});

slider.addEventListener('mousedown', (e) => {
  if (!e.target.closest('.project-card')) return;
  isDown = true; startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});