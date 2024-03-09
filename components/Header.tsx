import Image from "next/image";
import logo from "@/public/images/logo.png";
import logo2 from "@/public/images/logo2.png";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoBagRemoveOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { IoChevronDownSharp } from "react-icons/io5";
import styles from "./Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className={styles.container1}>
        <div className={styles.logocontainer}>
          <Image src={logo} height={40} width={40} alt="logo1" />
        </div>
        <div className={styles.logocontainer2}>
          <Image src={logo2} height={40} width={100} alt="logo1" />
        </div>
        <div className={styles.actions}>
          <CiSearch size={"2em"} />
          <CiHeart size={"2em"} />
          <IoBagRemoveOutline size={"2em"} />
          <CiUser size={"2em"} />
          <div className={styles.langauge}>
            <div>ENG</div>
            <IoChevronDownSharp size={"1.8em"} />
          </div>
        </div>
      </div>
      <div className={styles.mobilelinks}>
        <div className={styles.unactive}>HOME |</div>
        <div className={styles.active}>SHOP</div>
      </div>
      <div className={styles.container2}>
        <ul className={styles.links}>
          <Link href={""}>
            <li className={styles.link}>SHOP</li>
          </Link>
          <Link href={""}>
            <li className={styles.link}>SKILLS</li>
          </Link>
          <Link href={""}>
            <li className={styles.link}>STORIES</li>
          </Link>
          <Link href={""}>
            <li className={styles.link}>ABOUT</li>
          </Link>
          <Link href={""}>
            <li className={styles.link}>CONTACT US</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Header;
