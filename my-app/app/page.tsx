export default function Home() {
  return (
    <div className="shell">
      <div className="layout">
        <aside>
          <div className="avatar"></div>
          <h1 className="name">Kaiyuan Zhang</h1>
          <div className="tagline">AI 创作者 / 分享 AI 知识与作品</div>

          <div className="socials">
            <a href="#" aria-label="Google Scholar">g</a>
            <a href="#" aria-label="GitHub">◖</a>
          </div>

          <nav>
            <a href="#home">⌂ 主页</a>
            <a href="#projects">◻ 个人项目</a>
            <a href="#videos">▻ 视频分享</a>
            <a href="#contact">✎ 欢迎留言</a>
          </nav>
        </aside>

        <main>
          <section className="top" id="home">
            <ul className="intro">
              <li>Gap期。之前在航空工业计算所、西北大学工作过。</li>
              <li>学历: 博士毕业于西安交通大学。</li>
              <li>工作技能: 擅长 Agent/Workflow 研发，对 AI 相关技术感兴趣。</li>
            </ul>
            <div className="hero-shot" aria-label="右上角展示图片"></div>
          </section>

          <section id="projects">
            <h2>AI作品集</h2>
            <div className="project-row">
              <div className="card">
                <div className="card-cover">🤖</div>
                <div className="card-meta">
                  <strong>Coming Soon</strong>
                  <span className="stars">★ 0k</span>
                </div>
              </div>
              <div className="card">
                <div className="card-cover">🎨</div>
                <div className="card-meta">
                  <strong>Coming Soon</strong>
                  <span className="stars">★ 0</span>
                </div>
              </div>
              <div className="card">
                <div className="card-cover">📊</div>
                <div className="card-meta">
                  <strong>Coming Soon</strong>
                  <span className="stars">★ 0</span>
                </div>
              </div>
              <div className="play" aria-hidden="true"></div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
