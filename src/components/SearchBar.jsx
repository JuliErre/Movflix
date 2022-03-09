import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [searchText, setSearchText] = useState("");
  const [searchInput, setSearchInput] = useState(false);

  let navigate = useNavigate();

  useEffect(() => {
    if (searchText.length > 0) {
      navigate(`/search/${searchText}`);
    } else {
      navigate(`/`);
    }
  }, [searchText]);

  const handleClick = () => {
    setSearchInput((prev) => !prev);
  };

  return (
    <div className="fixed right-20 top-7 flex items-center justify-center transition-all">
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="text-white cursor-pointer text-2xl transition-all"
        onClick={handleClick}
      />
      {searchInput && (
        <input
          type="text"
          placeholder="search"
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
          className="rounded bg-black text-white  border-0 border-none py-1 px-3 ml-2 duration-500 transition-all"
        />
      )}
    </div>
  );
}

export default SearchBar;
