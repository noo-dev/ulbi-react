import { getPagesArray } from "../../../utils/pages";

const Pagination = ({totalPage, currentPage, changePage}) => {
    let pagesArray = getPagesArray(totalPage)
    return (
        <div className="page__wrapper">
          {pagesArray.map(p => 
            <span
              onClick={() => changePage(p)}
              key={p} 
              className={p === currentPage ? 'page page__current' : 'page'}
            >
              {p}
            </span>  
          )}
        </div>
    )
}

export default Pagination;