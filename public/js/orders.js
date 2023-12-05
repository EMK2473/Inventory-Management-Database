async function updateProduct(event) {
  event.preventDefault();
  const element = event.target;
  if (element.matches(".adjust")) {
    const product_id = element.getAttribute("data-product-id");
    console.log("PRODUCT ID:", product_id);
    console.log("PrevElement", element.previousElementSibling.value);
    try {
      const response = await fetch(`/api/products/${product_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          [element.getAttribute("data-key")]:
            element.previousElementSibling.value.trim(),
        }),
      });
      if (response.ok) {
          document.location.reload()
      } else {
        alert("Failure adjusting inventory!");
      }
    } catch (err) {
      alert("Failure adjusting inventory!");
      console.log(err);
    }
  }
}

document.querySelectorAll(".adjust-parent").forEach(element => {
  element.addEventListener("click", updateProduct);
});
