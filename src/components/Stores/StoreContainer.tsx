import Store from "entities/store";
import useData from "hooks/useData";
import StoreCard from "./StoreCard";

function StoreContainer() {
  const { data: stores, error } = useData<Store>("stores", 9);

  return (
    <div className="accordion" id="accordionParent">
      <div className="row row-cols-1 row-cols-md-3 g-2">
        {stores?.results.map((store) => (
          <div className="col" key={store.id}>
            <StoreCard store={store} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default StoreContainer;
