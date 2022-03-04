/**
 * Scrolls to a given element on the page.
 * @param {string} elementID The ID attribute of the element to scroll to.
 * @param {string} position The position on the element to orient to. Accepted Values: ['top', 'middle']
 */
function scrollToElement(elementID, position) {
  const targetElement = document.getElementById(elementID);
  let y;

  switch (position) {
    case "top":
      const navbarHeight = getNavbarHeight();
      y =
        targetElement.getBoundingClientRect().top +
        window.scrollY -
        navbarHeight;
      break;
    case "middle":
    default:
      // Represents the top of the specified element
      const absoluteElementTop =
        targetElement.getBoundingClientRect().top +
        window.scrollY +
        targetElement.offsetHeight / 2;
      // Adds a height offset based on half the screen height (to position for the middle of the screen)
      y = absoluteElementTop - window.innerHeight / 2;
      break;
  }
  window.scrollTo({ top: y, behavior: "smooth" });
}

/**
 * Scrolls to a given element on the page.
 * @returns {number} The height of the navigation bar for the current viewport size
 */
function getNavbarHeight() {
  const currentViewport = getViewport();

  switch (currentViewport) {
    case "xs":
    case "sm":
      return 48;
    case "md":
    case "lg":
    case "xl":
      return 58;
    default:
      console.log("Not sure how you got here.");
      break;
  }
}

/**
 * Scrolls to a given element on the page.
 * @returns {string} The current screen size, from the Bootstrap width standard.
 */
function getViewport() {
  const width = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  );
  if (width <= 576) return "xs";
  if (width <= 768) return "sm";
  if (width <= 992) return "md";
  if (width <= 1200) return "lg";
  return "xl";
}
