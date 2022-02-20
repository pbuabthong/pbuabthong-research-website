import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'

const ResearchCard = ({ title, description, imgSrc, href }) => {
  const ref = useRef(null)
  const [style, setStyle] = useState({})

  return (
    <>
      <div
        className="scale-100 mb-8 xl:mb-0"
        ref={ref}
      >
        <div
          style={style}
          className="h-full transition-all duration-200 ease-out shadow-lg dark:shadow-cyan-700/50 rounded-lg overflow-hidden"
        >
          <div className="flex flex-col justify-center">
            <Image
              src={imgSrc}
              alt="avatar"
              width="550px"
              height="250px"
              className="object-cover"
            />
          </div>

          <div className="block px-6 py-4">
            <h1 className="font-bold text-gray-800 dark:text-white">{title}</h1>
            <p className="py-2 text-gray-700 dark:text-gray-400">{description}</p>
            {href && (
              <div className="align-text-bottom mt-4 text-gray-700 dark:text-gray-200">
                Read more
              </div>
            )}
          </div>

        </div>
      </div>
    </>
  )
}

export default ResearchCard
