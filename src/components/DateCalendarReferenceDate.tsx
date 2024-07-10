import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

interface Props {
  referenceDate: string;
  setReferenceDate: React.Dispatch<React.SetStateAction<string>>;
}

const DateCalendarReferenceDate: React.FC<Props> = ({
  referenceDate,
  setReferenceDate,
}) => {
  const handleDateChange = (newDate: string) => {
    setReferenceDate(newDate);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateCalendar"]}>
        <DateCalendar
          referenceDate={dayjs(referenceDate)}
          onChange={(date) => handleDateChange(date.format("YYYY-MM-DD"))}
          views={["year", "month", "day"]}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default DateCalendarReferenceDate;
