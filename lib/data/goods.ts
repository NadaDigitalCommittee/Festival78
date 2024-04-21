export type Item = {
  id: number[],
  size: 's' | 'm' | 'l',
  name: string,
  imageCount: number,
  price: number,
  description: string
};
export const goods: Item[] = [{
  id: [1],
  size: 'l',
  name: 'ルービック\nキューブ',
  imageCount: 2,
  price: 1700,
  description: '台座付。インテリアにも\n正規ルービックキューブライセンスマーク入り'
}, {
  id: [2],
  size: 'l',
  name: 'マグカップ',
  imageCount: 2,
  price: 1000,
  description: '文化祭ロゴマグカップ。食洗機可。日本製\n280ml'
}, {
  id: [3],
  size: 'l',
  name: 'マフラー\nタオル',
  imageCount: 2,
  price: 1000,
  description: '柔らかく品質のいいタオル。綿100%\n110×20cm'
}, {
  id: [4],
  size: 'm',
  name: 'トートバッグ\n キャンバス地',
  imageCount: 1,
  price: 800,
  description: 'ゆったりサイズ丈夫なキャンパス地\n横42×高さ38×幅13cm'
}, {
  id: [5],
  size: 'l',
  name: 'アクリル\nキーホルダー',
  imageCount: 1,
  price: 300,
  description: '300円文化祭ロゴ。\n縦約5㎝'
}, {
  id: [6],
  size: 'm',
  name: 'クリアしおり\n 2枚組',
  imageCount: 1,
  price: 100,
  description: '丈夫なプラスチック素材。透明感がかっこい。\n135×47mm'
}, {
  id: [7],
  size: 'l',
  name: 'ロゴ\nステッカー',
  imageCount: 5,
  price: 100,
  description: 'ハガキサイズに10カットのステッカー\nPET素材、耐水性〇'
}, {
  id: [8, 9, 10, 11, 12, 13, 14, 15],
  size: 'l',
  name: 'Tシャツ',
  imageCount: 7,
  price: 1500,
  description: 'サイズ S、M、L、LL'
}, {
  id: [16],
  size: 's',
  name: 'ホットマン\nシェニール織り\nハンカチ',
  imageCount: 2,
  price: 2500,
  description: '校門と本館の風景を芸術性の高いシェニール織りで表現。\n28×28cm'
}, {
  id: [17, 18, 19, 20],
  size: 'l',
  name: '白竹堂製\n校是布扇子',
  imageCount: 6,
  price: 1300,
  description: '紺、えんじ、深緑、白地\n灘校書道教師倉橋先生による校是書字。綿製'
}, {
  id: [21, 22],
  size: 'l',
  name: '校章チャーム',
  imageCount: 1,
  price: 1000,
  description: 'ダークブラウン、紺\n本革製校章チャーム。丁寧な手作りチャーム\n約3.3×3.3cm'
}, {
  id: [23],
  size: 'l',
  name: '灘ベア大\n(ぬいぐるみ)',
  imageCount: 3,
  price: 2300,
  description: '約23cm\n灘校オリジナルオーダーのベアぬいぐるみ。NADAパーカー着用。背中に校章。'
}, {
  id: [24, 25],
  size: 'l',
  name: '灘ベア小\n キーホルダー',
  imageCount: 2,
  price: 800,
  description: '約8cm\n紺、えんじ\n灘校オリジナルオーダーのベアストラップ。'
}, {
  id: [26],
  size: 'm',
  name: 'ワンタッチ\nファイルケース',
  imageCount: 3,
  price: 300,
  description: 'A4クリアファイルがそのまま入る。プリントをすっきり整理\n32.4×23cm\n収容枚数 コピー用紙60枚'
}, {
  id: [27],
  size: 's',
  name: 'デザイン\nクリアファイルA4\n 2枚組',
  imageCount: 4,
  price: 400,
  description: '文化祭ロゴデザインクリアファイル'
}, {
  id: [28, 29, 30, 31, 32],
  size: 's',
  name: 'クリアファイル\nA4無地',
  imageCount: 1,
  price: 100,
  description: '使いやすい無地'
}, {
  id: [33],
  size: 'm',
  name: '合格五角鉛筆\n HB 2本組',
  imageCount: 1,
  price: 150,
  description: '縁起のいい五角形の合格鉛筆'
}, {
  id: [34],
  size: 's',
  name: '三菱鉛筆\nユニスター B\n 6本組',
  imageCount: 1,
  price: 400,
  description: 'ユニスターＢ'
}, {
  id: [35, 36, 37],
  size: 's',
  name: 'スマッシュ\n高機能\nシャープペン',
  imageCount: 3,
  price: 900,
  description: 'ブラック、レッド、ダークグレー\n灘校生に大人気のスマッシュが灘校グッズに新登場'
}, {
  id: [38, 39, 40],
  size: 'm',
  name: 'クルトガ KS\nシャープペン',
  imageCount: 3,
  price: 500,
  description: 'ネイビー、 アイスブルー、ライトグレー\nクルトガ大人気モデル'
}, {
  id: [41, 42, 43, 44],
  size: 'm',
  name: 'シャープペン\nベリーシャ楽',
  imageCount: 2,
  price: 100,
  description: '黒、緑、ピンク、青\nお手頃価格だけど書き味抜群'
}, {
  id: [45, 46, 47],
  size: 's',
  name: '3色ボール\nペン 0.5 ジェット\nストリーム',
  imageCount: 2,
  price: 500,
  description: 'ブラック、ブルーグレー、アイスブルー\n間違えずに黒を出せる'
}, {
  id: [48, 49, 50],
  size: 'm',
  name: '単色\nボールペン 0.5',
  imageCount: 2,
  price: 150,
  description: 'スイスイ書ける単色ゲルインクボールペン。黒・赤・青'
}, {
  id: [51, 52, 53, 54],
  size: 's',
  name: '多機能ペン\n ジェット\nストリーム\n',
  imageCount: 2,
  price: 700,
  description: 'ネイビー、ボルドー、ブラック、ピンク\n最も使用頻度の高い赤・黒ボールペン＆シャープペンシルの組み合わせ'
}, {
  id: [55, 56, 57, 58],
  size: 'm',
  name: '消しゴム\nSEEDレーダー',
  imageCount: 5,
  price: 150,
  description: '紺・えんじ・緑・水色\n灘校書道教師倉橋先生による校是書字デザイン'
}, {
  id: [59],
  size: 's',
  name: '蛍光ペン\n 3本組\n 灘校章ケース入',
  imageCount: 1,
  price: 400,
  description: '灘校校章ケース入り'
}, {
  id: [60],
  size: 'l',
  name: '定規 15センチ',
  imageCount: 1,
  price: 300,
  description: '使いやすい15センチ定規'
}, {
  id: [61, 62],
  size: 'l',
  name: '下敷き',
  imageCount: 1,
  price: 200,
  description: '暗記ペン用にも便利な赤・緑'
}, {
  id: [63],
  size: 'l',
  name: '灘校手ぬぐい',
  imageCount: 1,
  price: 300,
  description: '灘中・灘校校章と校是'
}, {
  id: [0],
  size: 'l',
  name: '不織布バッグ',
  imageCount: 2,
  price: 100,
  description: '横270×高さ345×幅60mm\n＊無料レジ袋にかわるエコバッグの位置づけ。\n1-63の商品購入者のみ購入可'
}];
export const souvenirs: Item[] = [{
  id: [1],
  size: 'l',
  name: '灘校煎餅',
  imageCount: 1,
  price: 650,
  description: '梅香堂(4枚×3袋入り)'
}, {
  id: [2],
  size: 'l',
  name: '灘校三笠\n 箱詰',
  imageCount: 1,
  price: 550,
  description: '明植堂(2個入り)'
}, {
  id: [3],
  size: 'l',
  name: '灘校三笠\n 箱詰',
  imageCount: 1,
  price: 1350,
  description: '明植堂(5個入り)'
}, {
  id: [4],
  size: 's',
  name: '灘校紅茶\n ロイヤルブレンド',
  imageCount: 2,
  price: 1000,
  description: '神戸紅茶(ティーパック10袋入り) ベージュ缶'
}, {
  id: [5],
  size: 'm',
  name: '灘校紅茶\n トロピカル',
  imageCount: 2,
  price: 1000,
  description: '神戸紅茶(ティーパック10袋入り) ホワイト缶'
}, {
  id: [6],
  size: 's',
  name: '灘校\nほろほろクッキー\n 阿波和三盆',
  imageCount: 3,
  price: 1250,
  description: 'ケーキハウスショウタニ(15粒入り) ネイビー缶'
}, {
  id: [7],
  size: 's',
  name: '灘校\nほろほろクッキー\n 深煎りきなこ',
  imageCount: 3,
  price: 1250,
  description: 'ケーキハウスショウタニ(15粒入り) クリームイエロー缶'
}, {
  id: [8],
  size: 'm',
  name: '灘校\nえびせんべい',
  imageCount: 3,
  price: 1000,
  description: '桂新堂(6枚入り)'
}, {
  id: [9],
  size: 'l',
  name: '灘ミント',
  imageCount: 2,
  price: 350,
  description: ''
}];