import styles from "./page.module.css";
import City from "@/components/city/city.js";

export default function Home() {
  const cities = [
    { name: "New York", image: "/images/new-york.jpg", country: "USA" },
    { name: "Los Angeles", image: "/images/los-angeles.jpg", country: "USA" },
    { name: "Chicago", image: "/images/chicago.jpg", country: "USA" },
    { name: "Houston", image: "/images/houston.jpg", country: "USA" },
  ];

  const cityCards = cities.map((city, index) => (
    <City name={city.name} country={city.country} key={city.name} />
  ));

  return (
    <div className={styles.page}>
    <h1>Cities</h1>
    <div>{cityCards}</div>
    </div>
  );
}
