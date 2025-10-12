import { useState, useEffect } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import type { Participant } from '@/lib/types/participant'
import {
  initialFormState,
  type ParticipantFormData,
} from '@/lib/types/participant-form'

interface ParticipantFormModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (data: ParticipantFormData) => Promise<void>
  editingParticipant?: Participant | null
  isSubmitting: boolean
}

export const ParticipantFormModal = ({
  isOpen,
  onClose,
  onSubmit,
  editingParticipant,
  isSubmitting,
}: ParticipantFormModalProps) => {
  const [formData, setFormData] = useState(initialFormState)
  const isEditMode = !!editingParticipant

  useEffect(() => {
    if (editingParticipant) {
      setFormData({
        subject_id: editingParticipant.subject_id,
        study_group: editingParticipant.study_group,
        enrollment_date: editingParticipant.enrollment_date,
        status: editingParticipant.status,
        age: editingParticipant.age.toString(),
        gender: editingParticipant.gender,
      })
    } else {
      setFormData(initialFormState)
    }
  }, [editingParticipant, isOpen])

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async () => {
    if (
      !formData.subject_id ||
      !formData.study_group ||
      !formData.enrollment_date ||
      !formData.status ||
      !formData.age ||
      !formData.gender
    ) {
      return
    }

    const participantData: ParticipantFormData = {
      subject_id: formData.subject_id,
      study_group: formData.study_group as 'treatment' | 'control',
      enrollment_date: formData.enrollment_date,
      status: formData.status as 'active' | 'completed' | 'withdrawn',
      age: parseInt(formData.age),
      gender: formData.gender as 'F' | 'M' | 'Other',
    }

    await onSubmit(participantData)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>
            {isEditMode ? 'Edit Participant' : 'Add New Participant'}
          </DialogTitle>
          <DialogDescription>
            {isEditMode
              ? 'Update participant details below.'
              : 'Enter participant details to enroll them in the study.'}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="subject_id">Subject ID</Label>
            <Input
              id="subject_id"
              placeholder="P001"
              value={formData.subject_id}
              onChange={e => handleInputChange('subject_id', e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="study_group">Study Group</Label>
            <Select
              value={formData.study_group}
              onValueChange={value => handleInputChange('study_group', value)}
            >
              <SelectTrigger className="bg-white cursor-pointer">
                <SelectValue placeholder="Select group" />
              </SelectTrigger>
              <SelectContent className="bg-white cursor-pointer">
                <SelectItem value="treatment">Treatment</SelectItem>
                <SelectItem value="control">Control</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="enrollment_date">Enrollment Date</Label>
            <Input
              id="enrollment_date"
              type="date"
              value={formData.enrollment_date}
              onChange={e =>
                handleInputChange('enrollment_date', e.target.value)
              }
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="status">Status</Label>
            <Select
              value={formData.status}
              onValueChange={value => handleInputChange('status', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent className="bg-white cursor-pointer">
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="withdrawn">Withdrawn</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="age">Age</Label>
            <Input
              id="age"
              type="number"
              placeholder="45"
              value={formData.age}
              onChange={e => handleInputChange('age', e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="gender">Gender</Label>
            <Select
              value={formData.gender}
              onValueChange={value => handleInputChange('gender', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent className="bg-white cursor-pointer">
                <SelectItem value="F">Female</SelectItem>
                <SelectItem value="M">Male</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} disabled={isSubmitting}>
            {isSubmitting
              ? 'Saving...'
              : isEditMode
                ? 'Update Participant'
                : 'Add Participant'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
