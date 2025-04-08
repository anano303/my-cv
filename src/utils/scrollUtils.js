/**
 * Smoothly scrolls to the specified element
 * @param {string} elementId - The ID of the element to scroll to
 * @param {number} duration - Duration of the scroll animation in milliseconds
 * @param {number} offset - Optional offset from the top (header height)
 */
export const smoothScrollTo = (elementId, duration = 800, offset = 80) => {
  // Increased default offset to account for fixed header
  const targetElement = document.getElementById(elementId);
  
  if (!targetElement) return;
  
  // Check if this is a mobile device
  const isMobile = window.innerWidth <= 820;
  
  // Calculate the header height dynamically
  const headerHeight = document.querySelector('.header')?.offsetHeight || 60;
  const adjustedOffset = offset + headerHeight;
  
  // Use different approach for desktop/mobile
  if (!isMobile && 'scrollBehavior' in document.documentElement.style) {
    // Modern browsers on desktop - use native smooth scrolling
    // Scroll to element with offset for header
    window.scrollTo({
      top: targetElement.getBoundingClientRect().top + window.pageYOffset - adjustedOffset,
      behavior: 'smooth'
    });
    return;
  }
  
  // Fallback for mobile or browsers without native smooth scrolling
  const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - adjustedOffset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;
  
  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const scrollY = easeInOutQuad(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, scrollY);
    
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }
  
  // Easing function for smooth animation
  function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }
  
  requestAnimationFrame(animation);
};

/**
 * Get section ID from the section name
 * @param {string} sectionName - The section name from navbar
 * @returns {string} The corresponding section ID
 */
export const getSectionId = (sectionName) => {
  switch(sectionName.toLowerCase()) {
    case 'home':
      return 'home-section';
    case 'who am i?':
    case 'ვინ ვარ მე?':
      return 'about-section';
    case 'portfolio':
    case 'პორტფოლიო':
      return 'portfolio-section';
    case 'contact':
    case 'საკონტაქტო':
      return 'contact-section';
    case 'skills':
      return 'skills-section';
    default:
      return sectionName.toLowerCase();
  }
};
