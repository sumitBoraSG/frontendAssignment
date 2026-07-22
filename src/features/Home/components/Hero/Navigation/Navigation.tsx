import menuIcon from "@/assets/images/menu.svg";
import starIcon from "@/assets/images/star.svg";
const Navigation = () => {
    return (
        <div className="w-full relative">
        <div className="w-full flex justify-center">
            <div className="w-[89.5%] flex justify-between relative border-b border-white max-[568px]:h-[68px]">
                <h1 tabIndex={0} className="text-[40px] leading-[1.4] text-white font-poppins font-[200] max-[568px]:text-[30px] max-[568px]:self-end max-[568px]:-translate-y-1">ShopKart</h1>
                <div className="font-workSans font-normal flex gap-2.5 pt-[27px] text-sm text-white">
                    <a href="#" tabIndex={0} className="max-[500px]:hidden">WISHLIST (0)</a>
                    <a href="#" tabIndex={0} className="max-[500px]:hidden">BAG (0)</a>
                    <img tabIndex={0} className="h-[24px] w-[24px] mt-[2.5px] min-[500px]:hidden" src={menuIcon} alt="menu button"/>

                </div>
                <img className="absolute w-[23px] h-[22px] bottom-[-12px] left-[27.3%]"  src={starIcon} alt="small star icon"/>

            </div>
            {/* <div className="w-[89.5%] flex">

            </div> */}
        </div>
        <div className="h-[43px] w-full flex justify-center max-[500px]:hidden">
            <div className="w-[89.5%] flex">
                <div className="w-[55%] flex justify-between items-end max-[1090px]:w-[80%]">
                    <button className="font-workSans font-normal text-[18px] text-white bg-transparent border-b border-transparent hover:border-white max-[1090px]:text-[12px]">HOME</button>
                    <button className="font-workSans font-normal text-[18px] text-white bg-transparent border-b border-transparent hover:border-white max-[1090px]:text-[12px]">ABOUT</button>
                    <div className="group relative">
                        <button className="font-workSans text-[18px] font-normal text-white bg-transparent border-0 border-b border-transparent group-hover:border-white max-[1090px]:text-[12px]">OUR PRODUCTS</button>

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
                    <button className="font-workSans font-normal text-[18px] text-white bg-transparent border-b border-transparent hover:border-white max-[1090px]:text-[12px]">CONTACT US</button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Navigation;