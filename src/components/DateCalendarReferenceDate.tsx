import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
//import {DatePicker} from "@mui/x-date-pickers/DateCalendar";

interface Props {
  referenceDate: string;
  setReferenceDate: React.Dispatch<React.SetStateAction<string>>;
}

function DateCalendarReferenceDate(referenceDate, setReferenceDate) {
  const handleDateChange = (newDate: dayjs.Dayjs) => {
    setReferenceDate(newDate.format("YYYY-MM-DD"));
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
}

export default DateCalendarReferenceDate;
