import footerBackground from '@/assets/images/footerBackground.png'

const Footer = () => {
    return (
        <div className='w-full'>
            <div className='w-full flex justify-center' style={{ backgroundImage: `url(${footerBackground})` }}>
            <div className='w-[89.5%]'>
                <div className="w-full flex justify-between max-[750px]:flex-col max-[750px]:items-center">
            <div className='pt-[80px]'>
                <h3 className='font-syne font-[600] text-[26px] text-[#FFFFFF80]'>Newslleter</h3>
                <p className='font-workSans font-[400] text-[18px] text-[#FFFFFF80]'>Get news about articles and updates <br /> in your inbox.</p>
            </div>
            <div className='flex flex-col w-full gap-[40px] pt-[87px]'>
                <input className='block w-[550px]  border-b border-white text-white max-[1050px]:w-[400px] max-[750px]:w-full' type="text" placeholder='NAME'/>
                <input className='block w-[550px]  border-b border-white text-white max-[1050px]:w-[400px] max-[750px]:w-full' type="email" placeholder='EMAIL'/>
                <input className='block w-[550px]  border-b border-white text-white max-[1050px]:w-[400px] max-[750px]:w-full' type="text" placeholder='MESSAGE'/>
            </div>
            
        </div>
        <div className='w-full relative py-[20px]'>
            <h1 className="mt-[20px] font-syne font-extrabold text-[135px] leading-[0.8] text-white max-[1050px]:text-[100px] max-[750px]:text-[75px] max-[500px]:text-[55px]">
                GET
            </h1>

            <h1 className="m-0 font-syne font-extrabold text-[135px] leading-[0.8] text-white max-[1050px]:text-[100px] max-[750px]:text-[75px] max-[500px]:text-[55px]">
                IN TOUCH
            </h1>
            <div className='absolute h-[180px] w-[180px] flex items-center justify-center rounded-full top-[20px] right-0 border-1 border-[#F07E15] max-[750px]:h-[100px] max-[750px]:w-[100px]'>
                <p className='font-workSans font-[400] text-[26px] text-[#F07E15] max-[750px]:text-[18px]'>SEND</p>
            </div>
        </div>
            </div>
        
        </div>
        <div className='w-full h-[66px] bg-[#000000] flex justify-center items-center'>
            <p className='font-poppins font-[400] text-[#FFFFFF] text-[12px]'>Copyright 2022 All Right Reserved By SG</p>
        </div>
        </div>
        
    )
}

export default Footer;