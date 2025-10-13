import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { ArrowUpRight } from 'lucide-react'

const CompanyCarousel = () => {
  const companies = [
    {
      id: 1,
      name: 'Metropol',
      image:
        'https://pmpymcjrhduyyrsk.public.blob.vercel-storage.com/Oval%20building-UPvH0loBnFxwOvZEw4FDNpQjZpYCtT.png',
    },
    {
      id: 2,
      name: 'Alliance',
      image:
        'https://alliance.ge/static/media/YaZGZf4YZ5tfkFXU9ki2z2R2s50QgJExbTdSGhCn.png',
    },
    {
      id: 3,
      name: 'Orbi Group',
      image:
        'https://storage.googleapis.com/bd-ge-01/buildings-v2/2560x1920/34367.jpg',
    },
    {
      id: 4,
      name: 'Next Group',
      image:
        'https://www.ldrgroup.nl/wp-content/uploads/2025/05/NEXT-Gardens-View-8.jpg',
    },
    {
      id: 5,
      name: 'Premier Development',
      image:
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
    },
    {
      id: 6,
      name: 'Urban Construction Co',
      image:
        'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop',
    },
  ]

  return (
    <div className="  py-16 px-0 sm:px-6 md:px-8 lg:px-20">
      <div className="w-full">
        <div className="flex justify-between items-center px-4">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
            Construction Partners
          </h1>
          <button className="text-sm sm:text-base font-semibold text-blue-600 hover:text-blue-700 transition-colors whitespace-nowrap">
            See All →
          </button>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="md:-ml-3 md:mr-3 -ml-5 mr-5 my-7 ">
            {companies.map(company => (
              <CarouselItem
                key={company.id}
                className="pl-10 md:pl-6 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 "
              >
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 sm:-left-8 md:flex bg-gray-100 shadow-[0_8px_24px_rgba(0,0,0,0.12),0_12px_32px_rgba(0,0,0,0.08)] transition-shadow" />
          <CarouselNext className="right-2 sm:-right-8 md:flex bg-gray-100 shadow-[0_8px_24px_rgba(0,0,0,0.12),0_12px_32px_rgba(0,0,0,0.08)] transition-shadow" />
        </Carousel>
      </div>
    </div>
  )
}

export default CompanyCarousel
