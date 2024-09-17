import MainMenu from './MainMenu';
import ProductImageGallery from './ProductImageGallery';
import ProductInfo from './ProductInfo';
import RelatedProducts from './RelatedProducts';
import UserComments from './UserComments';
import './ProductDetails.css';

const product = {
    name: "Nome do Produto",
    price: "R$99,99",
    description: "Este é um ótimo produto.",
    specifications: "Especificações do produto.",
    images: ["image1.jpg", "image2.jpg"],
    relatedProducts: [
        { name: "Produto Relacionado 1", price: "R$49,99", image: "related1.jpg" },
        { name: "Produto Relacionado 2", price: "R$59,99", image: "related2.jpg" }
    ],
    comments: [
        { name: "Usuário 1", date: "2023-01-01", comment: "Ótimo produto!" },
        { name: "Usuário 2", date: "2023-01-02", comment: "Muito útil." }
    ]
};

export default function ProductDetails() {
    return (
        <div className="product-details">
            <MainMenu />
            <div className="product-content">
                <ProductImageGallery images={product.images} />
                <ProductInfo 
                    name={product.name} 
                    price={product.price} 
                    description={product.description} 
                    specifications={product.specifications} 
                />
                <RelatedProducts products={product.relatedProducts} />
                <UserComments comments={product.comments} />
            </div>
        </div>
    );
}