type Download = {
  id: number;
  slug: string;
  name: string;
  thumbnail: string;
  summary: string;
  details: string;
};

export const Download: Download[] = [
  {
    id: 1,
    slug: 'download1',
    name: 'フランチャイズの開業に必要な書類リスト',
    thumbnail: 'thumbnail_course_1.webp',
    summary:
      'マサチューセッツ工科大学で開発されたビジュアルプログラミング言語「Scratch」を用いてプログラミングの基礎概念を学びます。',
    details:
      '「Scratch」はマウス操作で行えるので、キーボード入力に慣れていなくても安心して学習することができます。',
  },
  {
    id: 2,
    slug: 'download2',
    name: '実践！モダンJavaScript/TypeScript開発ガイド',
    thumbnail: 'thumbnail_course_2.webp',
    summary:
      '実際の開発で使用されているテキストプログラミング言語「JavaScript」を用いて決められたテーマに沿ってWebサイト開発を行い、プログラミングを学びます。',
    details:
      '主に、キーボードを使用する本格的なプログラミングを行うコースです。',
  },
];
