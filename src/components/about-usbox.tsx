import TransparentButton from './transparentbutton'

export default function AboutUsBox() {
  return (
    <div className="w-6/12">
      <h2 className="font-bebas text-8xl text-white">
        NÓS TEMOS BASTANTE <b className="text-scarlet">EXPERIÊNCIA</b>
      </h2>
      <p className="font-poppins font-light text-base text-white mt-4 mb-14 ">
        In quisque nunc dictumst etiam pellentesque et. Vel malesuada diam lorem
        tellus. Amet mauris feugiat ipsum natoque odio donec. Sit at lacus
        consequat justo odio condimentum dui. Faucibus id blandit feugiat mi
        tellus sit etiam donec aliquam. Dictumst egestas ut facilisi vel. Sem
        consequat fermentum pellentesque risus purus quis gravida. Nulla
        porttitor ultrices facilisis non commodo diam morbi cursus eu. Semper ut
        in mauris gravida id cursus urna. Magnis vulputate orci risus felis eget
        lectus morbi. Et cursus mauris condimentum pretium arcu sed dignissim.
      </p>

      <TransparentButton desc="SOBRE NÓS" />
    </div>
  )
}
