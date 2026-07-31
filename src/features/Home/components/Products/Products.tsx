import { useRef, useState } from "react";
import ProductHeader from "./components/ProductHeader/index.ts";
import ProductMain from "./components/ProductMain/ProductMain.tsx";
const Products = ({productRef}) => {
    const [starPosition, setStarPosition] = useState("0px");

    const scrollRef = useRef<HTMLDivElement>(null);
    const scrollLeft = () => {
        console.log("left");
        scrollRef.current?.scrollBy({
            left: -360,
            behavior: "smooth",
        });
    };
    const scrollRight = () => {
        console.log("right");
        scrollRef.current.scrollBy({
            left: 360,
            behavior: "smooth",
        })
    };
    return (
        <>
            <ProductHeader starPosition={starPosition} productRef={productRef}  scrollLeft={scrollLeft} scrollRight={scrollRight} />
            <ProductMain setStarPosition={setStarPosition}  scrollRef={scrollRef} scrollLeft={scrollLeft} scrollRight={scrollRight} />
        </>
    )
}
export default Products;