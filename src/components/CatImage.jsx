import styles from './CatImage.module.css';

export default function CatImage({ imageUrl }) {
  return (
    <div className={styles.imageWrapper}>
      <img src={imageUrl} alt="Cat" />
    </div>
  );
}