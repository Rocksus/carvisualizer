import { Text } from "@chakra-ui/react";

export default function Home() {

  return (
    <main className="container">
      {/* header */}
      <div>
        <div>

        </div>
        <div>
          <a>Home</a>
          <a>3D Visualizer</a>
          <a>Partner</a>
          <a>Our Products</a>
        </div>
      </div>
      {/* hero */}
      <div>
        <div className="-z-10 absolute bg-gradient-to-t from-yellow-300 to-transparent w-10 h-20">

        </div>
        {/* left */}
        <div>
        <Text className="text-4xl font-bold">Dreams come true with Refyn</Text>
        <p>Realisasikan idemu jadi kenyataan dengan menggunakan Visualisasi 3D kami.</p>
        </div>
        {/* right */}
        <div>

        </div>
      </div>
    </main>
  )
}
