import styles from './Projects.module.css'
import { LuSwords } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { TiWeatherCloudy } from "react-icons/ti";
import { GiClothes, GiPistolGun } from "react-icons/gi";
import { BsNintendoSwitch } from "react-icons/bs";

function Projects() {
    return (
        <>
            <div className={styles.initialPhrase} id='projetos'>
                <h2>Minhas</h2>
                <h2 className={styles.blue}>Experiências</h2>
            </div>

            <div className={styles.container}>

                {/* Jogador Caro + BUY ME */}
                <div className={styles.two}>

                <div className={styles.one}>
                        <LuSwords size={30} color='#9909f8' />
                        <h3>Jogador Caro</h3>
                        <p>
                            Um Website para usuários poderem jogar e gerenciar partidas de RPG's
                            de Mesa através da Aplicação. Foi feito apenas para ser interface, e é
                            responsivo para celulares
                        </p>
                        <div className={styles.categoria}>
                            <div className={styles.botao}>
                                <span>Front-End</span>
                            </div>
                            <div className={styles.botao}>
                                <span>React</span>
                            </div>
                            <div className={styles.botao}>
                                <span>Vite.js</span>
                            </div>
                        </div>
                        <div className={styles.lado}>
                            <a href='#'>Em Revisão</a>
                        </div>
                    </div>

                    <div className={styles.one}>
                        <GiClothes size={30} color='#1f663f' />
                        <h3>Buy Me</h3>
                        <p>
                            E-Commerce completo para venda de roupas. Front-End feito com React e possui responsividade para celulares
                        </p>
                        <div className={styles.categoria}>
                            <div className={styles.botao}>
                                <span>Front-End</span>
                            </div>
                            <div className={styles.botao}>
                                <span>React</span>
                            </div>
                        </div>
                        <div className={styles.lado}>
                            <a href='#'>Em Desenvolvimento</a>
                        </div>
                    </div>
                </div>
                {/* Jogador Caro + BUY ME */}
                {/* THE WEATHER + FIND YOUR ADRESS */}
                <div className={styles.two}>

                    <div className={styles.one}>
                        <TiWeatherCloudy size={30} color='#0f4ab9' />
                        <h3>The Weather</h3>
                        <p>
                            Página única onde o usuário informa uma cidade e é retornado com
                            a ajuda de uma API o clima dessa respectiva cidade
                        </p>
                        <div className={styles.categoria}>
                            <div className={styles.botao}>
                                <span>Front-End</span>
                            </div>
                            <div className={styles.botao}>
                                <span>API</span>
                            </div>
                        </div>
                        <div className={styles.lado}>
                            <a href='https://api-weather-tau.vercel.app/' target="_blank">Link Projeto</a>
                            <a href='/'>|</a>
                            <a href='https://github.com/GuedesThi/API-Weather' target="_blank">Link GitHub</a>
                        </div>
                    </div>

                    <div className={styles.one}>
                        <MdOutlineEmail size={30} color='#b9ae0f' />
                        <h3>Find Your Adress</h3>
                        <p>
                            SPA onde o usuário informa seu CEP e a API ViaCEP informa o
                            endereço e retorna na tela. Retornando respostas de erro em caso do mesmo
                        </p>
                        <div className={styles.categoria}>
                            <div className={styles.botao}>
                                <span>Front-End</span>
                            </div>
                            <div className={styles.botao}>
                                <span>API</span>
                            </div>
                        </div>
                        <div className={styles.lado}>
                            <a href='https://api-cep-mu.vercel.app/' target="_blank">Link Projeto</a>
                            <a href='/'>|</a>
                            <a href='https://github.com/GuedesThi/API-CEP' target="_blank">Link GitHub</a>
                        </div>
                    </div>
                </div>
                {/* THE WEATHER + FIND YOUR ADRESS */}
                {/* GTA + SUPER MARIO */}
                <div className={styles.two}>

                <div className={styles.one}>
                        <GiPistolGun size={30} color='#272626' />
                        <h3>GTA V</h3>
                        <p>
                            Uma Landing Page para divulgar o game Grand Theft Auto V + GTA Online.
                            Densevolvida para ter responsividade, simplicidade e charme
                        </p>
                        <div className={styles.categoria}>
                            <div className={styles.botao}>
                                <span>Front-End</span>
                            </div>
                        </div>
                        <div className={styles.lado}>
                            <a href='https://gta-v-landing-page.vercel.app/' target="_blank">Link Projeto</a>
                            <a href='/'>|</a>
                            <a href='https://github.com/GuedesThi/GTA-V-Landing-Page' target="_blank">Link GitHub</a>
                        </div>
                    </div>

                    <div className={styles.one}>
                        <BsNintendoSwitch size={30} color='#ee0e0e' />
                        <h3>Super Mario</h3>
                        <p>
                            Representação básica do famoso jogo Super Mario totalmente
                            feito com Front-End básico
                        </p>
                        <div className={styles.categoria}>
                            <div className={styles.botao}>
                                <span>Front-End</span>
                            </div>
                            <div className={styles.botao}>
                                <span>Lógica</span>
                            </div>
                        </div>
                        <div className={styles.lado}>
                            <a href='https://super-mario-murex.vercel.app/' target="_blank">Link Projeto</a>
                            <a href='/'>|</a>
                            <a href='https://github.com/GuedesThi/Super-Mario' target="_blank">Link GitHub</a>
                        </div>
                    </div>
                </div>
                {/* GTA + SUPER MARIO */}

            </div>
                {/* THE WEATHER + FIND YOUR ADRESS */}
                {/* MAKERS POSTS + NOTION CLONE */}
                {/*<div className={styles.projetos}>
                     <div className={styles.projeto}>
                        <PiEngine size={50} color='#124907' />
                        <h3>Makers Posts</h3>
                        <p>
                            Webpage que simula uma página de perfil onde mostra os posts que o usuário
                            curtiu. Todas as informações dos posts foram tiradas de Arrays com Objects
                        </p>

                        <div className={styles.categoria}>
                            <div className={styles.botao}>
                                <p>Front-End</p>
                            </div>
                            <div className={styles.botao}>
                                <p>React</p>
                            </div>
                            <div className={styles.botaoMudar}>
                                <p>Simulação de API</p>
                            </div>
                        </div>

                        <div className={styles.lado}>
                            <a href='https://jogador-caro.vercel.app/' target="_blank">Link Projeto</a>
                            <a href='/'>|</a>
                            <a href='https://jogador-caro.vercel.app/' target="_blank">Link GitHub</a>
                        </div>
                    </div> */}

                    {/* <div className={styles.projeto}>
                        <RiNotionFill size={50} color='#000000' />
                        <h3>Notion Clone</h3>
                        <p>
                            Um clone do famoso Website Notion
                        </p>

                        <div className={styles.categoria}>
                            <div className={styles.botao}>
                                <p>F</p>
                            </div>
                            <div className={styles.botao}>
                                <p>R</p>
                            </div>
                            <div className={styles.botao}>
                                <p>V</p>
                            </div>
                        </div>

                        <div className={styles.lado}>
                            <a href='https://jogador-caro.vercel.app/' target="_blank">Link Projeto</a>
                            <a href='/'>|</a>
                            <a href='https://jogador-caro.vercel.app/' target="_blank">Link GitHub</a>
                        </div>
                    </div>  

                </div>*/}
                {/* MAKERS POSTS + NOTION CLONE */}
                <div className={styles.nada}></div>
        </>
    )
}

export default Projects;