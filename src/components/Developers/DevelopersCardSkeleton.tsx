import ImgPlaceholder from "assets/image-placeholder.webp";

function DevelopersCardSkeleton() {
  const placeholderList = [...Array(6)];

  return (
    <>
      <div className="card bg-dark text-white my-5">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={ImgPlaceholder}
              alt="Placeholder for developer cover"
              className="card-img"
              style={{ height: "25vh", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body px-3">
              <h5 className="card-title placeholder-glow">
                <span className="placeholder col-3"></span>
              </h5>
            </div>
            <div className="card-footer py-2">
              <h6 className="card-subtitle py-2 text-success">Top Games</h6>
              <ol className="ps-4">
                {placeholderList.map((item, index) => (
                  <li className="placeholder-glow" key={index}>
                    <span className="placeholder  col-5"></span>
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

export default DevelopersCardSkeleton;
