import { ReactNode } from 'react';

type CategoryType = 'AI・DX' | '経営戦略';

type Speaker = {
  name: string;
  icon: string;
  affiliation: string;
};

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
  {
    id: 1,
    name: '次世代AI活用セミナー：ビジネスを加速させる実践ガイド',
    dateTime: new Date('2026-04-20T14:00:00'),
    thumbnail: 'thumbnail_noimage.webp',
    location: 'オンライン（Zoom）',
    description:
      '最新のAI技術をどのように業務に組み込むか、具体的な成功事例を交えてプロが徹底解説します。',
    fee: 3000,
    speakers: [
      { name: '山田 太郎', affiliation: 'AIソリューション部長', icon: '' },
      { name: '山田 太郎', affiliation: 'AIソリューション部長', icon: '' },
    ],
    categories: ['AI・DX', '経営戦略'],
    applicationLink: '',
    details:
      '本セミナーでは、単なるツールの紹介に留まらず、導入時の組織課題やコスト対効果の算出方法まで、現場目線のノウハウを公開いたします。質疑応答の時間も設けておりますので、お気軽にご参加ください。',
  },
  {
    id: 2,
    name: '開催終了のセミナー',
    dateTime: new Date('2026-02-20T14:00:00'),
    thumbnail: 'thumbnail_noimage.webp',
    location: 'オンライン（Zoom）',
    description:
      '最新のAI技術をどのように業務に組み込むか、具体的な成功事例を交えてプロが徹底解説します。',
    fee: 3000,
    speakers: [
      { name: '山田 太郎', affiliation: 'AIソリューション部長', icon: '' },
    ],
    categories: ['経営戦略'],
    applicationLink: '',
    details:
      '本セミナーでは、単なるツールの紹介に留まらず、導入時の組織課題やコスト対効果の算出方法まで、現場目線のノウハウを公開いたします。質疑応答の時間も設けておりますので、お気軽にご参加ください。',
  },
  {
    id: 3,
    name: '受付中のセミナー',
    dateTime: new Date('2026-06-20T14:00:00'),
    thumbnail: 'thumbnail_noimage.webp',
    location: 'オンライン（Zoom）',
    description:
      '最新のAI技術をどのように業務に組み込むか、具体的な成功事例を交えてプロが徹底解説します。',
    fee: 3000,
    speakers: [
      { name: '山田 太郎', affiliation: 'AIソリューション部長', icon: '' },
    ],
    categories: ['経営戦略'],
    applicationLink: '',
    details:
      '本セミナーでは、単なるツールの紹介に留まらず、導入時の組織課題やコスト対効果の算出方法まで、現場目線のノウハウを公開いたします。質疑応答の時間も設けておりますので、お気軽にご参加ください。',
  },
];
