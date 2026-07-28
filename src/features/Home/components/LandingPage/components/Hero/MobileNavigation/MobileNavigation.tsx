const MobileNavigation = ({setMenuFlag, scrollToContact, scrollToProducts}) => {
    return <div className="h-[610px] w-full flex flex-col justify-center items-center gap-[60px] font-workSans font-[400] text-white text-[18px]">
        <button onClick={
            () => {
                setMenuFlag(prev => !prev);
            }
        }>HOME</button>
        <button onClick={
            () => {
                setMenuFlag(prev => !prev);
            }
        }>ABOUT</button>
        <button onClick={
            () => {
                scrollToProducts();
                setMenuFlag(prev => !prev);
            }
        }>OUR PRODUCTS</button>
        <button onClick={
            () => {
                scrollToContact();
                setMenuFlag(prev => !prev);
            }
        }>CONTACT US</button>

    </div>
}

export default MobileNavigation;