import personStar from '@/assets/images/personStar.png'
import longStar from '@/assets/images/longStar.svg'
import topRightArrow from '@/assets/images/topRighArrow.svg'
const MainSection = () => {
    return (
        <div className="w-full relative overflow-hidden">
            <div className="w-full flex justify-center relative z-[100] after:content-[''] pb-[5px]
    after:absolute
    after:bottom-0
    after:left-0
    after:w-[64.5%]
    after:border-b
    after:border-white max-sm:h-[502px] max-sm:after:w-[42%]">
                <img className="absolute w-[64px] h-[89px] left-[65.2%] bottom-[-44px] z-[600] max-sm:left-[40%] max-sm:w-[47px] max-sm:h-[82px] max-sm:bottom-[-41px]" src={longStar} alt="" />
                <div className="w-[89.5%] h-full relative font-syne font-extrabold text-white">
                    <div className="w-[70%] flex flex-col pt-[90px] max-lg:pt-[200px] max-sm:pt-[300px] max-sm:w-[95%]">
                        <h1 className="text-[135px] self-start max-lg:text-[100px] max-sm:text-[55px]">Fresh</h1>
                        <h1 className="text-[135px] self-end pr-5 text-transparent leading-[0.18] [-webkit-text-stroke:2px_white] max-lg:text-[100px] max-sm:text-[55px] max-sm:leading-[0.40] 2xl:self-center">2026</h1>
                        <h1 className="text-[135px] ml-[11.5%] max-lg:text-[100px] max-sm:text-[55px] max-sm:ml-[7%]">Look</h1>
                    </div>
                    <div className="absolute right-0 bottom-[8px] font-workSans font-normal text-sm text-[#161615] max-xl:hidden">
                        <p>OREGON JACKET</p>
                        <p>$124</p>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center h-[125px] max-sm:h-[110px]">
                <div className="w-[89.5%] relative font-extrabold text-white pt-[1px]">
                    <div className="inline-block relative z-[100] font-workSans font-normal text-[19px] border-b border-white mt-[29px]">
                        <p className='leading-[1.2] font-workSans font-400 flex gap-2.5 max-sm:mt-[18px]'><p>See more</p> <img src={topRightArrow} alt=""/></p>
                    </div>
                </div>
            </div>
            <img className="absolute w-[478px] top-[-2%] left-[58%] z-[50] object-cover max-sm:left-[26%] max-sm:h-[600px] max-sm:top-[20px] max-lg:left-[45%]" src={personStar} alt=""/>
            <div className="absolute right-0 top-[203px] w-[1051px] h-[354px] bg-orange-500 z-[60] opacity-[0.19] max-sm:top-[208px] max-sm:h-[325px] 2xl:w-[1200px]"></div>
            <div className="absolute right-0 top-[203px] w-[1051px] h-[354px] bg-[#F07E15] z-10 max-sm:top-[208px] max-sm:h-[325px] 2xl:w-[1200px]"></div>
        </div>
    )
}

export default MainSection;