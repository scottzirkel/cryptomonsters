export default function Sign({ ...props }) {
  return (
    <div
      className={[
        props.className,
        'absolute bottom-0 right-0 z-10 w-64 h-96 bg-bottom-right bg-contain bg-no-repeat bg-opacity-75 hover:bg-opacity-100',
      ].join(' ')}
      style={{ backgroundImage: "url('sign.png')" }}
    ></div>
  )
}
