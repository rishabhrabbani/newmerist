import { useEffect, useState } from "react";
import styles from "../styles/gallery.module.css";

const ITEMS_PER_PAGE = 6;
const AUTO_ROTATE_MS = 5000;

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetch("/data/gallery.json")
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);

  const totalPages = Math.ceil(images.length / ITEMS_PER_PAGE);
  const currentImages = images.slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE);

  // Auto-rotate
  useEffect(() => {
    if (totalPages <= 1) return;
    const timer = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, AUTO_ROTATE_MS);
    return () => clearInterval(timer);
  }, [totalPages]);

  return (
    <section className={styles.gallery}>
      <p className={styles.subtitle}>Dynamic Gallery</p>
      <h2>Our Work in Action</h2>
      <p className={styles.description}>
        Sophisticated, responsive grid of high-quality photos.
        <br />
        Loaded from JSON via a managed admin panel.
      </p>

      <div className={styles.grid}>
        {currentImages.map((item) => (
          <div className={styles.card} key={item.id}>
            <img src={item.image} alt={item.title} />
            <div className={styles.cardOverlay}>
              <h4>{item.title}</h4>
              <p>{item.location}</p>
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className={styles.dots}>
          {Array.from({ length: totalPages }).map((_, i) => (
            <div
              key={i}
              className={`${styles.dot} ${i === page ? styles.activeDot : ""}`}
              onClick={() => setPage(i)}
              style={{ cursor: "pointer" }}
            />
          ))}
        </div>
      )}

    </section>
  );
}
