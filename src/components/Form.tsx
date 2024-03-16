type InputType = number | string;

const Form = <T extends InputType>({
  label,
  value,
  onChange,
}: {
  label: string;
  value: T;
  onChange: () => void;
}) => {
  return (
    <div>
      <form>
        <label>{label}</label>
        <input type="text" value={value} onChange={onChange} />
        <button>submit</button>
      </form>
    </div>
  );
};

export default Form;
