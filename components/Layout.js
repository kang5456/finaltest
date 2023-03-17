import Link from "next/link";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <div>
            <h2>
              <span>로고</span>
            </h2>
          </div>
        </Link>
        <Navbar /> {/* Navbar 컴포넌트를 Layout에 추가 */}
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