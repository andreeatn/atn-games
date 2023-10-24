import { Fragment } from "react";
import parse from "html-react-parser";
import useDataDetails from "hooks/useDataDetails";
import { StoreDetailsType } from "entities/store";

interface Props {
  storeId: number;
}

function StoreDetails({ storeId }: Props) {
  const { data, error } = useDataDetails<StoreDetailsType>(
    "stores",
    "store",
    storeId
  );

  return (
    <Fragment key={data?.slug}>
      <div className="card-text">
        {data?.description ? (
          parse(data?.description)
        ) : (
          <p>No description available.</p>
        )}
      </div>
      <div className="card-footer bg-dark text-white">
        <h6 className="card-subtitle">Game count</h6>
        <p className="card-text">{data?.games_count}</p>
      </div>
    </Fragment>
  );
}

export default StoreDetails;
