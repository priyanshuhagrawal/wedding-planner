import {
  createContext,
  useState,
  useEffect,
} from "react";

export const WeddingContext =
  createContext();

function WeddingProvider({
  children,
}) {
  const [
    weddingRequests,
    setWeddingRequests,
  ] = useState(() => {
    const saved =
      localStorage.getItem(
        "weddingRequests"
      );

    return saved
      ? JSON.parse(saved)
      : [];
  });

  const [cateringPackages, setCateringPackages] =
  useState(() => {
    return JSON.parse(
      localStorage.getItem(
        "cateringPackages"
      )
    ) || [];
  });
  useEffect(() => {
  localStorage.setItem(
    "cateringPackages",
    JSON.stringify(
      cateringPackages
    )
  );
}, [cateringPackages]);

  const [ photographers, setPhotographers,] = 
  useState(() => {
  return JSON.parse(
    localStorage.getItem(
      "photographers"
    )
  ) || [];
});
useEffect(() => {
  localStorage.setItem(
    "photographers",
    JSON.stringify(
      photographers
    )
  );
}, [photographers]);

  const [
  decorations,
  setDecorations,
] = useState(() => {
  return JSON.parse(
    localStorage.getItem(
      "decorations"
    )
  ) || [];
});
useEffect(() => {
  localStorage.setItem(
    "decorations",
    JSON.stringify(
      decorations
    )
  );
}, [decorations]);

  const [mandaps, setMandaps] =
  useState(() => {
    return JSON.parse(
      localStorage.getItem(
        "mandaps"
      )
    ) || [];
  });
  useEffect(() => {
  localStorage.setItem(
    "mandaps",
    JSON.stringify(mandaps)
  );
}, [mandaps]);

  useEffect(() => {
    localStorage.setItem(
      "weddingRequests",
      JSON.stringify(
        weddingRequests
      )
    );
  }, [weddingRequests]);

  

  return (
    <WeddingContext.Provider
      value={{
        cateringPackages,
        setCateringPackages,

        photographers,
        setPhotographers,

        decorations,
        setDecorations,

        mandaps,
        setMandaps,

        weddingRequests,
        setWeddingRequests,
      }}
    >
      {children}
    </WeddingContext.Provider>
  );
}

export default WeddingProvider;