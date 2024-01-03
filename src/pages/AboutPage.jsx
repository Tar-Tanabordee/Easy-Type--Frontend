import laptopImage from "../assets/laptop.jpg";
export default function AboutPage() {
  return (
    <div>
      <div className="mx-5 ">
        <div className=" flex flex-col justify-center items-center h-[500px] gap-2 z-10">
          <h1 className="text-center text-6xl m-4 z-30">ABOUT US</h1>
          <p className="text-xl text-center text-neutral-500">
            Easy Type ถูกก่อตั้งขึ้นในปี 2023
            โดยคุณต้าหนุ่มรูปงามที่หลงใหลในวงการคีย์บอร์ด
            <br />
            เป็นการรวมระหว่างfullstack developer นักธุรกิจ
            และผู้เชี่ยวชาญด้านการเล่นเกม
            <br />
            คุณต้าผู้นำทีมของเราได้สั่งสมประสบการณ์กว่า 15
            ปีในการดูรีวิวตามYoutube
            <br />
            และอีก10 ปีในการเดินกดตามงานCommart
            <br />
            ผมทุ่มเทค้นหาสุดยอดแมคคานิคอลคีย์บอร์ดภายใต้ดีไซน์สุดแกร่ง
            <br />
            จึงขอรับรองว่าคีย์บอร์ดจาก Easy Type จะไม่ทำให้คุณผิดหวังอย่างแน่นอน
            <br />
            <strong>ตกก็ไม่แตก แหกก็ไม่หัก</strong> ต้อง Easy Type เท่านั้น!!
            <br />
          </p>
        </div>
      </div>
      <div className="card lg:card-side bg-base-100 shadow-xl mb-6">
        <figure>
          <img src={laptopImage} alt="logo" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">COMPATIBLE WITH ALL DEVICES</h2>
          <p>
            สามารถใช้งานได้ร่วมกับหลากหลายระบบปฏิบัติการ ทั้ง macOS, Windows,
            iOS, Android และ Linux
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-neutral">รออะไรล่ะ กดเลย</button>
          </div>
        </div>
      </div>
    </div>
  );
}
