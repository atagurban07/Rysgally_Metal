import { Link } from "react-router-dom";
import HeartIcon from "./HeartIcon";
import { useTranslation } from 'react-i18next';

const Product = ({ product }) => {
  const { t, i18n } = useTranslation();

  const getProductName = () => {
    const { language } = i18n;
    switch (language) {
      case 'tr':
        return product.nameTr;  // Türkçe ad
      case 'en':
        return product.nameEn;
      case 'ru':
        return product.nameRu;  // İngilizce ad
      // Diğer diller için ek koşullar ekleyebilirsiniz
      default:
        return product.name;    // Varsayılan ad
    }
  };
  return (
    <div className="w-[24rem] ml-[1rem] p-1 relative">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-[30rem] rounded"
        />
        <HeartIcon product={product} />
      </div>

      <div className="p-4">
        <Link to={`/product/${product._id}`}>
          <h2 className="flex justify-between items-center">
            <div className="text-white">{getProductName()}</div>
            {/* <span className="bg-pink-100 text-pink-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300"> */}
            {/* $ {product.price} */}
            {/* </span> */}
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default Product;
