# AVA Implant Landing Page — Bàn giao công việc

## Đã hoàn thành
- Landing page tiếng Việt `index.html` (1 trang, đầy đủ section: hero, vấn đề/giải pháp, lợi ích, quy trình, đối tượng đặc biệt, bảng giá, so sánh implant/hàm tháo lắp, gallery, bác sĩ, FAQ, contact + form, footer).
- Bản tiếng Anh `en/index.html`, dịch bám nội dung tiếng Việt, tối ưu từ khóa cho Việt kiều/người nước ngoài (dental implants Ho Chi Minh City, dental implant cost Vietnam, dental implants for expats...).
- Toàn bộ nội dung, giá cả, thông tin liên hệ lấy trực tiếp từ benhvienthammy.com.vn (địa chỉ, hotline, Zalo, giấy phép, MST, bảng giá implant theo hãng).
- CSS riêng `assets/css/style.css`, JS riêng `assets/js/main.js`, ảnh riêng `assets/images/` — đúng yêu cầu tách thư mục để dễ upload Vercel.
- Tối ưu 40 ảnh từ file zip bạn upload: đổi tên chuẩn SEO (`trong-rang-implant-truoc-sau-ava-01.jpg`...), nén dung lượng (còn ~100-170KB/ảnh thay vì 1-5MB), xuất thêm bản `.webp` nhẹ hơn, có alt-text chứa từ khóa cho cả 2 ngôn ngữ. 12 ảnh đầu đã gắn vào gallery trên trang, 28 ảnh còn lại đã tối ưu sẵn trong `assets/images/gallery/`, có thể chèn thêm bất cứ lúc nào.
- Logo AVA đã xử lý thành nhiều size: header, favicon, apple-touch-icon, ảnh Open Graph.
- Responsive: đã test bố cục cho mobile, tablet, desktop qua CSS media query (breakpoint 980px và 640px). Nút liên hệ/gallery/bảng giá tự xếp lại theo màn hình nhỏ.
- Thanh liên hệ nhanh (floating sidebar) cố định bên phải: Hotline, Zalo, Messenger + nút lên đầu trang — hiển thị trên mọi trang, mọi kích thước màn hình.
- Schema JSON-LD: `Dentist` (địa chỉ, giờ mở cửa, toạ độ, mạng xã hội) + `FAQPage` (8 câu hỏi khớp từ khóa phụ) cho cả 2 ngôn ngữ — hỗ trợ rich snippet Google.
- Thẻ Open Graph + Twitter Card đầy đủ để hiển thị đẹp khi chia sẻ lên Facebook/Twitter/Zalo.
- `hreflang` liên kết 2 phiên bản VI/EN để Google hiểu đây là bản dịch của nhau, không bị coi là trùng nội dung.
- `robots.txt`, `sitemap.xml` (có khai báo hreflang), `vercel.json` (cache ảnh 1 năm, cleanUrls, vài header bảo mật cơ bản).

## Chưa hoàn thành / cần bạn xử lý tiếp
1. **Tên miền thật:** Toàn bộ canonical, hreflang, Open Graph, sitemap đang tạm để `https://trongrangimplant-ava.vercel.app/`. Sau khi có domain Vercel/domain riêng chính thức, cần tìm-thay chuỗi này trong `index.html`, `en/index.html`, `sitemap.xml`, `robots.txt`.
2. **Form đặt lịch chưa có backend:** Hiện chỉ là giao diện (front-end demo), bấm gửi sẽ hiện thông báo nhưng KHÔNG gửi được dữ liệu đi đâu cả. Cần nối với Formspree, Vercel Serverless Function, Google Sheet, hoặc CRM để nhận thông tin khách hàng thật.
3. **Google Search Console / xác minh:** Cần khai báo domain mới lên Google Search Console, nộp sitemap.xml, và gắn lại thẻ `meta-google-site-verification` nếu muốn dùng chung với site chính.
4. **Nội dung do bạn duyệt:** Số liệu bảng giá, số điện thoại, giờ làm việc lấy từ trang chính hiện tại — nên rà lại 1 lượt trước khi public phòng trường hợp đã thay đổi.
5. **28 ảnh gallery còn lại:** đã tối ưu sẵn trong thư mục nhưng chưa gắn vào HTML — có thể yêu cầu bổ sung thêm vào gallery hoặc làm trang "Hình ảnh" riêng nếu muốn dùng hết.
6. **avadental.com.vn:** trang chủ hiện tại đang có link sang avadental.com.vn (bản tiếng Anh cũ) — nên quyết định giữ song song hay thay thế bằng trang `/en/` mới này để tránh trùng lặp nội dung/SEO.
7. **Testimonials/đánh giá khách hàng:** chưa đưa vào vì không có dữ liệu thật (tránh tạo review giả) — nếu có review thật từ Google/Facebook có thể bổ sung thêm 1 section.
8. **Kiểm tra hiển thị thực tế:** trang đã kiểm tra cấu trúc HTML/CSS hợp lệ nhưng chưa chạy qua trình duyệt thật (môi trường hiện tại không có headless browser) — nên mở thử trên điện thoại/máy tính bảng thật sau khi deploy lên Vercel.

## Cấu trúc thư mục
```
build/
├─ index.html          (trang chính tiếng Việt)
├─ en/index.html        (bản tiếng Anh)
├─ assets/
│  ├─ css/style.css
│  ├─ js/main.js
│  └─ images/
│     ├─ logo/          (logo, favicon, apple-touch-icon, og-logo)
│     └─ gallery/        (40 ảnh trước-sau, .jpg + .webp)
├─ favicon.ico
├─ robots.txt
├─ sitemap.xml
├─ vercel.json
└─ HANDOFF.md            (chính là file này)
```

## Cách deploy lên Vercel
1. Giải nén file zip.
2. Vào vercel.com → New Project → import thư mục này (hoặc kéo thả qua Vercel CLI: `vercel --prod` trong thư mục `build/`).
3. Không cần build command — đây là static site thuần HTML/CSS/JS.
4. Sau khi có domain, cập nhật lại các chỗ nêu ở mục 1 phía trên.
