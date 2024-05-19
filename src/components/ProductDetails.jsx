const ProductDetails = ({ product }) => {
  return (
    <div className="product-details">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <img src={product.image} alt={product.name} className="w-full h-auto" />
      <p className="text-xl mt-4">{product.description}</p>
      <p className="text-2xl font-semibold mt-4">${product.price}</p>
      {/* Add more product details as needed */}
    </div>
  );
};

export default ProductDetails;
