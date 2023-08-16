import Image from "next/image";
import Link from "next/link";
import style from "./NavBar.module.css";
const NavBar = () => {
  return (
    <div className={style.nav}>
      <Image
        src="/logo.svg"
        width={150}
        height={150}
        alt={"my space logo"}
        className={style.logo}
      />
      <ul className={style.links}>
        <li>
          <Link href={"/"} className={style.link}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className={style.link}>
            About
          </Link>
        </li>
        <li>
          <Link href="/blog" className={style.link}>
            Blog
          </Link>
        </li>
        <li>
          <Link href="/users" className={style.link}>
            Users
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
