import { ReactNode } from "react";
import { MdArrowDropDown } from "react-icons/md";

interface Props {
  children: ReactNode;
  categoryName: string;
}

function GamesFilterSelectorItem({ children, categoryName }: Props) {
  const categoryHeadingId = `select${categoryName}-heading`;
  const categoryCollapseId = `select${categoryName}-collapse`;
  const categoryCollapseTarget = "#" + categoryCollapseId;

  return (
    <>
      <div className="accordion-item my-3">
        <h2 className="accordion-header bg-info p-3" id={categoryHeadingId}>
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={categoryCollapseTarget}
            aria-expanded="true"
            aria-controls={categoryCollapseId}
          >
            {categoryName} <MdArrowDropDown className="fs-5 mx-2" />
          </button>
        </h2>
        <div
          id={categoryCollapseId}
          className="accordion-collapse collapse"
          aria-labelledby={categoryHeadingId}
        >
          <div className="accordion-body">{children}</div>
        </div>
      </div>
    </>
  );
}

export default GamesFilterSelectorItem;
