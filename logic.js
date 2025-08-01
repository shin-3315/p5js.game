// ゲームの進行状況（距離バー）を更新する関数
function updateProgress() {
  dist = (millis() - start) / 1000 * 1.81;  // 進行状況を計算
  let w = map(dist, 0, 30, 0, width);  // 距離を幅にマッピング
  fill(60, 179, 113);  // 距離バーの色
  rect(0, 0, w, 10);  // 距離バーを描画
}

// ゲームオーバー判定
function checkForGameOver() {
  if (!gameOverflag && dist >= 30) {
    gameOver("CLEAR");  // クリア
  }
}

// ゲームオーバー後の処理
function handleGameOver() {
  if (gameOverflag) {
    if (!restartButton._delayedShown) {
      restartButton._delayedShown = true;

      // 表示遅延時間を状態に応じて設定
      let delay = winningflag ? 2000 : 500;

      // 画面が暗くなるのはゲームオーバー時のみ
      if (!winningflag) {
        fill(0, 100);
        rect(0, 0, width, height);
      }

      updateRestartButtonStyle();

      // 指定時間後にボタン表示
      setTimeout(() => {
        restartButton.show();
      }, delay);
    } else {
      // ゲームオーバー時のみ毎フレーム背景を暗く塗り直す
      if (!winningflag) {
        fill(0, 100);
        rect(0, 0, width, height);
      }
    }
  } else {
    restartButton.hide();
    restartButton._delayedShown = false;
  }

  // ゲームオーバー時のみスコア表示
  if (gameOverflag && !winningflag) {
    fill(255);
    textSize(18);
    textAlign(CENTER, BOTTOM);
    text(`score: ${dist.toFixed(2)}m`, width / 2, height / 2 + 50);
  }
}

// ゲームオーバー処理
function gameOver(msg) {
  winningflag = msg === "CLEAR";  // クリアかどうか
  gameOverflag = true;

  noLoop();  // ゲーム停止

  fill(winningflag ? [255, 105, 108] : [0]);  // ゲームオーバー時の色
  textSize(32);
  textAlign(CENTER, CENTER);
  text(msg, width / 2, height / 2);
}

// 再スタート処理
function restartGame() {
  gameState = "playing";
  gameOverflag = false;
  winningflag = false;
  wall = [];
  py = height - gheight - 10;
  start = millis();
  goalMessageTimer = millis();
  dist = 0;
  showGoalMessage = true;
  restartButton._delayedShown = false;
  isButtonClicked = true;

  restartButton.hide();
  loop();

  setTimeout(() => {
    isButtonClicked = false;
  }, 100);
}