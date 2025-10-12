import { Pencil, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import type { Participant } from '@/lib/types/participant'

interface ParticipantRowProps {
  participant: Participant
  onRowClick: (participant: Participant) => void
  onEdit: (e: React.MouseEvent, participant: Participant) => void
  onDelete: (e: React.MouseEvent, participantId: string) => void
  isDeleting: boolean
}

export const ParticipantRow = ({
  participant,
  onRowClick,
  onEdit,
  onDelete,
  isDeleting,
}: ParticipantRowProps) => {
  const getStatusBadge = (status: string) => {
    const variants: Record<string, string> = {
      active: 'bg-green-500',
      completed: 'bg-blue-500',
      withdrawn: 'bg-gray-500',
    }
    return <Badge className={variants[status]}>{status}</Badge>
  }

  const getGroupBadge = (group: string) => {
    return (
      <Badge variant={group === 'treatment' ? 'default' : 'secondary'}>
        {group}
      </Badge>
    )
  }

  return (
    <tr
      onClick={() => onRowClick(participant)}
      className="border-b hover:bg-gray-50 cursor-pointer transition-colors"
    >
      <td className="py-3 px-4 font-medium">{participant.subject_id}</td>
      <td className="py-3 px-4">{getGroupBadge(participant.study_group)}</td>
      <td className="py-3 px-4">{getStatusBadge(participant.status)}</td>
      <td className="py-3 px-4">{participant.enrollment_date}</td>
      <td className="py-3 px-4">
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={e => onEdit(e, participant)}
            className="h-8 w-8 p-0"
            disabled={isDeleting}
          >
            <Pencil className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={e => onDelete(e, participant.participant_id)}
            className="h-8 w-8 p-0 text-red-600 hover:text-red-700 hover:bg-red-50"
            disabled={isDeleting}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </td>
    </tr>
  )
}
