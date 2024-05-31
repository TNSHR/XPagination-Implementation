import React from 'react';

const Page = ({ currentPage, totalPages, onPrevious, onNext }) => {
  return (
    <div className="pagination">
      <button
        onClick={currentPage > 1 ? onPrevious : null}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span>{` ${currentPage} `}</span>
      <button
        onClick={currentPage < totalPages ? onNext : null}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Page;
