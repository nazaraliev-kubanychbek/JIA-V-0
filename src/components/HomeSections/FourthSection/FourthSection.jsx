import styles from './FourthSection.module.scss';
import {motion} from 'framer-motion';

const firstTextAnimation = {
    hidden : {
        x: -200,
        opacity: 0,
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * .5 },
    }),
}

const secondTextAnimation = {
    hidden : {
        x: 200,
        opacity: 0,
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * .5 },
    }),
}

export const FourthSection = () => {
    return (
        <section className={styles.container}>
            <div className={styles.whiteBlock}>

                <div className={styles.blockVideo}>
                    <motion.div 
                        initial='hidden'
                        whileInView='visible'
                        className={styles.text}
                    >
                        <motion.h2 variants={firstTextAnimation} custom={1}>BIF 2022</motion.h2>
                        <motion.p variants={firstTextAnimation} custom={2}>
                            Lorem ipsum dolor sit amet consectetur. Ac sed orci dignissim neque augue porta. Ac sed orci dignissim neque augue porta.
                        </motion.p>
                    </motion.div>
                    <div className={styles.video}>
                        <iframe src="https://www.youtube.com/embed/4eKREu1wceI?si=PEQZzxAoyNYwH1cX" frameborder="0" title="YouTube video player" ></iframe>
                    </div>
                </div>

                <div className={styles.blockVideo}>
                    <div className={styles.video}>
                        <iframe src="https://www.youtube.com/embed/4eKREu1wceI?si=PEQZzxAoyNYwH1cX" frameborder="0" title="YouTube video player" ></iframe>
                    </div>
                    <motion.div
                        initial='hidden'
                        whileInView='visible'
                        className={styles.text}
                    >
                        <motion.h2 variants={secondTextAnimation} custom={1}>Green Economy 2022</motion.h2>
                        <motion.p variants={secondTextAnimation} custom={1}>
                            Lorem ipsum dolor sit amet consectetur. Ac sed orci dignissim neque augue porta. Ac sed orci dignissim neque augue porta.
                        </motion.p>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}

