import Genre from "entities/genre";
import Platform from "entities/platforms";
import useData from "hooks/useData";
import GamesFilterSelectorItem from "./GamesFilterSelectorItem";
import GamesFilterOffcanvas from "./GamesFilterOffcanvas";
import { useContext, useState } from "react";
import GameQueryContext from "context/gameQueryContext";
import GameQuery from "entities/gameQuery";

function GamesFilterSelector() {
  const { data: genres, error: errGenres } = useData<Genre>("genres");
  const { data: platforms, error: errPlatforms } =
    useData<Platform>("platforms");

  const [genre, setGenre] = useState<{
    genreId: string | undefined;
    genreName: string | undefined;
  }>({
    genreId: undefined,
    genreName: undefined,
  });
  const [platform, setPlatform] = useState<{
    platformId: string | undefined;
    platformName: string | undefined;
  }>({
    platformId: undefined,
    platformName: undefined,
  });
  const { gameQuery, setGameQuery } = useContext(GameQueryContext);

  const handleSubmit = () => {
    setGameQuery({
      ...gameQuery,
      genreId: genre.genreId,
      genreName: genre.genreName,
      platformId: platform.platformId,
      platformName: platform.platformName,
    } as GameQuery);
  };

  return (
    <>
      <button
        className="btn btn-info text-white fw-bold"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasFilter"
        aria-controls="offcanvasFilter"
      >
        Filter
      </button>
      <GamesFilterOffcanvas>
        <div className="accordion-flush mt-5 " id="filterCategoriesPanel">
          <GamesFilterSelectorItem categoryName="Genres">
            <select
              className="form-select mt-1 pb-5 bg-dark text-white border-1 border-info overflow-hidden"
              size={genres?.count}
              aria-label="selectGenre"
              defaultValue={undefined}
              onChange={(event) =>
                event.target.value === ""
                  ? setGenre({ genreId: undefined, genreName: undefined })
                  : setGenre({
                      genreId: event.target.value.split(",")[0],
                      genreName: event.target.value.split(",")[1],
                    })
              }
            >
              <option value={[]}>All</option>
              {genres?.results.map((genre) => (
                <option
                  className="py-2"
                  key={genre.id}
                  value={[genre.id.toString(), genre.slug]}
                >
                  {genre.name}
                </option>
              ))}
            </select>
          </GamesFilterSelectorItem>
          <GamesFilterSelectorItem categoryName="Platforms">
            <select
              className="form-select mt-1 pb-5 bg-dark text-white border-1 border-info overflow-hidden"
              size={platforms?.count}
              aria-label="selectGenre"
              defaultValue={undefined}
              onChange={(event) =>
                event.target.value === ""
                  ? setPlatform({
                      platformId: undefined,
                      platformName: undefined,
                    })
                  : setPlatform({
                      platformId: event.target.value.split(",")[0],
                      platformName: event.target.value.split(",")[1],
                    })
              }
            >
              <option value={[]}>All</option>
              {platforms?.results.map((platform) => (
                <option
                  className="py-2"
                  key={platform.id}
                  value={[platform.id.toString(), platform.slug]}
                >
                  {platform.name}
                </option>
              ))}
            </select>
          </GamesFilterSelectorItem>
        </div>
        <div className="d-flex flex-row justify-content-center">
          <button
            className="btn btn-success mt-5"
            data-bs-dismiss="offcanvas"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </GamesFilterOffcanvas>
    </>
  );
}

export default GamesFilterSelector;
