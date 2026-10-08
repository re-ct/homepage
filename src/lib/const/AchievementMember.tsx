export type Examination = {
  id: string;
  name: string;
  grade: string;
  icon: string;
};

export type AchievementMember = {
  id: string | number;
  src?: string;
  examinationId: string;
  date: string;
  member: string;
};

export const examinations: Examination[] = [
  {
    id: 'exam_jr_bronze',
    name: 'ジュニアプログラミング検定',
    grade: 'ブロンズ級',
    icon: 'image_achievement_list_bronze',
  },
  {
    id: 'exam_jr_entry',
    name: 'ジュニアプログラミング検定',
    grade: 'エントリー級',
    icon: 'image_achievement_list_entry',
  },
  {
    id: 'exam_jr_silver',
    name: 'ジュニアプログラミング検定',
    grade: 'シルバー級',
    icon: 'image_achievement_list_silver',
  },
];

export const achievementMembers: AchievementMember[] = [
  {
    id: '1',
    src: 'image_achievement_list1.webp',
    date: '2025年5月',
    examinationId: 'exam_jr_bronze',
    member: '御油小学校 5年生',
  },
  {
    id: '2',
    src: 'image_achievement_list2.webp',
    date: '2025年5月',
    examinationId: 'exam_jr_entry',
    member: '前芝小学校 6年生',
  },
  {
    id: '3',
    src: 'image_achievement_list3.webp',
    date: '2025年12月',
    examinationId: 'exam_jr_bronze',
    member: '御津南部小学校 5年生',
  },
  {
    id: '4',
    src: 'image_achievement_list4.webp',
    date: '2025年12月',
    examinationId: 'exam_jr_bronze',
    member: '御津南部小学校 5年生',
  },
  {
    id: '5',
    date: '2025年12月',
    examinationId: 'exam_jr_bronze',
    member: '御津南部小学校 4年生',
  },
  {
    id: '6',
    src: 'image_achievement_list6.webp',
    date: '2025年12月',
    examinationId: 'exam_jr_bronze',
    member: '御油小学校 5年生',
  },
  {
    id: '7',
    src: 'image_achievement_list7.webp',
    date: '2025年12月',
    examinationId: 'exam_jr_entry',
    member: '小坂井西小学校 2年生',
  },
  {
    id: '8',
    date: '2026年9月',
    examinationId: 'exam_jr_silver',
    member: '御津南部小学校 5年生',
  },
  {
    id: '9',
    date: '2026年9月',
    examinationId: 'exam_jr_bronze',
    member: '八南小学校 6年生',
  },
  {
    id: '10',
    date: '2026年9月',
    examinationId: 'exam_jr_entry',
    member: '御津南部小学校 3年生',
  },
  {
    id: '11',
    date: '2026年9月',
    examinationId: 'exam_jr_entry',
    member: '桜町小学校 4年生',
  },
  {
    id: '12',
    src: 'image_achievement_list12.webp',
    date: '2026年9月',
    examinationId: 'exam_jr_silver',
    member: '御津南部小学校 6年生',
  },
  {
    id: '13',
    src: 'image_achievement_list13.webp',
    date: '2026年9月',
    examinationId: 'exam_jr_silver',
    member: '御油小学校 6年生',
  },
  {
    id: '14',
    src: 'image_achievement_list14.webp',
    date: '2026年9月',
    examinationId: 'exam_jr_silver',
    member: '御津南部小学校 6年生',
  },
  {
    id: '15',
    src: 'image_achievement_list15.webp',
    date: '2026年9月',
    examinationId: 'exam_jr_bronze',
    member: '御油小学校 6年生',
  },
  {
    id: '16',
    src: 'image_achievement_list16.webp',
    date: '2026年9月',
    examinationId: 'exam_jr_entry',
    member: '大塚小学校 3年生',
  },
];
