import { Link } from "react-router-dom";
function ProductCard({ product }) {
  return (
    <div className="bg-white border rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">

      <img
        src={product.images[0]}
        alt={product.name}
        className="w-full h-56 object-cover"
      />

      <div className="p-5">

        <h3 className="text-xl font-bold">
          {product.name}
        </h3>

        <p className="text-gray-500 mt-1">
          Brand: {product.brand}
        </p>

        <p className="text-gray-500">
          Category: {product.category}
        </p>

        <div className="mt-4 space-y-2">
          <p>
            <strong>Price:</strong> PKR {product.price}
          </p>

          <p>
            <strong>Down Payment:</strong> PKR {product.downPayment}
          </p>

          <p>
            <strong>Monthly:</strong> PKR {product.monthly}
          </p>

          <p>
            <strong>Duration:</strong> {product.duration}
          </p>
        </div>

        <Link
          to={`/products/${product.id}`}
          className="block mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition text-center"
        >
          View Details
        </Link>

      </div>

    </div>
  );
}

export default ProductCard;