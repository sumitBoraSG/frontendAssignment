import arrowLeft from '@/assets/images/arrowLeft.svg';
import arrowRight from '@/assets/images/arrowRight.svg';
import starIcon from "@/assets/images/blackStar.svg";


const ProductHeader = () => {
    return (
        <div className="w-full flex justify-center">
            <div className="w-[89.5%] pt-[78px] flex justify-between max-[400px]:pt-[40px] ">
                <div className='border-b border-black relative'>
                    <h2 className='font-syne font-600 leading-[1.1] text-[90px] max-[400px]:text-[40px] max-[400px]:leading-[1.26] max-[1000px]:text-[60px]'>New products</h2>
                    <img className='absolute w-[23px] h-[22px] bottom-[-12px]' src={starIcon} alt="star icon" />
                </div>
                <div className='flex gap-[48px] pt-[22px] max-[750px]:hidden'>
                    <img className='w-[55px]' src={arrowLeft} alt="left arrow" />
                    <img className='w-[55px]' src={arrowRight} alt="right arrow" />
                </div>
            </div>
        </div>
    )
}
export default ProductHeader;