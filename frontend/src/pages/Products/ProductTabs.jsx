import { useState } from "react";
import { Link } from "react-router-dom";
import Ratings from "./Ratings";
import { useGetTopProductsQuery } from "../../redux/api/productApiSlice";
import SmallProduct from "./SmallProduct";
import Loader from "../../components/Loader";
import './ProductTabsStyle.css';
import { useTranslation } from 'react-i18next';

const ProductTabs = ({
  loadingProductReview,
  userInfo,
  submitHandler,
  rating,
  setRating,
  comment,
  setComment,
  product,
}) => {
  const { t, i18n } = useTranslation();
  const { data, isLoading } = useGetTopProductsQuery();

  const [activeTab, setActiveTab] = useState(1);

  

  if (isLoading) {
    return <Loader />;
  }

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };


  return (
    <div className="flex flex-col md:flex-row">
      <section className="ml-[-5rem] mr-[8rem]">
        <div
          className={`flex-1 p-4 cursor-pointer text-lg  ${activeTab === 1 ? "font-bold" : ""
            }`}
          onClick={() => handleTabClick(1)}
        >
          {t('productTabWriteReview')}
        </div>
        <div
          className={`flex-1 p-4 cursor-pointer text-lg ${activeTab === 2 ? "font-bold" : ""
            }`}
          onClick={() => handleTabClick(2)}
        >
          {t('productTabAllReview')}
        </div>
        <div
          className={`flex-1  p-4 cursor-pointer text-lg ${activeTab === 3 ? "font-bold" : ""
            }`}
          onClick={() => handleTabClick(3)}
        >
          {t('productTabRelatedProduct')}
        </div>
      </section>

      {/* Second Part */}
      <section>
        {activeTab === 1 && (
          <div className="mt-4">
            {userInfo ? (
              <form onSubmit={submitHandler}>
                <div className="my-2">
                  <label htmlFor="rating" className="block text-xl mb-2">
                  {t('productTabRating')}
                  </label>

                  <select
                    id="rating"
                    required
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    className="p-2 border rounded-lg xl:w-[40rem] text-white bg-transparent "
                  >
                    <option value="" className="option" >{t('productTabRatingSelect')}</option>
                    <option value="1" className="option">{t('productTabRatingInferior')}</option>
                    <option value="2" className="option">{t('productTabRatingDecent')}</option>
                    <option value="3" className="option">{t('productTabRatingGreat')}</option>
                    <option value="4" className="option">{t('productTabRatingExcellent')}</option>
                    <option value="5" className="option">{t('productTabRatingExceptional')}</option>

                  </select>
                </div>
                <div className="my-2">
                  <label htmlFor="comment" className="block text-xl mb-2 ">
                  {t('productTabComment')}
                  </label>

                  <textarea
                    id="comment"
                    rows="3"
                    required
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="p-2 border rounded-lg xl:w-[40rem] text-white bg-transparent"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={loadingProductReview}
                  className="bg-white text-black py-2 px-4 rounded-lg mb-5"
                >
                  {t('cntactCol2button')}
                </button>
              </form>
            ) : (
              <p>
                {t('productTabPlease')} <Link to="/login">{t('signInTitle')}</Link> {t('productTabPleaseReview')}
              </p>
            )}
          </div>
        )}
      </section>

      <section>
        {activeTab === 2 && (
          <>
            <div>{product.reviews.length === 0 && <p className="ml-[20rem] mt-[5rem] text-center">{t('productTabNoReview')}</p>}</div>

            <div>
              {product.reviews.map((review) => (
                <div
                  key={review._id}
                  className="bg-[#1A1A1A] p-3 rounded-lg xl:ml-[1rem] sm:ml-[0rem] xl:w-[40rem] sm:w-[24rem] mb-5"
                >
                  <div className="flex justify-between">
                    <strong className="text-[#B0B0B0]">
                      
                      {review.name}
                      </strong>
                    <p className="text-[#B0B0B0]">
                      {review.createdAt.substring(0, 10)}
                    </p>
                  </div>

                  <p className="my-1">${review.comment}</p>
                  <Ratings value={review.rating} />
                </div>
              ))}
            </div>
          </>
        )}
      </section>

      <section>
        {activeTab === 3 && (
          <section className="ml-[1rem] flex flex-wrap">
            {!data ? (
              <Loader />
            ) : (
              data.map((product) => (
                <div key={product._id}>
                  <SmallProduct product={product} />
                </div>
              ))
            )}
          </section>
        )}
      </section>
    </div>
  );
};


export default ProductTabs;
