document.addEventListener("DOMContentLoaded", function () {
    const adjustButtons = document.querySelectorAll('.adjust-unit');
    adjustButtons.forEach(buttonElement => {
     buttonElement.addEventListener('click', async function (event) {
      const product_id = this.getAttribute('data-product-id');
       console.log('PRODUCT ID:', product_id);
       console.log("DA Parents", this.parentElement);
       console.log("PrevElement", this.previousElementSibling.value)
       console.log("DA KIDS", this.parentElement.children[2].value)
        try {
            const response = await fetch(`/api/products/${product_id}/${this.previousElementSibling.value}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
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
       });
      });
    });

    