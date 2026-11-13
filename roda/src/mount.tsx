import { createRoot } from "react-dom/client"
import { WorksWheel, type WorksWheelItem } from "./components/ui/works-wheel"

// As obras da FT. Fotos e trechos de vídeo reais (13/11); os vídeos entram como WebP animado, porque a roda usa <img>.
const m = (f: string) => `media/ww/${f}`

const works: WorksWheelItem[] = [
  { title: "Linha de caixas", image: m("linha-caixas.webp"), alt: "Linha de caixas automatizada em frigorífico, com esteiras em operação" },
  { title: "Painel Siemens", image: m("painel-siemens.webp"), alt: "Painel montado com inversores Siemens SINAMICS" },
  { title: "Acionamentos SEW", image: m("sew.webp"), alt: "Servoconversores SEW-Eurodrive ligados no painel" },
  { title: "Esteiras", image: m("esteiras.webp"), alt: "Esteiras e paletização em operação no frigorífico" },
  { title: "Arqueadoras", image: m("arqueadoras.webp"), alt: "Arqueadoras de caixas em operação na linha do frigorífico" },
  { title: "Painel CLP", image: m("clp.webp"), alt: "Painel de automação com CLP e bornes organizados" },
  { title: "Inversores", image: m("inversores.webp"), alt: "Três fileiras de inversores Siemens em rede" },
  { title: "Paletização", image: m("paletizacao.webp"), alt: "Caixa passando pela esteira automatizada" },
  { title: "Transportador", image: m("transportador.webp"), alt: "Transportador inclinado levando caixas para o piso de cima" },
  { title: "Rede e controle", image: m("rede.webp"), alt: "Painel com controlador, rede industrial e cartões de entrada e saída" },
  { title: "Montagem", image: m("montagem.webp"), alt: "Detalhe da montagem dos inversores e partidas de motor" },
]

const el = document.getElementById("roda-obras")
if (el) createRoot(el).render(<WorksWheel items={works} label="Obras FT" action="" />)
