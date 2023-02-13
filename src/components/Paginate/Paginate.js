import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import { useSelector, useDispatch } from 'react-redux';
import { newPageItem } from '~/state/features/paginationSlice';
import { ProductItem } from '~/components/ProductItem';

function Items({ currentItems }) {
    return (
        <>
            <div className="grid grid-cols-5 gap-4">
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
                    pageRangeDisplayed={4}
                    marginPagesDisplayed={2}
                    forcePage={currentPage}
                    renderOnZeroPageCount={null}
                    onPageChange={handlePageClick}
                    //
                    containerClassName="flex items-center justify-end mt-10"
                    pageLinkClassName="mx-2 p-2 text-lg hover:text-primary-orange"
                    activeLinkClassName="text-primary-orange font-bold bg-primary-bg rounded-lg"
                    previousLinkClassName="p-2"
                    nextLinkClassName="p-2"
                    disabledLinkClassName="text-darkLightText cursor-default"
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
