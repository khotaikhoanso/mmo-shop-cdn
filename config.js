/**
 * =========================================================================
 * BẢN THƯƠNG MẠI - TỆP CẤU HÌNH CLIENT (CONFIG.JS)
 * =========================================================================
 * Bạn có thể nhúng file này vào thẻ <head> trước bundle.js hoặc dán thẳng vào
 * giao diện Blogger để thay đổi toàn bộ thông tin shop một cách dễ dàng.
 * =========================================================================
 */

window.MMO_SHOP_CONFIG = {
  // 1. TÊN THƯƠNG HIỆU & KHẨU HIỆU
  SITE_NAME: "KHO TÀI KHOẢN SỐ",
  SITE_DOMAIN: "khotaikhoanso.net",
  SITE_LOGO_URL: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  SLOGAN: "Hệ thống mua bán tài khoản MMO tự động 24/7. Uy tín - Tốc độ - Bảo mật!",
  TICKER_TEXT: "Chào mừng quý khách đến với KHO TÀI KHOẢN SỐ! Nạp tiền tự động qua VietQR duyệt tức thì trong 3 giây.",

  // 2. LIÊN HỆ & CHĂM SÓC KHÁCH HÀNG
  HOTLINE: "0346508659",
  ZALO_URL: "https://zalo.me/0346508659",
  TELEGRAM_URL: "https://t.me/longnguyen1az",
  FACEBOOK_URL: "https://facebook.com/yourshop",

  // 3. TÀI KHOẢN ADMIN CAO NHẤT
  ROOT_ADMIN_EMAIL: "khotaikhoanso.net@gmail.com",
  ADMIN_PIN: "", // Bảo vệ trên Cloudflare Worker Secrets (Server-side PIN verification)

  // 4. THÔNG TIN NGÂN HÀNG NHẬN TIỀN (VIETQR)
  BANK_CODE: "ACB",
  BANK_NAME_DISPLAY: "Ngân hàng TMCP Á Châu (ACB)",
  BANK_ACCOUNT_NUMBER: "33011557",
  BANK_ACCOUNT_NAME: "NGUYEN THI KIM LONG",
  ORDER_PREFIX: "DH",

  // 5. CỔNG SEPAY TỰ ĐỘNG
  SEPAY_API_KEY: "", // Bảo vệ trên Cloudflare Worker Secrets (WEBHOOK_SECRET)

  // 6. BACKEND API CLOUDFLARE WORKER & GOOGLE APPS SCRIPT
  WORKER_API_URL: "https://mmo-shop-api.khotaikhoanso-net.workers.dev",
  SOURCE_PROXY_URL: "https://mmo-proxy.khotaikhoanso-net.workers.dev",
  GAS_BACKEND_URL: ""
};
