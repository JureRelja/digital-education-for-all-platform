import { useSelector } from "react-redux";
import FormSelect from "../../../base-components/Form/FormSelect";

function index(props: any) {
  const language = useSelector((state: any) => state.language.len);

  let months: any = [];

  if (language === "en") {
    months = [
      { label: "Month", value: 0 },
      { label: "January", value: 1 },
      { label: "February", value: 2 },
      { label: "March", value: 3 },
      { label: "April", value: 4 },
      { label: "May", value: 5 },
      { label: "June", value: 6 },
      { label: "July", value: 7 },
      { label: "August", value: 8 },
      { label: "September", value: 9 },
      { label: "October", value: 10 },
      { label: "November", value: 11 },
      { label: "December", value: 12 },
    ];
  } else if (language === "hr") {
    months = [
      { label: "Siječanj", value: 1 },
      { label: "Veljača", value: 2 },
      { label: "Ožujak", value: 3 },
      { label: "Travanj", value: 4 },
      { label: "Svibanj", value: 5 },
      { label: "Lipanj", value: 6 },
      { label: "Srpanj", value: 7 },
      { label: "Kolovoz", value: 8 },
      { label: "Rujan", value: 9 },
      { label: "Listopad", value: 10 },
      { label: "Studeni", value: 11 },
      { label: "Prosinac", value: 12 },
    ];
  }

  return (
    <FormSelect
      className="w-[35%] xl:w-[140px]"
      aria-label="Month select"
      {...props}
    >
      {months.map((month: any) =>
        month.label == "Month" ? (
          <option key={month.value} value={month.value}>
            {month.label}
          </option>
        ) : (
          <option key={month.value} value={month.value}>
            ({month.value}) {month.label}
          </option>
        )
      )}
    </FormSelect>
  );
}

export default index;
