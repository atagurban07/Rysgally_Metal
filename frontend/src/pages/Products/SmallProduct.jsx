import { Link } from "react-router-dom";
import HeartIcon from "./HeartIcon";
import { useTranslation } from 'react-i18next';

const SmallProduct = ({ product }) => {
  const { t, i18n } = useTranslation();
  const getProductName = (product, lng) => {
    let productName = product.name; // Varsayılan olarak İngilizce adını kullan

    if (lng === 'en' && product.nameTr) {
      productName = product.nameTr;
    }

    if (lng === 'ru' && product.nameRu) {
      productName = product.nameRu;
    }

    if (lng === 'tr' && product.nameTr) {
      productName = product.nameTr;
    }
    // Diğer diller için gerektiği gibi eklemeler yapabilirsiniz

    return productName;
  };
  return (
    <div className="w-[15rem] ml-[3rem] p-3">
      <div className="relative w-[16rem]">
        <img
          src={product.image}
          alt={product.name}
          // width= {'4000px'}
          // height = {'2600px'}
          className="h-auto rounded"
        />
        <HeartIcon product={product} />
      </div>

      <div className="p-1">
        <Link to={`/product/${product._id}`}>
          <h2 className="flex justify-between items-center">
            <div>{getProductName(product, i18n.language)}</div>
            {/* <span className="bg-pink-100 text-pink-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300">
              ${product.price}
            </span> */}
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default SmallProduct;
