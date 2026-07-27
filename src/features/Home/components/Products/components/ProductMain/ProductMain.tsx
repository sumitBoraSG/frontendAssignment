import ProductNavigation from "./components/ProductNavigation";
import ProductCard from "./components/ProductCard";
import arrowLeft from '@/assets/images/arrowLeft.svg';
import arrowRight from '@/assets/images/arrowRight.svg';
import { products } from "@/data/productList";
const ProductMain = ({scrollRef, scrollLeft, scrollRight}) => {
    console.log(scrollLeft)
    return (
        <div className="w-full flex pb-[105px] max-md:flex-col max-md:pb-[10px] ">
            <div className="w-[20%] max-md:w-[100%] max-md:pl-[5.25%]">
                <ProductNavigation />
            </div>
            <div ref={scrollRef} className="w-full pt-[35px] pl-[110px] pb-[10px] flex overflow-x-auto gap-[40px] max-sm:pl-[5px]">
                {products.map((product) => (
                    <ProductCard 
                        key={product.id}
                        image={product.image}
                        title={product.title}
                        price={product.price}
                        description={product.description}
                    />
                ))}
                
            </div>
            <div className='flex justify-center gap-[48px] pt-[52px] pb-[42px] md:hidden'>
                <img className='w-[55px]' onClick={scrollLeft} src={arrowLeft} alt="left arrow" />
                <img className='w-[55px]' onClick={scrollRight} src={arrowRight} alt="right arrow" />
            </div>
        </div>
    )
}
export default ProductMain;