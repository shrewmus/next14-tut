import styles from './contact.module.css';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="" fill className={styles.img}/>
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and surname"/>
          <input type="email" placeholder="Email address"/>
          <input type="text" placeholder="Phone number (Optional)"/>
          <textarea placeholder="Message"></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
}
