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
        <h1 className={styles.title}>
          Welcome to the Title Page
        </h1>

        <p className={styles.description}>
        My name is Greg and this website exists.
        </p>
      </main>

    </div>
  )
}
