import Platform from "entities/platforms";
import useData from "hooks/useData";
import PlatformCard from "./PlatformCard";
import PlatformCardSkeleton from "./PlatformCardSkeleton";

function PlatformsContainer() {
  const { data: platforms, isLoading } = useData<Platform>("platforms", 5);
  const placeholders = [...Array(3)];

  return (
    <>
      {isLoading &&
        placeholders.map((placeholder, index) => (
          <PlatformCardSkeleton key={index} />
        ))}
      {platforms?.results.map((platform) => (
        <PlatformCard platform={platform} key={platform.id} />
      ))}
    </>
  );
}

export default PlatformsContainer;
