import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark,faMagnifyingGlass,faChevronLeft,faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Pagination = ({ currentPage, totalPages, paginate }) => {
  const [pageRange] = useState(2); // Number of pages to show before and after the current page
  const paginationItems = [];

  const renderPaginationItems = () => {
    // Always show the first page
    paginationItems.push(1);
    if (currentPage > pageRange + 1) {
      paginationItems.push('...'); // Add ellipses if needed
    }
    
    // Add pages around the current page
    for (let i = Math.max(2, currentPage - pageRange); i <= Math.min(totalPages - 1, currentPage + pageRange); i++) {
      paginationItems.push(i);
    }
    
    // Always show the last page
    if (currentPage < totalPages - pageRange) {
      paginationItems.push('...'); // Add ellipses if needed
    }
    if (totalPages > 1) {
      paginationItems.push(totalPages);
    }
  };

  renderPaginationItems();

  return (
    <ul className="pagination justify-content-end" style={{ margin: '20px 0' }}>
      <li className="page-item">
        <button 
          className="page-link" 
          onClick={() => paginate(currentPage - 1)} 
          disabled={currentPage === 1}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
      </li>

      {paginationItems.map((item, index) =>
        item === '...' ? (
          <li key={index} className="page-item">
            <span className="page-link">...</span>
          </li>
        ) : (
          <li key={index} className={`page-item ${currentPage === item ? 'active' : ''}`}>
            <button 
              className="page-link" 
              onClick={() => paginate(item)}
            >
              {item}
            </button>
          </li>
        )
      )}

      <li className="page-item">
        <button 
          className="page-link" 
          onClick={() => paginate(currentPage + 1)} 
          disabled={currentPage === totalPages}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
