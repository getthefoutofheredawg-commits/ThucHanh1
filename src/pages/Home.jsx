import { Link } from 'react-router-dom';

const HIGHLIGHTS = [
  {
    title: 'Phòng trọ xác thực',
    desc: 'Hình ảnh, giá thuê và diện tích được kiểm duyệt minh bạch trước khi đăng tải.'
  },
  {
    title: 'Đặt lịch xem nhanh',
    desc: 'Liên hệ trực tiếp chủ nhà, hẹn giờ xem phòng thuận tiện ngay trên hệ thống.'
  },
  {
    title: 'Hợp đồng rõ ràng',
    desc: 'Theo dõi hóa đơn điện nước, thời hạn thuê và các thông báo hàng tháng.'
  }
];

export default function Home() {
  return (
    <div>
      <section className="hero">
        <span className="badge">Đề tài cuối môn: SmartStay Room Rental</span>
        <h1>Tìm phòng trọ &amp; căn hộ phù hợp chỉ trong vài phút</h1>
        <p>
          SmartStay giúp sinh viên và người đi làm tìm kiếm không gian sống an toàn, đầy đủ tiện nghi
          với mức giá minh bạch tại TP.HCM.
        </p>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Link to="/rooms" className="btn btn-light">
            Xem danh sách phòng
          </Link>
          <Link to="/about-us" className="btn btn-primary">
            Về chúng tôi
          </Link>
        </div>
      </section>

      <section>
        <h2 className="section-title">Vì sao chọn SmartStay?</h2>
        <div className="grid">
          {HIGHLIGHTS.map((item) => (
            <article key={item.title} className="card">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
