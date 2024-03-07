import { render, useCaspar } from '@nxtedition/graphics-kit'

function Example() {
  const { data } = useCaspar()

  return (
    <div
      style={{
        position: 'absolute',
        bottom: 80,
        left: 266,
        width: 1388,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 8,
        fontSize: 72,
        fontFamily: 'Arial',
        overflow: 'hidden'
      }}
    >
      {data.text}
    </div>
  )
}

render(Example)
