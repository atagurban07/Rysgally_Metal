import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetFilteredProductsQuery } from "../redux/api/productApiSlice";
import { useFetchCategoriesQuery } from "../redux/api/categoryApiSlice";

import {
  setCategories,
  setProducts,
  setChecked,
} from "../redux/features/shop/shopSlice";
import Loader from "../components/Loader";
import ProductCard from "./Products/ProductCard";
import Pagination from "./Products/Pagination";
import { useTranslation } from 'react-i18next';

const Shop = () => {
  const { t, i18n } = useTranslation();
  const [currentPage, setCurrentpage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(8);
  // let [currentPosts, setCurrentPosts] = useState([]);


  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  let currentPosts = [];
  const dispatch = useDispatch();
  const { categories, products, checked, radio } = useSelector(
    (state) => state.shop
  );

  const categoriesQuery = useFetchCategoriesQuery();
  // const [priceFilter, setPriceFilter] = useState("");

  const filteredProductsQuery = useGetFilteredProductsQuery({
    checked,
    // radio,
  });



  useEffect(() => {
    if (!categoriesQuery.isLoading) {
      dispatch(setCategories(categoriesQuery.data));
    }
  }, [categoriesQuery.data, dispatch, i18n.language]);
  useEffect(() => {

    if (!filteredProductsQuery.isLoading && filteredProductsQuery.data) {
      if (checked.length) {
        const filteredProducts = filteredProductsQuery.data
          .filter(
            (product) => {
              return (
                checked.includes(product.category)
              );
            }
          );

        // console.log(currentPosts)
        setCurrentpage(1);

        dispatch(setProducts(filteredProducts));
      } else {


        dispatch(setProducts(filteredProductsQuery.data));


      }
    }
    // priceFilter,radio
  }, [checked, filteredProductsQuery.data, dispatch,]);



  const handleCheck = (value, id) => {
    const updatedChecked = value
      ? [...checked, id]
      : checked.filter((c) => c !== id);

    dispatch(setChecked(updatedChecked));
  };

  // Add "All Brands" option to uniqueBrands
  const uniqueBrands = [
    ...Array.from(
      new Set(
        filteredProductsQuery.data
          ?.map((product) => product.brand)
          .filter((brand) => brand !== undefined)
      )
    ),
  ];



  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row">


          <div className="bg-[#151515] p-3 mb-2 w-full sm:w-1/3 md:w-1/4 lg:w-1/5">
            <h2 className="h4 text-center py-2 bg-transparent border rounded-full mb-2">
              {t('shopFilterTitle')}
            </h2>

            <div className="p-5">
              {categories?.map((c) => (
                <div key={c._id} className="mb-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id={`checkbox-${c._id}`}
                      onChange={(e) => handleCheck(e.target.checked, c._id)}
                      className="w-4 h-4 text-pink-600 bg-gray-100 border-gray-300 rounded focus:ring-pink-500 dark:focus:ring-pink-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor={`checkbox-${c._id}`}
                      className="ml-2 text-sm font-medium text-white dark:text-gray-300"
                    >
                      {c[`name${i18n.language.charAt(0).toUpperCase() + i18n.language.slice(1)}`] || c.name}
                    </label>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-5 pt-0">
              <button
                className="w-full border my-4"
                onClick={() => window.location.reload()}
              >
                {t('shopResetButton')}
              </button>
            </div>
          </div>


          <div className="p-3 flex-1">
            <div className="text-center font-semibold uppercase text-4xl my-1 mb-2">
              <p className="text-2xl">{t('titleOurProducts')}</p>
              <h2 className="text-base normal-case">{t('slogan')}</h2>
            </div>

            <div className="flex flex-wrap">
              {products.length === 0 ? (
                <Loader />
              ) : (
                products?.slice(firstPostIndex, lastPostIndex)?.map((p) => (
                  <div className="p-3 w-full md:w-1/2 lg:w-1/3 xl:w-1/4" key={p._id}>
                    <ProductCard p={p} />
                  </div>
                ))
              )}
            </div>

            <div className="flex justify-center mt-4">
              <Pagination
                totalPosts={products.length}
                postPerPage={postPerPage}
                setCurrentPage={setCurrentpage}
                currentPage={currentPage}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
