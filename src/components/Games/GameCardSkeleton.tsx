import ImgPlaceholder from "assets/image-placeholder.webp";

function GameCardSkeleton() {
  return (
    <>
      <div className="card bg-dark text-white" aria-hidden="true">
        <img
          src={ImgPlaceholder}
          className="card-img-top"
          alt="Placeholder for card image"
          style={{ height: "20vh" }}
        />
        <div className="card-body" style={{ height: "15vh" }}>
          <h4 className="card-title placeholder-glow">
            <span className="placeholder col-10"></span>
          </h4>
          <p className="card-subtitle placeholder-glow">
            <span className="placeholder col-3"></span>
          </p>
        </div>
      </div>
    </>
  );
}

export default GameCardSkeleton;
