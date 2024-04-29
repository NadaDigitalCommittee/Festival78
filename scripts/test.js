const fs = require("fs");
const path = require("path");

const dirPath = "./public/img/items/souvenirs"; // 変更対象のディレクトリパス

// ディレクトリ内のファイルを読み取る
fs.readdir(dirPath, (err, files) => {
  if (err) {
    console.error("ディレクトリの読み取りエラー:", err);
    return;
  }

  files.forEach((file) => {
    const oldPath = path.join(dirPath, file);
    const ext = path.extname(file); // 拡張子
    const baseName = path.basename(file, ext); // 拡張子を除いたファイル名

    // 画像ファイルのみを処理
    if ([".png", ".jpg", ".jpeg", ".gif"].includes(ext.toLowerCase())) {
      const newBaseName = baseName.replace(/ \((\d+)\)/g, ""); // ()内の数字を削除
      const newFileName = `${newBaseName}${ext}`; // 新しいファイル名
      const newPath = path.join(dirPath, newFileName);

      // ファイル名を変更
      fs.rename(oldPath, newPath, (err) => {
        if (err) {
          console.error(`ファイル名の変更エラー (${file}):`, err);
        } else {
          console.log(`ファイル名を変更しました: ${file} -> ${newFileName}`);
        }
      });
    }
  });
});
