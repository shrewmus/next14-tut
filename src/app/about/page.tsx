import styles from './about.module.css';
import Image from 'next/image';

export default function AboutPage() {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.textContainer}>
                    <h2 className={styles.subtitle}>About Agency</h2>
                    <h1 className={styles.title}>We create digital ideas that are bigger, bolder, braver and better</h1>
                    <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci doloribus earum eligendi
                        expedita explicabo iure labore magni maxime minima minus natus numquam obcaecati quas quidem
                        ratione saepe sapiente sed, voluptatum?
                    </p>
                    <div className={styles.boxes}>
                        <div className={styles.box}>
                            <h1>10 K+</h1>
                            <p>Year of experience</p>
                        </div>
                        <div className={styles.box}>
                            <h1>10 K+</h1>
                            <p>Year of experience</p>
                        </div>
                        <div className={styles.box}>
                            <h1>10 K+</h1>
                            <p>Year of experience</p>
                        </div>

                    </div>
                </div>
                <div className={styles.imgContainer}>
                    <Image src="/about.png" alt="About image" fill className={styles.img}/>
                </div>
            </div>
        </div>
    );
}
