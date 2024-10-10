import { useState, useRef } from "react";

import {
  TextField,
  Autocomplete,
  InputAdornment,
  IconButton,
  Snackbar,
  Alert,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface Option {
  description: string;
}

interface Props {
  setValue: (value: string | null) => void;
  value: string | null;
  handleSearch: () => void;
  options: Array<Option>;
  label: string;
  handleCloseFeedback: () => void;
  durationFeedback: number;
  feedbackMessage: string;
  isOpenFeedback: boolean;
}

export const DropDownWithButton: React.FC<Props> = ({
  setValue,
  value,
  handleSearch,
  options,
  label,
  handleCloseFeedback,
  durationFeedback,
  feedbackMessage,
  isOpenFeedback,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <Autocomplete
        options={options.map((option) => option.description)}
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
        onInputChange={(event, inputValue) => setValue(inputValue)}
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            variant="outlined"
            inputRef={inputRef}
            onKeyDown={handleKeyDown}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            slotProps={{
              input: {
                ...params.InputProps,
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleSearch} edge="end" name="search">
                      <SearchIcon
                        sx={{ color: isFocused ? "#ffffff" : "#0000008a" }}
                      />
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
            sx={{
              flexGrow: 1,

              "& label": {
                "&.Mui-focused": {
                  color: "#ffffff",
                },
              },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "#ffffff",
                },
              },
              "& input": {
                "&:focus": {
                  color: "#ffffff",
                },
              },
            }}
          />
        )}
        fullWidth
        freeSolo
      />

      <Snackbar
        open={isOpenFeedback}
        autoHideDuration={durationFeedback}
        onClose={handleCloseFeedback}
      >
        <Alert
          onClose={handleCloseFeedback}
          severity="error"
          variant="outlined"
          sx={{ width: "100%" }}
        >
          {feedbackMessage}
        </Alert>
      </Snackbar>
    </>
  );
};
