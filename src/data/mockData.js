export const COURTS = [
  {
    id: 1,
    name: "Sân Cầu Lông Đào Duy Anh",
    location: "21 Đào Duy Anh, Phú Nhuận, HCM",
    distance: "1.2 km",
    rating: 4.8,
    price: "85k - 120k",
    image: "/images/court1.jpg",
    tags: ["Cao cấp", "Sân thảm", "Căng tin"],
    lat: 10.8009,
    lng: 106.6781
  },
  {
    id: 2,
    name: "Sân Cầu Lông Hiển Hoa",
    location: "262/3 Trần Não, Quận 2, HCM",
    distance: "5.5 km",
    rating: 4.5,
    price: "70k - 100k",
    image: "/images/court2.jpg",
    tags: ["Thoáng mát", "Số lượng sân lớn"],
    lat: 10.7928,
    lng: 106.7214
  },
  {
    id: 3,
    name: "Sân Cầu Lông Kỳ Hòa",
    location: "12 Đường 3/2, Quận 10, HCM",
    distance: "2.8 km",
    rating: 4.9,
    price: "110k - 160k",
    image: "/images/court3.jpg",
    tags: ["Trung tâm", "Thi đấu chuẩn"],
    lat: 10.7761,
    lng: 106.6713
  },
  {
    id: 4,
    name: "Sân Cầu Lông T793",
    location: "793 Trần Xuân Soạn, Quận 7, HCM",
    distance: "4.1 km",
    rating: 4.3,
    price: "80k - 110k",
    image: "/images/court2.jpg",
    tags: ["Giá rẻ", "Sân thảm"],
    lat: 10.7381,
    lng: 106.7022
  },
  {
    id: 5,
    name: "Sân Cầu Lông Thanh Đa",
    location: "353/7A Bình Quới, Bình Thạnh, HCM",
    distance: "3.5 km",
    rating: 4.6,
    price: "85k - 130k",
    image: "/images/court1.jpg",
    tags: ["Mới khai trương", "Dịch vụ tốt"],
    lat: 10.8143,
    lng: 106.6976
  },
  {
    id: 6,
    name: "Sân Cầu Lông Tao Đàn",
    location: "1 Huyền Trân Công Chúa, Quận 1, HCM",
    distance: "0.5 km",
    rating: 4.7,
    price: "120k - 180k",
    image: "/images/court6.jpg",
    tags: ["Sân chuẩn", "Trung tâm Q1"],
    lat: 10.7758,
    lng: 106.6923
  },
  {
    id: 7,
    name: "Sân Cầu Lông Bộ Công An",
    location: "215 Nguyễn Văn Cừ, Quận 1, HCM",
    distance: "1.5 km",
    rating: 4.4,
    price: "90k - 140k",
    image: "/images/court7.jpg",
    tags: ["An ninh", "Rộng rãi"],
    lat: 10.7634,
    lng: 106.6826
  }
];

export const MATCHES = [
  {
    id: 1,
    courtId: 1,
    title: "Giao lưu gắt - Đào Duy Anh",
    level: "Khá",
    time: "18:00 - 20:00",
    date: "Hôm nay",
    slots: "2/4",
    organizer: "Minh Tuấn",
    price: "50k/người"
  },
  {
    id: 2,
    courtId: 2,
    title: "Cầu lông vui vẻ - Quận 2",
    level: "Mọi trình độ",
    time: "19:00 - 21:00",
    date: "Hôm nay",
    slots: "3/4",
    organizer: "Lan Anh",
    price: "40k/người"
  },
  {
    id: 3,
    courtId: 3,
    title: "Kèo phủi sáng sớm - Kỳ Hòa",
    level: "Trung bình",
    time: "06:00 - 08:00",
    date: "Ngày mai",
    slots: "1/4",
    organizer: "Bảo Ngọc",
    price: "40k/người"
  },
  {
    id: 4,
    courtId: 4,
    title: "Kèo Pro Quận 7 - T793",
    level: "Khá - Giỏi",
    time: "20:00 - 22:00",
    date: "Hôm nay",
    slots: "2/4",
    organizer: "Hoàng Long",
    price: "60k/người"
  },
  {
    id: 5,
    courtId: 5,
    title: "Sáng cuối tuần - Thanh Đa",
    level: "Trung bình",
    time: "08:00 - 10:00",
    date: "Ngày mai",
    slots: "3/4",
    organizer: "Khánh Huyền",
    price: "45k/người"
  },
  {
    id: 6,
    courtId: 6,
    title: "Kèo trung tâm Q1 - Tao Đàn",
    level: "Khá",
    time: "17:00 - 19:00",
    date: "Thứ 2",
    slots: "2/4",
    organizer: "Thành Nam",
    price: "60k/người"
  },
  {
    id: 7,
    courtId: 7,
    title: "Giao lưu Bộ Công An",
    level: "Trung bình +",
    time: "19:00 - 21:00",
    date: "Hôm nay",
    slots: "1/4",
    organizer: "Quốc Anh",
    price: "50k/người"
  },
  {
    id: 8,
    courtId: 1,
    title: "Kèo đêm Đào Duy Anh",
    level: "Khá",
    time: "21:00 - 23:00",
    date: "Hôm nay",
    slots: "2/4",
    organizer: "Văn Hùng",
    price: "45k/người"
  }
];

export const USER_STATS = {
  name: "Nguyễn Văn A",
  level: "Trung bình",
  xp: 750,
  maxXp: 1000,
  rank: 125,
  wins: 48,
  matches: 72,
  wallet: "450.000đ",
  style: "Toàn diện",
  gear: "Yonex Arcsaber 11 Play",
  avatar: "https://ui-avatars.com/api/?name=Me&background=c3ff00&color=000",
  bio: "Đam mê chinh phục mọi đỉnh cao cầu lông!"
};

export const TRANSACTIONS = [
  { id: 1, title: "Nạp tiền ví nhóm", amount: "+500.000đ", date: "Hôm qua", type: "deposit" },
  { id: 2, title: "Thanh toán sân Đào Duy Anh", amount: "-240.000đ", date: "Hôm qua", type: "payment" },
  { id: 3, title: "Thanh toán sân Kỳ Hòa", amount: "-180.000đ", date: "15/04/2026", type: "payment" }
];

export const MATCH_HISTORY = [
  { id: 1, opponent: "Lê Minh", result: "THẮNG", score: "21-18, 21-15", date: "Hôm qua", location: "Sân Đào Duy Anh" },
  { id: 2, opponent: "Trần Hùng", result: "THUA", score: "19-21, 21-17, 18-21", date: "15/04/2026", location: "Sân Kỳ Hòa" },
  { id: 3, opponent: "Phạm Tuyết", result: "THẮNG", score: "21-10, 21-12", date: "12/04/2026", location: "Sân Hiển Hoa" },
  { id: 4, opponent: "Hoàng Nam", result: "THẮNG", score: "21-15, 21-12", date: "10/04/2026", location: "Sân T793" },
  { id: 5, opponent: "Bảo Ngọc", result: "THUA", score: "22-24, 19-21", date: "08/04/2026", location: "Sân Tao Đàn" },
  { id: 6, opponent: "Quốc Anh", result: "THẮNG", score: "21-9, 21-14", date: "05/04/2026", location: "Sân Hiển Hoa" },
  { id: 7, opponent: "Thanh Trúc", result: "THẮNG", score: "21-18, 17-21, 21-19", date: "01/04/2026", location: "Sân Thanh Đa" }
];

export const ACHIEVEMENTS = [
  { id: 1, title: "Sát thủ sân cỏ", desc: "Thắng 10 trận liên tiếp", icon: "⚔️", unlocked: true },
  { id: 2, title: "Kẻ thách thức", desc: "Đấu với 5 đối thủ Chuyên nghiệp", icon: "🔥", unlocked: true },
  { id: 3, title: "Đại gia sân bãi", desc: "Đặt sân hơn 50 lần", icon: "💰", unlocked: false },
  { id: 4, title: "Người kết nối", desc: "Tham gia 20 nhóm giao lưu", icon: "🤝", unlocked: true },
  { id: 5, title: "Legend", desc: "Đạt cấp độ 50", icon: "👑", unlocked: false }
];

export const PLAYERS = [
  {
    id: 1,
    name: "Hùng Cầu",
    level: "Chuyên nghiệp",
    xp: 920,
    maxXp: 1000,
    rank: 42,
    matches: 156,
    winRate: "78%",
    avatar: "https://ui-avatars.com/api/?name=HC&background=random&color=white",
    style: "Tấn công",
    gear: "Yonex Astrox 88D Pro",
    bio: "Sân nào cũng cân, chỉ cần có kèo!",
    unlockedAchievements: [1, 2, 4],
    recentHistory: [
      { id: 1, opponent: "Bạn", result: "THẮNG", score: "21-15, 21-18", date: "Đầu tuần", location: "Sân Đào Duy Anh" },
      { id: 2, opponent: "Minh Anh", result: "THẮNG", score: "21-12, 21-10", date: "3 ngày trước", location: "Sân Kỳ Hòa" }
    ]
  },
  {
    id: 2,
    name: "Minh Anh",
    level: "Trung bình",
    xp: 450,
    maxXp: 1000,
    rank: 215,
    matches: 89,
    winRate: "62%",
    avatar: "https://ui-avatars.com/api/?name=MA&background=random&color=white",
    style: "Phòng thủ",
    gear: "Victor Thruster K",
    bio: "Giao lưu vui vẻ, rèn luyện sức khỏe.",
    unlockedAchievements: [4],
    recentHistory: [
      { id: 1, opponent: "Hùng Cầu", result: "THUA", score: "12-21, 10-21", date: "3 ngày trước", location: "Sân Kỳ Hòa" },
      { id: 2, opponent: "Tuyết Nhi", result: "THẮNG", score: "21-19, 21-17", date: "Tuần trước", location: "Sân Tao Đàn" }
    ]
  },
  {
    id: 3,
    name: "Tuyết Nhi",
    level: "Khá",
    xp: 780,
    maxXp: 1000,
    rank: 108,
    matches: 124,
    winRate: "71%",
    avatar: "https://ui-avatars.com/api/?name=TN&background=random&color=white",
    style: "Toàn diện",
    gear: "Lining Tectonic 7",
    bio: "Cầu lông là đam mê, bún đậu là lẽ sống.",
    unlockedAchievements: [1, 4],
    recentHistory: [
      { id: 1, opponent: "Minh Anh", result: "LOSS", score: "19-21, 17-21", date: "Tuần trước", location: "Sân Tao Đàn" },
      { id: 2, opponent: "Bạn", result: "WIN", score: "21-11, 21-14", date: "10 ngày trước", location: "Sân Phú Thọ" }
    ]
  }
];
