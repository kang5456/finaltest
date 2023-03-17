import Link from "next/link";
import styles from "../styles/Navbar.module.css"; // CSS 파일을 import 합니다.

export default function Navbar() {
  return (
    <nav className={styles.navbar}> {/* 추가한 CSS 클래스를 적용합니다. */}
      <ul className={styles.navList}> {/* 추가한 CSS 클래스를 적용합니다. */}
        <li>
          <Link href="/">아이언플래그</Link>
        </li>
        <li>
          <Link href="/about">인사이트</Link>
        </li>
        <li>
          <Link href="/contact">B.TechFin</Link>
        </li>
        <li>
          <Link href="/info">언론</Link>
        </li>
      </ul>
    </nav>
  );
}
