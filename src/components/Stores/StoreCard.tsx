import Store from "../../entities/store";
import StoreDetails from "./StoreDetails";

interface Props {
  store: Store;
}

function StoreCard({ store }: Props) {
  const collapseId = `collapseDetails${store.slug}`;
  const collapseTarget = "#" + collapseId;

  return (
    <div className="card bg-dark text-white" key={store.id}>
      <img
        src={store.image_background}
        alt="Store cover"
        className="card-img m-0"
        style={{ height: "25vh", objectFit: "cover" }}
      />
      <div className="card-body mt-2">
        <h5 className="card-title">{store.name}</h5>
        <h6 className="card-subtitle">{store.domain}</h6>
        <button
          className="btn btn-success mt-4"
          data-bs-toggle="collapse"
          data-bs-target={collapseTarget}
          aria-expanded="false"
          aria-controls={collapseId}
        >
          Show details
        </button>
        <div className="accordion-item border-0 mt-3">
          <div
            className="collapse mt-4 bg-dark text-white"
            id={collapseId}
            data-bs-parent="#accordionParent"
          >
            <StoreDetails storeId={store.id} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoreCard;
