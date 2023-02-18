import styles from "./Shared.module.scss";
import Card from "react-bootstrap/Card";

const Footer = () => {
  return (
    <>
        <Card className={styles.footer1}>
          <Card.Title className={styles.title}>All rights reserved</Card.Title>
        </Card>
    </>
  );
};

export default Footer;

