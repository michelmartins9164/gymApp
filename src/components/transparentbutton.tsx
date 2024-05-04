type buttonProps = {
  desc: string
}

export default function TransparentButton(props: buttonProps) {
  return (
    <a
      href="#"
      className="flex items-center justify-center h-14 w-40 text-xl font-bebas text-scarlet border border-solid border-scarlet mb-20"
    >
      {props.desc}
    </a>
  )
}
