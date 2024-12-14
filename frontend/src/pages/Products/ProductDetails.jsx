import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  useGetProductDetailsQuery,
  useCreateReviewMutation,
} from "../../redux/api/productApiSlice";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import {
  FaLock,
  FaBox,
  FaPaintBrush,
  FaBuilding,
  FaRuler,
  FaStar,
} from "react-icons/fa";
import moment from "moment";
import HeartIcon from "./HeartIcon";
import Ratings from "./Ratings";
import ProductTabs from "./ProductTabs";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { useTranslation } from 'react-i18next';

const ProductDetails = () => {
  const { t, i18n } = useTranslation();
  const { id: productId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const {
    data: product,
    isLoading,
    refetch,
    error,
  } = useGetProductDetailsQuery(productId);
  // Dil değişimini takip et ve veriyi güncelle
  useEffect(() => {
    // Veriyi yeniden çek
    refetch();
  }, [i18n.language, refetch]);

  const { userInfo } = useSelector((state) => state.auth);

  const [createReview, { isLoading: loadingProductReview }] =
    useCreateReviewMutation();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await createReview({
        productId,
        rating,
        comment,
      }).unwrap();
      refetch();
      toast.success("Review created successfully");
    } catch (error) {
      toast.error(error?.data || error.message);
    }
  };

  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, qty }));
    navigate("/cart");
  };

  return (
    <>
      <div>
        <Link
          to="/"
          className="text-white font-semibold hover:underline ml-[7rem]"
        >
          {t("navHome")}
        </Link>  \<Link
          to="/products"
          className="text-white font-semibold hover:underline ml-2"
        >
          {t("navProducts")}
        </Link>
      </div>

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.message}
        </Message>
      ) : (
        <>
          <div className="flex flex-wrap relative items-between mt-[2rem] ml-[7rem]">
            <div className="relative ">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-120% xl:w-[30rem] lg:w-[45rem] md:w-[30rem] sm:w-[20rem] mr-[1rem]"
              />

              <HeartIcon product={product} />
            </div>

            <div className="flex flex-col justify-between ml-[1rem] mb-5">
              <h2 className="text-2xl font-semibold">
                {/* {product.name} */}
                {product[`name${i18n.language.charAt(0).toUpperCase() + i18n.language.slice(1)}`] || product.name}
              </h2>
              <p className="my-4 xl:w-[35rem] lg:w-[35rem] md:w-[30rem] text-[#B0B0B0]">
                {product[`description${i18n.language.charAt(0).toUpperCase() + i18n.language.slice(1)}`] || product.description}
                {/* {product.description} */}
              </p>

              {/* <p className="text-5xl my-4 font-extrabold">$ {product.price}</p> */}



              <div className="flex justify-between flex-wrap ">
                <Ratings
                  value={product.rating}
                  text={`${product.numReviews} ${t('productDetailReviewsLittleTitle')}`}
                />

                {/* {product.countInStock > -1 && (
                  <div >
                    <select
                      value={qty}
                      onChange={(e) => setQty(e.target.value)}
                      className="p-2 w-[6rem] rounded-lg text-white border bg-transparent"
                    >
                      {[...Array(product.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                )} */}
              </div>

              {/* <div className="btn-container">
                <button
                  onClick={addToCartHandler}
                  disabled={product.countInStock === 0}
                  className="bg-pink-600 text-white py-2 px-4 rounded-lg mt-4 md:mt-0"
                >
                  Add To Cart
                </button>
              </div> */}
            </div>
            <div className="flex items-center justify-between w-[40rem]">
              <div className="one">
                <h1 className="flex items-center mb-6">
                  <FaLock className="mr-2 text-white font-bold " />
                  <p className="text-yellow-500">{t('productDetailStructurTitle')} </p>
                  <p className="ml-2">
                    {product[`structure${i18n.language.charAt(0).toUpperCase() + i18n.language.slice(1)}`] || product.structure}
                    {/* {product.structure} */}
                  </p>
                </h1>
                <h1 className="flex items-center mb-6 w-[25rem]">
                  <FaBuilding className="mr-2 text-white" />
                  <p className="text-yellow-500">{t('footerCompanyTitle')}:{" "}</p>
                  <p className="ml-2">"Rysgally Metal" HJ</p>
                  {/* {moment(product.createAt).fromNow()} */}
                </h1>

              </div>

              <div className="two">
                <h1 className="flex items-center mb-6 w-[25rem]">
                  <FaStar className="mr-2 text-white" />
                  <p className="text-yellow-500">{t('productDetailRatingTitle')}: {rating}</p>
                </h1>
                <h1 className="flex items-center mb-6">
                  <FaRuler className="mr-2 text-white" />
                  <p className="text-yellow-500">{t('productDetailSizeTitle')}:{" "}</p>
                  <p className="ml-2">{product.size}</p>
                </h1>

              </div>
              <div className="three">
                <h1 className="flex items-center mb-6">
                  <FaStar className="mr-2 text-white" />
                  <p className="text-yellow-500">{t('productDetailReviewsTitle')}:{" "}</p>
                  <p className="ml-2">{product.numReviews}</p>
                </h1>
                <h1 className="flex items-center mb-6 w-[20rem]">
                  <FaPaintBrush className="mr-2 text-white" />
                  <p className="text-yellow-500">{t('productDetailColorTitle')}:{" "}</p>
                  <button className="bg-white text-white ml-1 w-10">a</button>
                  <button className="bg-black text-black ml-1 w-10">a</button>
                  <button className="bg-red-800 text-red-800 ml-1 w-10">a</button>
                  <button className="bg-gray-500 text-gray-500 ml-1 w-10">a</button>
                  {/* <button className="bg-yellow-500 text-yellow-500 ml-1 w-10">a</button> */}
                  <button className="bg-green-800 text-green-800 ml-1 w-10">a</button>
                  {/* <button className="bg-blue-800 text-blue-800 ml-1 w-10">a</button> */}
                  {/* <button className="bg-blue-400 text-blue-400 ml-1 w-10">a</button> */}

                  {/* {product.size} */}
                </h1>
              </div>

            </div>

            <div className="mt-[3rem] container flex flex-wrap items-start justify-between ml-[5rem]">
              <ProductTabs
                loadingProductReview={loadingProductReview}
                userInfo={userInfo}
                submitHandler={submitHandler}
                rating={rating}
                setRating={setRating}
                comment={comment}
                setComment={setComment}
                product={product}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductDetails;
