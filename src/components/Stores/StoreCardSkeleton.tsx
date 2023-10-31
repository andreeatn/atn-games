import ImgPlaceholder from "assets/image-placeholder.webp";

function StoreCardSkeleton() {
  return (
    <>
      <div className="card bg-dark text-white">
        <img
          src={ImgPlaceholder}
          alt="Placeholder for store cover"
          className="card-img m-0"
          style={{ height: "25vh", objectFit: "cover" }}
        />
        <div className="card-body mt-2">
          <h5 className="card-title placeholder-glow">
            <span className="placeholder col-4"></span>
          </h5>
          <h6 className="card-subtitle placeholder-glow">
            <span className="placeholder col-6"></span>
          </h6>
          <button className="btn btn-success disabled placeholder col-4 my-2"></button>
        </div>
      </div>
    </>
  );
}

export default StoreCardSkeleton;
