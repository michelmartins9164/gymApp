import TransparentButton from './transparentbutton'
import man_image from '../assets/images/CallToAction.svg'

export default function CallToActionBox() {
  return (
    <div className="w-[1230px] h-[670px] border border-solid border-scarlet flex">
      <img src={man_image} alt="imagem de um homem" className="h-full w-1/2" />
      <span className="flex flex-col h-full w-1/2">
        <h2 className="text-white text-8xl font-bebas mt-16">
          TREINE NA NOSSA <b className="text-scarlet"> ACADEMIA AGORA </b>
        </h2>
        <p className="text-white font-poppins text-base mt-4 mb-12">
          ganhe 50% de desconto no seu primeiro mês
        </p>
        <form action="" className="flex flex-col gap-6">
          <span className="flex gap-6">
            <input
              type="text"
              placeholder="Digite seu Nome..."
              className="bg-transparent border border-solid border-white py-4 px-6 font-poppins h-14 w-56 "
            />
            <input
              type="text"
              placeholder="Digite seu Telefone..."
              className="bg-transparent border border-solid border-white py-4 px-6 font-poppins h-14 w-56"
            />
          </span>

          <input
            type="text"
            placeholder="Digite seu Endereço de Email..."
            className="bg-transparent border border-solid border-white py-4 px-6 font-poppins h-14 w-[472px]"
          />

          <button>
            <TransparentButton desc="COMEÇE JÁ" />
          </button>
        </form>
      </span>
    </div>
  )
}
