import { Box, InputAdornment, TextField } from "@mui/material";
import React, { ChangeEvent, useContext, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";

import { GlobalContext } from "../../context/GlobalContext";

type InputEvent = ChangeEvent<HTMLInputElement>;

const Filter: React.FC = () => {
  const { searchTerm, setSearchTerm } = useContext(GlobalContext);

  useEffect(() => {
    console.log(searchTerm);
  }, [searchTerm]);

  return (
    <>
      <Box>
        <TextField
          placeholder="Hledat produkt"
          id="SearchField"
          sx={{ width: "500px" }}
          onChange={(e: InputEvent) =>
            setSearchTerm(e.target.value.toLowerCase())
          }
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </>
  );
};

export default Filter;
