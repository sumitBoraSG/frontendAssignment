import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Login = () => {
  return (
    <div className="w-full bg-[#FAFAFA]  ">
    <Link to="/"
            className="inline-flex items-center gap-2 text-[15px] text-gray-600 font-semibold hover:text-black transition mt-[20px] ml-[20px]">
                <ArrowLeft size={18} />
                Back to Home
    </Link>
    <div className="min-h-screen  flex items-center justify-center px-5 py-8">

      <div className="w-full max-w-[1100px] bg-white rounded-3xl shadow-sm overflow-hidden grid lg:grid-cols-2">

        {/* Left Section */}
        <div className="hidden lg:flex flex-col justify-center bg-[#111111] text-white p-14">

          <p className="uppercase tracking-[4px] text-sm text-gray-400">
            ShopKart
          </p>

          <h1 className="font-syne text-5xl font-bold mt-6 leading-tight">
            Welcome
            <br />
            Back.
          </h1>

          <p className="mt-8 text-gray-400 leading-7 max-w-md">
            Sign in to continue shopping, manage your orders, save your
            favourites, and enjoy a seamless shopping experience.
          </p>

          <div className="mt-16 space-y-5 text-sm text-gray-300">
            <p>✓ Secure Login</p>
            <p>✓ Fast Checkout</p>
            <p>✓ Order Tracking</p>
          </div>

        </div>

        {/* Right Section */}
        <div className="flex items-center justify-center px-7 py-10 sm:px-10 lg:px-16">

          <div className="w-full max-w-md">

            <p className="uppercase tracking-[3px] text-sm text-gray-400">
              Account
            </p>

            <h2 className="font-syne text-4xl font-bold mt-3">
              Sign In
            </h2>

            <p className="text-gray-500 mt-3">
              Enter your credentials below.
            </p>

            <form className="mt-10 space-y-6">

              <div>
                <label className="block text-sm font-medium mb-2">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-black transition"
                />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium">
                    Password
                  </label>

                  <button
                    type="button"
                    className="text-sm text-gray-500 hover:text-black"
                  >
                    Forgot?
                  </button>
                </div>

                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-black transition"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white rounded-xl py-3 font-semibold hover:opacity-90 transition"
              >
                Sign In
              </button>

            </form>

            <div className="my-8 flex items-center gap-4">
              <div className="h-px bg-gray-200 flex-1"></div>

              <span className="text-sm text-gray-400">OR</span>

              <div className="h-px bg-gray-200 flex-1"></div>
            </div>

            <button className="w-full border border-gray-300 rounded-xl py-3 hover:bg-gray-50 transition">
              Continue with Google
            </button>

            <p className="text-center mt-8 text-gray-500">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-black font-semibold hover:underline"
              >
                Create one
              </Link>
            </p>

          </div>

        </div>

      </div>

    </div>
    </div>
  );
};

export default Login;