import { useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ParticipantDetailModal } from './ParticipantDetailModal'
import { ParticipantRow } from './ParticipantRow'
import type { Participant } from '@/lib/types/participant'

interface ParticipantTableProps {
  participants: Participant[]
  onEdit: (participant: Participant) => void
  onDelete: (participantId: string) => void
  isDeleting: boolean
}

export const ParticipantTable = ({
  participants,
  onEdit,
  onDelete,
  isDeleting,
}: ParticipantTableProps) => {
  const [selectedParticipant, setSelectedParticipant] =
    useState<Participant | null>(null)
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false)

  const handleRowClick = (participant: Participant) => {
    setSelectedParticipant(participant)
    setIsDetailModalOpen(true)
  }

  const handleDelete = (e: React.MouseEvent, participantId: string) => {
    e.stopPropagation()
    if (window.confirm('Are you sure you want to delete this participant?')) {
      onDelete(participantId)
    }
  }

  const handleEdit = (e: React.MouseEvent, participant: Participant) => {
    e.stopPropagation()
    onEdit(participant)
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>All Participants</CardTitle>
          <CardDescription>
            Click on any row to view detailed information
          </CardDescription>
        </CardHeader>
        <CardContent>
          {participants.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              No participants found. Add your first participant to get started.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-medium text-sm">
                      Subject ID
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-sm">
                      Study Group
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-sm">
                      Status
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-sm">
                      Enrollment Date
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-sm">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {participants.map(participant => (
                    <ParticipantRow
                      key={participant.participant_id}
                      participant={participant}
                      onRowClick={handleRowClick}
                      onEdit={handleEdit}
                      onDelete={handleDelete}
                      isDeleting={isDeleting}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>

      <ParticipantDetailModal
        participant={selectedParticipant}
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
      />
    </>
  )
}
