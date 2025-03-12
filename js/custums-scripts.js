document.addEventListener('DOMContentLoaded', function() {
    // Smooth Scroll for Anchor Links
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll Animations
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // Back to Top Button
    const backToTopButton = document.createElement('button');
    backToTopButton.textContent = '↑';
    backToTopButton.classList.add('back-to-top');
    document.body.appendChild(backToTopButton);

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    // Modal Popups
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
        item.addEventListener('click', function() {
            const modal = document.createElement('div');
            modal.classList.add('modal');
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <h4>${this.querySelector('h4').textContent}</h4>
                    <p>${this.querySelector('p').textContent}</p>
                </div>
            `;
            document.body.appendChild(modal);

            const closeModal = modal.querySelector('.close');
            closeModal.addEventListener('click', () => {
                modal.remove();
            });

            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.remove();
                }
            });
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Smooth Scroll for Anchor Links
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll Animations
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // Back to Top Button
    const backToTopButton = document.createElement('button');
    backToTopButton.textContent = '↑';
    backToTopButton.classList.add('back-to-top');
    document.body.appendChild(backToTopButton);

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(() => {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        }, 100);
    });

    // Modal Popups
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
        item.addEventListener('click', function() {
            const modal = document.createElement('div');
            modal.classList.add('modal');
            modal.setAttribute('role', 'dialog');
            modal.setAttribute('aria-labelledby', 'modal-title');
            modal.setAttribute('aria-describedby', 'modal-description');
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close" role="button" tabindex="0" aria-label="Close">×</span>
                    <h4 id="modal-title">${this.querySelector('h4').textContent}</h4>
                    <p id="modal-description">${this.querySelector('p').textContent}</p>
                </div>
            `;
            document.body.appendChild(modal);

            const closeModal = modal.querySelector('.close');
            closeModal.addEventListener('click', () => {
                modal.remove();
            });

            closeModal.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    modal.remove();
                }
            });

            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.remove();
                }
            });

            modal.focus();
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Debounce Scroll Events
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(() => {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        }, 100);
    });

    // Lazy Loading Images
    const lazyImages = document.querySelectorAll('img.lazy');
    const lazyLoad = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    };
    const imageObserver = new IntersectionObserver(lazyLoad, { threshold: 0.1 });
    lazyImages.forEach(img => {
        imageObserver.observe(img);
    });
});

