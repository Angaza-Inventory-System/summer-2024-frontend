import { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { styled } from "@mui/system";
import { TextField } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

const CustomTextField = styled(TextField)({
  width: "196.72px", // Set the desired width
  "& .MuiOutlinedInput-root": {
    border: "1px solid #D1D5DB",
    borderRadius: "0.375rem",
    padding: "0.5rem",
    "&.Mui-focused": {
      borderColor: "#3182CE",
    },
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "& .MuiInputBase-input": {
    padding: "0.5rem",
  },
  "& .MuiInputLabel-root": {
    top: "-5px",
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
  );
};
export default DateCalendarReferenceDate;
