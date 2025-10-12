import { Users, TrendingUp, UserCheck, UserX } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { Participant } from '@/lib/types/participant'

interface MetricsCardsProps {
  participants: Participant[]
}

export const MetricsCards = ({ participants }: MetricsCardsProps) => {
  const metrics = {
    total: participants.length,
    active: participants.filter(p => p.status === 'active').length,
    treatment: participants.filter(p => p.study_group === 'treatment').length,
    control: participants.filter(p => p.study_group === 'control').length,
  }

  const metricCards = [
    {
      title: 'Total Participants',
      value: metrics.total,
      description: 'Enrolled in study',
      icon: Users,
    },
    {
      title: 'Active',
      value: metrics.active,
      description: 'Currently participating',
      icon: UserCheck,
    },
    {
      title: 'Treatment Group',
      value: metrics.treatment,
      description: `${
        metrics.total > 0
          ? ((metrics.treatment / metrics.total) * 100).toFixed(0)
          : 0
      }% of total`,
      icon: TrendingUp,
    },
    {
      title: 'Control Group',
      value: metrics.control,
      description: `${
        metrics.total > 0
          ? ((metrics.control / metrics.total) * 100).toFixed(0)
          : 0
      }% of total`,
      icon: UserX,
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
      {metricCards.map(metric => {
        const Icon = metric.icon
        return (
          <Card key={metric.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {metric.title}
              </CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <p className="text-xs text-muted-foreground">
                {metric.description}
              </p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
