import ProductDetails from './components/ProductDetails/ProductDetails.tsx';
import Footer from '@/features/Home/components/Footer/Footer.tsx';
import Header from './components/Header';

const ProductPage = () => {
    return (
        <div className="w-full">
            <Header />
            <ProductDetails />
           <Footer />
        </div>
    )
}

export default ProductPage;