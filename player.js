// プレイヤーの位置を更新する関数（ジャンプと重力）
function movePlayer() {
  py = rise ? max(theight, py + rs) : min(height - gheight - 10, py + fs);  // ジャンプと重力の計算
}

// プレイヤーを描画する関数
function drawPlayer() {
  fill(255);  // プレイヤーの色
  ellipse(px, py, 20, 20);  // プレイヤーの円を描画
}

// 地面を描画する関数
function drawGround() {
  fill(169);  // 地面の色
  rect(0, height - gheight, width, gheight);  // 地面の長方形
}
