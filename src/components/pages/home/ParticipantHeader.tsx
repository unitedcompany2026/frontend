import { Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface PageHeaderProps {
  onAddClick: () => void
}

export const ParticipantHeader = ({ onAddClick }: PageHeaderProps) => {
  return (
    <div className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Participant Management
            </h1>
            <p className="text-sm text-gray-500">Clinical Study Dashboard</p>
          </div>
          <Button onClick={onAddClick}>
            <Plus className="mr-2 h-4 w-4" />
            Add Participant
          </Button>
        </div>
      </div>
    </div>
  )
}
