export const COURTS = [
  {
    id: 1,
    name: "Sân Cầu Lông Đào Duy Anh",
    location: "Quận Phú Nhuận, HCM",
    distance: "1.2 km",
    rating: 4.8,
    price: "80k - 120k",
    image: "/images/court1.jpg",
    tags: ["Máy lạnh", "Gần trung tâm", "Sân thảm"],
    x: 25,
    y: 35
  },
  {
    id: 2,
    name: "Sân Cầu Lông Hiển Hoa",
    location: "Quận 9, HCM",
    distance: "5.5 km",
    rating: 4.5,
    price: "60k - 90k",
    image: "/images/court2.jpg",
    tags: ["Giá rẻ", "Thoáng mát", "Có bãi đỗ xe"],
    x: 65,
    y: 25
  },
  {
    id: 3,
    name: "Sân Cầu Lông Kỳ Hòa",
    location: "Quận 10, HCM",
    distance: "2.8 km",
    rating: 4.9,
    price: "100k - 150k",
    image: "/images/court3.jpg",
    tags: ["Sân chuẩn thi đấu", "Ánh sáng tốt"],
    x: 50,
    y: 55
  },
  {
    id: 4,
    name: "Sân Cầu Lông T793",
    location: "Trần Xuân Soạn, Quận 7",
    distance: "4.1 km",
    rating: 4.3,
    price: "70k - 110k",
    image: "/images/court2.jpg",
    tags: ["Giá rẻ", "Sân thảm"],
    x: 75,
    y: 70
  },
  {
    id: 5,
    name: "Sân Cầu Lông Đất Thành",
    location: "Phan Văn Trị, Bình Thạnh",
    distance: "3.5 km",
    rating: 4.6,
    price: "85k - 130k",
    image: "/images/court1.jpg",
    tags: ["Mới khai trương", "Dịch vụ tốt"],
    x: 40,
    y: 20
  },
  {
    id: 6,
    name: "Sân Cầu Lông Đại Học Thủ Đức",
    location: "Linh Trung, Thủ Đức",
    distance: "8.2 km",
    rating: 4.2,
    price: "50k - 80k",
    image: "/images/court6.jpg",
    tags: ["Sinh viên", "Giá rẻ"],
    x: 85,
    y: 15
  },
  {
    id: 7,
    name: "Sân Cầu Lông Lê Văn Tám",
    location: "Hai Bà Trưng, Quận 1",
    distance: "0.8 km",
    rating: 4.7,
    price: "120k - 180k",
    image: "/images/court7.jpg",
    tags: ["Đẳng cấp", "Sân thảm"],
    x: 48,
    y: 42
  }
];

export const MATCHES = [
  {
    id: 1,
    title: "Giao lưu vui vẻ - Sân Đào Duy Anh",
    level: "Intermediate",
    time: "19:00 - 21:00",
    date: "Hôm nay",
    slots: "3/4",
    organizer: "Hùng Cầu",
    price: "45k/người"
  },
  {
    id: 2,
    title: "Tìm đồng đội luyện tập - Hiển Hoa",
    level: "Beginner",
    time: "17:00 - 19:00",
    date: "Hôm nay",
    slots: "2/4",
    organizer: "Minh Anh",
    price: "35k/người"
  }
];

export const USER_STATS = {
  name: "Nguyễn Văn A",
  level: "Intermediate",
  xp: 750,
  maxXp: 1000,
  rank: 125,
  wins: 48,
  matches: 72,
  wallet: "450.000đ"
};

export const TRANSACTIONS = [
  { id: 1, title: "Nạp tiền ví nhóm", amount: "+200.000đ", date: "Hôm qua", type: "deposit" },
  { id: 2, title: "Thanh toán sân Đào Duy Anh", amount: "-45.000đ", date: "Hôm qua", type: "payment" },
  { id: 3, title: "Thanh toán sân Kỳ Hòa", amount: "-50.000đ", date: "15/04/2026", type: "payment" }
];

export const MATCH_HISTORY = [
  { id: 1, opponent: "Lê Minh", result: "WIN", score: "21-18, 21-15", date: "Hôm qua", location: "Sân Đào Duy Anh" },
  { id: 2, opponent: "Trần Hùng", result: "LOSS", score: "19-21, 21-17, 18-21", date: "15/04/2026", location: "Sân Kỳ Hòa" },
  { id: 3, opponent: "Phạm Tuyết", result: "WIN", score: "21-10, 21-12", date: "12/04/2026", location: "Sân Hiển Hoa" }
];

export const ACHIEVEMENTS = [
  { id: 1, title: "Sát thủ sân cỏ", desc: "Thắng 10 trận liên tiếp", icon: "⚔️", unlocked: true },
  { id: 2, title: "Kẻ thách thức", desc: "Đấu với 5 đối thủ Pro", icon: "🔥", unlocked: true },
  { id: 3, title: "Đại gia sân bãi", desc: "Đặt sân hơn 50 lần", icon: "💰", unlocked: false },
  { id: 4, title: "Người kết nối", desc: "Tham gia 20 nhóm giao lưu", icon: "🤝", unlocked: true },
  { id: 5, title: "Legend", desc: "Đạt cấp độ 50", icon: "👑", unlocked: false }
];
