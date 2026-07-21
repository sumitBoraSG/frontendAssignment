import busIcon from '@/assets/images/bus.svg'
import facebookIcon from '@/assets/images/facebook.svg'
import linkedinIcon from '@/assets/images/linkedin.svg'
import twitterIcon from '@/assets/images/twitter.svg'
import instagramIcon from '@/assets/images/insta.svg'
const Header = () => {
    return (
        <div className="w-full bg-[#1A1A1A] flex justify-center h-[42px] font-poppins font-normal">
            <div className="w-[89.5%] flex justify-between pt-[13px] pb-[14px]">
                <div className="flex items-center justify-center gap-1.75 max-[568px]:gap-[3px] min-[2000px]:gap-[20px]">
                    <div tabIndex={0}>
                        <img src={busIcon} className='cursor-pointer min-[2000px]:w-[20px] min-[2000px]:h-[20px]' alt="bus logo"/>
                    </div>
                    <div className="flex gap-3.5 max-[568px]:gap-[8px] min-[2000px]:gap-[18px]">
                        <div className='h-4.75 flex'>
                            <p tabIndex={0} className="text-[#626262] self-end text-xs font-normal max-[568px]:text-[10px] min-[2000px]:text-[18px] cursor-pointer">Free Delivery</p>
                        </div>
                        
                        <span className='inline-block border-l border-[#626262] h-4.75'></span>
                        <div className='h-4.75 flex'>
                        <p tabIndex={0} className="text-[#626262] self-end text-xs font-normal max-[568px]:text-[10px] min-[2000px]:text-[18px] cursor-pointer">Return Policy</p>
                        </div>
                    </div>
                    
                </div>
                <div className="flex items-center gap-[35px] max-[568px]:gap-[12px]">
                    <div className="flex items-center">
                        <button tabIndex={0} className="border-none bg-transparent text-[10px] text-[#626262] font-normal min-[2000px]:text-[18px] cursor-pointer">Login</button>
                    </div>
                    <div className="flex items-center gap-[14px]">
                        <button tabIndex={0} className="border-none bg-transparent text-[10px] text-[#626262] font-normal max-[568px]:hidden min-[2000px]:text-[18px] cursor-pointer">Follow US</button>
                        <div className="flex items-center gap-3">
                            <a tabIndex={0} href="#"><img className="w-[4.5px] h-[7.6px] cursor-pointer min-[2000px]:w-[12px] min-[2000px]:h-[12px]" src={facebookIcon} alt="facebook page of ShopKart"/></a>
                            <a tabIndex={0} href="#"><img className="w-[8px] h-[7.6px] cursor-pointer min-[2000px]:w-[12px] min-[2000px]:h-[12px]" src={linkedinIcon} alt="linkedin page of ShopKart"/></a>
                            <a tabIndex={0} href="#"><img className="w-[7.6px] h-[5.6px] cursor-pointer min-[2000px]:w-[12px] min-[2000px]:h-[12px]" src={twitterIcon} alt="twitter page of ShopKart"/></a>
                            <a tabIndex={0} href="#"><img className="w-[8px] h-[8px] cursor-pointer min-[2000px]:w-[12px] min-[2000px]:h-[12px]" src={instagramIcon} alt="instagram page of ShopKart"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;