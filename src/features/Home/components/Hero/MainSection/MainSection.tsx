import personStar from '@/assets/images/personStar.png'
import longStar from '@/assets/images/longStar.svg'
import topRightArrow from '@/assets/images/topRighArrow.svg'
const MainSection = () => {
    return (
        <div className="w-full relative overflow-hidden">
            <div className="w-full flex justify-center relative z-[100] border-b border-white border-[64%] ">
                <img className="absolute w-[64px] h-[89px] left-[65%] bottom-[-44px] z-[600]" src={longStar} alt="" />
                <div className="w-[89.5%] h-full relative font-syne font-extrabold text-white">
                    <div className="w-[70%] flex flex-col pt-[88px]">
                        <h1 className="text-[135px] self-start">Fresh</h1>
                        <h1 className="text-[135px] self-end pr-5 text-transparent leading-[0.18] [-webkit-text-stroke:2px_white]">2026</h1>
                        <h1 className="text-[135px] ml-[11.5%]">Look</h1>
                    </div>
                    <div className="absolute right-0 bottom-5 font-workSans font-normal text-sm text-[#161615]">
                        <p>OREGON JACKET</p>
                        <p>$124</p>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center h-[120px]">
                <div className="w-[89.5%] relative font-syne font-extrabold text-white">
                    <div className="inline-block relative z-[100] font-workSans font-normal text-[18px] border-b border-white mt-[29px]">
                        <p className='whitespace-nowrap'>See more<img src={topRightArrow} alt=""/></p>
                    </div>
                </div>
            </div>
            <img className="absolute w-[478px] top-[-1.5%] left-[59%] z-[50] object-cover" src={personStar} alt=""/>
            <div className="absolute right-0 top-[210px] w-[1051px] h-[350px] bg-orange-500 z-[60] opacity-[0.19]"></div>
            <div className="absolute right-0 top-[210px] w-[1051px] h-[350px] bg-[#F07E15] z-10"></div>
        </div>
    )
}

export default MainSection;