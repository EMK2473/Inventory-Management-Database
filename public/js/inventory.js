const updateProduct = async (event) => {
  event.preventDefault();
  const element = event.target;
  if (element.matches(".adjust")) {
    const product_id = element.getAttribute("data-product-id");
    const newValue = element.previousElementSibling.value.trim();
    try {
      const response = await fetch(`/api/products/${product_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          [element.getAttribute("data-key")]: newValue,
        }),
      });
      if (response.ok) {
        document.location.reload();
      } else {
        alert("Failure adjusting inventory!");
      }
    } catch (err) {
      alert("Failure adjusting inventory!");
      console.log(err);
    }
  }
};

document.querySelectorAll(".adjust-parent").forEach((element) => {
  element.addEventListener("click", updateProduct);
});
