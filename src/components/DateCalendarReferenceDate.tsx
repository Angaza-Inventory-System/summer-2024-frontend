import { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styled } from "@mui/system";
import { TextField } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

const CustomTextField = styled(TextField)(({ theme }) => ({
  width: "196.72px",
  "& .MuiOutlinedInput-root": {
    padding: "0.5rem",
    backgroundColor: theme.palette.mode === "dark" ? "#6B7280" : "#ffffff",
    "&.Mui-focused": {
      borderColor: "#3182CE",
    },
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "& .MuiInputBase-input": {
    padding: "0.5rem",
    backgroundColor: theme.palette.mode === "dark" ? "#6B7280" : "#ffffff",
  },
  "& .MuiInputLabel-root": {
    top: "-5px",
  },
}));

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

interface Props {
  selectedDate: Dayjs;
  setSelectedDate: Dispatch<SetStateAction<Dayjs>>;
}

const DateCalendarReferenceDate = ({
  selectedDate,
  setSelectedDate,
}: Props) => {
  const handleDateChange = (newDate: Dayjs | null) => {
    if (newDate !== null) setSelectedDate(newDate);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          slots={{
            textField: (textFieldProps) => (
              <CustomTextField {...textFieldProps} />
            ),
          }}
          value={selectedDate}
          onChange={handleDateChange}
          format="YYYY-MM-DD"
        />
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default DateCalendarReferenceDate;
