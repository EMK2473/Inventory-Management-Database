const editProductFormHandler = async (event) => {
    event.preventDefault();
  
    const id = document.querySelector('#product-id').value;
    const price = document.querySelector('#priceInput').value;
    const unit = document.querySelector('#unitInput').value;
    const par = document.querySelector('#parInput').value;
    const stock = document.querySelector('#stockInput').value;
  
    const response = await fetch(`/api/products/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ price, unit, par, stock }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to update product');
    }
  };
  
  const editProductForm = document.querySelector('#editProductForm');
  if (editProductForm) {
    editProductForm.addEventListener('submit', editProductFormHandler);
  }

