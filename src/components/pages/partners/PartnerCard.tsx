import { ArrowUpRight } from 'lucide-react'

interface PartnerCardProps {
  company: {
    id: number
    name: string
    image: string
  }
}

const PartnerCard = ({ company }: PartnerCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.06),0_2px_6px_rgba(0,0,0,0.04),inset_0_0_0_1px_rgba(0,0,0,0.03)] transition-all duration-300 h-full p-2">
      <div className="relative h-72 sm:h-72 overflow-hidden rounded-lg">
        <img
          src={company.image || '/placeholder.svg'}
          alt={company.name}
          className="w-full h-full object-cover"
        />
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
