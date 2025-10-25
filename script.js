// --- Stage 0 Time Update ---
function updateTime() {
  const timeElement = document.getElementById("user-time");
  if (timeElement) {
    timeElement.textContent = Date.now();
  }
}
updateTime();
setInterval(updateTime, 1000);

// --- Stage 1 Contact Validation ---
const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.querySelector("#name");
    const email = form.querySelector("#email");
    const subject = form.querySelector("#subject");
    const message = form.querySelector("#message");
    const success = document.getElementById("success");

    let valid = true;
    form.querySelectorAll("p[id^='error-']").forEach(p => p.textContent = "");

    if (!name.value.trim()) {
      document.getElementById("error-name").textContent = "Full name is required.";
      valid = false;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
    if (!emailPattern.test(email.value)) {
      document.getElementById("error-email").textContent = "Enter a valid email.";
      valid = false;
    }

    if (!subject.value.trim()) {
      document.getElementById("error-subject").textContent = "Subject is required.";
      valid = false;
    }

    if (message.value.trim().length < 10) {
      document.getElementById("error-message").textContent = "Message must be at least 10 characters.";
      valid = false;
    }

    if (valid) {
      success.hidden = false;
      form.reset();
    } else {
      success.hidden = true;
    }
  });
}
