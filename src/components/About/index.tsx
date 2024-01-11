import styles from './About.module.css'

function About() {
    return (
        <div className={styles.container}>

            <div className={styles.inicialPart}>
               <h1 className={styles.hello}>Olá, eu sou o</h1>
                <h1 className={styles.name}>Thiago Guedes</h1> 
                <h1 className={styles.emoji}>👋</h1>
            </div>

            {/*----------------------------------------*/}

            <div className={styles.description}>
                <p>
                    Desenvolvedor de Software Fullstack & estudante de Ciência da Computação.
                    Criador de interfaces acessíveis, com ótima usabilidade e bela aparência. Além de 
                    desenvolver um Back-End lógico, com práticas de código limpo, também implemento 
                    conhecimentos acadêmicos como Algoritmos e Estrutura de Dados para criar uma Aplicação
                    que seja escalável
                </p>
            </div>

            {/*----------------------------------------*/}

            <div className={styles.half}>
                    <h2>Mais</h2>
                    <h2 className={styles.blue}>Sobre Mim</h2>
            </div>

            <div className={styles.aboutMe}>
                <div className={styles.left}>
                    <img src="assets/foto.jpg" />
                </div>
                <div className={styles.right}>
                    <p>
                        Desenvolvo Aplicações desde que descobri programação em 2022. Daquele tempo até hoje
                        já estudei um pouco de várias áreas como Mobile, Games, Data Science, etc.
                    </p>
                    <p>
                        Porém, por conta da faculdade de Ciência da Computação voltei a dar mais foco em
                        Desenvolvimento Web. Então comecei a estudar tecnologias da área como React, Node.js, 
                        Express.js, Next.js, Django, JavaScript e Python
                    </p>
                    <p>
                        Mas além disso, desenvolvi habilidades voltadas para a eficiência da Aplicação, como: eficiência
                        de Algoritmos, Manipulação e Estrutura de Dados, carregamento de arquivos estáticos, etc.
                    </p>
                    <p>
                        Sou bom em equipe, sempre gostando de me comunicar com as pessoas (ainda mais se elas sabem algo que
                        eu não sei, principalmente em programação), sou dedicado, esforçado e criativo. Mas, além de tudo isso, eu amo o que eu faço.
                    </p>
                    <p>
                        Esse sou eu.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;