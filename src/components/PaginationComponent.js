function PaginationComponent({ totalCount, page, updatePage }) {
  const handleClick = (event) => {
    const target = event.target;
    if (target.classList.contains("left") && page > 1) {
      updatePage(Number(page) - 1);
    } else if (
      target.classList.contains("right") &&
      page < Math.ceil(totalCount / 10)
    ) {
      updatePage(Number(page) + 1);
    } else if (
      target.classList.contains("page-number") &&
      !target.classList.contains("selcted")
    ) {
      updatePage(target.dataset.index);
    }
  };
  return (
    <div className="pagination" onClick={handleClick}>
      <span className={`left ${page == 1 ? "hide" : ""}`}>
        <i className="fa-solid fa-chevron-left left"></i>
      </span>
      {[...Array(Math.ceil(Number(totalCount) / 10))].map((item, index) => (
        <span
          key={index}
          data-index={index + 1}
          className={page == index + 1 ? "page-number selected" : "page-number"}
        >
          {index + 1}
        </span>
      ))}
      <span
        className={`right ${
          page == Math.ceil(Number(totalCount) / 10) ? "hide" : ""
        }`}
      >
        <i className="fa-solid fa-chevron-right right"></i>
      </span>
    </div>
  );
}

export default PaginationComponent;
