export default function Womblydon({ ...props }) {
  return (
    <div
      className={[
        props.className,
        'absolute right-0 z-0 w-96 h-96 bg-bottom-right bg-contain bg-no-repeat bg-opacity-75 hover:bg-opacity-100',
      ].join(' ')}
      style={{ backgroundImage: "url('womblydon.png')" }}
    >
      <p className="font-handwriting text-lime-400 text-center px-12 rotate-12 ml-8 mt-4">
        We found our first strange specimen today:
        <strong className="text-lg block">the Womblydon!</strong>
      </p>
    </div>
  )
}
