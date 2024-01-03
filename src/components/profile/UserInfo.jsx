import useAuth from '../../hooks/use-auth';

export default function UserInfo({
  type = 'text',
  style = '',
  name,
  inputTitle,
}) {
  const { authUser } = useAuth();
  return (
    <div className={`${style}`}>
      <h1>{inputTitle} :</h1>
      <p
        type={type}
        name={name}
        className="flex justify-between items-center border border-neutral-400 rounded-xl px-4 py-1 bg-neutral-100 w-full"
      >
        {authUser[name] || '-'}
      </p>
    </div>
  );
}
