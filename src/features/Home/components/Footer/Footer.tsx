import { useState } from 'react'
import footerBackground from '@/assets/images/footerBackground.png'

const Footer = ({contactRef}) => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm(prev => ({ ...prev, [name]: value}));
    }
    const handleSubmit = () => {
        console.log(form);
        console.log("the Form has been submitted successfully");
    }
    return (
        <div ref={contactRef}
         className='w-full'>
            <div className='w-full flex justify-center' style={{ backgroundImage: `url(${footerBackground})` }}>
            <div className='w-[89.5%]'>
                <div className="w-full flex justify-between max-md:flex-col max-md:items-center">
            <div className='pt-[80px] max-md:flex max-md:flex-col max-md:items-center max-md:pt-[58px]'>
                <h3 className='font-syne font-[600] text-[26px] text-[#FFFFFF80]'>Newslleter</h3>
                <p className='font-workSans font-[400] text-[18px] text-[#FFFFFF80] max-md:text-center'>Get news about articles and updates <br/> in your inbox.</p>
            </div>
            <div className='flex flex-col gap-[40px] pt-[87px] max-md:w-full max-md:pt-[48px] max-md:gap-[30px]'>
                <input name='name' onChange={handleChange} className='block w-[550px]  border-b border-white text-white focus:outline-none focus:ring-0 max-lg:w-[400px] max-md:w-full' type="text" placeholder='NAME'/>
                <input name='email' onChange={handleChange} className='block w-[550px]  border-b border-white text-white focus:outline-none focus:ring-0 max-lg:w-[400px] max-md:w-full' type="email" placeholder='EMAIL'/>
                <input name='message' onChange={handleChange} className='block w-[550px]  border-b border-white text-white focus:outline-none focus:ring-0 max-lg:w-[400px] max-md:w-full' type="text" placeholder='MESSAGE'/>
            </div>
            
        </div>
        <div className='w-full relative py-[20px]'>
            <h1 className="mt-[20px] font-syne font-extrabold text-[135px] leading-[0.8] text-white max-lg:text-[100px] max-md:text-[75px] max-sm:text-[55px]">
                GET
            </h1>

            <h1 className="m-0 font-syne font-extrabold text-[135px] leading-[0.8] text-white max-lg:text-[100px] max-md:text-[75px] max-sm:text-[55px]">
                IN TOUCH
            </h1>
            <div className='absolute h-[180px] w-[180px] flex items-center justify-center rounded-full top-[20px] right-0 border-1 border-[#F07E15] max-md:h-[100px] max-md:w-[100px]'>
                <p onClick={handleSubmit} className='font-workSans font-[400] text-[26px] text-[#F07E15] max-md:text-[18px]'>SEND</p>
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