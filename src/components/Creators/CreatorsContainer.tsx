import useData from "hooks/useData";
import CreatorCard from "./CreatorCard";
import Creator from "entities/creator";
import CreatorCardSkeleton from "./CreatorCardSkeleton";

function CreatorsContainer() {
  const { data: creators, error, isLoading } = useData<Creator>("creators", 5);
  const placeholders = [...Array(3)];

  return (
    <>
      {isLoading &&
        placeholders.map((placeholder, index) => (
          <CreatorCardSkeleton key={index} />
        ))}
      {creators?.results.map((creator) => (
        <CreatorCard creator={creator} key={creator.id} />
      ))}
    </>
  );
}

export default CreatorsContainer;
