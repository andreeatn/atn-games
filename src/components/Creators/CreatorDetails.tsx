import parse from "html-react-parser";
import useDataDetails from "hooks/useDataDetails";
import { CreatorDetailsType } from "entities/creator";

interface Props {
  creatorId: number;
}

function CreatorDetails({ creatorId }: Props) {
  const { data, error } = useDataDetails<CreatorDetailsType>(
    "creators",
    "creator",
    creatorId
  );
  const ratings = [5, 4, 3, 2, 1];

  return (
    <>
      <div className="card-body">
        <div className="description px-xl-3 py-md-2">
          {data?.description ? (
            parse(data.description)
          ) : (
            <p>No description available</p>
          )}
        </div>
        <div className="row px-md-5">
          <div className="col-md-4">
            <h5 className="card-title mb-2 my-md-2">Rating</h5>
            <h5 className="card-subtitle my-2 my-md-3">{data?.rating}</h5>
            <p className="card-text mb-4 my-md-3 ">
              Reviews count: {data?.reviews_count}
            </p>
          </div>
          <div className="col-md-6 ms-md-5 py-md-2">
            {ratings.map((rating) => (
              <div className="row" key={rating}>
                <div className="col-1 px-3 ps-md-5 pe-md-4">{rating}</div>
                <div className="col-10 col-md-8">
                  <div className="progress">
                    {data?.ratings?.filter((d) => d.id === rating) &&
                      data?.ratings
                        ?.filter((d) => d.id === rating)
                        .map((d) => (
                          <span
                            className="progress-bar bg-success"
                            role="progressbar"
                            key={d.id}
                            style={{ width: `${d.percent}%` }}
                            aria-valuenow={d.percent}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            {d.percent}%
                          </span>
                        ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CreatorDetails;
