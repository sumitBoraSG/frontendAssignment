import personPhoto from '@/assets/images/card1Photo.png'
import viewCard from '@/assets/images/viewCard.svg'
const ProductCard = () => {
    return (
        <div className="w-[310px] shrink-0">
            <div className="w-full h-[322px] relative">
                <img className='h-[100%] w-[100%] object-fit:cover' src={personPhoto} alt="" />
                <img className='absolute bottom-[0%] right-[-5%] h-[45px] w-[45px]' src={viewCard} alt="" />
            </div>
            <div className='max-[400px]:ml-[20px] max-[400px]:mt-[10px]'>
                <h1 className='font-syne font-[600] text-[26px]'>FLORIDA JACKET</h1>
                <div>
                    <p className='font-workSans text-[14px] text-[#16161580]'>
                        Suffered alteration in some form, bysuffalterattion in some forme, byinjected humor, or randomised
                    </p>
                </div>
                <p className='font-syne font-[600] text-[26px]'>$ 100</p>
            </div>
        </div>
    )
}
export default ProductCard;