import testemony_image from '../assets/images/testemony.svg'
import FiveStar from './five-star'

export default function TestimonialsBox() {
  return (
    <div className="flex flex-col items-center w-[910px]">
      <p className=" text-base font-poppins text-white font-light text-center">
        "Estou extremamente grato pelo impacto positivo que o treino na academia
        teve na minha vida; através de treino consistente, orientação
        especializada de treinadores e acesso a instalações de primeira linha,
        testemunhei uma transformação notável na força, resistência e níveis
        gerais de condicionamento físico."
      </p>
      <span className="mt-8 mb-10">
        <FiveStar />
      </span>

      <h2 className="font-bebas text-white text-4xl mb-4"> JHONY BREAKER </h2>

      <div className="h-28 w-28 border border-solid border-scarlet">
        <img src={testemony_image} alt="imagem de cliente" />
      </div>
    </div>
  )
}
