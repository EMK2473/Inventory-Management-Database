const deleteProduct = async (productId) => {
    try {
      const response = await fetch(`/api/products/${productId}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete product');
      }
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('Failed to delete product');
    }
  };
  
  const deleteProductButtons = document.querySelectorAll('.delete-product-btn');
  if (deleteProductButtons) {
    deleteProductButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        const productId = event.target.dataset.productId;
  
        const confirmDelete = confirm('Are you sure you want to delete this product?');
        if (confirmDelete) {
          deleteProduct(productId);
        }
      });
    });
  }