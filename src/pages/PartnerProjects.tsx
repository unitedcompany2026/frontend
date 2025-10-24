import { useState } from 'react'
import { MapPin, Building2, ArrowRight } from 'lucide-react'

interface Project {
  id: number
  name: string
  location: string
  status: string
  year: string
  type: string
  images: string[]
}

interface PartnerProjects {
  [key: string]: Project[]
}

// Mock data - in real app this would come from routing/API
const partnerProjects: PartnerProjects = {
  'Orbi Group': [
    {
      id: 1,
      name: 'Orbi Millennium',
      location: 'Batumi Boulevard',
      status: 'Completed',
      year: '2023',
      type: 'Residential',
      images: [
        'https://storage.googleapis.com/bd-ge-01/buildings-v2/2560x1920/34367.jpg',
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
      ],
    },
    {
      id: 2,
      name: 'Orbi Continental',
      location: 'New Boulevard, Batumi',
      status: 'Under Construction',
      year: '2025',
      type: 'Mixed-Use',
      images: [
        'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
      ],
    },
    {
      id: 3,
      name: 'Orbi Plaza',
      location: 'City Center, Batumi',
      status: 'Completed',
      year: '2022',
      type: 'Commercial',
      images: [
        'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1448630360428-65456885c650?w=800&h=600&fit=crop',
      ],
    },
    {
      id: 4,
      name: 'Orbi Beach Tower',
      location: 'Seaside Avenue, Batumi',
      status: 'Planning',
      year: '2026',
      type: 'Residential',
      images: [
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop',
      ],
    },
  ],
  Alliance: [
    {
      id: 5,
      name: 'Alliance Residence',
      location: 'Downtown Batumi',
      status: 'Completed',
      year: '2023',
      type: 'Residential',
      images: [
        'https://alliance.ge/static/media/YaZGZf4YZ5tfkFXU9ki2z2R2s50QgJExbTdSGhCn.png',
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
      ],
    },
    {
      id: 6,
      name: 'Alliance Business Center',
      location: 'Business District, Batumi',
      status: 'Under Construction',
      year: '2025',
      type: 'Commercial',
      images: [
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
      ],
    },
  ],
  Metropol: [
    {
      id: 7,
      name: 'Metropol Tower',
      location: 'Central Batumi',
      status: 'Completed',
      year: '2024',
      type: 'Residential',
      images: [
        'https://pmpymcjrhduyyrsk.public.blob.vercel-storage.com/Oval%20building-UPvH0loBnFxwOvZEw4FDNpQjZpYCtT.png',
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
      ],
    },
    {
      id: 8,
      name: 'Metropol Gardens',
      location: 'Green Zone, Batumi',
      status: 'Planning',
      year: '2026',
      type: 'Residential',
      images: [
        'https://images.unsplash.com/photo-1448630360428-65456885c650?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600&fit=crop',
      ],
    },
  ],
}

// Simple ProjectCard component for demo
function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 bg-gray-200">
        <img
          src={project.images[0]}
          alt={project.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              project.status === 'Completed'
                ? 'bg-green-100 text-green-800'
                : project.status === 'Under Construction'
                  ? 'bg-blue-100 text-blue-800'
                  : 'bg-yellow-100 text-yellow-800'
            }`}
          >
            {project.status}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {project.name}
        </h3>
        <div className="flex items-center text-sm text-gray-600 mb-3">
          <MapPin className="w-4 h-4 mr-1" />
          {project.location}
        </div>
        <div className="flex items-center justify-between text-sm mb-4">
          <span className="text-gray-500">{project.type}</span>
          <span className="text-gray-500">{project.year}</span>
        </div>
        <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 font-medium">
          View Details
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

export default function PartnerProjects() {
  const [selectedPartner, setSelectedPartner] = useState('Orbi Group')
  const [selectedCity, setSelectedCity] = useState<string>('All')
  const projects = partnerProjects[selectedPartner] || []

  // Extract unique cities from projects
  const cities = [
    'All',
    ...Array.from(
      new Set(
        projects.map(p => {
          const match = p.location.match(/,\s*(.+)$/)
          return match ? match[1] : p.location
        })
      )
    ),
  ]

  // Filter projects by city
  const filteredProjects =
    selectedCity === 'All'
      ? projects
      : projects.filter(p => p.location.includes(selectedCity))

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-20 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Projects ({filteredProjects.length})
          </h2>
          <p className="text-gray-600 mb-6">
            Browse through all construction projects
          </p>

          {/* City Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {cities.map(city => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCity === city
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {city}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <Building2 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">No projects available</p>
          </div>
        )}
      </div>
    </div>
  )
}
