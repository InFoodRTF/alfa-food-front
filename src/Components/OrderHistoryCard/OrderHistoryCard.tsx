import React from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import styles from "./OrderHistoryCard.module.css"
export class OrderHistoryCard extends React.Component {
    render() {
        return (
            <Container className={styles.OrderHistoryContainer}>
                <Card className={styles.OrderHistoryCard}>
                    <Card.Body>
                        <Card.Title className={styles.Title}>Заказ №12341</Card.Title>
                        <Card.Text><h4 className={styles.Subtitle}>Дата:</h4><p>30.01.2023</p></Card.Text>
                        <Card.Text><h4 className={styles.Subtitle}>Заказчик: </h4>Иванов П. И. </Card.Text>
                        <Card.Text><h4 className={styles.Subtitle}>Ребенок: </h4>Иванов И. П. 10 “А” класс</Card.Text>
                        <Card.Text><h4 className={styles.Subtitle}>Состав заказа: </h4></Card.Text>
                        <Card.Text>
                            <h4 className={styles.Subtitle}>Завтрак: </h4>
                            <div className = {styles.CardText}>
                                <p>Каша овсяная</p>
                                <p>1шт</p>
                                <p>50 руб</p>
                            </div>
                            <div className = {styles.CardText}>
                                <p>Бутерброд</p>
                                <p>1шт</p>
                                <p>30 руб</p>
                            </div>
                            <div className = {styles.CardText}>
                                <p>Чай черный</p>
                                <p>1шт</p>
                                <p>15 руб</p>
                            </div>
                        </Card.Text>
                        <Card.Text>
                            <h4 className={styles.Subtitle}>Обед: </h4>
                            <p>Каша овсяная 1шт 50 руб</p>
                            <p>Бутерброд 1шт 30 руб</p>
                        </Card.Text>

                        <Card.Text>
                            <h4 className={styles.Subtitle}>Итого: 195 рублей</h4>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        )
    }
}
