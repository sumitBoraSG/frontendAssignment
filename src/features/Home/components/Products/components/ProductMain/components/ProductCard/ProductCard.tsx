import personPhoto from '@/assets/images/card1Photo.png'
import viewCard from '@/assets/images/viewCard.svg'
import { Link } from "react-router-dom";

const ProductCard = ({id, title, price, image, description}) => {
    return (
        <Link to={`/product/${id}`} className="w-[310px] shrink-0 block cursor-pointer">
            <div className="w-full relative">
                <img className='h-[322px] w-full' src={image} alt="" />
                <img className='absolute bottom-[0%] right-[-5%] h-[45px] w-[45px]' src={viewCard} alt="" />
            </div>
            <div className='max-sm:ml-[20px] max-sm:mt-[10px]'>
                <h1 className='font-syne font-[600] text-[26px] pt-[6px] max-md:pt-[2px]'>{title}</h1>
                <div>
                    <p className='font-workSans text-[14px] text-[#16161580] max-md:leading-[1.2]'>
                        {description}
                    </p>
                </div>
                <p className='font-syne font-[600] text-[26px]'>$ {price}</p>
            </div>

        </Link>
        
    )
}
export default ProductCard;