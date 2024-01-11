import styles from './Books.module.css'

function Books() {
    return (
        <>
            <div className={styles.initialPhrase}>
                <h2>Livros Que</h2>
                <h2 className={styles.blue}>Já Li</h2>
            </div>
            
            <div className={styles.container}>
                <div className={styles.description}>
                    <p>
                        Além de conseguir conhecimentos com cursos onlines e com a faculdade,
                        eu também consegui muitos conhecimentos com livros da área, como:
                    </p>
                </div>

                <div className={styles.containerBooks}></div>
            </div>
        </>
        
    )
}

export default Books;