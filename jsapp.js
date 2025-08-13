// Thay đổi ảnh Gallery khi click thumbnail
document.querySelectorAll('.gallery-thumbs img').forEach(img => {
    img.addEventListener('click', () => {
        document.getElementById('mainImage').src = img.src;
    });
});

// Đổi nền header khi scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// Animation cho Features Section
const features = document.querySelectorAll('.feature');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.3 });

features.forEach(feature => observer.observe(feature));
