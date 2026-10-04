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
  HOTLINE: "0988.888.888",
  ZALO_URL: "https://zalo.me/0988888888",
  TELEGRAM_URL: "https://t.me/admin_yourshop",
  FACEBOOK_URL: "https://facebook.com/yourshop",

  // 3. TÀI KHOẢN ADMIN CAO NHẤT
  ROOT_ADMIN_EMAIL: "khotaikhoanso.net@gmail.com",
  ADMIN_PIN: "888888",

  // 4. THÔNG TIN NGÂN HÀNG NHẬN TIỀN (VIETQR)
  BANK_CODE: "MB", // MB, VCB, TCB, ACB, TPB, VPB, BIDV, MOMO...
  BANK_NAME_DISPLAY: "Ngân Hàng Quân Đội (MBBank)",
  BANK_ACCOUNT_NUMBER: "0123456789",
  BANK_ACCOUNT_NAME: "NGUYEN VAN A",
  ORDER_PREFIX: "DH",

  // 5. CỔNG SEPAY TỰ ĐỘNG
  SEPAY_API_KEY: "spsk_live_YOUR_SEPAY_API_KEY",

  // 6. BACKEND API CLOUDFLARE WORKER & GOOGLE APPS SCRIPT
  WORKER_API_URL: "https://mmo-shop-api.muabantaikhoanmmo.workers.dev",
  GAS_BACKEND_URL: "https://script.google.com/macros/s/AKfycbzASJMRx8Z_E5soTvWS0MglpY_yyDjaQtUvXla1JtHKJmtnUARnqo4G6CM2q07Mn_dw/exec"
};
