// import { useState } from "react";
// import useAuth from "../../hooks/use-auth";
// import InputForm from "../../components/InputForm";
// import Joi from "joi";
// import { useNavigate } from "react-router-dom";
// import Loading from "../../components/Loading";
// import ActionButton from "../../components/ActionButton";
// import { toast } from "react-toastify";

// export default function AdminLogin() {
//   const [admin, setAdmin] = useState({
//     email: "",
//     password: "",
//     role: "",
//   });
//   const [error, setError] = useState({});

//   const { adminLogin, validateError, stateLoading, setStateLoading } =
//     useAuth();

//   const navigate = useNavigate();

//   const adminLoginSchema = Joi.object({
//     email: Joi.string()
//       .email({ tlds: { allow: false } })
//       .required(),
//     password: Joi.string()
//       .pattern(/^[a-zA-Z0-9]{6,30}$/)
//       .trim()
//       .required(),
//     role: Joi.string()
//       .trim()
//       .pattern(/^[a-zA-Z0-9]{0,5}$/)
//       .required(),
//   });

//   const handleInput = (e) => {
//     setAdmin({ ...admin, [e.target.name]: e.target.value });
//   };

//   const handleAdminLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const error = validateError(adminLoginSchema, admin);
//       if (error) {
//         setError(error);
//         return toast.error(error);
//       }
//       if (admin.role !== "admin") {
//         setError({});
//         return toast.error("Access Denined");
//       }
//       setError({});
//       setStateLoading(true);
//       await adminLogin(admin);
//       toast.success("Admin login SUCCESS");
//       navigate("/");
//     } catch (err) {
//       toast.error("Access Denined");
//       console.log(err);
//     } finally {
//       setStateLoading(false);
//     }
//   };

//   return (
//     <>
//       {stateLoading ? (
//         <Loading />
//       ) : (
//         <div className=" h-screen flex justify-center items-center">
//           <form
//             className="w-80  flex flex-col gap-4 border border-gray-500 p-5 rounded-md"
//             onSubmit={handleAdminLogin}
//           >
//             <div className="text-center">Admin</div>
//             <InputForm
//               placeholder="email"
//               name="email"
//               value={admin.email}
//               onChange={handleInput}
//               error={error}
//               errorInput={error.email}
//               errorMessage={error.email}
//             />
//             <InputForm
//               placeholder="password"
//               type="password"
//               name="password"
//               value={admin.password}
//               onChange={handleInput}
//               errorInput={error.password}
//               errorMessage={error.password}
//             />
//             <InputForm
//               type="password"
//               placeholder="role"
//               name="role"
//               value={admin.role}
//               onChange={handleInput}
//               errorInput={error.role}
//               errorMessage={error.role}
//             />
//             <ActionButton title="LOGIN" />
//           </form>
//         </div>
//       )}
//     </>
//   );
// }
