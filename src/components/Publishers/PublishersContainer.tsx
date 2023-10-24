import useData from "hooks/useData";
import Publisher from "entities/publishers";
import PublisherCard from "./PublisherCard";

function PublisherContainer() {
  const { data: publishers, error } = useData<Publisher>("publishers", 5);

  return (
    <>
      {publishers?.results.map((publisher) => (
        <PublisherCard publisher={publisher} key={publisher.id} />
      ))}
    </>
  );
}

export default PublisherContainer;
