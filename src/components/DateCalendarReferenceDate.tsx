import * as React from "react";
import { useState } from "react";
import { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: "4px",
          border: "1px solid #000",
          padding: "8px",
          boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)",
          "&:focus": {
            outline: "none",
            borderColor: "#3aaef1",
            boxShadow: "0 0 0 2px rgba(58, 174, 241, 0.2)",
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: "0.875rem",
          fontWeight: 600,
          color: "#3aaef1",
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          width: "100%",
        },
      },
    },
  },
});

const DateCalendarReferenceDate: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);

  const handleDateChange = (newDate: Dayjs | null) => {
    setSelectedDate(newDate);
  };

  return (
    <ThemeProvider theme={theme}>
      <input
        type="text"
        className="ml-4 flex-1 rounded-md border border-black px-3 py-2 shadow-sm"
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker
            label=""
            value={selectedDate}
            onChange={handleDateChange}
            format="YYYY-MM-DD"
          />
        </DemoContainer>
      </LocalizationProvider>
    </ThemeProvider>
  );
};
export default DateCalendarReferenceDate;
