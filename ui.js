function drawTitleScreen() {
  fill(0, 0);
  rect(0, 0, width, height);

  fill(70);
  textSize(26);
  textAlign(CENTER, CENTER);
  text("【 Skybound  Escape 】", width / 2, height / 2 - 60);

  startButton.show();
}

// マウスアイコンを描画する関数
function drawMouseIcon() {
  fill(210);
  ellipse(width / 2 + 95, height / 2 - 11, 27, 39);
  fill(255, 50, 50, 200);
  arc(width / 2 + 95, height / 2 - 14, 28, 33, radians(180), radians(270), PIE);
  fill(210);
  ellipse(width / 2 + 95, height / 2 - 22, 5, 10);
  line(width / 2 + 95, height / 2 - 14, width / 2 + 108, height / 2 - 14);
}

// 再スタートボタンのセットアップ
function updateRestartButtonStyle() {
  if (winningflag) {
    restartButton.style('background-color', '#32cd32');
    restartButton.mouseOver(() => {
      restartButton.style('background-color', '#2e8b57'); // 濃い緑
      restartButton.style('transform', 'scale(1.1)');
    });
    restartButton.mouseOut(() => {
      restartButton.style('background-color', '#32cd32');
      restartButton.style('transform', 'scale(1)');
    });
  } else {
    restartButton.style('background-color', '#ff6347');
    restartButton.mouseOver(() => {
      restartButton.style('background-color', '#ff4500'); // 濃い赤
      restartButton.style('transform', 'scale(1.1)');
    });
    restartButton.mouseOut(() => {
      restartButton.style('background-color', '#ff6347');
      restartButton.style('transform', 'scale(1)');
    });
  }
}

// ゴールメッセージを表示する関数
function displayGoalMessage() {
  if (!gameOverflag && !winningflag) {
    if (showGoalMessage) {
      fill(0, 150);
      rect(width / 2 - 100, height / 2 - 40, 160, 60, 10);
      rect(width / 2 + 70, height / 2 - 40, 50, 60, 10);

      fill(255);
      textSize(20);
      textAlign(CENTER, CENTER);
      text("GOAL: 30m", width / 2 - 20, height / 2 - 10);
      
      // 操作方法としてマウスの絵を表示
      drawMouseIcon();  // マウスアイコンを描画する関数
      
      if (millis() - goalMessageTimer > 1100) {
        showGoalMessage = false;
      }
    } else {
      fill(0, 150);
      rect(width / 2 - 60, 10, 120, 30, 5);

      fill(255);
      textSize(16);
      textAlign(CENTER, CENTER);
      text(`${dist.toFixed(2)}m`, width / 2, 25);
    }
  }
}
