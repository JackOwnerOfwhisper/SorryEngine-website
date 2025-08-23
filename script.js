// Simple JS for navigation or future enhancements
console.log('SorryEngine website loaded');

// Animated nav underline
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.textDecoration = 'underline';
        link.style.textDecorationColor = '#4fc3f7';
    });
    link.addEventListener('mouseleave', () => {
        link.style.textDecoration = 'none';
    });
});

// Button ripple effect
const downloadBtn = document.querySelector('.download-btn');
if (downloadBtn) {
    downloadBtn.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.left = e.offsetX + 'px';
        ripple.style.top = e.offsetY + 'px';
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
}

// Add ripple effect style
const style = document.createElement('style');
style.innerHTML = `
.ripple {
    position: absolute;
    width: 60px;
    height: 60px;
    background: rgba(79,195,247,0.4);
    border-radius: 50%;
    pointer-events: none;
    transform: translate(-50%, -50%) scale(0);
    animation: ripple-effect 0.6s linear;
    z-index: 10;
}
@keyframes ripple-effect {
    to {
        transform: translate(-50%, -50%) scale(2.5);
        opacity: 0;
    }
}
.download-btn { position: relative; overflow: hidden; }
`;
document.head.appendChild(style);

// Fade in docs links
const docLinks = document.querySelectorAll('.docs ul li');
docLinks.forEach((li, i) => {
    li.style.opacity = 0;
    setTimeout(() => {
        li.style.transition = 'opacity 0.7s';
        li.style.opacity = 1;
    }, 500 + i * 300);
});
