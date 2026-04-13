// 这里的代码集成了前端界面和后端转换逻辑
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const backend = "https://api.v1.mk"; // 默认使用的转换后端

    // 1. 如果访问根目录，显示前端 UI 界面
    if (url.pathname === '/' || url.pathname === '') {
      return new Response(html, {
        headers: { "Content-Type": "text/html;charset=UTF-8" }
      });
    }

    // 2. 如果访问其他路径，则将其转发给后端 API 进行转换
    const targetUrl = backend + url.pathname + url.search;
    return fetch(targetUrl, {
      method: request.method,
      headers: request.headers
    });
  }
};

// 简单的 HTML 前端界面代码（你可以后续自己美化）
const html = `
<!DOCTYPE html>
<html>
<head>
    <title>Sub2API 订阅转换</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        body { font-family: sans-serif; display: flex; justify-content: center; padding: 20px; background: #f4f4f9; }
        .card { background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); width: 100%; max-width: 500px; }
        input, select, button { width: 100%; padding: 10px; margin: 10px 0; border: 1px solid #ddd; border-radius: 4px; box-sizing: border-box; }
        button { background: #007bff; color: white; border: none; cursor: pointer; }
        button:hover { background: #0056b3; }
    </style>
</head>
<body>
    <div class="card">
        <h2>订阅转换工具</h2>
        <input type="text" id="url" placeholder="在此输入你的原始订阅链接">
        <select id="target">
            <option value="clash">Clash</option>
            <option value="singbox">Sing-box</option>
            <option value="surge">Surge</option>
        </select>
        <button onclick="generate()">生成订阅链接</button>
        <p id="result" style="word-break: break-all; color: #666;"></p>
    </div>
    <script>
        function generate() {
            const url = document.getElementById('url').value;
            const target = document.getElementById('target').value;
            if(!url) return alert('请输入链接');
            const baseUrl = window.location.origin;
            const result = baseUrl + '/sub?target=' + target + '&url=' + encodeURIComponent(url);
            document.getElementById('result').innerHTML = '您的链接是：<br><a href="' + result + '" target="_blank">' + result + '</a>';
        }
    </script>
</body>
</html>
`;
