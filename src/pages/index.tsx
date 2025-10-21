import Header from "@/components/header";
import { FaRegHandshake } from "react-icons/fa";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { PiSuitcaseSimple } from "react-icons/pi";
import { AiOutlinePicture } from "react-icons/ai";


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
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
