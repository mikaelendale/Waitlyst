import { AdminDashboard } from '@/components/admin/admin_dashboard';
import TodaysQueuesCard from '@/components/user/queqe';
import LocationCard from '@/components/user/waitlist-card';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { ChartNoAxesCombinedIcon, User } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Home',
        href: '#',
    }, 
];

const location = {
    name: 'Downtown Cafe',
    slug: 'downtown-cafe',
    currentlyWaiting: 12,
    entriesToday: 45,
    servedToday: 33,
};
const queues = [
    {
        id: '1',
        name: 'Regular Service',
        waitTime: 25,
        peopleCount: 8,
        status: 'normal' as const,
    },
    {
        id: '2',
        name: 'Express Checkout',
        waitTime: 10,
        peopleCount: 4,
        status: 'slow' as const,
    },
];
export default function Home() {
    const { auth } = usePage().props;
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Home" />

            {auth.user.role === 'admin' &&
                <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                    <AdminDashboard />
                </div>}
            {auth.user.role === 'user' && (
                <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                    <div className="grid auto-rows-min gap-4 md:grid-cols-2">
                        <LocationCard location={location} />
                        <TodaysQueuesCard queues={queues} />
                    </div>
                </div>
            )}
        </AppLayout>
    );
}
