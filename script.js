// Only enable mouse movement effect on non-touch devices
if (window.matchMedia("(pointer: fine)").matches) {
  document.addEventListener("mousemove", (e) => {
    const avatar = document.querySelector(".avatar-container");
    const rect = avatar.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) / 30;
    const deltaY = (e.clientY - centerY) / 30;

    avatar.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
  });
}

// Handle window resize
window.addEventListener("resize", () => {
  const avatar = document.querySelector(".avatar-container");
  avatar.style.transform = "none";
});
