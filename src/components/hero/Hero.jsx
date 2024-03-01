import React from 'react'
import styles from './Hero.module.css'
import { getImageUrl } from '../../utils'

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Devanshu</h1>
                <p className={styles.description}>
                    Driven Computer Science graduate passionate about crafting innovative solutions. Skilled in coding,
                    problem-solving, and eager to contribute to transformative projects. Ready to embark on a
                    journey of learning and growth in the dynamic world of technology.
                </p>
                <a href="mailto:jaindevanshu236@gmail.com" className={styles.contactBtn}> Contact Me </a>
            </div>
            <img src={getImageUrl("hero/heroSection.png")} alt="Hero image of me" className={styles.heroImg} />
        </section>
    )
}
