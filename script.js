/**
 * Juliana George Fahem - Junior Data Analyst Portfolio
 * Client-Side JavaScript
 * Strictly vanilla, accessible, performant, no external dependencies.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Dynamic Copyright Year
  const currentYearSpan = document.getElementById('currentYear');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // 2. Sticky Header Elevation on Scroll
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }, { passive: true });

  // 3. Mobile Navigation Drawer Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNavMenu = document.getElementById('mobileNavMenu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileNavMenu) {
    const toggleMenu = (open) => {
      const isOpen = open !== undefined ? open : !mobileNavMenu.classList.contains('open');
      mobileNavMenu.classList.toggle('open', isOpen);
      mobileMenuBtn.setAttribute('aria-expanded', String(isOpen));
      mobileNavMenu.setAttribute('aria-hidden', String(!isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    };

    mobileMenuBtn.addEventListener('click', () => {
      toggleMenu();
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        toggleMenu(false);
      });
    });

    // Close mobile menu on click outside
    document.addEventListener('click', (e) => {
      if (
        mobileNavMenu.classList.contains('open') &&
        !mobileNavMenu.contains(e.target) &&
        !mobileMenuBtn.contains(e.target)
      ) {
        toggleMenu(false);
      }
    });

    // Close on Escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileNavMenu.classList.contains('open')) {
        toggleMenu(false);
      }
    });
  }

  // 4. Active Section Highlighting in Desktop Nav
  const sections = document.querySelectorAll('section[id]');
  const desktopNavLinks = document.querySelectorAll('.nav-link');

  if ('IntersectionObserver' in window && sections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -50% 0px',
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          desktopNavLinks.forEach(link => {
            if (link.getAttribute('href') === `#${currentId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(section => sectionObserver.observe(section));
  }

  // 5. Copy Email to Clipboard Feature
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const copyTextFeedback = document.getElementById('copyTextFeedback');
  const targetEmail = 'julianageorge603@gmail.com';

  if (copyEmailBtn && copyTextFeedback) {
    copyEmailBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(targetEmail);
        copyTextFeedback.textContent = 'Copied to Clipboard!';
        copyEmailBtn.style.backgroundColor = '#dcfce7';
        copyEmailBtn.style.borderColor = '#86efac';
        copyEmailBtn.style.color = '#15803d';

        setTimeout(() => {
          copyTextFeedback.textContent = 'Copy Email';
          copyEmailBtn.style.backgroundColor = '';
          copyEmailBtn.style.borderColor = '';
          copyEmailBtn.style.color = '';
        }, 2200);
      } catch (err) {
        // Fallback for older browsers or restricted permissions
        const textArea = document.createElement('textarea');
        textArea.value = targetEmail;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.select();
        try {
          document.execCommand('copy');
          copyTextFeedback.textContent = 'Copied!';
          setTimeout(() => {
            copyTextFeedback.textContent = 'Copy Email';
          }, 2000);
        } catch (e) {
          copyTextFeedback.textContent = 'Email: ' + targetEmail;
        }
        document.body.removeChild(textArea);
      }
    });
  }

  // 6. Project Modal Handlers
  const viewProjectButtons = document.querySelectorAll('.view-project-btn');
  const modals = document.querySelectorAll('.project-modal');

  viewProjectButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      if (modal && typeof modal.showModal === 'function') {
        modal.showModal();
        document.body.style.overflow = 'hidden';
      }
    });
  });

  modals.forEach(modal => {
    // Close button click
    const closeButtons = modal.querySelectorAll('.modal-close-btn, .modal-close-btn-secondary');
    closeButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        modal.close();
      });
    });

    // Close on backdrop click
    modal.addEventListener('click', (e) => {
      const rect = modal.getBoundingClientRect();
      const isInDialog = (
        rect.top <= e.clientY &&
        e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX &&
        e.clientX <= rect.left + rect.width
      );
      if (!isInDialog) {
        modal.close();
      }
    });

    // Restore body scroll on modal close
    modal.addEventListener('close', () => {
      document.body.style.overflow = '';
    });
  });

  // 7. LinkedIn Placeholder Notice
  const linkedinPlaceholders = document.querySelectorAll('[href="#linkedin-placeholder"]');
  linkedinPlaceholders.forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      alert('Juliana George Fahem\'s LinkedIn profile will be linked here once the profile URL is provided.');
    });
  });

  // 8. Contact Form Handling (Client-side validation & Honest Mailto Dispatch)
  const contactForm = document.getElementById('contactForm');
  const nameInput = document.getElementById('senderName');
  const emailInput = document.getElementById('senderEmail');
  const messageInput = document.getElementById('formMessage');
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');
  const formStatus = document.getElementById('formStatus');

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Reset errors
      let isValid = true;
      if (nameError) nameError.textContent = '';
      if (emailError) emailError.textContent = '';
      if (messageError) messageError.textContent = '';
      if (formStatus) {
        formStatus.style.display = 'none';
        formStatus.className = 'form-status-msg';
        formStatus.textContent = '';
      }

      const nameVal = nameInput ? nameInput.value.trim() : '';
      const emailVal = emailInput ? emailInput.value.trim() : '';
      const messageVal = messageInput ? messageInput.value.trim() : '';

      // Validation
      if (!nameVal) {
        if (nameError) nameError.textContent = 'Please enter your name.';
        isValid = false;
      }

      if (!emailVal) {
        if (emailError) emailError.textContent = 'Please enter your email address.';
        isValid = false;
      } else if (!validateEmail(emailVal)) {
        if (emailError) emailError.textContent = 'Please provide a valid email address.';
        isValid = false;
      }

      if (!messageVal) {
        if (messageError) messageError.textContent = 'Please enter a message.';
        isValid = false;
      } else if (messageVal.length < 10) {
        if (messageError) messageError.textContent = 'Message should be at least 10 characters long.';
        isValid = false;
      }

      if (!isValid) return;

      // Clear, honest, functional action:
      // Since no backend service is configured, open the user's default email client
      // with prefilled recipient, subject, and message body.
      const subject = encodeURIComponent(`Portfolio Inquiry from ${nameVal}`);
      const body = encodeURIComponent(
        `Name: ${nameVal}\nEmail: ${emailVal}\n\nMessage:\n${messageVal}`
      );
      const mailtoUrl = `mailto:${targetEmail}?subject=${subject}&body=${body}`;

      if (formStatus) {
        formStatus.className = 'form-status-msg success';
        formStatus.style.display = 'block';
        formStatus.innerHTML = `
          <strong>Opening your email client...</strong><br>
          Your message has been drafted to <code>${targetEmail}</code>. If your email app does not launch automatically, click 
          <a href="${mailtoUrl}" style="text-decoration: underline; font-weight: 600;">here to open mail</a> or contact directly via 
          <a href="mailto:${targetEmail}">${targetEmail}</a>.
        `;
      }

      // Launch email client
      window.location.href = mailtoUrl;
    });
  }
});
