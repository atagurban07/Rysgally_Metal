import React from 'react';
import "./PaginationStyle.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination = ({ totalPosts, postPerPage, setCurrentPage, currentPage }) => {
    let pages = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pages.push(i);
    }

    // Aktif sayfanın etrafında gösterilecek düğme sayısı
    const range = 1;  // Gösterilecek sayfaların etrafındaki aralık
    const pageCount = pages.length;

    // Gösterilecek sayfaların başlangıç ve bitiş indexlerini hesapla
    const startPage = Math.max(1, currentPage - range);
    const endPage = Math.min(pageCount, currentPage + range);

    // Önce ve Sonra düğmeleri için gösterilecek aralıkları ayarla
    const showPrevEllipsis = startPage > 1;
    const showNextEllipsis = endPage < pageCount;

    return (
        <div className='pageButtons flex justify-center items-center mt-4'>
            {/* Önceki Sayfa Düğmesi */}
            <button
                className='flex justify-center ml-3 bg-white text-black w-6 h-6 items-center rounded-full'
                onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)}
                disabled={currentPage === 1}
            >
                <FaChevronLeft size={'15px'} />
            </button>

            {/* Önce ve Sonra ellipses */}
            {/* {showPrevEllipsis && (
                <>
                    <button
                        className='pageButton'
                        onClick={() => setCurrentPage(1)}
                    >
                        <p>1</p>
                    </button>
                    <span className='pageButton'>...</span>
                </>
            )} */}

            {/* Aktif Sayfa ve Etrafındaki Sayfalar */}
            {Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index).map(page => (
                <button
                    key={page}
                    className={`pageButton ${page === currentPage ? 'active' : ''}`}
                    onClick={() => setCurrentPage(page)}
                >
                    <p>{page}</p>
                </button>
            ))}

            {/* Sonraki Sayfa Düğmesi */}
            {/* {showNextEllipsis && (
                <>
                    <span className='pageButton'>...</span>
                    <button
                        className='pageButton'
                        onClick={() => setCurrentPage(pageCount)}
                    >
                        <p>{pageCount}</p>
                    </button>
                </>
            )} */}

            <button
                className='flex justify-center ml-3 bg-white text-black w-6 h-6 items-center rounded-full'
                onClick={() => setCurrentPage(currentPage < pageCount ? currentPage + 1 : pageCount)}
                disabled={currentPage === pageCount}
            >
                <FaChevronRight size={'15px'} />
            </button>
        </div>
    );
};

export default Pagination;
