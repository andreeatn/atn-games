import QAs from "data/QAs";

function SupportFAQ() {
  const qaData = QAs;

  return (
    <>
      <div className="accordion accordion-flush" id="accordionFlushQA">
        {qaData.map((data, index) => {
          const headerId = `qa-heading${index}`;
          const collapseId = `qa-collapse${index}`;
          const collapseTarget = "#" + collapseId;

          return (
            <div
              className="accordion-item bg-dark border-1 border-dark"
              key={index}
            >
              <h2 className="accordion-header" id={headerId}>
                <button
                  className="accordion-button collapsed bg-primary text-white"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={collapseTarget}
                  aria-expanded="false"
                  aria-controls={collapseId}
                >
                  {data.question}
                </button>
              </h2>
              <div
                id={collapseId}
                className="accordion-collapse collapse bg-dark text-white"
                aria-labelledby={headerId}
                data-bs-parent="#accordionFlushQA"
              >
                <div className="accordion-body">{data.answear}</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default SupportFAQ;
