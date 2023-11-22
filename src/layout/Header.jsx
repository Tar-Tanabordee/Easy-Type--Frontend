import Dropdown from "./Dropdown";

export default function Header() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Dropdown />
      </div>
    </div>
  );
}
