// import { useState } from "react";
// import { Link } from "react-router-dom";
// import useAuth from "../hooks/use-auth";

// export default function DropDown() {
//   const { authUser, logout } = useAuth();

//   const [isOpen, setIsOpen] = useState(false);
//   const handleClick = () => setIsOpen(false);
//   return (
//     // <div className="relative z-50">
//     //   {/* <span
//     //     className="text-xl  text-neutral-500 cursor-pointer hover:text-black hover:md:drop-shadow-md"
//     //     onClick={() => setIsOpen(!isOpen)}
//     //   > */}
//     //     {/* {`Hi, ${authUser.firstName}`}
//     //   </span> */}
//     //   {isOpen && (
//     //     <div className="h-26 w-36 absolute bg-neutral-100 -right-8 translate-y-2 border rounded-md shadow-lg text-lg  text-neutral-500 cursor-pointer p-2">
//     //       {/* <Link to="/profile">
//     //         <div
//     //           className=" hover:bg-neutral-300 rounded-md px-2"
//     //           onClick={handleClick}
//     //         >
//     //           Profile
//     //         </div>
//     //       </Link> */}
//     //       {/* <Link to="/order">
//     //         <div
//     //           className=" hover:bg-neutral-300 rounded-md px-2"
//     //           onClick={handleClick}
//     //         >
//     //           Order status
//     //         </div>
//     //       </Link> */}
//     //       {/* <Link>
//     //         <div
//     //           className=" hover:bg-neutral-300 rounded-md px-2"
//     //           onClick={() => logout()}
//     //         >
//     //           Log out
//     //         </div>
//     //       </Link> */}
//     //     {/* </div>
//     //   )}
//     // </div> */}
//     <div className="dropdown dropdown-bottom dropdown-end">
//       <div
//         tabIndex={0}
//         role="button"
//         className="btn m-1"
//         onClick={() => setIsOpen(!isOpen)}
//       >{`Hi, ${authUser.firstName}`}</div>
//       {isOpen && (
//         <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
//           <li>
//             <a>
//               {" "}
//               <Link to="/profile">
//                 <div onClick={handleClick}>Profile</div>
//               </Link>
//             </a>
//           </li>
//           <li>
//             <a>
//               <Link to="/order">
//                 <div onClick={handleClick}>Order status</div>
//               </Link>
//             </a>
//           </li>
//           <li>
//             <a>
//               <Link>
//                 <div onClick={() => logout()}>Log out</div>
//               </Link>
//             </a>
//           </li>
//         </ul>
//       )}
//     </div>
//   );
// }
import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/use-auth";

export default function DropDown() {
  const { authUser, logout } = useAuth();

  const [isOpen, setIsOpen] = useState(false);

  const closeDropdown = () => setIsOpen(false);

  return (
    <div className="dropdown dropdown-hover">
      <div tabIndex={0} onClick={() => setIsOpen(!isOpen)}>
        <button className="btn btn-outline bg-base-100">
          {`Hi, ${authUser.firstName}`}
        </button>
      </div>

      {isOpen && (
        <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <Link to="/profile" onClick={closeDropdown}>
              Profile
            </Link>
          </li>
          <li>
            <Link to="/order" onClick={closeDropdown}>
              Order status
            </Link>
          </li>
          <li>
            <div onClick={() => logout()} role="button">
              Log out
            </div>
          </li>
        </ul>
      )}
    </div>
  );
}
