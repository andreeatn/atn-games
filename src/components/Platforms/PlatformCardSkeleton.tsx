import ImgPlaceholder from "assets/image-placeholder.webp";

function PlatformCardSkeleton() {
  const placeholderList = [...Array(6)];

  return (
    <>
      <div className="card bg-dark text-white my-5">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={ImgPlaceholder}
              alt="Placeholder for platform thumbnail"
              className="card-img"
              style={{ height: "25vh", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-4">
            <div className="card-body px-3">
              <h5 className="card-title placeholder-glow">
                <span className="placeholder col-3"></span>
              </h5>
              <a
                href="#"
                tabIndex={-1}
                className="btn btn-success disabled placeholder col-4"
              ></a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-body">
              <h6 className="card-subtitle py-2 text-success">Top Games</h6>
              <ol className="ps-4">
                {placeholderList.map((item, index) => (
                  <li className="placeholder-glow" key={index}>
                    <span className="placeholder col-5"></span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlatformCardSkeleton;
