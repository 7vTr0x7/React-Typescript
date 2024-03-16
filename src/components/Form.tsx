import { Dispatch, SetStateAction } from "react";

type InputType = number | string;

const Form = <T extends InputType>({
  label,
  value,
  setter,
}: {
  label: string;
  value: T;
  setter: Dispatch<SetStateAction<T>>;
}) => {
  return (
    <div>
      <form>
        <label>{label}</label>
        <input
          type="text"
          value={value}
          onChange={(e) => setter(e.target.value as T)}
        />
        <button>submit</button>
      </form>
    </div>
  );
};

export default Form;
