import ProductNavigation from "./components/ProductNavigation";
import ProductCard from "./components/ProductCard";
import arrowLeft from '@/assets/images/arrowLeft.svg';
import arrowRight from '@/assets/images/arrowRight.svg';

const ProductMain = () => {
    return (
        <div className="w-full flex pb-[110px] max-[750px]:flex-col">
            <div className="w-[20%] max-[750px]:w-[100%]">
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
            <div className='flex justify-center gap-[48px] pt-[42px] pb-[42px] min-[750px]:hidden'>
                <img className='w-[55px]' src={arrowLeft} alt="left arrow" />
                <img className='w-[55px]' src={arrowRight} alt="right arrow" />
            </div>
        </div>
    )
}
export default ProductMain;