import { useState } from 'react'
import PartnerCard from '@/components/pages/partners/PartnerCard'

export default function Partners() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCompany, setSelectedCompany] = useState('all')

  const companies = [
    {
      id: 1,
      name: 'Metropol',
      images: [
        'https://pmpymcjrhduyyrsk.public.blob.vercel-storage.com/Oval%20building-UPvH0loBnFxwOvZEw4FDNpQjZpYCtT.png',
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
      ],
      category: 'residential',
    },
    {
      id: 2,
      name: 'Alliance',
      images: [
        'https://alliance.ge/static/media/YaZGZf4YZ5tfkFXU9ki2z2R2s50QgJExbTdSGhCn.png',
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
      ],
      category: 'residential',
    },
    {
      id: 3,
      name: 'Orbi Group',
      images: [
        'https://storage.googleapis.com/bd-ge-01/buildings-v2/2560x1920/34367.jpg',
        'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600&fit=crop',
      ],
      category: 'commercial',
    },
    {
      id: 4,
      name: 'Next Group',
      images: [
        'https://www.ldrgroup.nl/wp-content/uploads/2025/05/NEXT-Gardens-View-8.jpg',
        'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop',
      ],
      category: 'residential',
    },
    {
      id: 5,
      name: 'Premier Development',
      images: [
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
      ],
      category: 'mixed',
    },
    {
      id: 6,
      name: 'Urban Construction Co',
      images: [
        'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1448630360428-65456885c650?w=800&h=600&fit=crop',
      ],
      category: 'commercial',
    },
    {
      id: 7,
      name: 'Elite Builders',
      images: [
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
      ],
      category: 'residential',
    },
    {
      id: 8,
      name: 'Modern Housing',
      images: [
        'https://images.unsplash.com/photo-1448630360428-65456885c650?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop',
      ],
      category: 'residential',
    },
    {
      id: 9,
      name: 'Skyline Developers',
      images: [
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
      ],
      category: 'mixed',
    },
    {
      id: 10,
      name: 'Horizon Properties',
      images: [
        'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop',
      ],
      category: 'commercial',
    },
    {
      id: 11,
      name: 'Crown Estates',
      images: [
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
      ],
      category: 'residential',
    },
    {
      id: 12,
      name: 'Vista Construction',
      images: [
        'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1448630360428-65456885c650?w=800&h=600&fit=crop',
      ],
      category: 'mixed',
    },
  ]

  const filters = [
    { id: 'all', label: 'All Partners' },
    ...companies.map(company => ({ id: company.name, label: company.name })),
  ]

  const filteredCompanies = companies.filter(company => {
    const matchesSearch = company.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
    const matchesFilter =
      selectedCompany === 'all' || company.name === selectedCompany
    return matchesSearch && matchesFilter
  })

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3l text-center sm:text-4xl font-bold text-gray-800 mb-2">
            Construction Partners
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCompanies.length > 0 ? (
            filteredCompanies.map(company => (
              <PartnerCard key={company.id} company={company} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">No partners found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
