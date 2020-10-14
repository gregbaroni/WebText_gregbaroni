import Head from 'next/head'
import React from "react";
import AppNavbar from '../components/AppNavbar.js'
import styles from '../styles/myStyle.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>WebText: Greg Baroni</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppNavbar />

      <main className={styles.main}>
        <h1 style={{paddingLeft:"18px"}} className={styles.title}>
          Welcome to the Title Page
        </h1>

        <figure style={{paddingTop:"25px"}}>
          <img src="/images/IMG_0270.jpg" alt="A photo of me" className={styles.photo}/>
          <figcaption className={styles.caption}>A photo of me</figcaption>    
        </figure>

        <p className={styles.description}>
          My name is Greg and this is my website.
        </p>
      </main>

    </div>
  )
}
