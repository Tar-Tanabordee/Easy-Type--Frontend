export default function Input({
  type = 'text',
  style = '',
  name,
  inputTitle,
  onChange,
  value,
}) {
  return (
    <div className={`${style}`}>
      <h1>{inputTitle} :</h1>
      <input
        type={type}
        name={name}
        placeholder={inputTitle}
        onChange={onChange}
        className={`border w-full border-neutral-400 rounded-xl px-4 py-1 bg-neutral-100 `}
        value={value}
      />
    </div>
  );
}
