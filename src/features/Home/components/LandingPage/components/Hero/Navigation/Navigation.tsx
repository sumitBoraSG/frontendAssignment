import menuIcon from "@/assets/images/menu.svg";
import starIcon from "@/assets/images/star.svg";
import crossIcon from "@/assets/images/cross.svg"

const Navigation = ({menuFlag, setMenuFlag, scrollToContact, scrollToProducts}) => {
    const handleMenuToggle = () => {
        setMenuFlag(prev => !prev);
    }
    return (
        <div className="w-full relative">
        <div className="w-full flex justify-center">
            <div className="w-[89.5%] flex justify-between relative border-b border-white max-sm:h-[68px]">
                <h1 tabIndex={0} className="text-[40px] leading-[1.4] text-white font-poppins font-[200] max-sm:text-[30px] max-sm:self-end max-sm:-translate-y-1">ShopKart</h1>
                <div className="font-workSans font-normal flex gap-2.5 pt-[27px] text-sm text-white">
                    <a href="#" tabIndex={0} className="max-sm:hidden">WISHLIST (0)</a>
                    <a href="#" tabIndex={0} className="max-sm:hidden">BAG (0)</a>
                    <img onClick={handleMenuToggle} tabIndex={0} className="h-[24px] w-[24px] mt-[2.5px] sm:hidden" src={menuFlag ? menuIcon : crossIcon} alt="menu button"/>

                </div>
                <img className="absolute w-[23px] h-[22px] bottom-[-12px] left-[27.3%] max-sm:hidden"  src={starIcon} alt="small star icon"/>

            </div>
            {/* <div className="w-[89.5%] flex">

            </div> */}
        </div>
        <div className="h-[43px] w-full flex justify-center max-sm:hidden">
            <div className="w-[89.5%] flex">
                <div className="w-[55%] flex justify-between items-end max-lg:w-[80%]">
                    <button className="font-workSans font-normal text-[18px] text-white bg-transparent border-b border-transparent hover:border-white max-lg:text-[13px]">HOME</button>
                    <button className="font-workSans font-normal text-[18px] text-white bg-transparent border-b border-transparent hover:border-white max-lg:text-[13px]">ABOUT</button>
                    <div className="group relative">
                        <button onClick={scrollToProducts} className="font-workSans text-[18px] font-normal text-white bg-transparent border-0 border-b border-transparent group-hover:border-white max-lg:text-[13px]">OUR PRODUCTS</button>

                        <ul className="absolute z-[999] hidden list-none pt-2 text-sm text-[#FFFFFF] font-light font-workSans group-hover:block">
                            <li className="py-[2px]">
                                <a href="#">PRODUCT 1</a>
                            </li>
                            <li className="py-[2px]">
                                <a href="#">PRODUCT 2</a>
                            </li>
                            <li className="py-[2px]">
                                <a href="#">PRODUCT 3</a>
                            </li>
                            <li className="py-[2px]">
                                <a href="#">PRODUCT 4</a>
                            </li>
                        </ul>
                    </div>
                    <button onClick={scrollToContact} className="font-workSans font-normal text-[18px] text-white bg-transparent border-b border-transparent hover:border-white max-lg:text-[13px]">CONTACT US</button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Navigation;