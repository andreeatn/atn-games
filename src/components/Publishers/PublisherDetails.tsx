import parse from "html-react-parser";
import { PlatformDetailsType } from "entities/platforms";
import useDataDetails from "hooks/useDataDetails";
import { PublisherDetailsType } from "entities/publishers";

interface Props {
  publisherId: number;
}

function PublisherDetails({ publisherId }: Props) {
  const { data, error } = useDataDetails<PublisherDetailsType>(
    "publishers",
    "publisher",
    publisherId
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

export default PublisherDetails;
