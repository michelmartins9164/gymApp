import star_image from '../assets/images/star.svg'

export default function FiveStar() {
  return (
    <div className="flex">
      <img src={star_image} alt="imagem de estrela" />
      <img src={star_image} alt="imagem de estrela" />
      <img src={star_image} alt="imagem de estrela" />
      <img src={star_image} alt="imagem de estrela" />
      <img src={star_image} alt="imagem de estrela" />
    </div>
  )
}
