import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <div>
            <h1>
              <span>로고</span>
              <span>테스트</span>
            </h1>
            <h2>메인프레임</h2>
          </div>
        </Link>
      </header>

      <div className="page-content">
        {children}
      </div>

      <footer>
        <p>Copyright©2022 Ironflag All Rights Reserved.</p>
      </footer>
    </div>
  );
}