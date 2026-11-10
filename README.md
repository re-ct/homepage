# Initialize

* cp .env.sample .env.local
* yarn dev
* open http://localhost:3000

# Reference

* base: https://github.com/gregrickaby/nextjs-github-pages
* style: https://mui.com/

# Tips

* Google Mapをローカルで表示したい場合
  * .env.localのGOOGLE_MAPS_KEYの値にKeyを入れてください。
  * Keyは知っている人に聞いてください。

## lintの適用
* `npx prettier --write './{bin,lib,src,tests}/**/*.{ts,tsx}'`

## 型チェック

* `yarn typecheck` でTypeScript 7の型チェックを実行します。`yarn build` でも実行されます。
* TypeScript 7のCLIは `@typescript/native`、Next.jsとtypescript-eslintが使うTypeScript 6のAPIは `typescript` のnpmエイリアスで導入しています。[TypeScript公式の併用構成](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/#running-side-by-side-with-typescript-6.0)に従っています。
