export default function HomeCard() {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img src="/src/assets/keychronq1pro.webp" alt="Keyboard" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Keychron Q1 Pro</h2>
        <p>
          พบกับ Keychron Q1 Pro คัสต้อมแมคคานิคอลคีย์บอร์ดไร้สายที่รองรับ //
          QMK/VIA ในบอดี้อะลูมิเนียมทั้งชิ้น นวัตกรรมสุดล้ำจาก Keychron //
          มาพร้อมกับดีไซน์ระดับพรีเมียม
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
    // <div className="card w-96 bg-base-100 shadow-xl">
    //   <figure className="px-10 pt-10">
    //     <img src="/src/assets/keychronq1pro.webp" alt="Keyboard" />
    //   </figure>
    //   <div className="card-body items-center text-center">
    //     <h2 className="card-title">Keychron Q1 Pro</h2>
    //     <p>
    //       พบกับ Keychron Q1 Pro คัสต้อมแมคคานิคอลคีย์บอร์ดไร้สายที่รองรับ
    //       QMK/VIA ในบอดี้อะลูมิเนียมทั้งชิ้น นวัตกรรมสุดล้ำจาก Keychron
    //       มาพร้อมกับดีไซน์ระดับพรีเมียม
    //     </p>
    //     <div className="card-actions">
    //       <button className="btn btn-primary">Buy Now</button>
    //     </div>
    //   </div>
    // </div>
  );
}
