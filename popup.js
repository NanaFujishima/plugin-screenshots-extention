document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("take-screenshot");
  if (button) {
    button.addEventListener("click", () => {
      chrome.runtime.sendMessage({ action: "takeScreenshot" });
    });
  }
});
