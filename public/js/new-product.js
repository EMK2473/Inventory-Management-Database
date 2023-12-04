const newProductFormHandler = async (event) => {
    event.preventDefault();
  
    const productName = document.querySelector("#product-name").value.trim();
    const price = parseFloat(document.querySelector("#price").value.trim());
    const unit = document.querySelector("#unit").value.trim();
    const par = parseInt(document.querySelector("#par").value.trim());
    const stock = parseInt(document.querySelector("#stock").value.trim());
  
    if (productName && price && unit && par && stock) {
      try {
        const response = await fetch("/api/products", {
          method: "POST",
          body: JSON.stringify({
            product_name: productName,
            price: price,
            unit: unit,
            par: par,
            stock: stock,
          }),
          headers: { "Content-Type": "application/json" },
        });
  
        if (response.ok) {
          document.location.replace("/dashboard");
        } else {
          alert("Failed to create product");
        }
      } catch (error) {
        console.error("Error creating product", error);
        alert("Failed to create product. Please try again.");
      }
    } else {
      alert("Please fill in all fields.");
    }
  };
  
  const newProductForm = document.querySelector("#new-product-form");
  if (newProductForm) {
    newProductForm.addEventListener("submit", newProductFormHandler);
  }