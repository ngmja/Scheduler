/* 削除ボタンを押下したとき、日付・タスク・削除ボタンをテーブルから削除 */
const removeClick = (event) => {
    event.currentTarget.parentNode.parentNode.remove();
}

/* 追加ボタンを押下したとき、日付・タスク・削除ボタンをテーブルに追加 */
const addClick = () => {

    if (!document.getElementById('dateForm').value ||
        !document.getElementById('taskForm').value) {
        alert('日付とタスクを入力してください');
        return;
    }

    // テーブルを作成
    var row = document.createElement('tr');
    var dateTd = document.createElement('td');
    var taskTd = document.createElement('td');
    var removeTd = document.createElement('td');
    document.getElementById('tableBody').appendChild(row);
    row.appendChild(dateTd);
    row.appendChild(taskTd);
    row.appendChild(removeTd);

    // 削除ボタンを作成
    var removeButton = document.createElement('input');
    removeButton.setAttribute('type', 'button');
    removeButton.value = 'remove';

    // フォームの内容と削除ボタンをテーブルに追加
    dateTd.innerText = document.getElementById('dateForm').value;
    taskTd.innerText = document.getElementById('taskForm').value;
    removeTd.appendChild(removeButton)

    removeButton.onclick = removeClick;
}

window.onload = () => {
    document.getElementById('add_button').onclick = addClick;
}