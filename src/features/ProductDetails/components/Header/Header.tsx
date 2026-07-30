import TopHeader from '@/features/Home/components/LandingPage/components/Header';



const Header = () => {
    return (
        <div className="w-full">
            <TopHeader />
            <div className="w-full flex justify-center bg-black">
                        <div className="w-[89.5%] flex justify-between relative max-sm:h-[68px]">
                            <h1 tabIndex={0} className="text-[40px] leading-[1.7] text-white font-poppins font-[200] max-sm:text-[30px] max-sm:self-end max-sm:-translate-y-1">ShopKart</h1>
                            <div className="font-workSans font-normal flex gap-2.5 pt-[27px] text-sm text-white">
                                <a href="#" tabIndex={0} className="max-sm:text-[11px]">WISHLIST (0)</a>
                                <a href="#" tabIndex={0} className="max-sm:text-[11px]">BAG (0)</a>            
                            </div>
            
                        </div>
                        {/* <div className="w-[89.5%] flex">
            
                        </div> */}
            </div>
        </div>

    )
}

export default Header;