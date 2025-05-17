import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { CheckCircle, Clock, MapPin, Users } from 'lucide-react';
interface LocationCardProps {
    location: {
        name: string;
        slug: string;
        currentlyWaiting: number;
        entriesToday: number;
        servedToday: number;
    };
}
export default function LocationCard({ location }: LocationCardProps) {
    return (
        <Card className="overflow-hidden transition-all hover:shadow-md">
            <CardHeader className="pb-2">
                <div className="flex flex-col space-y-1.5">
                    <div className="flex items-center gap-2">
                        <MapPin className="text-muted-foreground h-4 w-4" />
                        <h3 className="text-xl font-semibold">{location.name}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">{location.slug}</p>
                </div>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-3 gap-4 sm:grid-cols-3">
                    <div className="bg-accent flex flex-col items-center rounded-lg p-3">
                        <div className="text-muted-foreground flex items-center gap-1.5 text-sm font-medium">
                            <Users className="h-4 w-4" />
                            <span>Waiting</span>
                        </div>
                        <p className="text-2xl font-bold">{location.currentlyWaiting}</p>
                    </div>
                    <div className="bg-accent flex flex-col items-center rounded-lg p-3">
                        <div className="text-muted-foreground flex items-center gap-1.5 text-sm font-medium">
                            <Clock className="h-4 w-4" />
                            <span>Today</span>
                        </div>
                        <p className="text-2xl font-bold">{location.entriesToday}</p>
                    </div>
                    <div className="bg-accent flex flex-col items-center rounded-lg p-3">
                        <div className="text-muted-foreground flex items-center gap-1.5 text-sm font-medium">
                            <CheckCircle className="h-4 w-4" />
                            <span>Served</span>
                        </div>
                        <p className="text-2xl font-bold">{location.servedToday}</p>
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <div className="flex w-full justify-end">
                    <Button>Manage Queue</Button>
                </div>
            </CardFooter>
        </Card>
    );
}
