import useStores from "../hooks/useStores";
import StoreCard from "./StoreCard";

function StoreContainer() {
  const { data: stores, error } = useStores(9);

  return (
    <div className="accordion" id="accordionParent">
      <div className="row row-cols-1 row-cols-md-3 g-2">
        {stores?.results.map((store) => (
          <div className="col">
            <StoreCard store={store} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default StoreContainer;
