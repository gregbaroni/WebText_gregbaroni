import React from "react";
import AppNavbar from '../components/AppNavbar.js'
import styles from '../styles/myStyle.module.css'

export default function interests() {

    return (
        <div>
            <AppNavbar />

            <main>
                <h1 className={styles.subtitle}>About Me</h1>
            </main>

            <section className={styles.section}>
                <section className={styles.textbody1}>
                    <p className={styles.description}>
                        My name is Greg Baroni
                    </p>
                    <ul>
                        <li style={{padding:"10px"}}>I'm a 3rd year CS major at UCSB</li>
                        <li style={{padding:"10px"}}>I'm a 3rd year CS major at UCSB</li>
                        <li style={{padding:"10px"}}>I'm a 3rd year CS major at UCSB</li>
                        <li style={{padding:"10px"}}>I'm a 3rd year CS major at UCSB</li>
                    </ul>
                    <p className={styles.description}>
                        My name is Greg Baroni
                    </p>
                </section>
                <picture className={styles.imagebody1}>
                    
                </picture>
            </section>
        </div>
    );
}