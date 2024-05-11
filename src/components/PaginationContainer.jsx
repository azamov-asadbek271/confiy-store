import { useLocation, useLoaderData, useNavigate } from "react-router-dom";
function PaginationContainer() {
  const { meta } = useLoaderData();
  const { pageCount, page } = meta.pagination;
  const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1;
  });
  const { search, pathname } = useLocation();
  const navigate = useNavigate();
  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);
    navigate(`${pathname}?${searchParams}`.toString());
  };
  if (pageCount < 2) return null;
  return (
    <div className="mt-16 flex  justify-end">
      <div className="join">
        <button
          className="btn btn-xs sm:btn-md join-item capitalize"
          onClick={() => {
            let prevPage = page - 1;
            if (prevPage < 1) prevPage = pageCount;
            handlePageChange(pageCount);
          }}
        >
          Prev
        </button>
        {/* number button */}
        {pages.map((pageNumber) => {
            return (
              <button
                onClick={() => {
                  handlePageChange(pageNumber);
                }}
                className={`btn btn-xs sm:btn-md border-none join-item ${
                    pageNumber == page ? "bg-base-300 border-base-300" : ""
                }`}
                key={pageNumber}
              >
                {pageNumber}
              </button>
            );
        })}
        <button
          className="btn btn-xs sm:btn-md join-item capitalize"
          onClick={() => {
            let nextPage = page + 1;
            if (nextPage > pageCount) nextPage = 1;
            handlePageChange(nextPage);
          }}
        >
          next
        </button>
      </div>
    </div>
  );
}

export default PaginationContainer;
