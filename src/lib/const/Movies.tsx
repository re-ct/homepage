type Movie = {
  id: string;
  title: string;
  summary: string;
  href: string;
  img: string;
};

export const movieList: Movie[] = [
  {
    id: 'movie1',
    title:
      'Scratch(スクラッチ)でシューティングゲームを作ろう！【超入門】初心者でもバッチリ！',
    summary:
      'プログラミング初心者でもわかりやすく丁寧に解説！Scratch(スクラッチ)を通してプログラミングの基礎的な技術を身につけましょう！',
    href: 'https://www.udemy.com/course/scratch-shooting/?referralCode=51442CE63543EE22D9A6',
    img: 'thumbnail_movie_scratch_shooting.png',
  },
  {
    id: 'movie2',
    title:
      'Scratch(スクラッチ)でアクションゲームを作ろう！【超入門】初心者でもバッチリ！',
    summary:
      'みんな大好きアクションゲームをScratch(スクラッチ)で作ってみよう！移動や攻撃、HPなどゲームに作りに役立つプログラミング方法を身につけましょう！',
    href: 'https://www.udemy.com/course/scratch-action/?referralCode=2B01C00B12BC9D6CD65A',
    img: 'thumbnail_movie_scratch_action.png',
  },
  {
    id: 'movie3',
    title:
      'Scratch(スクラッチ)でタイムアタックゲームを作ろう！【超入門】初心者でもバッチリ！',
    summary:
      '車を操作して最速タイムを目指すタイムアタックゲームをScratch(スクラッチ)で作ってみよう！条件分岐や変数、クローンといったScratchでよく使うコードブロックの使い方をマスターしよう！',
    href: 'https://www.udemy.com/course/scratch-race/?referralCode=38B9499821BEDA5C47E3',
    img: 'thumbnail_movie_scratch_race.png',
  },
];

export const udemyUserPage = 'https://www.udemy.com/user/ling-mu-you-ji-28/';
