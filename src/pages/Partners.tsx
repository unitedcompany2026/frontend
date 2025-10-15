import PartnerCard from '@/components/pages/partners/PartnerCard'

export default function Partner() {
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
    {
      id: 7,
      name: 'Elite Builders',
      image:
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
    },
    {
      id: 8,
      name: 'Modern Housing',
      image:
        'https://images.unsplash.com/photo-1448630360428-65456885c650?w=800&h=600&fit=crop',
    },
    {
      id: 9,
      name: 'Skyline Developers',
      image:
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
    },
    {
      id: 10,
      name: 'Horizon Properties',
      image:
        'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600&fit=crop',
    },
    {
      id: 11,
      name: 'Crown Estates',
      image:
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
    },
    {
      id: 12,
      name: 'Vista Construction',
      image:
        'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
            Construction Partners
          </h1>
          <p className="text-gray-600">
            Meet our trusted construction and development partners
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {companies.map(company => (
            <PartnerCard key={company.id} company={company} />
          ))}
        </div>
      </div>
    </div>
  )
}
