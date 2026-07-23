const ProductNavigation = () => {
    return (
        <div className="w-full flex flex-col gap-[19px] pl-[80px] pt-[32px] font-workSans font-[400] text-[18px] text-[#000000] max-[750px]:flex-row max-[750px]:text-[14px] max-[750px]:pl-[40px] max-[750px]:pt-[20px] max-[1200px]:items-start">
            <a className="hover:font-syne hover:font-[600] hover:text-[26px] transition-all duration-200 ease-in-out" href="#">Apparel</a>          
            <a className="hover:font-syne hover:font-[600] hover:text-[26px] transition-all duration-200 ease-in-out" href="#">Accessories</a>
            <a className="hover:font-syne hover:font-[600] hover:text-[26px] transition-all duration-200 ease-in-out" href="#">Best Sellers</a>
            <a className="hover:font-syne hover:font-[600] hover:text-[26px] transition-all duration-200 ease-in-out" href="#">50% off</a>
         
        </div>
    )
}
export default ProductNavigation;