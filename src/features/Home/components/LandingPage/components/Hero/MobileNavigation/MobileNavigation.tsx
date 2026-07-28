const MobileNavigation = ({scrollToContact, scrollToProducts}) => {
    return <div className="h-[610px] w-full flex flex-col justify-center items-center gap-[60px] font-workSans font-[400] text-white text-[18px]">
        <button>HOME</button>
        <button>ABOUT</button>
        <button onClick={scrollToProducts}>OUR PRODUCTS</button>
        <button onClick={scrollToContact}>CONTACT US</button>

    </div>
}

export default MobileNavigation;