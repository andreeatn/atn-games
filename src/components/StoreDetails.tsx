import { Fragment } from "react";
import useStoreDetails from "../hooks/useStoreDetails";
import parse from "html-react-parser";

interface Props {
  storeId: number;
}

function StoreDetails({ storeId }: Props) {
  const { data, error } = useStoreDetails(storeId);

  return (
    <Fragment key={data?.slug}>
      <p className="card-text">
        {data?.description && parse(data?.description)}
      </p>
      <div className="card-footer bg-dark text-white">
        <h6 className="card-subtitle">Game count</h6>
        <p className="card-text">{data?.games_count}</p>
      </div>
    </Fragment>
  );
}

export default StoreDetails;
