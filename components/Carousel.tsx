import Image from 'next/image'
import { Carousel as CarouselComponent } from 'flowbite-react'
import type { CustomFlowbiteTheme } from 'flowbite-react'

type Props = {
  images: Array<string>
}

const customTheme: CustomFlowbiteTheme['carousel'] = {
  root: {
    base: 'relative h-full w-full',
    leftControl:
      'absolute -left-16 top-0 flex h-full items-center justify-center px-4 focus:outline-none',
    rightControl:
      'absolute -right-16 top-0 flex h-full items-center justify-center px-4 focus:outline-none',
  },
  control: {
    base: 'inline-flex h-8 w-8 items-center justify-center rounded-full group-focus:outline-none group-focus:ring-4 bg-gray-800/30 group-hover:bg-gray-800/60 group-focus:ring-gray-800/70 sm:h-10 sm:w-10',
    icon: 'h-5 w-5 text-gray-800 sm:h-6 sm:w-6',
  },
}

const Carousel = ({ images }: Props) => {
  return (
    <div className="w-full h-96">
      <CarouselComponent theme={customTheme} indicators={false}>
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={image}
            className="bg-contain object-cover"
            width={1024}
            height={1024}
          />
        ))}
      </CarouselComponent>
    </div>
  )
}

export default Carousel
