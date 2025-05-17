import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Clock, Users } from 'lucide-react';

// Queue status types
type QueueStatus = 'busy' | 'normal' | 'slow';

// Queue item interface
interface QueueItem {
    id: string;
    name: string;
    waitTime: number; // in minutes
    peopleCount: number;
    status: QueueStatus;
}

interface TodaysQueuesCardProps {
    queues: QueueItem[];
    date?: Date; // Optional date, defaults to today
}

export default function TodaysQueuesCard({ queues, date = new Date() }: TodaysQueuesCardProps) {
    // Format today's date
    const formattedDate = new Intl.DateTimeFormat('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
    }).format(date);

    // Get status color based on queue status
    const getStatusColor = (status: QueueStatus) => {
        switch (status) {
            case 'busy':
            return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 hover:bg-red-100 dark:hover:bg-red-900';
            case 'normal':
            return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 hover:bg-green-100 dark:hover:bg-green-900';
            case 'slow':
            return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 hover:bg-blue-100 dark:hover:bg-blue-900';
            default:
            return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-900';
        }
    };

    // Format wait time to be more readable
    const formatWaitTime = (minutes: number) => {
        if (minutes < 60) {
            return `${minutes} min`;
        }
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;
        return remainingMinutes > 0 ? `${hours}h ${remainingMinutes}m` : `${hours}h`;
    };

    return (
        <Card className="overflow-hidden transition-all hover:shadow-md">
            <CardHeader className="pb-2">
                <CardTitle className="text-xl">Today's Queues</CardTitle>
                <p className="text-muted-foreground text-sm">{formattedDate}</p>
            </CardHeader>
            <CardContent>
                <div className="space-y-3">
                    {queues.length === 0 ? (
                        <p className="text-muted-foreground py-3 text-center">No queues for today</p>
                    ) : (
                        queues.map((queue) => (
                            <div
                                key={queue.id}
                                className="flex flex-col space-y-2 rounded-lg border p-3 sm:flex-row sm:items-center sm:justify-between sm:space-y-0"
                            >
                                <div className="space-y-1">
                                    <h3 className="font-medium">{queue.name}</h3>
                                    <div className="text-muted-foreground flex items-center gap-3 text-sm">
                                        <div className="flex items-center gap-1">
                                            <Users className="h-3.5 w-3.5" />
                                            <span>{queue.peopleCount} people</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="h-3.5 w-3.5" />
                                            <span>{formatWaitTime(queue.waitTime)} wait</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Badge variant="secondary" className={`${getStatusColor(queue.status)} capitalize`}>
                                        {queue.status}
                                    </Badge> 
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
