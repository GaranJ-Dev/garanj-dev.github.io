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


slider.addEventListener('scroll', updateScrollShadows);

// Center project cards on fresh page
window.addEventListener('load', () => {
  const slider = document.querySelector('.projects');
  const cards = slider.children;

  const middleIndex = Math.floor(cards.length / 2);
  const middleCard = cards[middleIndex];

  const offset = middleCard.offsetLeft - (slider.clientWidth / 2) + (middleCard.clientWidth / 2);

  slider.scrollLeft = offset;
  
  // Initialize scroll shadows
  updateScrollShadows();
});

slider.addEventListener('mousedown', (e) => {
  if (!e.target.closest('.project-card')) return;
  isDown = true; startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

//Message me modal
// Open modal
document.getElementById("contact-btn").addEventListener("click", () => {
  document.getElementById("contact-modal").style.display = "flex";
});

// Close modal
document.getElementById("close-modal").addEventListener("click", () => {
  document.getElementById("contact-modal").style.display = "none";
});

// Anti-spam check
document.getElementById("spam-check").addEventListener("input", function () {
  const btn = document.getElementById("copy-email");
  if (this.value.trim() === "5") {
  btn.disabled = false;
  btn.classList.add("enabled");

  // reveal email
  document.getElementById("email-hidden").textContent = "garanj@proton.me";
} else {
  btn.disabled = true;
  btn.classList.remove("enabled");

  // hide email again
  document.getElementById("email-hidden").textContent = "[hidden]";
}

});

// Copy email
document.getElementById("copy-email").addEventListener("click", () => {
  navigator.clipboard.writeText("garanj@proton.me");
  alert("Email copied!");
});

// Scroll shadow effect
function updateScrollShadows() {
  const wrapper = document.querySelector('.projects-wrapper');
  const fadeZone = 40; // matches your CSS shadow width

  const scrollLeft = slider.scrollLeft;
  const maxScroll = slider.scrollWidth - slider.clientWidth;

  // LEFT SHADOW
  let leftOpacity = scrollLeft <= fadeZone
    ? scrollLeft / fadeZone
    : 1;

  // RIGHT SHADOW
  let rightOpacity = (maxScroll - scrollLeft) <= fadeZone
    ? (maxScroll - scrollLeft) / fadeZone
    : 1;

  wrapper.style.setProperty('--left-shadow-opacity', leftOpacity);
  wrapper.style.setProperty('--right-shadow-opacity', rightOpacity);
}

  window.addEventListener('load', () => { updateScrollShadows();

});

// Click to center project cards
document.querySelectorAll(".projects > div").forEach(card => {
  card.addEventListener("click", () => {
    card.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest"
    });
  });
});
