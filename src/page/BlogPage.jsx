import Footer from "../layout/Footer";

export default function Blog() {
  return (
    <div className="bg-slate-950">
      <div className="card card-side bg-base-100 shadow-xl my-7 mt-10 mx-3">
        <figure>
          <img src="/src/assets/Keycap-Double-Shot2_3.webp" alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            ทำความรู้จัก Keycap Double-Shot injection คืออะไร?
            ทำไมถึงเป็นที่นิยมของคนเล่น Mechanical Keyboard
          </h2>
          <p>
            กระบวนการผลิตของอุปกรณ์อิเล็กทรอนิกส์นั้นมีผลต่อการตัดสินใจเลือกซื้อของผู้บริโภค
            ดังนั้น Keychron
            จึงใส่ใจกับทุกกระบวนการการผลิตของชิ้นส่วนทุกชิ้นที่เราเลือกนำมาใช้ใน
            Mechanical keyboard ของเรา
            โดยในวันนี้เราจะขอแนะนำกระบวนการขึ้นรูปสำหรับ keycaps ที่เรียกว่า
            Double-shot injection ที่เราเลือกใช้ผลิต keycaps OSA
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>

      <div className="card card-side bg-base-100 shadow-xl my-7 mx-3">
        <figure className="ml-5">
          <img src="/src/assets/Swited.png" alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">สีสวิตช์คีย์บอร์ดแต่ละสีต่างกันอย่างไร</h2>
          <p>
            บทความนี้จะพาทุกท่านไปทำความเข้าใจว่า Keyboard Switch
            แต่ละตัวนั้นมีความแตกต่างกันอย่างไร
            และสวิตช์แบบไหนเหมาะกับการใช้งานแบบใด สำหรับ Keychron Thailand
            นั้นเราเลือกนำเข้า Gateron switch เฉพาะรุ่นที่เป็นที่นิยมทั้งหมด 3
            สี ได้แก่ Red switch, Brown switch, และ Blue switch
            หากท่านใดสนใจสามารถเข้าไปดูสินค้าได้ที่หน้านี้ครับ
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
