import useData from "hooks/useData";
import CreatorCard from "./CreatorCard";
import Creator from "entities/creator";

function CreatorsContainer() {
  const { data: creators, error } = useData<Creator>("creators", 5);

  return (
    <>
      {creators?.results.map((creator) => (
        <CreatorCard creator={creator} key={creator.id} />
      ))}
    </>
  );
}

export default CreatorsContainer;
