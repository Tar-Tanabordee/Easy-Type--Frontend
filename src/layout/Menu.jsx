import MenuItem from "./MenuItem";

export default function Menu() {
  const menuLists = [
    { id: 1, to: "/store", text: "Store" },
    { id: 2, to: "/about", text: "About Us" },
    { id: 3, to: "/support", text: "Team Service" },
    { id: 4, to: "/contact", text: "Contact" },
  ];

  return (
    <>
      {menuLists.map((el) => (
        <MenuItem key={el.id} to={el.to} text={el.text} />
      ))}
    </>
  );
}
