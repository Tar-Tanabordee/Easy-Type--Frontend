import UserInfo from './UserInfo';

export default function ProfileForm() {
  return (
    <form className="flex flex-1 flex-col gap-4 w-96 px-10 border-r-2">
      <h1 className="text-2xl">Personal details</h1>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <UserInfo style="flex-1" name="firstName" inputTitle="First Name" />
          <UserInfo style="flex-1" name="lastName" inputTitle="Last Name" />
        </div>
        <UserInfo name="email" inputTitle="Email" />
        <UserInfo name="mobile" inputTitle="Mobile" />
      </div>
    </form>
  );
}
