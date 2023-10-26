import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function GamesFilterOffcanvas({ children }: Props) {
  return (
    <>
      <div
        className="offcanvas offcanvas-start bg-dark text-white"
        tabIndex={-1}
        id="offcanvasFilter"
        aria-labelledby="offcanvasFilterLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasFilterLabel">
            Categories
          </h5>
          <button
            type="button"
            className="btn-close text-reset btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div>Choose one or more categories and click 'Apply'.</div>
          {children}
        </div>
      </div>
    </>
  );
}

export default GamesFilterOffcanvas;
