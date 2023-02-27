import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import { useSelector, useDispatch } from 'react-redux';
import { newPageItem } from '~/state/features/paginationSlice';
import { ProductItem } from '~/components/ProductItem';
import './Paginate.css';

function Items({ currentItems }) {
    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                {currentItems &&
                    currentItems.map((item) => <ProductItem item={item} key={item.idDrink} />)}
            </div>
        </>
    );
}

function Paginate({ items, pageSize }) {
    const dispatch = useDispatch();
    const itemStart = useSelector((state) => state.pagination);

    const itemEnd = itemStart + pageSize;
    const currentItems = items.slice(itemStart, itemEnd);
    const pageCount = Math.ceil(items.length / pageSize);
    const currentPage = Math.round(itemStart / pageSize);

    const handlePageClick = (e) => {
        const newOffset = (e.selected * pageSize) % items.length;
        dispatch(newPageItem(newOffset));
        window.scrollTo(0, 0);
    };
    return (
        <>
            <Items currentItems={currentItems} />
            {pageCount > 1 ? (
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="Next >"
                    previousLabel="< Previous"
                    pageCount={pageCount}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={1}
                    forcePage={currentPage}
                    renderOnZeroPageCount={null}
                    onPageChange={handlePageClick}
                    //
                    containerClassName="paginate-container"
                    pageLinkClassName="paginate-link mx-2 text-lg"
                    activeLinkClassName="paginate-link__active"
                    previousLinkClassName="paginate-link paginate-padding-0"
                    nextLinkClassName="paginate-link paginate-padding-0"
                    disabledLinkClassName="paginate-disabled"
                />
            ) : (
                ''
            )}
        </>
    );
}

Paginate.propTypes = {
    items: PropTypes.array.isRequired,
    pageSize: PropTypes.number.isRequired,
};

export default Paginate;
