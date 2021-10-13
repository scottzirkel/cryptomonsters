export default function Hidden({ ...props }) {
  return (
    <div
      className={[
        props.className,
        'absolute bottom-0 left-0 z-0 w-96 h-96 bg-bottom-left bg-contain bg-no-repeat bg-opacity-75 hover:bg-opacity-100',
      ].join(' ')}
      style={{ backgroundImage: "url('hidden.png')" }}
    >
      <p className="font-handwriting text-black opacity-75 text-center -ml-6 -mt-16 -rotate-6">
        I feel as though
        <br />
        we are being watched.
      </p>
    </div>
  )
}
