import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { CornerRightUpIcon } from 'lucide-react'

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
    <div className="bg-white py-16 px-0 sm:px-6 md:px-8 lg:px-20">
      <div className="w-full">
        <div className="flex justify-between items-center px-4 sm:px-">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-700">
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
          <CarouselContent className="md:-ml-3 md:mr-3 -ml-5 mr-5 my-6 ">
            {companies.map(company => (
              <CarouselItem
                key={company.id}
                className="pl-10 md:pl-6 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 "
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                  <div className="relative h-72 sm:h-80 overflow-hidden">
                    <img
                      src={company.image || '/placeholder.svg'}
                      alt={company.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-2 sm:p-3  flex justify-between items-center">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                      {company.name}
                    </h3>
                    <div className="bg-gray-100 rounded-full p-2 hover:bg-gray-200 transition-colors">
                      <CornerRightUpIcon className="w-4 h-4 text-gray-600" />
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 sm:-left-8 md:flex bg-white shadow-lg hover:shadow-xl transition-shadow" />
          <CarouselNext className="right-2 sm:-right-8 md:flex shadow-lg hover:shadow-xl transition-shadow" />
        </Carousel>
      </div>
    </div>
  )
}

export default CompanyCarousel
