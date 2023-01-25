/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.leftBox}>
        <div className={styles.navbar}>
          <img src="logo.svg" alt="logo"></img>
        </div>
        <div className={styles.imageContainer}></div>
        <div className={styles.subscriptionContainer}>
          <h1 className={styles.heading}>
            <span className={styles.headerStart}>WE'RE </span>
            <span className={styles.headerEnd}>COMING SOON</span>
          </h1>
          <span className={styles.description}>
            Hello fellow shoppers! We are currently building our new new fashion
            store. Add your email below to stay up-to-date with announcements
            andand our launch deals
          </span>
          <div className={styles.inputContainer}>
            <input
              type="email"
              placeholder="Email Address"
              className={styles.emailInput}
            ></input>
            <button className={styles.submitButton}></button>
          </div>
        </div>
      </div>
      <div className={styles.rightBox}>mxasnxjasnx</div>
    </main>
  );
}
