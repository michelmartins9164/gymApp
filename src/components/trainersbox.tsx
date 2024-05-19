import FiveStar from './five-star'

export default function TrainersBox() {
  return (
    <div className="w-full px-24 items-center justify-center flex gap-10">
      <div className="w-[388px] h-[536px] border border-solid border-scarlet bg-trainer_card_1_bg flex gap-2 flex-col justify-end items-center p-8">
        <h2 className="font-bebas text-4xl text-white"> BORNEY EXITEID </h2>
        <p className="font-poppins text-base font-light text-white">
          Classificação do treinador:
        </p>
        <FiveStar />
      </div>

      <div className="w-[388px] h-[536px] border border-solid border-scarlet bg-trainer_card_2_bg flex gap-2 flex-col justify-end items-center p-8">
        <h2 className="font-bebas text-4xl text-white"> ELSA WINDIA </h2>
        <p className="font-poppins text-base font-light text-white">
          Classificação do treinador:
        </p>
        <FiveStar />
      </div>

      <div className="w-[388px] h-[536px] border border-solid border-scarlet bg-trainer_card_3_bg flex gap-2 flex-col justify-end items-center p-8">
        <h2 className="font-bebas text-4xl text-white"> GEOURGE ARYO </h2>
        <p className="font-poppins text-base font-light text-white">
          Classificação do treinador:
        </p>
        <FiveStar />
      </div>
    </div>
  )
}
