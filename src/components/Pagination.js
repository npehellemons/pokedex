import React from 'react';

const Pagination = (props) => {
    const {page, totalPages, onLeftClick, onRightClick} = props
    return (
        <div className="pagination-container">
            <button className="pagination-left" onClick={onLeftClick}><div>⬅️</div></button>
            <div>{page} of {totalPages}</div>
            <button className="pagination-right" onClick={onRightClick}><div>➡️</div></button>
        </div>
    )
}

export default Pagination