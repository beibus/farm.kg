import React from "react";

const Pagination = ({ companiesPerPage, totalCompanies, paginate}) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalCompanies / companiesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
           <ul className="pagination">
            {
                pageNumbers.map(number => (
                    <li className="pagination-item" key={number}>
                        <a href="/#companies" className="pagination-link" onClick={() => paginate(number)}>
                            {number}
                        </a>
                    </li>
                ))
            }
            </ul>
        
    )
}

export {Pagination}