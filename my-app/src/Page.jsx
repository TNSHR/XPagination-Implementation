import React from 'react';
import './page.css';

const Page = ({ currentPage, totalPages, onPrevious, onNext }) => {
  return (
    // <div className="pagination">
    //   <button onClick={onPrevious} disabled={currentPage === 1}>Previous</button>
    //   <span>{` ${currentPage} `}</span>
    //   <button onClick={onNext} disabled={currentPage === totalPages}>Next</button>
    // </div>
    <div className="pagination">
    {currentPage > 0 && (
      <button onClick={onPrevious}>Previous</button>
    )}
    <span>{` ${currentPage} `}</span>
    {currentPage === totalPages && (
      <button onClick={onNext}>Next</button>
    )}
  </div>
  );
};

export default Page;
