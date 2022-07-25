export const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {pageNumbers.map((number) => (
        <span key={number} onClick={() => paginate(number)} className={currentPage === number && "btn_border"}>
          {totalPosts > 3 && number}
        </span>
      ))}
    </div>
  );
};
