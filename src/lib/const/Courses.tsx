import { ReactNode } from 'react';

type Course = {
  id: number;
  slug: string;
  name: {
    category: string;
    level: string;
  };
  thumbnail: string;
  summary: string;
  details: string;
  note?: string;
  target: string;
  sessionCount: string;
  duration: string;
  price: {
    tuition: number; // 受講料(月)
    materials: number; // 教材費(月)
    admission: number; // 入会金
  };
  schedule: {
    dayOfWeeks: string[];
    times: string[];
  };
};

export const Courses: Course[] = [
  {
    id: 1,
    slug: 'scratch-beginner',
    name: {
      category: 'Scratch',
      level: '初級',
    },
    thumbnail: 'thumbnail_course_1.webp',
    summary:
      'マサチューセッツ工科大学で開発されたビジュアルプログラミング言語「Scratch」を用いてプログラミングの基礎概念を学びます。',
    details:
      '「Scratch」はマウス操作で行えるので、キーボード入力に慣れていなくても安心して学習することができます。',
    target: '小学2年生〜中学3年生',
    sessionCount: '週1回',
    duration: '1回60分',
    price: {
      tuition: 6500,
      materials: 500,
      admission: 10000,
    },
    schedule: {
      dayOfWeeks: ['月', '火', '水', '木', '金'],
      times: ['17:00〜18:00', '18:30〜19:30', '19:40〜20:40'],
    },
  },
  {
    id: 2,
    slug: 'software-intermediate',
    name: {
      category: 'ソフトウェア開発',
      level: '中級',
    },
    thumbnail: 'thumbnail_course_2.webp',
    summary:
      '実際の開発で使用されているテキストプログラミング言語「JavaScript」を用いて決められたテーマに沿ってWebサイト開発を行い、プログラミングを学びます。',
    details:
      '主に、キーボードを使用する本格的なプログラミングを行うコースです。',
    target: '中学1年生〜高校3年生',
    sessionCount: '週1回',
    duration: '1回60分',
    price: {
      tuition: 8500,
      materials: 500,
      admission: 10000,
    },
    schedule: {
      dayOfWeeks: ['月', '火', '水', '木', '金'],
      times: ['17:00〜18:00', '18:30〜19:30', '19:40〜20:40'],
    },
  },
  {
    id: 3,
    slug: 'roblox-intermediate',
    name: {
      category: 'Roblox ゲーム開発',
      level: '中級',
    },
    thumbnail: 'thumbnail_course_3.png',
    summary:
      '実際の開発で使用されているテキストプログラミング言語「Luau」を用いて、Roblox(ロブロックス)の世界でゲーム開発をしながらプログラミングを学びます。',
    details:
      '主に、キーボードを使用する本格的なプログラミングを行うコースです。',
    note: '※受講生はScratch 初級を受講完了したレベルを想定しています。(ジュニア・プログラミング検定のシルバー以上を取得可能なレベル)',
    target: '小学5年生〜高校3年生',
    sessionCount: '週1回',
    duration: '1回60分',
    price: {
      tuition: 8500,
      materials: 500,
      admission: 10000,
    },
    schedule: {
      dayOfWeeks: ['月', '火', '水', '木', '金'],
      times: ['17:00〜18:00', '18:30〜19:30', '19:40〜20:40'],
    },
  },
];
