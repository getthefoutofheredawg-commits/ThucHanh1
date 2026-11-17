import { useState } from 'react';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="card">
      <h1 className="section-title">Liên hệ tư vấn thuê phòng</h1>
      {sent ? (
        <p style={{ color: '#0f766e', fontWeight: 600 }}>
          Cảm ơn bạn đã liên hệ! Đội ngũ SmartStay sẽ phản hồi sớm nhất.
        </p>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Họ và tên
            <input type="text" required placeholder="Nguyễn Văn A" />
          </label>
          <label>
            Email
            <input type="email" required placeholder="email@example.com" />
          </label>
          <label>
            Nội dung cần hỗ trợ
            <textarea rows="4" required placeholder="Tôi muốn xem phòng tại Bình Thạnh..." />
          </label>
          <button type="submit" className="btn btn-primary">
            Gửi liên hệ
          </button>
        </form>
      )}
    </section>
  );
}
