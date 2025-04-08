/**
 * Adds header scroll behavior that shows/hides the header based on scroll direction
 */
export const setupHeaderScroll = () => {
  let lastScrollTop = 0;
  const header = document.querySelector('.header');
  const scrollThreshold = 50; // Minimum scroll amount before showing/hiding header
  
  if (!header) return;
  
  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Determine scroll direction and apply appropriate class
    if (scrollTop > lastScrollTop && scrollTop > 100) {
      // Scrolling down & past threshold - hide header
      header.style.transform = 'translateY(-100%)';
    } else {
      // Scrolling up - show header
      header.style.transform = 'translateY(0)';
    }
    
    // Only update lastScrollTop if we've scrolled past threshold (prevents small scroll triggers)
    if (Math.abs(scrollTop - lastScrollTop) > scrollThreshold) {
      lastScrollTop = scrollTop;
    }
  });
};
