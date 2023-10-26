import GameQuery from "entities/gameQuery";
import { ReactNode, createContext, useState } from "react";

interface Props {
  children: ReactNode;
}

const GameQueryContext = createContext({
  gameQuery: {} as GameQuery,
  setGameQuery: (query: GameQuery) => {},
});

export function GameQueryContextProvider({ children }: Props) {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <GameQueryContext.Provider value={{ gameQuery, setGameQuery }}>
      {children}
    </GameQueryContext.Provider>
  );
}

export default GameQueryContext;
