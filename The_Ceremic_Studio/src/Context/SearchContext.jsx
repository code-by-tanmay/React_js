import { createContext, useState } from "react";

export const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <SearchContext.Provider value={{ searchInput, setSearchInput }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;



// import { createContext, useState } from "react";

// export const SearchContext = createContext();

// export function SearchProvider({ children }) {
//   const [searchInput, setSearchInput] = useState("");

//   return (
//     <SearchContext.Provider value={{ searchInput, setSearchInput }}>
//       {children}
//     </SearchContext.Provider>
//   );
// }

