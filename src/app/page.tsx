import styles from './home.module.css';
import Image from 'next/image';

export default function Home() {

    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Creative Thoughts Agency</h1>
                <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores illum molestiae quisquam
                    repudiandae! Asperiores assumenda earum fugit, inventore labore omnis placeat praesentium quaerat
                    quasi ratione repellendus repudiandae totam, voluptas. Eum!
                </p>
                <div className={styles.buttons}>
                    <div className={styles.button}>Learn More</div>
                    <div className={styles.button}>Contact</div>
                </div>
                <div className={styles.brands}>
                    <Image src="/brands.png" alt="" fill className={styles.brandImg}/>
                </div>
            </div>
            <div className={styles.imgContainer}>
                <Image src="/test.gif" alt="" fill className={styles.heroImg}/>
            </div>
        </div>
    );
}
