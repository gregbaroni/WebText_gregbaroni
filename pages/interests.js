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

            <section style={{marginBottom:"15px"}} className={styles.section}>
                <section className={styles.textbody1}>
                    <h2 className={styles.sectiontitle}>Video Games</h2>
                    <p>
                        I've been playing video games since I was small, <br></br>
                        and I enjoy most kinds.
                    </p>
                </section>
                <figure style={{paddingTop:"5px"}} className={styles.imagebody1}>
                    <img src="/images/220px-Pikmin_cover_art.jpg" alt="Pikmin cover art" className={styles.boxart}/>
                    <img src="/images/Bloodborne_Cover_Wallpaper.jpg" alt="Bloodborne cover art" style={{marginRight:"80px"}} className={styles.boxart}/>
                    <figcaption style={{paddingRight:"50px"}}className={styles.caption}>Some of my favorite games</figcaption>
                </figure>
            </section>

            <hr></hr>

            <section className={styles.section}>
                <figure className={styles.imagebody2}>
                    <img src="/images/Arenure.png" alt="Map" className={styles.map}/>
                    <figcaption className={styles.caption}>An almost finished map I've made of a homebrew world</figcaption>
                </figure>
                <section className={styles.textbody2}>
                    <h2 className={styles.sectiontitle}>Dungeons and Dragons</h2>
                    <p>
                        I was introduced to D&D by my dad, <br></br>
                        and I've been both a player and a DM.
                    </p>
                </section>
            </section>

            <hr></hr>

            <section className={styles.section}>
                <section className={styles.textbody1}>
                    <h2 className={styles.sectiontitle}>Music</h2>
                    <p>
                        I mostly listen to metal, <br></br>
                        though I also listen to other stuff.
                    </p>
                </section>
                <figure className={styles.imagebody1}>
                    <img src="/images/220px-Megadeth-RustInPeace.jpg" alt="Pikmin cover art" className={styles.albumart}/>
                    <img src="/images/From_Mars_to_Sirius.jpg" alt="Bloodborne cover art" style={{marginRight:"80px"}} className={styles.albumart}/>
                    <figcaption style={{paddingRight:"50px"}}className={styles.caption}>Some bands I enjoy</figcaption>
                </figure>
            </section>

        </div>
    );
}