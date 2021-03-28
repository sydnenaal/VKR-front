import moment from "moment";
import { appointments } from "./appointments";

const currentDate = moment();
let date = currentDate.date();

const makeTodayAppointment = (startDate, endDate) => {
  const currentYear = currentDate.year();
  const currentMonth = currentDate.month();
  const days = moment(startDate).diff(endDate, "days");

  const nextStartDate = moment(startDate)
    .year(currentYear)
    .month(currentMonth)
    .date(date);

  const nextEndDate = moment(endDate)
    .year(currentYear)
    .month(currentMonth)
    .date(date + days);

  return { startDate: nextStartDate.toDate(), endDate: nextEndDate.toDate() };
};

export default appointments.map(({ startDate, endDate, ...restArgs }) => {
  const result = {
    ...makeTodayAppointment(startDate, endDate),
    ...restArgs,
  };

  date += 1;

  if (date > 31) date = 1;

  return result;
});
