let data = []; // JSONデータを保存する変数

// JSONファイルを非同期で読み込む
fetch("data.json")
    .then(response => response.json()) // JSONをパース
    .then(jsonData => {
        data = jsonData; // データを保存
    })
    .catch(error => console.error("JSONの読み込みに失敗:", error));

// 検索処理
document.getElementById("searchBox").addEventListener("input", function() {
    const query = this.value.toLowerCase();
    const results = data.filter(item => 
        item.name.includes(query) || item.category.includes(query)
    );

    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "";
    results.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} (${item.category})`;
        resultsContainer.appendChild(li);
    });
});
