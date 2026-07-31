const ProductNavigation = ({setStarPosition}) => {
    return (
        <div className="w-full flex flex-col gap-[19px] pt-[32px] pl-[33%] font-workSans font-[400] text-[18px] text-[#000000] max-md:flex-row max-md:text-[14px] max-md:pl-0 max-md:pt-[16px] max-xl:items-start max-md:gap-[30px]">
            <a onMouseEnter={() => setStarPosition('25%')} className="hover:font-syne hover:font-[600] hover:text-[26px] transition-all duration-200 ease-in-out" href="#">Apparel</a>          
            <a onMouseEnter={() => setStarPosition('50%')} className="hover:font-syne hover:font-[600] hover:text-[26px] transition-all duration-200 ease-in-out" href="#">Accessories</a>
            <a onMouseEnter={() => setStarPosition('75%')} className="hover:font-syne hover:font-[600] hover:text-[26px] transition-all duration-200 ease-in-out" href="#">Best Sellers</a>
            <a onMouseEnter={() => setStarPosition('98%')} className="hover:font-syne hover:font-[600] hover:text-[26px] transition-all duration-200 ease-in-out" href="#">50% off</a>
         
        </div>
    )
}
export default ProductNavigation;