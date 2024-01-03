import axios from "../config/axios";
// import Address from "../components/profile/Address";
import ProfileForm from "../components/profile/ProfileForm";
import { useEffect } from "react";
import useAuth from "../hooks/use-auth";
import AddressForm from "../components/profile/AddressForm";

export default function ProfilePage() {
  const { setAllAddress } = useAuth();

  useEffect(() => {
    axios.get("/profile/address").then((res) => {
      setAllAddress(res.data.addresses);
    });
  }, []);

  return (
    <div className="mx-16 my-12 px-40 min-h-[483px] ">
      <div className="flex justify-center items-start py-9 border rounded-xl shadow-lg">
        <ProfileForm />
        <AddressForm />
        {/* <Address /> */}
      </div>
    </div>
  );
}
