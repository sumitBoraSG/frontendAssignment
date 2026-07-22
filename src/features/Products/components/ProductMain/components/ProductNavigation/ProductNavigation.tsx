const ProductNavigation = () => {
    return (
        <div className="w-full flex flex-col gap-[19px] pl-[80px] pt-[32px] font-workSans font-[400] text-[18px] text-[#000000] max-[400px]:flex-row max-[400px]:text-[14px] max-[400px]:pl-[20px] max-[400px]:pt-[20px]">
            <a className="hover:font-syne hover:font-[600] hover:text-[26px]" href="#">Apparel</a>          
            <a className="hover:font-syne hover:font-[600] hover:text-[26px]" href="#">Accessories</a>
            <a className="hover:font-syne hover:font-[600] hover:text-[26px]" href="#">Best Sellers</a>
            <a className="hover:font-syne hover:font-[600] hover:text-[26px]" href="#">50% off</a>
         
        </div>
    )
}
export default ProductNavigation;