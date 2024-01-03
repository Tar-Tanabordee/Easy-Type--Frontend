export default function Input({ type = 'text', placeholder, name, onChange }) {
  return (
    <div>
      <div>{placeholder} :</div>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        className="border border-neutral-400 rounded-xl px-4 py-1 bg-neutral-100 w-96"
      />
    </div>
  );
}
