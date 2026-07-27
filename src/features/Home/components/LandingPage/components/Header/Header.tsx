import busIcon from '@/assets/images/bus.svg'
import facebookIcon from '@/assets/images/facebook.svg'
import linkedinIcon from '@/assets/images/linkedin.svg'
import twitterIcon from '@/assets/images/twitter.svg'
import instagramIcon from '@/assets/images/insta.svg'
const Header = () => {
    return (
        <div className="w-full bg-[#1A1A1A] flex justify-center h-[42px] font-poppins font-normal">
            <div className="w-[89.5%] flex justify-between pt-[13px] pb-[14px]">
                <div className="flex items-center justify-center gap-1.75 max-sm:gap-[3px] 2xl:gap-[20px]">
                    <div tabIndex={0}>
                        <img src={busIcon} className='cursor-pointer 2xl:w-[30px] 2xl:h-[30px]' alt="bus logo"/>
                    </div>
                    <div className="flex gap-3.5 max-sm:gap-[8px] 2xl:gap-[18px]">
                        <div className='h-4.75 flex'>
                            <p tabIndex={0} className="text-[#626262] self-end text-xs font-normal max-sm:text-[10px] 2xl:text-[14px] cursor-pointer">Free Delivery</p>
                        </div>
                        
                        <span className='inline-block border-l border-[#626262] h-4.75'></span>
                        <div className='h-4.75 flex'>
                        <p tabIndex={0} className="text-[#626262] self-end text-xs font-normal max-sm:text-[10px] 2xl:text-[14px] cursor-pointer">Return Policy</p>
                        </div>
                    </div>
                    
                </div>
                <div className="flex items-center gap-[35px] max-sm:gap-[12px]">
                    <div className="flex items-center">
                        <button tabIndex={0} className="border-none bg-transparent text-[10px] text-[#626262] font-normal 2xl:text-[14px] cursor-pointer">Login</button>
                    </div>
                    <div className="flex items-center gap-[14px]">
                        <button tabIndex={0} className="border-none bg-transparent text-[10px] text-[#626262] font-normal max-sm:hidden 2xl:text-[14px] cursor-pointer">Follow US</button>
                        <div className="flex items-center gap-3">
                            <a tabIndex={0} href="#"><img className="w-[4.5px] h-[7.6px] cursor-pointer 2xl:w-[12px] 2xl:h-[12px]" src={facebookIcon} alt="facebook page of ShopKart"/></a>
                            <a tabIndex={0} href="#"><img className="w-[8px] h-[7.6px] cursor-pointer 2xl:w-[12px] 2xl:h-[12px]" src={linkedinIcon} alt="linkedin page of ShopKart"/></a>
                            <a tabIndex={0} href="#"><img className="w-[7.6px] h-[5.6px] cursor-pointer 2xl:w-[12px] 2xl:h-[12px]" src={twitterIcon} alt="twitter page of ShopKart"/></a>
                            <a tabIndex={0} href="#"><img className="w-[8px] h-[8px] cursor-pointer 2xl:w-[12px] 2xl:h-[12px]" src={instagramIcon} alt="instagram page of ShopKart"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;