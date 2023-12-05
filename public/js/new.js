const newCategoryFormHandler = async (event) => {
    event.preventDefault();

    const categoryName = document.querySelector("#category_name").value.trim();
    if (categoryName) {
        console.log(categoryName)
        const response = await fetch("/api/categories/new", {
            method: "POST",
            body: JSON.stringify({ category_name: categoryName }),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            document.location.replace("/")
        } else {
            alert("Sign up failed");
        }
    }
};

const newCategoryForm = document.querySelector("#category-form");
if (newCategoryForm) {
    newCategoryForm.addEventListener("submit", newCategoryFormHandler);
}


const newProductFormHandler = async (event) => {
    event.preventDefault();

    const productName = document.querySelector("#product_name").value.trim();
    const price = document.querySelector("#price").value.trim();
    const unit = document.querySelector("#unit").value.trim();
    const par = document.querySelector("#par").value.trim();
    const category_id = document.querySelector("#category_id").value.trim();
    if (productName) {
        console.log(productName)
        const response = await fetch("/api/products/new", {
            method: "POST",
            body: JSON.stringify({ product_name: productName,
                price: price,
                unit: unit,
                par: par,
                category_id: category_id}),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            document.location.replace("/")
        } else {
            alert("Sign up failed");
        }
    }
};

const newProductForm = document.querySelector("#product-form");
if (newProductForm) {
    newProductForm.addEventListener("submit", newProductFormHandler);
}