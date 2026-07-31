function ProductCard({ product }) {
  return (
    <div className="border rounded-xl shadow-md p-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-full rounded-lg"
      />

      <h3 className="text-xl font-bold mt-4">
        {product.name}
      </h3>

      <p>Price: PKR {product.price}</p>

      <p>Down Payment: PKR {product.downPayment}</p>

      <p>{product.duration}</p>

      <p>Monthly: PKR {product.monthly}</p>

      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
        View Details
      </button>
    </div>
  );
}

export default ProductCard;