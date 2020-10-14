import React from "react";
import AppNavbar from '../components/AppNavbar.js'
import Image from "react-bootstrap/Image";
import styles from '../styles/myStyle.module.css'

export default function interests() {

    return (
        <div>
            <AppNavbar />

            <main>
                <h1 className={styles.subtitle}>Interests</h1>
            </main>

            <section className={styles.section}>
                <section className={styles.textbody1}>
                    <h2 className={styles.sectiontitle}>Video Games</h2>
                    <p>
                        I like video games
                        asdfsaasdfasdfasdfasdfasdfasdfasdfsadf
                        asdfasdfaaaaaaaaaaaaaa
                        <br></br>
                        asdfasdfsa
                        asdfasdf
                    </p>
                </section>
                <picture className={styles.imagebody1}>
                    <img src="/images/220px-Pikmin_cover_art.jpg" alt="Pikmin cover art" className={styles.boxart}/>
                    <img src="/images/Bloodborne_Cover_Wallpaper.jpg" alt="Bloodborne cover art" style={{marginRight:"80px"}} className={styles.boxart}/>
                </picture>
            </section>



            <hr></hr>

            <section className={styles.section}>
                <picture className={styles.imagebody2}>
                    <img src="/images/Arenure.png" alt="Map" className={styles.map}/>
                </picture>
                <section className={styles.textbody2}>
                    <h2 className={styles.sectiontitle}>Dungeons and Dragons</h2>
                    <p>
                        I like video games
                        asdfsaasdfasdfasdfasdfasdfasdfasdfsadf
                        asdfasdfaaaaaaaaaaaaaa
                        <br></br>
                        asdfasdfsa
                        asdfasdf
                    </p>
                </section>
            </section>

        </div>
    );
}