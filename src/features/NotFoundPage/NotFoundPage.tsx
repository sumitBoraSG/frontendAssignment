import { Link } from "react-router-dom";


const NotFoundPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center">
      <p className="text-sm font-medium uppercase tracking-[0.3em] text-gray-400">
        ShopKart
      </p>

      <h1 className="mt-4 text-8xl font-extrabold text-gray-900">404</h1>

      <h2 className="mt-3 text-2xl font-semibold text-gray-800">
        Page Not Found
      </h2>

      <p className="mt-4 max-w-md text-gray-500">
        Sorry, the page you're looking for doesn't exist or may have been moved.
      </p>

      <Link
        to="/"
        className="mt-8 rounded-md bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;