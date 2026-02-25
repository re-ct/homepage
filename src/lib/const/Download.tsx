import { ReactNode } from 'react';

type CategoryType = '事業概要';

type Download = {
  id: number;
  slug: string;
  name: string;
  thumbnail: string;
  form: string;
  category: CategoryType;
  details: string | ReactNode;
};

export const Download: Download[] = [
  {
    id: 1,
    slug: 'download1',
    name: 'Re:ProS フランチャイズ加盟 説明資料',
    thumbnail: 'thumbnail_repros_fc_guide.webp',
    form: 'https://docs.google.com/forms/d/e/1FAIpQLSeKSi_nvIWPHFyoszwjmWGCLZRW01kfaWEUL60-zYeBt4lKew/viewform?embedded=true',
    category: '事業概要',
    details: (
      <>Re:ProSプログラミング教室のフランチャイズ加盟に関する詳細資料です。<br/><br/>事業の強みから、ビジネスモデルと収益性、本部のサポート体制までを収録。加盟から運営開始までの流れもステップごとに解説しています。<br/><br/>プログラミング教室事業への参入を検討されている方は、まずはこちらの資料をご覧ください。</>
      ),
  },
];

