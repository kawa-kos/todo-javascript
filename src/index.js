import "./styles.css";

const onCliclAdd = () => {
  // テキストボックスの入力内容を取得し初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createIncompleteList(inputText);
};

const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

const createIncompleteList = (text) => {
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグ
  const li = document.createElement("li");
  li.innerText = text;

  //完了ボタン
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    deleteFromIncompleteList(completeButton.parentNode);

    // 完了リストへ追加する要素
    const completeTarget = completeButton.parentNode;
    console.log(completeTarget);

    //TODO内容テキストを取得
    const text = completeTarget.firstElementChild.innerText;
    console.log(text);

    //div以下を初期化
    completeTarget.textContent = null;

    // liタグ生成(完了TODOに追加用)
    const li = document.createElement("li");
    li.innerText = text;

    // 戻るbuttonタグ生成(完了TODOに追加用)
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      const backTarget = backButton.parentNode;
      // 押された戻すボタンの親を削除
      document.getElementById("complete-list").removeChild(backTarget);

      //未完了に追加
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    // divタグ(完了TODOに追加用)に子要素を追加
    completeTarget.appendChild(li);
    completeTarget.appendChild(backButton);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(completeTarget);
  });

  //削除ボタン
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグを未完了から削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onCliclAdd());
