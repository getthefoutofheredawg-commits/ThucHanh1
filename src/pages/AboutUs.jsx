export default function AboutUs() {
  return (
    <div>
      <section className="card">
        <span className="badge">Về chúng tôi (/about-us)</span>
        <h1 className="section-title">Giới thiệu về SmartStay</h1>
        <p style={{ marginBottom: '12px' }}>
          SmartStay được xây dựng nhằm số hóa quy trình tìm kiếm phòng trọ, căn hộ dịch vụ và quản lý
          hợp đồng thuê nhà. Hệ thống kết nối người thuê với chủ nhà uy tín một cách nhanh chóng và an toàn.
        </p>
        <p>
          Trang này được điều hướng thông qua <strong>React Router</strong>, hỗ trợ chuyển trang mượt mà
          khi bấm menu hoặc truy cập trực tiếp đường dẫn <code>/about-us</code>.
        </p>
      </section>

      <div className="grid">
        <article className="card">
          <h3>Sứ mệnh</h3>
          <p>Mang lại trải nghiệm tìm phòng minh bạch, không chi phí ẩn cho cộng đồng sinh viên và người đi làm.</p>
        </article>
        <article className="card">
          <h3>Công nghệ</h3>
          <p>Giao diện SPA xây dựng bằng ReactJS, Vite, CSS thuần và React Router.</p>
        </article>
        <article className="card">
          <h3>Cam kết</h3>
          <p>Hỗ trợ khách thuê 24/7 và đảm bảo thông tin phòng trọ luôn chính xác.</p>
        </article>
      </div>
    </div>
  );
}
