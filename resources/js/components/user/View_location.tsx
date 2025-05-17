import { ExternalLink, Pencil } from 'lucide-react'; 

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Link } from '@inertiajs/react';

export default function ViewLocation() {
    // This would typically come from your database or API
    const location = {
        name: 'Downtown Cafe',
        url: 'waitlyst.io/downtown-cafe',
        status: 'Active',
    };

    return (
        <div className="container flex items-center justify-center  ">
            <Card className="w-full max-w-2xl">
                <CardHeader>
                    <h1 className="text-center text-3xl font-bold">{location.name}</h1>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="flex flex-col items-center justify-center space-y-2">
                        <div className="flex items-center gap-2">
                            <Link
                                href={`https://${location.url}`}
                                target="_blank"
                                className="text-primary flex items-center text-center text-lg font-medium hover:underline"
                            >
                                {location.url}
                                <ExternalLink className="ml-1 h-4 w-4" />
                            </Link>
                            <Badge variant="outline" className="border-green-200 bg-green-50 text-green-700">
                                {location.status}
                            </Badge>
                        </div>
                        <p className="text-muted-foreground text-sm">Public URL for your customers</p>
                    </div>

                    <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row">
                        <Button size="lg" className="sm:flex-1">
                            View Waitlist
                        </Button>
                        <Button size="lg" variant="outline" className="sm:flex-1">
                            <Pencil className="mr-2 h-4 w-4" />
                            Edit Location
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
