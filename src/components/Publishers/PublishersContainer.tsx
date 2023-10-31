import useData from "hooks/useData";
import Publisher from "entities/publishers";
import PublisherCard from "./PublisherCard";
import PublisherCardSkeleton from "./PublisherCardSkeleton";

function PublisherContainer() {
  const {
    data: publishers,
    error,
    isLoading,
  } = useData<Publisher>("publishers", 5);
  const placeholders = [...Array(3)];

  return (
    <>
      {isLoading &&
        placeholders.map((placeholder, index) => (
          <PublisherCardSkeleton key={index} />
        ))}
      {publishers?.results.map((publisher) => (
        <PublisherCard publisher={publisher} key={publisher.id} />
      ))}
    </>
  );
}

export default PublisherContainer;
