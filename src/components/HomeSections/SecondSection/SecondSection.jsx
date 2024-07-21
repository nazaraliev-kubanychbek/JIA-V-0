import { useEffect, useState } from 'react';
import styles from './SecondSection.module.scss';

export const SecondSection = () => {

    const [ currVal1, setCurrVal1 ] = useState(0);
    const [ currVal2, setCurrVal2 ] = useState(90);
    const [ currVal3, setCurrVal3 ] = useState(0);

    const val1 = 20;
    const time = 40; 
    const val2 = 198;
    const time1 = 10;
    const val3 = 44;

     useEffect(() => {
        currVal1 !== val1 && setTimeout(setCurrVal1, time, currVal1 + 1);
        currVal2 !== val2 && setTimeout(setCurrVal2, time1, currVal2 + 1);
        currVal3 !== val3 && setTimeout(setCurrVal3, time, currVal3 + 1);
    }, [ currVal1, currVal2, currVal3 ]);


    return (
        <section className={styles.container}>
            <h2>О форуме</h2>
            <p>
                Бишкекский Инвестиционный Форум - площадка для взаимодействия МСБ с крупными компаниями, инвесторами, парламентариями и представителями международных организаций. С 2015 года в рамках BIF были презентованы десятки перспективных бизнес-проектов, которые привлекли инвестиции.
            </p>

            <div className={styles.flexItems}>
                <div className={styles.item}>
                    <h3>{currVal1}<span>млн $</span></h3>
                    <p>Общая сумма привлеченных инвестиций</p>
                </div>
                <div className={styles.item}>
                    <h3>{currVal2}</h3>
                    <p>Количество проектов попавших в каталог</p>
                </div>
                <div className={styles.item}>
                    <h3>{currVal3}</h3>
                    <p>Количество чемпионов проектов, представленных на форуме </p>
                </div>
            </div>

            <button className={styles.button}>Подать проект на BIF 2024</button>
        </section>
    );
}
