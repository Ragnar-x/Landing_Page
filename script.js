const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const closeBtn = document.getElementById('close-btn');

menuToggle.addEventListener('click', () => {
  navLinks.classList.add('active'); // open sidebar
});

closeBtn.addEventListener('click', () => {
  navLinks.classList.remove('active'); // close sidebar
});

// Optional: Close sidebar when a link is clicked (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 700) {
      navLinks.classList.remove('active');
    }
  });
});


const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  question.addEventListener('click', () => {
    // Close any other open item
    faqItems.forEach(i => {
      if(i !== item) i.classList.remove('active');
    });
    // Toggle this item
    item.classList.toggle('active');
  });
});

const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      // Uncomment below if you want animation only once
      // observer.unobserve(entry.target);
    }
  });
});

hiddenElements.forEach(el => observer.observe(el));
