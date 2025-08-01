// 壁を生成する関数
function generateWalls() {
  if (frameCount % 60 === 0) {  // 60フレームごとに壁を生成
    let gapSize = random(80, 200);  // 隙間の高さをランダムに設定
    let gapStart = random(height - gheight - gapSize, 50);  // 隙間の位置をランダムに設定
    wall.push({ x: width, gapStart, gapSize });  // 壁を配列に追加
  }
}

// 壁を描画する関数
function drawWalls() {
  for (let i = 0; i < wall.length; ++i) {
    let w = wall[i];
    w.x -= ws;  // 壁を左に動かす

    fill(205, 133, 63);  // 壁の色
    rect(w.x, 0, 10, w.gapStart);  // 上部の壁
    rect(w.x, w.gapStart + w.gapSize, 10, height - gheight - (w.gapStart + w.gapSize));  // 下部の壁

    // 壁が画面外に出たら配列から削除
    if (w.x < -10) {
      wall.splice(i, 1);
      --i;
    }

    // プレイヤーとの衝突判定
    if (
      px + 10 > w.x && px - 10 < w.x + 10 &&
      (py <= w.gapStart || py >= w.gapStart + w.gapSize)
    ) {
      gameOver("GAME OVER");  // 衝突したらゲームオーバー
    }
  }
}
