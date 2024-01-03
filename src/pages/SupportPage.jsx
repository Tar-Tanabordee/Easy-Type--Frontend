export default function TermsOfService() {
  return (
    <div className="mx-16 my-16 ">
      <div className="flex flex-col justify-center items-start px-56 mb-6">
        <h1 className="text-5xl mb-4">Terms of Service</h1>
        <h2 className="text-2xl mb-4">
          ท่านสามารถสั่งซื้อสินค้าจากร้านค้าในไทย
          <br />
          ที่ได้รับการแต่งตั้งอย่างถูกต้องได้ตามรายชื่อด้านล่างนี้
        </h2>
        <p className="text-neutral-500 text-center">
          สินค้าศูนย์ไทย คีย์บอร์ดรับประกันนาน 1 ปี ส่งเคลมง่ายในไทย
        </p>
        <p className="text-neutral-500 text-center">
          ตลอดอายุการรับประกัน เจ้าหน้าที่คนไทย ติดต่อสอบถามง่ายแค่ทักแชท
        </p>
        <p className="text-neutral-500 text-center">
          Facebook, LINE สินค้าลิขสิทธิ์แท้ทุกรายการ
        </p>
        <p className="text-neutral-500 text-center">
          สินค้าทุกรายการมีการนำเข้าและเสียภาษีอย่างถูกต้องตามกฏหมาย
        </p>
        <p className="text-neutral-500 text-center">
          สินค้าทุกรายการสามารถออกใบกำกับภาษีได้
        </p>
        <table className="table-auto mx-auto mt-8 justify-center items-center border-collapse border border-neutral-200">
          <thead>
            <tr>
              <th className="border border-neutral-200 px-4 py-2">รายการ</th>
              <th className="border border-neutral-200 px-4 py-2">
                รายละเอียด
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-neutral-200 px-4 py-2">รับประกัน</td>
              <td className="border border-neutral-200 px-4 py-2">1 ปี</td>
            </tr>
            <tr>
              <td className="border border-neutral-200 px-4 py-2">ส่งเคลม</td>
              <td className="border border-neutral-200 px-4 py-2">ง่ายในไทย</td>
            </tr>
            <tr>
              <td className="border border-neutral-200 px-4 py-2">ติดต่อ</td>
              <td className="border border-neutral-200 px-4 py-2">
                สอบถามผ่าน Facebook, LINE
              </td>
            </tr>
            {/* เพิ่มรายการตามความต้องการ */}
          </tbody>
        </table>
        <hr className="my-8 w-11/12 border-t-2 border-neutral-300" />
      </div>
    </div>
  );
}
