import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url('/src/assets/best-keyboard-for-typing3-medium.jpg')`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">EasyType</h1>
          <p className="mb-5">
            พร้อมให้บริการแล้ววันนี้คีย์บอร์ดที่ถูกออกแบบมาเพื่อทำให้การพิมพ์เป็นเรื่องง่ายและสะดวกสบายมากขึ้น
            ด้วยการใช้เทคโนโลยีล่าสุดที่ช่วยให้ผู้ใช้สามารถพิมพ์ได้เร็วและแม่นยำมากขึ้น
            ไม่ว่าจะใช้เพื่องานทางธุรกิจหรือส่วนตัวก็สามารถตอบโจทย์ได้อย่างมีประสิทธิภาพ..
          </p>
          <button className="btn btn-neutral">
            <Link to="/accessories">Get Started</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
