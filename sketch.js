// ゲームのセットアップ（初期設定）
function setup() {
  createCanvas(400, 400);  // ゲーム画面のサイズを決定
  py = height - gheight - 10;  // プレイヤーの初期位置
  start = millis();  // ゲーム開始時刻を記録
  goalMessageTimer = millis();  // ゴールメッセージ開始時刻

  // Startボタン（タイトル画面用）
  startButton = createButton('Start');
  startButton.position(width / 2 - 60, height / 2);
  startButton.size(130, 40);
  startButton.mousePressed(() => {
    gameState = "playing";
    start = millis();
    goalMessageTimer = millis();
    isButtonClicked = true;
    startButton.hide();
    setTimeout(() => {
      isButtonClicked = false;
    }, 100);
  });
  startButton.style('background-color', '#4682b4');
  startButton.style('color', 'white');
  startButton.style('border', 'none');
  startButton.style('font-size', '20px');
  startButton.style('border-radius', '10px');
  startButton.style('cursor', 'pointer');

  // Restartボタン（ゲームオーバーまたはクリア後用）
  restartButton = createButton('Restart');
  restartButton.position(width / 2 - 60, height / 2 + 70);
  restartButton.size(130, 40);
  restartButton.mousePressed(restartGame);
  restartButton.hide();

  restartButton.style('background-color', '#ff6347');
  restartButton.style('border', 'none');
  restartButton.style('color', 'white');
  restartButton.style('font-size', '20px');
  restartButton.style('font-family', 'Arial, sans-serif');
  restartButton.style('border-radius', '10px');
  restartButton.style('box-shadow', '0px 4px 8px rgba(0, 0, 0, 0.2)');
  restartButton.style('cursor', 'pointer');
  restartButton.style('transition', 'background-color 0.3s, transform 0.2s');

  restartButton.mouseOver(() => {
    restartButton.style('background-color', '#ff4500');
    restartButton.style('transform', 'scale(1.1)');
  });

  restartButton.mouseOut(() => {
    restartButton.style('background-color', '#ff6347');
    restartButton.style('transform', 'scale(1)');
  });
}


function draw() {
  background(173, 216, 230); // 背景色を設定

    if (gameState === "title") {
    drawTitleScreen();
    return; // タイトル画面だけ表示
  }
  
  drawGround();  // 地面を描画する関数
  movePlayer();  // プレイヤーの位置を更新する関数
  drawPlayer();  // プレイヤーを描画する関数
  generateWalls();  // 新しい壁を生成する関数
  drawWalls();  // 壁を描画する関数
  updateProgress();  // ゲームの進行状況（距離バー）を更新する関数
  checkForGameOver();  // ゲームオーバー判定を行う関数
  displayGoalMessage();  // ゴールメッセージを表示する関数
  handleGameOver();  // ゲームオーバー時の画面処理を行う関数
}

// プレイヤーがクリックしたときの処理
function mousePressed() {
  if (isButtonClicked || gameState !== "playing") return;
  rise = true;
}

// プレイヤーがマウスを離したときの処理
function mouseReleased() {
  rise = false;  // ジャンプ終了
}
