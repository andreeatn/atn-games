import ImgPlaceholder from "assets/image-placeholder.webp";

function CreatorCardSkeleton() {
  const placeholderList = [...Array(6)];

  return (
    <>
      <div className="card bg-dark text-white my-5">
        <div className="row g-0">
          <div className="col-md-4 d-flex flex-column">
            <img
              src={ImgPlaceholder}
              alt="Placeholder for creator thumbnail"
              className="card-img"
              style={{ height: "25vh", objectFit: "cover" }}
            />
            <button className="btn btn-success my-3 align-self-center d-none d-md-inline-block disabled placeholder col-4"></button>
            {/* <a
            href="#"
            tabIndex={-1}
            className="btn btn-success disabled placeholder col-4 my-2"
          ></a> */}
          </div>
          <div className="col-md-4">
            <div className="card-body px-3">
              <h5 className="card-title placeholder-hlow">
                <span className="placeholder col-6 col-md-5"></span>
              </h5>
              <h6 className="card-subtitle placeholder-hlow">
                <span className="placeholder col-3"></span>
              </h6>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-body">
              <h6 className="card-subtitle py-2 text-success">Top Games</h6>
              <ol className="ps-4">
                {placeholderList.map((item, index) => (
                  <li className="placeholder-glow" key={index}>
                    <span className="placeholder col-8 col-md-6"></span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
        <button className="btn btn-sm btn-success mt-1 mb-4  align-self-center d-md-none disabled placeholder col-4"></button>
      </div>
    </>
  );
}

export default CreatorCardSkeleton;
