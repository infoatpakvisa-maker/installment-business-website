import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="text-center">

        <h1 className="text-7xl font-bold text-blue-600">
          404
        </h1>

        <h2 className="text-3xl font-semibold mt-4">
          Oops! Page Not Found
        </h2>

        <p className="text-gray-600 mt-4">
          The page you are looking for doesn't exist or has been moved.
        </p>

        <div className="flex justify-center gap-4 mt-8">

          <Link
            to="/"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            🏠 Back to Home
          </Link>

          <Link
            to="/products"
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white"
          >
            🛒 Browse Products
          </Link>

        </div>

      </div>
    </div>
  );
}

export default NotFound;