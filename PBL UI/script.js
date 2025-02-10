//Login

document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault();
  let userId = document.getElementById("userId").value;
  let password = document.getElementById("password").value;
  let errorMessage = "";

  if (userId.length < 5 || userId.length > 20) {
    errorMessage = "User ID must be between 5 and 20 characters.";
  }
  if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])/.test(password) || (password.length < 8 || password.length > 30)) {
    errorMessage = "Password must be min 8 and max 30 characters, contain at least one uppercase, one lowercase, and one special character.";
  }

  if (errorMessage) {
    document.getElementById("errorMessage").innerText = errorMessage;
    document.getElementById("errorPopup").style.display = "block";
  } else {
    window.location.href = "customer-home.html";
  }
});

function closePopup() {
  document.getElementById("errorPopup").style.display = "none";
}

document.getElementById("logout").addEventListener("click", () => {
  alert("Logging out...");
  window.location.href = "../customer-login/index.html";
});

document.addEventListener("DOMContentLoaded", function () {
  const bookingForm = document.getElementById("booking-form");

  if (bookingForm) {
    bookingForm.addEventListener("submit", function (event) {
      event.preventDefault();

      let receiverName = document.getElementById("receiver-name").value.trim();
      let receiverAddress = document.getElementById("receiver-address").value.trim();
      let receiverPin = document.getElementById("receiver-pin").value.trim();
      let receiverContact = document.getElementById("receiver-contact").value.trim();
      let parcelSize = document.getElementById("parcel-size").value.trim();
      let parcelDescription = document.getElementById("parcel-description").value.trim();
      let pickupTime = document.getElementById("pickup-time").value;
      let paymentMethod = document.getElementById("payment-method").value;

      if (!receiverName || !receiverAddress || !receiverPin || !receiverContact || !parcelSize || !parcelDescription || !pickupTime || !paymentMethod) {
        alert("Please fill in all required fields!");
        return;
      }

      alert("Booking Confirmed! Your parcel is scheduled for pickup.");
      bookingForm.reset();
    });
  }
});

