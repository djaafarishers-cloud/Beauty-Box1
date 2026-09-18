document.addEventListener("DOMContentLoaded", () => {
  const selectedProductName = document.getElementById("selected-product-name");
  const selectedProductPrice = document.getElementById("selected-product-price");
  const summaryProduct = document.getElementById("summary-product");
  const summaryTotal = document.getElementById("summary-total");
  const quantityInput = document.getElementById("quantity");
  const orderForm = document.getElementById("order-form");
  const successMessage = document.getElementById("successMessage");

  const defaultProduct = {
    name: "Serum Glow Radiance",
    price: 149,
  };

  let selectedProduct = { ...defaultProduct };

  const updateSummary = () => {
    const qty = Number(quantityInput.value) || 1;
    const total = selectedProduct.price * qty;
    selectedProductName.textContent = selectedProduct.name;
    selectedProductPrice.textContent = `${selectedProduct.price} د.م`;
    summaryProduct.textContent = selectedProduct.name;
    summaryTotal.textContent = `${total} د.م`;
  };

  document.querySelectorAll("[data-product]").forEach((button) => {
    button.addEventListener("click", () => {
      const productName = button.dataset.product;
      const price = Number(button.dataset.price) || defaultProduct.price;
      selectedProduct = { name: productName, price };
      updateSummary();
      document.getElementById("order-form-box").scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });

  quantityInput.addEventListener("input", updateSummary);

  document.querySelector(".scroll-to-form").addEventListener("click", () => {
    document.getElementById("order-form-box").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });

  orderForm.addEventListener("submit", (event) => {
    event.preventDefault();
    successMessage.classList.add("visible");
    successMessage.scrollIntoView({ behavior: "smooth", block: "nearest" });
    orderForm.reset();
    selectedProduct = { ...defaultProduct };
    quantityInput.value = 1;
    updateSummary();
  });

  updateSummary();
});

