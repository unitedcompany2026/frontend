import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import type { Participant } from '@/lib/types/participant'

interface ParticipantDetailModalProps {
  participant: Participant | null
  isOpen: boolean
  onClose: () => void
}

export const ParticipantDetailModal = ({
  participant,
  isOpen,
  onClose,
}: ParticipantDetailModalProps) => {
  if (!participant) return null

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

  const detailItems = [
    { label: 'Subject ID', value: participant.subject_id },
    { label: 'Participant ID', value: participant.participant_id },
    {
      label: 'Study Group',
      value: getGroupBadge(participant.study_group),
    },
    {
      label: 'Status',
      value: getStatusBadge(participant.status),
    },
    { label: 'Enrollment Date', value: participant.enrollment_date },
    { label: 'Age', value: participant.age.toString() },
    { label: 'Gender', value: participant.gender },
  ]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] bg-white ">
        <DialogHeader>
          <DialogTitle>Participant Details</DialogTitle>
          <DialogDescription>
            Complete information for {participant.subject_id}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {detailItems.map(item => (
            <div
              key={item.label}
              className="grid grid-cols-3 items-center gap-4"
            >
              <span className="text-sm font-medium text-gray-500">
                {item.label}
              </span>
              <span className="col-span-2 text-sm font-medium">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}
