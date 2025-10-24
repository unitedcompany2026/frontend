import { useState } from 'react'
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'

interface PartnerCardProps {
  company: {
    id: number
    name: string
    images: string[]
    category?: string
  }
}

const PartnerCard = ({ company }: PartnerCardProps) => {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentImage(prev => (prev + 1) % company.images.length)
  }

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentImage(
      prev => (prev - 1 + company.images.length) % company.images.length
    )
  }

  return (
    <div className="bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.06),0_2px_6px_rgba(0,0,0,0.04),inset_0_0_0_1px_rgba(0,0,0,0.03)] transition-all duration-300 h-full p-2">
      <div className="relative h-72 sm:h-72 overflow-hidden rounded-lg group">
        <img
          src={company.images[currentImage] || '/placeholder.svg'}
          alt={company.name}
          className="w-full h-full object-cover transition-transform duration-300"
        />

        {/* Image Navigation - Only show if multiple images */}
        {company.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>

            {/* Image Indicator */}
            <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
              {currentImage + 1}/{company.images.length}
            </div>
          </>
        )}
      </div>
      <div className="p-2 sm:p-3 flex justify-between items-center">
        <h3 className="text-base sm:text-lg font-semibold text-gray-800 hover:text-blue-900 transition-colors cursor-pointer">
          {company.name}
        </h3>
        <div className="bg-gray-200 rounded-full p-2 hover:bg-blue-900 transition-colors cursor-pointer group/icon">
          <ArrowUpRight className="w-4 h-4 text-gray-700 group-hover/icon:text-white transition-colors" />
        </div>
      </div>
    </div>
  )
}

export default PartnerCard
