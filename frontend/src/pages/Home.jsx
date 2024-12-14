import { Link, useParams } from "react-router-dom";
import { useGetProductsQuery } from "../redux/api/productApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Header from "../components/Header";
import Product from "./Products/Product";
import MainHeader from "../components/MainHeader";
import HomeInfoBox from "../components/HomeInfoBox";
import Category from "./Category/Category";
import Title from "../components/Title/Title";
import About from "./About/About";
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";
import { useState } from "react";
import Contact from "./Contact/Contact";
import Slider from '../components/slider/Slider';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t, i18n } = useTranslation();
  const { keyword } = useParams();
  const { data, isLoading, isError } = useGetProductsQuery({ keyword });
  const [playState, setPlayState] = useState(false);

  return (
    <>
      <Slider className="ml-[100rem]" />
      {/* {!keyword ? <Header /> : null} */}
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Message variant="danger">
          {isError?.data?.message || isError.error}
        </Message>
      ) : (
        <>
          <div className="ml-[2rem]">
            <Title subtitle={t('titleCategories')} title={t('slogan')} />
            <Category />
          </div>
          <div className="ml-[2rem]">
            <Title subtitle='"Rysgally Metal" HJ' title={t('titleBizBarada')} />
            <About setPlayState={setPlayState} />
          </div>
          <div className="items-center mt-[5rem]">
            <HomeInfoBox />
          </div>
          {/* <Title subtitle='"Our Products' title='Biziň hödürleýän önümlerimiziň görnüşinden saýlap bilersiňiz ýa-da öz islegiňiz boýunça bölümleri düzüp bilersiňiz.' /> */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-[5rem]">
            <h1 className="ml-[0rem] sm:ml-[6rem]  mt-[2rem] text-[2rem]">
              {t('titleOurProducts')}
            </h1>

            <Link
              to="/products"
              className="bg-white font-bold rounded-full py-2 px-10 sm:mr-[5rem] mr-[0rem] sm:mt-[2rem] mt-[1rem] text-black"
            >
              {t('buttonHomeProducts')}
            </Link>
          </div>

          <div>
            <div className="flex justify-center flex-wrap mt-[2rem] ml-[2rem]">
              {data.products.map((product) => (
                <div key={product._id}>
                  <Product product={product} />
                </div>
              ))}
            </div>
          </div>


          <div className="ml-[4rem] sm:ml-[10rem]   md:ml-[2rem]">
            {/* <Title subtitle='Ýerleşýän ýerimiz' title='' /> */}
            <Contact />
          </div>
          <VideoPlayer playState={playState} setPlayState={setPlayState} />
        </>
      )}
    </>
  );
};

export default Home;
