import arrowLeft from '@/assets/images/arrowLeft.svg';
import arrowRight from '@/assets/images/arrowRight.svg';
import starIcon from "@/assets/images/blackStar.svg";


const ProductHeader = ({starPosition, productRef, scrollLeft, scrollRight}) => {
    return (
        <div className="w-full flex justify-center">
            <div ref={productRef} className="w-[89.5%] pt-[73px] flex justify-between max-sm:pt-[49px] max-md:border-b max-md:border-black">
                <div className='border-b border-black relative max-md:border-0'>
                    <h2 className='font-syne font-600 leading-[1.1] text-[90px] max-sm:text-[40px] max-sm:leading-[1.26] max-lg:text-[60px]'>New products</h2>
                    <img className='absolute w-[23px] h-[22px] bottom-[-12px]' src={starIcon} style={{ left: starPosition }} alt="star icon" />
                </div>
                <div className='flex gap-[48px] pt-[22px] max-md:hidden'>
                    <img className='w-[55px]' onClick={scrollLeft} src={arrowLeft} alt="left arrow" />
                    <img className='w-[55px]' onClick={scrollRight} src={arrowRight} alt="right arrow" />
                </div>
            </div>
        </div>
    )
}
export default ProductHeader;