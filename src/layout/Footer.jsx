import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKeyboard } from "@fortawesome/free-solid-svg-icons";
import { MdEmail } from "react-icons/md";

import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black flex justify-between text-white px-16 py-12">
      <div className="flex flex-col gap-2 w-64">
        <Link to="/" className="flex items-center gap-4 pb-2">
          <FontAwesomeIcon
            icon={faKeyboard}
            beat
            size="xl"
            style={{ color: "#ffffff" }}
          />

          <div className="text-3xl">Easy Type</div>
        </Link>
        <div className="flex gap-4 text-3xl pb-2">
          <FaTwitter />
          <FaInstagram />
          <FaFacebook />
          <FaLinkedinIn />
        </div>
        <hr />
        <div>ดูแล้วไม่ซื้อระวังตัวนะจ๊ะ</div>
      </div>
      <div className="text-lg ">
        <div className="pb-2">I AM DEVELOPER</div>
        {/* <Menu /> */}
        เข้าใจดีที่สุดว่าคนใช้คีย์บอร์ดต้องการอะไร
        <br />
        ด้วยประสบการณ์ของผู้ใช้งานจริง
        <br />
        ตัวเลือกที่ดีสุดสำหรับคุณ ในราคาที่จับต้องได้
      </div>
      <div>
        <div className="pb-2">CONTACT US</div>
        <div className="flex items-center gap-3 pb-2">
          <MdEmail className="text-4xl" />
          <div>
            Email
            <br />
            easytype@email.com
          </div>
        </div>
        <div className="flex items-center gap-3">
          <FaPhoneAlt className="text-4xl" />
          <div>
            Phone
            <br />
            055-5555555
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div>เวลาทำการ 10:00 - 19.00 น.</div>
        </div>
      </div>
    </footer>
  );
}
