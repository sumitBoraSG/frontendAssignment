import { ArrowLeft, Star } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { products } from "@/data/productList";

const sizes = ["S", "M", "L", "XL"];

const ProductDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const product = products.find((item) => item.id.toString() === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Product not found
      </div>
    );
  }

  return (
    <div className="bg-[#FAFAFA]">
      <div className="max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-14 pt-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm font-medium hover:opacity-70 transition"
        >
          <ArrowLeft size={18} />
          Back
        </button>
      </div>

      <div className="max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-24 items-center">

          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-[350px] sm:h-[500px] lg:h-[650px] object-contain"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="font-syne text-2xl sm:text-5xl xl:text-6xl font-bold mt-3">
              {product.title}
            </h1>

            <div className="flex items-center gap-3 mt-5">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill="#FBBF24"
                    color="#FBBF24"
                  />
                ))}
              </div>

              <span className="text-gray-500 text-sm">
                4.9 (231 Reviews)
              </span>
            </div>

            <h2 className="text-4xl font-bold mt-8">
              ${product.price}
            </h2>

            <p className="mt-8 text-gray-600 leading-8 max-w-xl">
              {product.description}
              <br />
              Crafted with premium materials for maximum comfort and
              durability. Designed with a clean, modern aesthetic that
              complements everyday wear.
            </p>

            <div className="mt-5">
              <h3 className="font-semibold mb-4">Size</h3>

              <div className="flex flex-wrap gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    className="w-14 h-14 border rounded-xl hover:bg-black hover:text-white transition"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <h3 className="font-semibold mb-4">Quantity</h3>

              <div className="flex items-center border rounded-xl w-fit">
                <button className="px-5 py-3 text-xl">−</button>

                <span className="px-6">1</span>

                <button className="px-5 py-3 text-xl">+</button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-12">
              <button className="flex-1 border-2 border-black py-4 rounded-xl font-semibold hover:bg-black hover:text-white transition">
                Add to Cart
              </button>

              <button className="flex-1 bg-black text-white py-4 rounded-xl font-semibold hover:opacity-90 transition">
                Buy Now
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-14 border-t pt-8 mb-30">

              <div>
                <p className="font-semibold">Free Delivery</p>
                <p className="text-sm text-gray-500 mt-1">
                  Orders over $50
                </p>
              </div>

              <div>
                <p className="font-semibold">Easy Returns</p>
                <p className="text-sm text-gray-500 mt-1">
                  30-day returns
                </p>
              </div>

              <div>
                <p className="font-semibold">Secure Payment</p>
                <p className="text-sm text-gray-500 mt-1">
                  100% protected
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;