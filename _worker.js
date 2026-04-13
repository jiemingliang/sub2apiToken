export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    // 如果访问根目录，返回一个简单的提示或 HTML
    if (url.pathname === '/') {
      return new Response('<h1>Sub2API 运行中</h1><p>请在 URL 后添加参数使用。</p>', {
        headers: { 'content-type': 'text/html;charset=UTF-8' },
      });
    }
    // 这里的逻辑会处理转换请求，你可以从原作者仓库复制完整的 _worker.js 内容
    return fetch("https://sub.id9.cc" + url.pathname + url.search);
  },
};
