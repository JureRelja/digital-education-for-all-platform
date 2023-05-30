import FormSelect from "../../../base-components/Form/FormSelect";

let currentYear = new Date().getFullYear();
const earliestYear = 1901;
let years: any = [];

years.push({ label: "Year", value: 0 });

while (currentYear >= earliestYear) {
  years.push({ value: currentYear, label: currentYear });
  currentYear--;
}

function index(props: any) {
  return (
    <FormSelect
      className=" w-[35%] xl:w-[80px]"
      aria-label="Year select"
      {...props}
      onChange={(e: any) => props.onChange(e.target.value)}
    >
      {years.map((year: any) => (
        <option key={year.value} value={year.value}>
          {year.label}
        </option>
      ))}
    </FormSelect>
  );
}

export default index;
