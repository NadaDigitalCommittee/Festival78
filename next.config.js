/** @type {import('next').NextConfig} */
// 非公開ファイルのリダイレクト
// const resitrictedFiles = [
//   {
//     title: "灘的漢検解答",
//     url: "/pdf/literaryart/nadatekikanken_answer.pdf",
//   },
//   {
//     title: "灘中入試国語予想問題　解答",
//     url: "/pdf/literaryart/R7_1daynyuusimosi_kaitou.pdf",
//   },
//   {
//     title: "模試問題　日本史　問題",
//     url: "/pdf/geography/r6_moshi_nihonshi.pdf",
//   },
//   {
//     title: "模試問題　日本史　解答用紙",
//     url: "/pdf/geography/r6_moshi_nihonshi_answer.pdf",
//   },
//   {
//     title: "模試問題　世界史　問題",
//     url: "/pdf/geography/r6_moshi_sekaishi.pdf",
//   },
//   {
//     title: "模試問題　世界史　解答用紙",
//     url: "/pdf/geography/r6_moshi_sekaishi_answer.pdf",
//   },
//   {
//     title: "模試問題　日本地理　問題",
//     url: "/pdf/geography/r6_moshi_nihonchiri.pdf",
//   },
//   {
//     title: "模試問題　日本地理　解答用紙",
//     url: "/pdf/geography/r6_moshi_nihonchiri_answer.pdf",
//   },
//   {
//     title: "模試問題　世界地理　問題",
//     url: "/pdf/geography/r6_moshi_sekaichiri.pdf",
//   },
//   {
//     title: "模試問題　世界地理　解答用紙",
//     url: "/pdf/geography/r6_moshi_sekaichiri_answer.pdf",
//   },
//   {
//     title: "模試問題　EX　問題",
//     url: "/pdf/geography/r6_moshi_ex.pdf",
//   },
//   {
//     title: "模試問題　EX　解答用紙",
//     url: "/pdf/geography/r6_moshi_ex_answer.pdf",
//   },
//   {
//     title: "クイズ　解答",
//     url: "/pdf/geography/",
//   },
//   {
//     title: "クロスワード",
//     url: "/pdf/ess/crossword.pdf",
//   },
//   {
//     title: "クロスワード 解答",
//     url: "/pdf/ess/crossword_answer.pdf",
//   },
//   {
//     title: "灘高英語模試",
//     url: "/pdf/ess/nadakou_eigo_mosi.pdf",
//   },
//   {
//     title: "入試模試",
//     url: "/pdf/mathematics/moshi.pdf",
//   },
//   {
//     title: "和田杯",
//     url: "/pdf/mathematics/wada.pdf",
//   },
//   {
//     title: "部誌",
//     url: "/pdf/mathematics/article.pdf",
//   },
// ];

const nextConfig = {
  sassOptions: {
    includePaths: [require("path").join(__dirname, "styles")],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.microcms-assets.io",
      },
    ],
  },
  // async redirects() {
  //   return resitrictedFiles.map((file) => {
  //     return {
  //       source: file.url,
  //       destination: "/",
  //       permanent: false,
  //     };
  //   });
  // },
};

module.exports = nextConfig;
