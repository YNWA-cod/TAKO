document.querySelectorAll(".quantity-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const input = this.parentElement.querySelector(".quantity-input");
    const isIncrement = this.textContent === "+";
    let value = parseInt(input.value);

    if (isIncrement) {
      value++;
    } else if (value > 1) {
      value--;
    }

    input.value = value;
    updateTotal();
  });
});

document.querySelectorAll('input[name="contact"]').forEach((radio) => {
  radio.addEventListener("change", function () {
    document.querySelectorAll(".contact-method").forEach((method) => {
      method.classList.remove("active");
    });
    this.closest(".contact-method").classList.add("active");
  });
});

function updateTotal() {
  const quantities = document.querySelectorAll(".quantity-input");
  const pricePerItem = 10.0;
  let total = 0;

  quantities.forEach((input) => {
    total += parseInt(input.value) * pricePerItem;
  });

  document.querySelector(".total-value").textContent =
    total.toFixed(2) + " грн";
}

document.querySelector(".btn-primary").addEventListener("click", function () {
  alert("Заявка надіслана! Ми зв'яжемось з вами найближчим часом.");
});

document.querySelector(".btn-secondary").addEventListener("click", function () {
  alert("Заявка надіслана з підтримкою! Дякуємо за підтримку проекту.");
});
