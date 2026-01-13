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
    icon: 'image_achievementList_bronze',
  },
  {
    id: 'exam_jr_entry',
    name: 'ジュニアプログラミング検定',
    grade: 'エントリー級',
    icon: 'image_achievementList_entry',
  },
];

export const achievementMembers: AchievementMember[] = [
  {
    id: '1',
    src: 'image_achievementList1.webp',
    date: '2025年5月',
    examinationId: 'exam_jr_bronze',
    member: '御油小学校 5年生',
  },
  {
    id: '2',
    src: 'image_achievementList2.webp',
    date: '2025年5月',
    examinationId: 'exam_jr_entry',
    member: '前芝小学校 6年生',
  },
  {
    id: '3',
    src: 'image_achievementList3.webp',
    date: '2025年12月',
    examinationId: 'exam_jr_bronze',
    member: '御津南部小学校 5年生',
  },
  {
    id: '4',
    src: 'image_achievementList4.webp',
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
    src: 'image_achievementList6.webp',
    date: '2025年12月',
    examinationId: 'exam_jr_bronze',
    member: '御油小学校 5年生',
  },
  {
    id: '7',
    src: 'image_achievementList7.webp',
    date: '2025年12月',
    examinationId: 'exam_jr_entry',
    member: '小坂井西小学校 2年生',
  },
];
