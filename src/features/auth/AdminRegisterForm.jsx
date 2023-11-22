// import { useState } from "react";
// import InputForm from "../../components/InputForm";
// import useAuth from "../../hooks/use-auth";
// import Joi from "joi";
// import { useNavigate } from "react-router-dom";
// import Loading from "../../components/Loading";
// import { toast } from "react-toastify";

// export default function AdminRegisterForm() {
//   const [registerAdmin, setRegisterAdmin] = useState({
//     firstName: "",
//     lastName: "",
//     password: "",
//     confirmPassword: "",
//     email: "",
//     phone: "",
//     role: "",
//   });
//   const [error, setError] = useState({});

//   const { adminRegister, validateError, stateLoading, setStateLoading } =
//     useAuth();

//   const navigate = useNavigate();

//   const AdminRegisterSchema = Joi.object({
//     firstName: Joi.string().trim().required(),
//     lastName: Joi.string().trim().required(),
//     password: Joi.string()
//       .pattern(/^[a-zA-Z0-9]{6,30}$/)
//       .trim()
//       .required(),
//     confirmPassword: Joi.string().valid(Joi.ref("password")).trim().required(),
//     email: Joi.string()
//       .email({ tlds: { allow: false } })
//       .required(),
//     phone: Joi.string()
//       .pattern(/^[0-9]{10}$/)
//       .required(),
//     role: Joi.string()
//       .trim()
//       .pattern(/^[a-zA-Z0-9]{0,5}$/)
//       .required(),
//   });

//   const handleInput = (e) => {
//     setRegisterAdmin({ ...registerAdmin, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     try {
//       e.preventDefault();
//       const error = validateError(AdminRegisterSchema, registerAdmin);
//       if (error) {
//         return setError(error);
//       }
//       setError({});
//       setStateLoading(true);
//       await adminRegister(registerAdmin);
//       toast.success("Admin register SUCCESS");
//       navigate("/");
//     } catch (err) {
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
//         <div className="h-screen w-screen flex justify-center items-center">
//           <form
//             className="w-80 flex flex-col gap-3 p-4 justify-center border border-gray-500 rounded-md"
//             onSubmit={handleSubmit}
//           >
//             <h1 className="text-center">Admin Register</h1>
//             <InputForm
//               placeholder="firstname"
//               name="firstName"
//               value={registerAdmin.firstName}
//               onChange={handleInput}
//               errorInput={error.firstName}
//               errorMessage={error.firstName}
//             />
//             <InputForm
//               placeholder="lastname"
//               name="lastName"
//               value={registerAdmin.lastName}
//               onChange={handleInput}
//               errorInput={error.lastName}
//               errorMessage={error.lastName}
//             />

//             <InputForm
//               placeholder="email"
//               name="email"
//               value={registerAdmin.email}
//               onChange={handleInput}
//               errorInput={error.email}
//               errorMessage={error.email}
//             />
//             <InputForm
//               placeholder="phone"
//               name="phone"
//               value={registerAdmin.phone}
//               onChange={handleInput}
//               errorInput={error.phone}
//               errorMessage={error.phone}
//             />
//             <InputForm
//               type="password"
//               placeholder="password"
//               name="password"
//               value={registerAdmin.password}
//               onChange={handleInput}
//               errorInput={error.password}
//               errorMessage={error.password}
//             />
//             <InputForm
//               type="password"
//               placeholder="confirm password"
//               name="confirmPassword"
//               value={registerAdmin.confirmPassword}
//               onChange={handleInput}
//               errorInput={error.confirmPassword}
//               errorMessage={error.confirmPassword}
//             />
//             <InputForm
//               type="password"
//               placeholder="role"
//               name="role"
//               value={registerAdmin.role}
//               onChange={handleInput}
//               errorInput={error.role}
//               errorMessage={error.role}
//             />
//             <button className="bg-amber-900 hover:bg-amber-800 text-white p-2 rounded-sm outline-none">
//               REGISTER
//             </button>
//           </form>
//         </div>
//       )}
//     </>
//   );
// }
