import parse from "html-react-parser";
import { PlatformDetailsType } from "entities/platforms";
import useDataDetails from "hooks/useDataDetails";

interface Props {
  platformId: number;
}

function PlatformDetails({ platformId }: Props) {
  const { data, error } = useDataDetails<PlatformDetailsType>(
    "platforms",
    "platform",
    platformId
  );

  return (
    <div className="px-3 pt-4 pb-2">
      {data?.description ? (
        parse(data.description)
      ) : (
        <p>No description available</p>
      )}
    </div>
  );
}

export default PlatformDetails;
