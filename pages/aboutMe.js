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
                    <ul style={{textAlign:"left"}}>
                        <li style={{padding:"10px"}}>I'm a 3rd year CS major at UCSB</li>
                        <li style={{padding:"10px"}}>I live near Los Angeles, CA</li>
                        <li style={{padding:"10px"}}>I'm a middle child with two brothers and a sister</li>
                        <li style={{padding:"10px"}}>I'd describe myself as describable</li>
                    </ul>
                    <p className={styles.description}>
                        I look forward to seeing how things go this quarter
                    </p>
                </section>
                <figure className={styles.imagebody1}>
                    <img src="/images/220px-Pikmin_cover_art.jpg" alt="Pikmin cover art" className={styles.boxart}/>
                    <figcaption style={{paddingRight:"50px"}}className={styles.caption}>Photo of UCSB, because I don't know what to put here</figcaption>
                </figure>
            </section>
        </div>
    );
}