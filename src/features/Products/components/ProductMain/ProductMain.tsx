import ProductNavigation from "./components/ProductNavigation";
import ProductCard from "./components/ProductCard";
const ProductMain = () => {
    return (
        <div className="w-full flex max-[400px]:flex-col">
            <div className="w-[20%] max-[400px]:w-[100%]">
                <ProductNavigation />
            </div>
            <div className="w-full pt-[35px] pl-[110px] pb-[10px] flex overflow-x-auto gap-[40px] max-[400px]:pl-[5px]">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                
            </div>
        </div>
    )
}
export default ProductMain;