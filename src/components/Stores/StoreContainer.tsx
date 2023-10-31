import Store from "entities/store";
import useData from "hooks/useData";
import StoreCard from "./StoreCard";
import StoreCardSkeleton from "./StoreCardSkeleton";

function StoreContainer() {
  const { data: stores, error, isLoading } = useData<Store>("stores", 9);
  const placeholders = [...Array(6)];

  return (
    <>
      <div className="accordion" id="accordionParent">
        <div className="row row-cols-1 row-cols-md-3 g-2">
          {isLoading &&
            placeholders.map((placeholder, index) => (
              <div className="col" key={index}>
                <StoreCardSkeleton />
              </div>
            ))}
          {stores?.results.map((store) => (
            <div className="col" key={store.id}>
              <StoreCard store={store} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default StoreContainer;
