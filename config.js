// ゲームの初期設定
let px = 200, py;  // プレイヤーの位置
let gheight = 20, theight = 10;  // 地面の高さとプレイヤーの高さ
let rise = false;  // ジャンプ中かどうか
let rs = -6, fs = 6, ws = 3;  // ジャンプのスピード、重力、壁のスピード
let wall = [];  // 壁の配列
let start, dist = 0;  // ゲーム開始時間と進行距離
let gameOverflag = false, winningflag = false, msg;  // ゲームオーバー、クリアフラグ
let showGoalMessage = true;  // ゴールメッセージ表示フラグ
let goalMessageTimer = 0;  // ゴールメッセージの表示開始時刻

let gameState = "title"; // タイトル・プレイ中・ゲームオーバー
let startButton;

// 再スタートボタンの設定
let restartButton;
let isButtonClicked = false;  // ボタンがクリックされたかどうかのフラグ（リトライした際、スタート時のジャンプ判定にならないためのフラグ）
