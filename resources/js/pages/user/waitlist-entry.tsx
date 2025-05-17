import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import WaitingList from '@/components/user/waiting_list';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { CheckCircle, Clock, Users } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Waitlist',
        href: '/waitlist',
    },
    {
        title: 'Entry',
        href: '/waitlist/entry',
    },
];
const waitlistStats = {
    currentlyWaiting: 14,
    servedToday: 27,
    averageWaitTime: 18, // in minutes
};

export default function WaitlistEntry() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Waitlist Entry" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-3xl font-bold tracking-tight">Waitlist Dashboard</h2>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Currently Waiting</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{waitlistStats.currentlyWaiting}</div>
                            <p className="text-muted-foreground text-xs">People in queue</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Served Today</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{waitlistStats.servedToday}</div>
                            <p className="text-muted-foreground text-xs">Completed services</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Average Wait Time</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{waitlistStats.averageWaitTime} min</div>
                            <p className="text-muted-foreground text-xs">Current estimate</p>
                        </CardContent>
                    </Card>
                </div>
                <div className="grid items-start gap-4 md:grid-cols-2"></div>
                <h1 className="mb-6 text-2xl font-bold">Current avaliable waitlists</h1>
                <WaitingList />
            </div>
        </AppLayout>
    );
}
