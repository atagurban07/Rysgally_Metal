import { useSelector } from "react-redux";
import { selectFavoriteProduct } from "../../redux/features/favorites/favoriteSlice";
import Product from "./Product";
import { useTranslation } from 'react-i18next';

const Favorites = () => {
  const { t, i18n } = useTranslation();
  const favorites = useSelector(selectFavoriteProduct);
  console.log(favorites);
  return (
    <div className="ml-[2rem] md:ml-[3.5rem] sm:ml-[3rem]">
      <h1 className="text-lg font-bold ml-[3rem] mt-[3rem]">
        {t('favoriteTitle')}
      </h1>
      {favorites.length < 1 ? (
        <div className="h-[350px]">
            
        </div>
      ) : (
        <div className="flex flex-wrap justify-center items-center">
          {favorites.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>)}

    </div>
  );
};

export default Favorites;
