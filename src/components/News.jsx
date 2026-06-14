import styles from "../styles/news.module.css";

export default function News() {
  const articles = [
    {
      title: "MERIST Trust Launches Education Program in Nellikuppam",
      tag: "Education",
      image: "/images/Trust/one.jpeg",
    },
    {
      title: "Rural Development Initiative Benefits 500+ Families",
      tag: "Rural Development",
      image: "/images/Trust/five.jpeg",
    },
    {
      title: "Health & Welfare Camp Conducted in Cuddalore District",
      tag: "Health & Welfare",
      image: "/images/Trust/nine.jpeg",
    },
  ];

  return (
    <section className={styles.news}>
      <h2>Latest News & Updates</h2>
      <div className={styles.grid}>
        {articles.map((article, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.imageWrapper}>
              <img src={article.image} alt={article.title} />
            </div>
            <div className={styles.content}>
              <span className={styles.tag}>{article.tag}</span>
              <h4>{article.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

