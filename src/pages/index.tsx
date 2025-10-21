import Header from "@/components/header";
import { FaRegHandshake } from "react-icons/fa";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { PiSuitcaseSimple } from "react-icons/pi";
import { AiOutlinePicture } from "react-icons/ai";
import Footer from "@/components/footer";


export default function Home() {
  return (
    <main className="w-full font-poppins flex flex-col">
      <Header/>
      <div className="lg:justify-center  flex flex-col gap-6 items-center">
        <div className="w-full">
          <div className="bg-azul flex justify-center">
            <div className="w-full max-w-[1440px] p-4 lg:px-[96px] lg:py-[202px]">
              <div className="lg:max-w-[752px] flex flex-col justify-start gap-6">
                <div className="flex flex-col gap-4 text-white">
                  <p className="text-[26px] lg:text-[40px] leading-[32px] lg:leading-[52px]">
                    Estratégia, Inovação e Impacto. Transforme o futuro da sua empresa com consultoria especializada e insights de liderança.
                  </p>
                  <p className="text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px] lg:max-w-[612px]">
                    Entre em contato para consultorias estratégicas, conselhos executivos ou convites para palestras e aulas.
                  </p>
                </div>
                <div className="flex flex-col gap-6">
                  <a href="" className="bg-white hover:bg-azul-claro flex items-center justify-center border-azul text-azul px-4 py-3 rounded-[4px]">
                    Entrar em Contato
                  </a>
                  <a href="" className="bg-azul hover:bg-white flex items-center justify-center border border-white text-white hover:text-azul px-4 py-3 rounded-[4px]">
                    Saber mais
                  </a>
                </div>
              </div>

            </div>
          </div>
          <div className="bg-white flex justify-center">
            <div className="w-full max-w-[1440px] p-4 lg:px-[96px] flex flex-col gap-8">
              <div className="flex flex-col justify-center items-center gap-[32px]">
                <p className="text-[32px] leading-[40px] flex text-center text-azul">
                  Saiba como eu posso te ajudar
                </p>
                <div className="flex flex-col lg:flex-row w-full gap-[24px]">
                  <div className="flex flex-col items-center text-center border border-cinza-borda p-4 gap-4 rounded-[12px] outline outline-1 outline-gray-300">
                    <div className="p-[22px]">
                      <PiSuitcaseSimple className="text-azul w-[44px] h-[44px]"/>
                    </div>
                    <p className="text-azul text-[22px] leading-[32px]">Consultoria Estratégica</p>
                    <p className="text-center text-preto text-[16px] leading-[24px]">Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam mauris sed ma</p>
                  </div>
                  <div className="flex flex-col items-center text-center border border-cinza-borda p-4 gap-4 rounded-[12px] outline outline-1 outline-gray-300">
                    <div className="p-[22px]">
                      <FaRegHandshake className="text-azul w-[44px] h-[44px]"/>
                    </div>
                    <p className="text-azul text-[22px] leading-[32px]">Convites</p>
                    <p className="text-center text-preto text-[16px] leading-[24px]">Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam mauris sed ma</p>
                  </div>
                  <div className="flex flex-col items-center text-center border border-cinza-borda p-4 gap-4 rounded-[12px] outline outline-1 outline-gray-300">
                    <div className="p-[22px]">
                      <HiOutlineChatBubbleLeftRight className="text-azul w-[44px] h-[44px]"/>
                    </div>
                    <p className="text-azul text-[22px] leading-[32px]">Consultoria Estratégica</p>
                    <p className="text-center text-preto text-[16px] leading-[24px]">Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam mauris sed ma</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-6 lg:flex-row-reverse">
                <div className="flex flex-col">
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col">
                      <p className="text-azul text-[16px] leading-[24px]">Sobre mim</p>
                      <p className="text-azul text-[26px] leading-[32px] lg:text-[32px] lg:leading-[40px]">Conheça Marcos Silva - Consultoria pessoal para mudar o que precisa</p>
                    </div>
                    <p className="text-azul text-[16px] leading-[24px] lg:leading-[22px]">
                      Sou Marcos Paulo Silva, um líder com formação em Administração pela UFRRJ (2004)
                      e uma carreira sólida, focada em tecnologia, gestão estratégica e inovação.<br /><br />
                      Como CIO (Chief Information Officer), lidero a visão e execução de projetos que estão
                      ativamente moldando o futuro de nossa empresa.
                    </p>
                  </div>
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col pt-6">
                      <p className="text-azul text-[22px] leading-[32px]">Conhecimento e Compartilhamento</p>
                    </div>
                    <p className="text-azul text-[16px] leading-[24px]">
                      Com o objetivo de multiplicar o conhecimento adquirido ao longo de minha trajetória, dedico parte do meu tempo a palestras e aulas acadêmicas. Nesses espaços, abordo temas cruciais para o sucesso no cenário atual:
                    </p>
                    <ul className="list-disc pl-5 pb-6 text-azul text-[16px] leading-[24px]">
                      <li><span className="font-semibold">Liderança</span></li>
                      <li><span className="font-semibold">Administração de Negócios</span></li>
                      <li><span className="font-semibold">O Futuro da Tecnologia</span></li>
                    </ul>
                  </div>
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="border border-azul flex flex-col rounded-[6px] items-center p-4">
                      <p className="text-azul text-[32px] leading-[40px]">34+</p>
                      <p className="text-azul text-[20px] leading-[28px]">Anos de experiência</p>
                    </div>
                    <div className="border border-azul flex flex-col rounded-[6px] items-center p-4">
                      <p className="text-azul text-[32px] leading-[40px]">200+</p>
                      <p className="text-azul text-[20px] leading-[28px]">Projetos finalizados</p>
                    </div>
                    <div className="border border-azul flex flex-col rounded-[6px] items-center p-4">
                      <p className="text-azul text-[32px] leading-[40px]">97%</p>
                      <p className="text-azul text-[20px] leading-[28px]">Clientes satisfeitos</p>
                    </div>
                  </div>
                </div>

                <div className="flex w-full lg:max-w-[402px] justify-center">
                    <img className="flex lg:hidden" src="/img_perfil.svg" alt="" />
                    <img className="lg:flex hidden" src="/img_perfil_desktop.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-azul flex justify-center">
            <div className="w-full max-w-[1440px] p-4 lg:px-[96px] bg-azul flex flex-col gap-8 justify-center">
              <div className="flex flex-col w-full max-w-[827px] gap-6 ">
                <p className="text-[32px] leading-[40px] text-white">Projetos de Destaque</p>
                <p className="text-[20px] leading-[28px] text-white">Uma curadoria de trabalhos que me desafiaram e definiram minha trajetória. Veja como transformo ideias em realidade com excelência.</p>
              </div>
              <div className="flex flex-col gap-[22px]">
                <div className="flex gap-6 bg-white px-[26px] py-[34px] rounded-[6px]">
                  <img src="/Icon.svg"  className="w-[60px] h-[60px]" />
                  <div className="flex flex-col gap-4">
                    <p className="text-[22px] leading-[32px] text-azul">Web design</p>
                    <p className="text-[16px] leading-[22px] text-azul">Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar elemen tempus hac dolor sit amet.</p>
                  </div>
                </div>
                <div className="flex gap-6 bg-white px-[26px] py-[34px] rounded-[6px]">
                  <img src="/Icon.svg"  className="w-[60px] h-[60px]" />
                  <div className="flex flex-col gap-4">
                    <p className="text-[22px] leading-[32px] text-azul">Web design</p>
                    <p className="text-[16px] leading-[22px] text-azul">Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar elemen tempus hac dolor sit amet.</p>
                  </div>
                </div>
                <div className="flex gap-6 bg-white px-[26px] py-[34px] rounded-[6px]">
                  <img src="/Icon.svg"  className="w-[60px] h-[60px]" />
                  <div className="flex flex-col gap-4">
                    <p className="text-[22px] leading-[32px] text-azul">Web design</p>
                    <p className="text-[16px] leading-[22px] text-azul">Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar elemen tempus hac dolor sit amet.</p>
                  </div>
                </div>
                <div className="flex gap-6 bg-white px-[26px] py-[34px] rounded-[6px]">
                  <img src="/Icon.svg"  className="w-[60px] h-[60px]" />
                  <div className="flex flex-col gap-4">
                    <p className="text-[22px] leading-[32px] text-azul">Web design</p>
                    <p className="text-[16px] leading-[22px] text-azul">Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar elemen tempus hac dolor sit amet.</p>
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-center text-center">
                <a href="" className="bg-azul-claro text-white w-full max-w-[524px] py-3 rounded-[4px]">
                  Entrar em contato agora
                </a>
              </div>
            </div>
          </div>
          <div className="bg-[#EFF6FF] flex justify-center">
            <div className="w-full max-w-[1440px] p-4 lg:px-[96px] flex flex-col gap-8 justify-center">
              <div className="w-gull flex justify-start">
                <p className="text-[32px] leading-[42px] text-azul font-bold">Educação</p>
              </div>
              <div className="flex flex-col lg:justify-between lg:flex-row gap-4 text-[22px] leading-[32px]">
                <div className="flex flex-col gap-6 font-bold lg:w-[348px]">
                  <a className="text-[#7BBCFE]" href="">Formação Acadêmica</a>
                  <a className="text-[#737373]" href="">Certificados</a>
                  <a className="text-[#737373]" href="">Outros</a>
                </div>
                <div className="flex flex-col gap-5 lg:w-[720px]">
                  <div className="flex flex-col gap-5 py-5">
                    <div className="flex flex-col gap-5">
                      <p className="text-azul font-bold text-[16px] leading-[24px]">mai de 2025 - set de 2025</p>
                      <p className="text-azul font-bold text-[22px] leading-[32px]">ISE Business School</p>
                    </div>
                    <p className="text-azul font-bold text-[16px] leading-[24px]">Curso de atualização</p>
                    <p className="text-azul text-[16px] leading-[24px]">Advanced Board Leaders Program, Executivos de alto nível , Conselhos de administração e Governança CorporativaAdvanced Board Leaders Program, Executivos de alto nível , Conselhos de administração e Governança Corporativa</p>
                    <p className="text-azul text-[16px] leading-[24px]">Programa executivo de alto nível voltado à formação de líderes para atuação em Conselhos de Administração e comitês estratégicos. Com foco em tomada de decisão em ambientes complexos, o curso combina os fundamentos da governança corporativa com uma abordagem contemporânea voltada à inovação, transformação digital e pensamento estratégico. Por meio de estudos de caso, trocas entre pares e experiências práticas, o programa capacita executivos a contribuírem de forma efetiva para a criação de valor sustentável, impulsionando mudanças relevantes nas organizações e na sociedade.</p>
                  </div>
                  <div className="h-[1px] bg-[#E7E7E6]"></div>
                  <div className="flex flex-col gap-5 py-5">
                    <div className="flex flex-col gap-5">
                      <p className="text-azul font-bold text-[16px] leading-[24px]">fev de 2024 - jun de 2025</p>
                      <p className="text-azul font-bold text-[22px] leading-[32px]">Universidade Federal Fluminense</p>
                    </div>
                    <p className="text-azul font-bold text-[16px] leading-[24px]">Stricto Sensu</p>
                    <p className="text-azul font-bold text-[16px] leading-[24px]">Mestrando em Engenharia de Produção</p>
                    <p className="text-azul text-[16px] leading-[24px]">O programa de Mestrado em Engenharia de Produção com especialização em tomada de decisão proporciona uma abordagem academicamente robusta para o ensino das técnicas fundamentais da Pesquisa Operacional, com uma ênfase na sua aplicação prática em cenários reais. Com a cuidadosa seleção de disciplinas e atividades de pesquisa, os estudantes são instigados a explorar profundamente os princípios teóricos e aplicá-los em contextos concretos.
                    O programa visa dotar os estudantes com uma sólida fundamentação matemática e habilidades analíticas críticas, preparando-os para empregar métodos quantitativos avançados na resolução de desafios reais enfrentados por organizações, incluindo empresas, entidades governamentais e instituições do setor público.
                    Após a conclusão os graduados estarão capacitados para analisar, modelar e resolver uma ampla gama de problemas práticos, contribuindo para o avanço do conhecimento e para o aprimoramento da eficiência e eficácia em diversos setores da sociedade.</p>
                  </div>
                  <div className="h-[1px] bg-[#E7E7E6]"></div>
                  <div className="flex flex-col gap-5 py-5">
                    <div className="flex flex-col gap-5">
                      <p className="text-azul font-bold text-[16px] leading-[24px]">jan de 2023 - fev de 2024</p>
                      <p className="text-azul font-bold text-[22px] leading-[32px]">Ibmec</p>
                    </div>
                    <p className="text-azul font-bold text-[16px] leading-[24px]">Pós-graduação Lato Sensu - MBA</p>
                    <p className="text-azul font-bold text-[16px] leading-[24px]">CIO & IT </p>
                    <p className="text-azul text-[16px] leading-[24px]">Como líder reconhecido na capacitação executiva, o IBMEC reconhece que os profissionais de tecnologia mais valorizados são aqueles que possuem uma combinação única de habilidades técnicas sólidas, visão estratégica empresarial e capacidade de liderança excepcional.</p>
                    <p className="text-azul text-[16px] leading-[24px]">Este programa é projetado para capacitar profissionais a assumirem papéis de liderança na condução eficaz de processos de transformação digital em organizações de todos os portes. A nossa abordagem, centrada no participante, visa aprimorar e desenvolver competências essenciais, capacitando os participantes a implementar e otimizar métodos de gestão de segurança da informação e protocolos de proteção de dados em ambientes corporativos. Além disso, o programa enfatiza a otimização de recursos tecnológicos e estratégicos, preparando os participantes para guiar suas empresas rumo a novos patamares de sucesso.</p>
                  </div>
                  <div className="h-[1px] bg-[#E7E7E6]"></div>
                  <div className="flex flex-col gap-5 py-5">
                    <div className="flex flex-col gap-5">
                      <p className="text-azul font-bold text-[16px] leading-[24px]">jan de 2022 - dez de 2023</p>
                      <p className="text-azul font-bold text-[22px] leading-[32px]">Instituto de Capacitação Business School Brasil</p>
                    </div>
                    <p className="text-azul font-bold text-[16px] leading-[24px]">MBA</p>
                    <p className="text-azul font-bold text-[16px] leading-[24px]">Operational Research and decision making</p>

                    <p className="text-azul text-[16px] leading-[24px]">Instituto de Capacitação Business School mergulha fundo no estudo dos métodos analíticos mais avançados, visando aprimorar a tomada de decisões em uma ampla gama de tópicos e aplicações. 
                    Nossas disciplinas obrigatórias abrangem áreas cruciais, como estatística, probabilidade e metodologia de algoritmos, proporcionando uma base sólida para a compreensão e aplicação desses conceitos fundamentais. Além disso, os participantes terão a oportunidade de explorar temas avançados, como formulação de problemas de programação linear, métodos de auxílio à decisão multicritério, teoria das filas e muito mais.
                    <br />
                    Ao final do curso, os alunos estarão plenamente equipados com habilidades em gerenciamento avançado de dados e otimização, capacitando-os a assumir papéis de liderança em uma variedade de setores e organizações.</p>
                  </div>
                  <div className="h-[1px] bg-[#E7E7E6]"></div>
                  <a className="flex justify-center items-center rounded-[4px] border border-azul bg-white text-azul w-full py-2" href="">Ver tudo</a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white flex justify-center">
            <div className="w-full max-w-[1440px] flex flex-col py-4 lg:py-[64px] lg:px-[96px] px-4 items-center  gap-12">
              <div className="flex flex-col gap-6 items-center text-center">
                <p className="text-[32px] leading-[40px] text-azul">Depoimentos</p>
                <p className="text-[20px] leading-[28px] text-[#737373]">Mais do que palavras: a experiência real de quem alcançou resultados.</p>
              </div>
              <div className="flex flex-col lg:flex-row gap-6 lg:justify-center">
                <div className="flex flex-col gap-[22px] border border-[#BEDDFF] w-full rounded-[8px] shadow-[0_2px_10px_1px_rgba(0,0,0,0.1)] p-6">
                  <div className="flex">
                    <img src="/Star.svg" alt="" />
                    <img src="/Star.svg" alt="" />
                    <img src="/Star.svg" alt="" />
                    <img src="/Star.svg" alt="" />
                    <img src="/Star.svg" alt="" />
                  </div>
                  <div className="flex flex-col gap-4 text-[#333333]">
                    <p className="text-[16px] leading-[22px]">Ele é um profissional com visão e que acredita no potencial do seu time, buscando sempre apoiar a todos para que alcancemos o nosso melhor, não apenas como equipe, mas também como indivíduos.</p>
                    <p className="text-[16px] leading-[22px]">Sua busca constante por aprimoramento e o desejo incansável de evoluir em tudo o que faz tornam o Marcos não apenas um excelente líder de equipe, mas um verdadeiro mentor e inspiração a todos a sua volta. Ele é um verdadeiro mestre, como gosto de chama-lo.</p>
                  </div>
                  <div className="flex gap-2">
                    <img src="/image 143.svg" alt="" />
                    <div className="flex flex-col">
                      <p className="text-[16px] leading-[24px] text-azul">Keyla Rodrigues</p>
                      <p className="text-[14px] leading-[18px] text-[#737373]">Cloud & Infrastructure Monitoring | Driving Performance & Reliability in Latam</p>
                    </div>
                  </div>

                </div>
                <div className="flex flex-col gap-[22px] border border-[#BEDDFF] w-full rounded-[8px] shadow-[0_2px_10px_1px_rgba(0,0,0,0.1)] p-6">
                  <div className="flex">
                    <img src="/Star.svg" alt="" />
                    <img src="/Star.svg" alt="" />
                    <img src="/Star.svg" alt="" />
                    <img src="/Star.svg" alt="" />
                    <img src="/Star.svg" alt="" />
                  </div>
                  <div className="flex flex-col gap-4 text-[#333333]">
                    <p className="text-[16px] leading-[22px]">O Marcos viu em mim um potencial que nem eu mesmo acreditava que tinha e apostou nesse potencial, me dando oportunidades que me fizeram subir muito de patamar em minha carreira. E o que mais me chamava a atenção era o fato de que por mais que os desafios fossem grandes, ele não tinha a menor dúvida de que eu era capaz de superá-los e entregar o que ele queria e a empresa precisava. </p>
                    <p className="text-[16px] leading-[22px]">Então sempre serei muito grato ao Marcos por ter acreditado em mim e me dado a oportunidade de crescer e ser um profissional melhor, representando um verdadeiro marco na minha carreira.</p>
                  </div>
                  <div className="flex gap-2">
                    <img src="/image 144.svg" alt="" />
                    <div className="flex flex-col">
                      <p className="text-[16px] leading-[24px] text-azul">Leonardo Figueiredo</p>
                      <p className="text-[14px] leading-[18px] text-[#737373]">Foreign Affairs Analyst | Data Analyst | Quality Control | Website Administration</p>
                    </div>
                  </div>

                </div>
                <div className="flex flex-col gap-[22px] border border-[#BEDDFF] w-full rounded-[8px] shadow-[0_2px_10px_1px_rgba(0,0,0,0.1)] p-6">
                  <div className="flex">
                    <img src="/Star.svg" alt="" />
                    <img src="/Star.svg" alt="" />
                    <img src="/Star.svg" alt="" />
                    <img src="/Star.svg" alt="" />
                    <img src="/Star.svg" alt="" />
                  </div>
                  <div className="flex flex-col gap-4 text-[#333333]">
                    <p className="text-[16px] leading-[22px]">Suas habilidades vão muito além da parte técnica, possui um forte perfil de liderança, engajando o time facilmente sempre com muito respeito aos diversos perfis profissionais.</p>
                    <p className="text-[16px] leading-[22px]">Durante meu período de transição de cargo na Datamar, Marcos foi uma das peças fundamentais no meu desenvolvimento, trazendo sempre sugestões de soft skill e Hard skill que eu deveria buscar. </p>
                    <p className="text-[16px] leading-[22px]">De Perfil curioso, sempre procurando novas idéias e soluçoes de melhoria para os mais variados processos. Agradeço pela significativa contribuição que teve na minha carreira profissional.</p>
                  </div>
                  <div className="flex gap-2">
                    <img src="/image 145.svg" alt="" />
                    <div className="flex flex-col">
                      <p className="text-[16px] leading-[24px] text-azul">Caísa Oliveira</p>
                      <p className="text-[14px] leading-[18px] text-[#737373]">Auditoria Interna e Externa | SOX | COSO</p>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
          <div className="bg-white flex justify-center">
            <div className="flex flex-col items-center w-full">
              <div className="w-full bg-azul max-w-[1248px] flex flex-col items-center gap-6 px-4 py-10 lg:rounded-[8px]">
                <p className="text-center text-white text-[32px] leading-[40px] w-full max-w-[656px]">Precisa inovar? Vamos planejar sua transformação digital hoje mesmo!</p>
                <a className="text-azul font-medium bg-white rounded-[4px] py-2 px-4 text-[16px] leading-[22px]" href="">Agendar consulta agora</a>
              </div>
              <div className="w-full bg-[#E7E7E6]">
                <Footer/>
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
