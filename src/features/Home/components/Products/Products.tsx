import { useRef } from "react";
import ProductHeader from "./components/ProductHeader/index.ts";
import ProductMain from "./components/ProductMain/ProductMain.tsx";
const Products = () => {
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
            <ProductHeader scrollLeft={scrollLeft} scrollRight={scrollRight} />
            <ProductMain scrollRef={scrollRef} scrollLeft={scrollLeft} scrollRight={scrollRight} />
        </>
    )
}
export default Products;