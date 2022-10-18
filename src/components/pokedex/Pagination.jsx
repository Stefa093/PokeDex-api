import React from "react";
import '../pokedex/styles/pagination.css'

const Pagination = ({ currentPage, pagesLength, setCurrentPage }) => {
  const pagesPerBlock = 8;
  const currentBlock = Math.ceil(currentPage / pagesPerBlock);
  const blockLength = Math.ceil(pagesLength / pagesPerBlock);

  const arrPages = [];
  const initialPage = (currentBlock - 1) * pagesPerBlock + 1;
  const limitPage =
    blockLength === currentBlock ? pagesLength : currentBlock * pagesPerBlock;

  for (let i = initialPage; i <= limitPage; i++) {
    arrPages.push(i);
  }

  const handlePrevious = () => {
    setCurrentPage(currentPage - 1)
  }

  const handleNext = () => {
    setCurrentPage(currentPage + 1)
  }

  const handlePage = currentPage => {
    setCurrentPage(currentPage)
  }

  return (
    <div className="pagination">
        {
            currentPage > 1 &&
            <div onClick={handlePrevious} className="pagination__prev pagination__active">&#60;</div>
        }
      <ul className="pagination__container">
        {arrPages.map((e) => (
          <li onClick={() => handlePage(e)} className={`pagination__page ${currentPage === e && 'pagination__active'}`} key={e}>
            {e}
          </li>
        ))}
      </ul>
      {
        currentPage < pagesLength &&
          <div onClick={handleNext} className="pagination__next pagination__active">&#62;</div>
      }
    </div>
  );
};

export default Pagination;
