import { DiHtml5, DiCss3, DiJsBadge, DiReact, DiNodejs, DiGit, DiGithubBadge, DiPython, DiDjango, DiMysql } from "react-icons/di";
import { SiNextdotjs, SiTailwindcss, SiMicrosoftexcel, SiExpress, SiNotion, SiFigma } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { FaWordpress } from "react-icons/fa";
import { GiComputing } from "react-icons/gi";
import styles from './Skills.module.css'

function Skills() {
    return (
        <>
            <div className={styles.title} id="habilidades">
                <h2>Minhas</h2>
                <h2 className={styles.blue}>Habilidades/Skills</h2>
            </div>

            
            <div className={styles.container}>

                {/* FRONT-END */}
                <h2 className={styles.blueTwo}>Front-End</h2>
                <div className={styles.categoric}>

                    {/* HTML5 + CSS3 */}
                    <div className={styles.two}>
                        <div className={styles.one}>
                            <DiHtml5 color='#FE572A' size={70}/>
                            <span>HTML5</span>
                        </div>
                        <div className={styles.one}>
                            <DiCss3 color='blue' size={70}/>
                            <span>CSS3</span>
                        </div>
                    </div>
                    {/* HTML5 + CSS3 */}
                    {/* JAVASCRIPT + TYPESCRIPT */}
                    <div className={styles.two}>
                        <div className={styles.one}>
                            <DiJsBadge color='#F7DF1D' size={60}/>
                            <span className={styles.javascript}>JavaScript</span>
                        </div>
                        <div className={styles.one}>
                            <BiLogoTypescript color='#2F78C5' size={70}/>
                            <span className={styles.typescript}>TypeScript</span>
                        </div>
                    </div>
                    {/* JAVASCRIPT + TYPESCRIPT */}
                    {/* REACT + TAILWINDCSS */}
                    <div className={styles.two}>
                        <div className={styles.one}>
                            <DiReact color='#00eeee' size={70}/>
                            <span className={styles.react}>React</span>
                        </div>
                        <div className={styles.one}>
                            <SiTailwindcss color='#05c5ff' size={60}/>
                            <span className={styles.tailwindcss}>TailwindCss</span>
                        </div>
                    </div>
                    {/* REACT + TAILWINDCSS */}
                    {/* GIT + GITHUB */}
                    <div className={styles.two}>
                        <div className={styles.one}>
                            <DiGit color='#DE4C36' size={70}/>
                            <span className={styles.react}>Git</span>
                        </div>
                        <div className={styles.one}>
                            <DiGithubBadge color='#000000' size={70}/>
                            <span className={styles.tailwindcss}>GitHub</span>
                        </div>
                    </div>
                    {/* GIT + GITHUB */}
                </div>
                {/* FRONT-END */}
                {/* BACK-END */}
                <h2 className={styles.blueTwo}>Back-End</h2>
                <div className={styles.categoric}>

                    {/* PYTHON + DJANGO */}
                    <div className={styles.two}>
                        <div className={styles.one}>
                            <DiPython color='#0277BC' size={70}/>
                            <span className={styles.python}>Python</span>
                        </div>
                        <div className={styles.one}>
                            <DiDjango color='#0F3E2E' size={60}/>
                            <span className={styles.django}>Django</span>
                        </div>
                    </div>
                    {/* PYTHON + DJANGO */}
                    {/* EXPRESS.JS + NEXT.JS */}
                    <div className={styles.two}>
                        <div className={styles.one}>
                            <SiExpress color='#0e0e0e' size={60}/>
                            <span className={styles.express}>Express.js</span>
                        </div>
                        <div className={styles.one}>
                            <SiNextdotjs color='#000000' size={55}/>
                            <span className={styles.next}>Next.js</span>
                        </div>
                    </div>
                    {/* EXPRESS.JS + NEXT.JS */}
                    {/* NODE.JS */}
                    <div className={styles.two}>
                        <div className={styles.one}>
                            <DiNodejs color='#14ce23' size={70}/>
                            <span className={styles.node}>Node.js</span>
                        </div>
                    </div>

                </div>
                {/* BACK-END */}
                {/* ACADEMICO */}
                <h2 className={styles.blueTwo}>Conhecimentos Acadêmicos</h2>
                <div className={styles.categoric}>

                    {/* BIG O + ALGORITMOS */}
                    <div className={styles.two}>
                        <div className={styles.one}>
                            <GiComputing color='#0e0e0e' size={60}/>
                            <span className={styles.algoritmos}>Algoritmos</span>
                        </div>
                        <div className={styles.one}>
                            <div className={styles.bigO}>
                                <h1 className={styles.big}>Big</h1>
                                <h1 className={styles.o}>O</h1> 
                            </div>
                            <span className={styles.notation}>Big O Notation</span>
                        </div>
                    </div>
                    {/* BIG O + ALGORITMOS */}
                    {/* ESTRUTURA DE DADOS + */}
                </div>
                {/* ACADEMICO */}
                {/* SOFTWARES */}
                <h2 className={styles.blueTwo}>Softwares</h2>
                <div className={styles.categoric}>

                    {/* NOTION + FIGMA */}
                    <div className={styles.two}>
                        <div className={styles.one}>
                            <SiNotion color='#0e0e0e' size={56}/>
                            <span className={styles.express}>Notion</span>
                        </div>
                        <div className={styles.one}>
                            <SiFigma color='#DE4C36' size={57}/>
                            <span className={styles.next}>Figma</span>
                        </div>
                    </div>
                    {/* NOTION + FIGMA */}
                    {/* WORDPRESS + EXCEL */}
                    <div className={styles.two}>
                        <div className={styles.one}>
                            <FaWordpress color='#0087BE' size={60}/>
                            <span className={styles.express}>WordPress</span>
                        </div>
                        <div className={styles.one}>
                            <SiMicrosoftexcel color='#01723A' size={57}/>
                            <span className={styles.next}>Excel</span>
                        </div>
                    </div>
                    {/* WORDPRESS + EXCEL */}
                    {/* MYSQL */}
                    <div className={styles.two}>
                        <div className={styles.one}>
                            <DiMysql color='#056e97' size={70}/>
                            <span className={styles.node}>MySQL</span>
                        </div>
                    </div>
                    {/* MYSQL */}

                </div>
                {/* SOFTWARES */}
            </div>
        </>
    )
}

export default Skills;