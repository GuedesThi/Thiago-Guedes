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

                <div className={styles.containerBooks}>
                    {/* CIÊNTISTA DA COMPUTAÇÃO AUTODIDATA */}
                    <div className={styles.two}>
                        <div className={styles.book}>
                            <img src='assets/autodidata.jpg'/>
                        </div>
                        <div className={styles.division}></div>
                        <div className={styles.sinopse}>
                            <p>
                                Com esse livro obtive conhecimentos como: o que é um algoritmo, 
                                tipos de Estrutura de Dados e como implementá-las, o que é e como 
                                usar BigO notation nos meus algoritmos, pesquisa em Estrutura de Dados,
                                etc.
                            </p>
                        </div>
                    </div>
                    {/* CIÊNTISTA DA COMPUTAÇÃO AUTODIDATA */}
                    {/* ENTENDENDO ALGORITMOS */}
                    <div className={styles.two}>
                        <div className={styles.book}>
                            <img src='assets/algoritmos.jpg'/>
                        </div>
                        <div className={styles.division}></div>
                        <div className={styles.sinopse}>
                            <p>
                                Com esse livro (um dos mais famosos da área de programação) obtive conhecimentos como: estudo mais afundo sobre algoritmos, 
                                tipos de pesquisa em Estrutura de Dados, tipos de Estruturas, etc.
                            </p>
                        </div>
                    </div>
                    {/* ENTENDENDO ALGORITMOS */}
                </div>
            </div>
        </>
        
    )
}

export default Books;