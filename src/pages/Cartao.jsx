export default function Cartao() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0d1b2a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px 16px",
        fontFamily: "'Jost', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap');
        :root {
          --navy: #0d1b2a; --navy-mid: #132236; --navy-card: #172840;
          --navy-hover: #1e3550; --gold: #c9a96e; --gold-light: #e2c99a;
          --gold-dim: #8a6e45; --text: #d4dde8; --text-dim: #8fa3ba;
          --border: rgba(201,169,110,0.18); --border-hover: rgba(201,169,110,0.45);
        }
        .lc-card { width:100%; max-width:880px; background:#132236; border-radius:20px; border:1px solid rgba(201,169,110,0.18); display:grid; grid-template-columns:300px 1fr; overflow:hidden; box-shadow:0 40px 120px rgba(0,0,0,0.6); animation:lcFadeUp 0.7s cubic-bezier(0.22,1,0.36,1) both; }
        @keyframes lcFadeUp { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        .lc-left { background:linear-gradient(160deg,#0f1f30,#0a1520); border-right:1px solid rgba(201,169,110,0.18); padding:44px 32px 36px; display:flex; flex-direction:column; position:relative; }
        .lc-right { padding:36px 32px 32px; display:flex; flex-direction:column; position:relative; }
        .lc-left::before,.lc-left::after,.lc-right::before,.lc-right::after { content:''; position:absolute; width:18px; height:18px; border-color:#8a6e45; border-style:solid; opacity:0.6; }
        .lc-left::before  { top:16px;left:16px;border-width:1.5px 0 0 1.5px; }
        .lc-left::after   { bottom:16px;right:16px;border-width:0 1.5px 1.5px 0; }
        .lc-right::before { top:16px;right:16px;border-width:1.5px 1.5px 0 0; }
        .lc-right::after  { bottom:16px;left:16px;border-width:0 0 1.5px 1.5px; }
        .lc-avatar { width:110px;height:110px;border-radius:50%;border:1.5px solid #8a6e45;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#1a2e42,#0f1e2d);margin-bottom:28px;box-shadow:0 0 0 6px rgba(201,169,110,0.07); }
        .lc-initials { font-family:'Cormorant Garamond',serif;font-size:2.6rem;font-weight:300;color:#c9a96e;letter-spacing:0.04em;line-height:1; }
        .lc-creds { font-size:0.7rem;letter-spacing:0.06em;color:#8fa3ba;line-height:1.9;margin-bottom:18px; }
        .lc-name { font-family:'Cormorant Garamond',serif;font-size:2.6rem;font-weight:300;line-height:1.08;color:#e8eef5;margin-bottom:16px; }
        .lc-name em { font-style:italic;color:#e2c99a;font-weight:300; }
        .lc-specialty { font-size:0.65rem;font-weight:500;letter-spacing:0.16em;color:#8fa3ba;text-transform:uppercase;margin-bottom:14px; }
        .lc-badge { display:inline-block;border:1px solid #8a6e45;border-radius:20px;padding:5px 14px;font-size:0.6rem;font-weight:500;letter-spacing:0.1em;text-transform:uppercase;color:#c9a96e; }
        .lc-section-label { font-size:0.62rem;font-weight:500;letter-spacing:0.2em;text-transform:uppercase;color:#8a6e45;margin-bottom:18px; }
        .lc-links { display:flex;flex-direction:column;gap:10px;flex:1; }
        .lc-link { display:flex;align-items:center;gap:16px;background:#172840;border:1px solid rgba(201,169,110,0.18);border-radius:14px;padding:14px 18px;text-decoration:none;color:inherit;transition:background 0.22s,border-color 0.22s,transform 0.18s;cursor:pointer; }
        .lc-link:hover { background:#1e3550;border-color:rgba(201,169,110,0.45);transform:translateX(3px); }
        .lc-icon { width:36px;height:36px;border-radius:10px;background:rgba(201,169,110,0.1);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:1rem; }
        .lc-link-text { flex:1; }
        .lc-label { font-size:0.6rem;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:#c9a96e;margin-bottom:3px; }
        .lc-value { font-size:0.85rem;font-weight:300;color:#d4dde8; }
        .lc-arrow { color:#8a6e45;font-size:0.8rem;flex-shrink:0;transition:transform 0.18s,color 0.18s; }
        .lc-link:hover .lc-arrow { transform:translateX(4px);color:#c9a96e; }
        .lc-footer { margin-top:20px;display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap; }
        .lc-pills { display:flex;gap:8px;flex-wrap:wrap; }
        .lc-pill { border:1px solid rgba(201,169,110,0.25);border-radius:20px;padding:4px 14px;font-size:0.6rem;font-weight:500;letter-spacing:0.1em;text-transform:uppercase;color:#8fa3ba;text-decoration:none;transition:border-color 0.2s,color 0.2s; }
        .lc-pill:hover { border-color:#c9a96e;color:#c9a96e; }
        .lc-url-label { font-size:0.55rem;letter-spacing:0.15em;text-transform:uppercase;color:#8fa3ba;display:block;margin-bottom:2px; }
        .lc-url-link { font-family:'Cormorant Garamond',serif;font-style:italic;font-size:0.92rem;color:#e2c99a;text-decoration:none; }
        .lc-url-link:hover { color:#c9a96e; }
        @media(max-width:640px){
          .lc-card{grid-template-columns:1fr;}
          .lc-left{border-right:none;border-bottom:1px solid rgba(201,169,110,0.18);padding:36px 28px 32px;}
          .lc-right{padding:28px 24px 28px;}
          .lc-name{font-size:2.1rem;}
        }
      `}</style>

      <div className="lc-card">
        {/* LEFT */}
        <div className="lc-left">
          <div className="lc-avatar">
            <span className="lc-initials">LC</span>
          </div>
          <div className="lc-creds">
            RQE: 94841 · CRM: 182.379
            <br />
            TEOT: 17031
          </div>
          <div className="lc-name">
            <em>Dr.</em>&nbsp; Lucas
            <br />
            Coracini
          </div>
          <div className="lc-specialty">Ortopedia &amp; Traumatologia</div>
          <div className="lc-badge">Ortopedia Geral e Cirurgia do Joelho</div>
        </div>

        {/* RIGHT */}
        <div className="lc-right">
          <div className="lc-section-label">Contato &amp; Informações</div>
          <div className="lc-links">
            <a
              className="lc-link"
              href="https://maps.google.com/?q=CEORT+Ribeirão+Preto+SP"
              target="_blank"
              rel="noopener"
            >
              <div className="lc-icon">📍</div>
              <div className="lc-link-text">
                <div className="lc-label">Localização</div>
                <div className="lc-value">CEORT · Ribeirão Preto - SP</div>
              </div>
              <div className="lc-arrow">›</div>
            </a>
            <a className="lc-link" href="tel:+551632343280">
              <div className="lc-icon">📞</div>
              <div className="lc-link-text">
                <div className="lc-label">Contato</div>
                <div className="lc-value">(16) 3234-3280 · (16) 3234-3281</div>
              </div>
              <div className="lc-arrow">›</div>
            </a>
            <a
              className="lc-link"
              href="https://wa.me/5516993379428"
              target="_blank"
              rel="noopener"
            >
              <div className="lc-icon">💬</div>
              <div className="lc-link-text">
                <div className="lc-label">WhatsApp</div>
                <div className="lc-value">(16) 9 9337-9428</div>
              </div>
              <div className="lc-arrow">›</div>
            </a>
            <a
              className="lc-link"
              href="https://wa.me/5516997841185"
              target="_blank"
              rel="noopener"
            >
              <div className="lc-icon">💬</div>
              <div className="lc-link-text">
                <div className="lc-label">Dúvidas</div>
                <div className="lc-value">(16) 9 9784-1185</div>
              </div>
              <div className="lc-arrow">›</div>
            </a>
            <a
              className="lc-link"
              href="https://instagram.com/lucascoracini"
              target="_blank"
              rel="noopener"
            >
              <div className="lc-icon">📸</div>
              <div className="lc-link-text">
                <div className="lc-label">Instagram</div>
                <div className="lc-value">@lucascoracini</div>
              </div>
              <div className="lc-arrow">›</div>
            </a>
          </div>

          <div className="lc-footer">
            <div className="lc-pills">
              <a
                className="lc-pill"
                href="https://instagram.com/lucascoracini"
                target="_blank"
                rel="noopener"
              >
                Instagram
              </a>
              <a
                className="lc-pill"
                href="mailto:contato@lucas_coracini5@hotmail.com"
              >
                Email
              </a>
              <a
                className="lc-pill"
                href="https://wa.me/5516993379428"
                target="_blank"
                rel="noopener"
              >
                WhatsApp
              </a>
            </div>
            <div style={{ textAlign: "right" }}>
              <span className="lc-url-label">Acesse todos os links</span>
              <a
                className="lc-url-link"
                href="https://dr-lucas-coracini.vercel.app"
                target="_blank"
                rel="noopener"
              >
                dr-lucas-coracini.vercel.app/
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
