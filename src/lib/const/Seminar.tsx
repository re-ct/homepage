import { ReactNode } from 'react';

// 1. カテゴリ (Category)

type CategoryType = '事業概要' | 'hoge';

// 2. 登壇者 (Speaker)
type Speaker = {
  name: string;
  icon: string;
  affiliation: string;
};

// 3. セミナー・イベント (SeminarEvent)
type SeminarEvent = {
  id: number;
  name: string;
  dateTime: Date;
  thumbnail: string;
  location: string;
  description: string;
  fee: number;
  speakers: Speaker[];
  categories: CategoryType[];
  applicationLink: string;
  details: string | ReactNode;
};

export const SeminarData: SeminarEvent[] = [

];
