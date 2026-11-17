const SAMPLE_ROOMS = [
  {
    id: 1,
    title: 'Studio Ban Công Quận Bình Thạnh',
    area: '28 m²',
    address: '120 Nguyễn Gia Trí, Bình Thạnh',
    price: '4.800.000 đ/tháng'
  },
  {
    id: 2,
    title: 'Phòng Trọ Full Nội Thất Thủ Đức',
    area: '24 m²',
    address: '45 Võ Văn Ngân, TP. Thủ Đức',
    price: '3.600.000 đ/tháng'
  },
  {
    id: 3,
    title: 'Căn Hộ Mini Gần Quận 1',
    area: '32 m²',
    address: '88 Hoàng Sa, Quận 1',
    price: '6.200.000 đ/tháng'
  }
];

export default function Rooms() {
  return (
    <div>
      <h1 className="section-title">Danh sách phòng nổi bật</h1>
      <div className="grid">
        {SAMPLE_ROOMS.map((room) => (
          <article key={room.id} className="card">
            <span className="badge">{room.area}</span>
            <h3>{room.title}</h3>
            <p>{room.address}</p>
            <p className="price">{room.price}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
