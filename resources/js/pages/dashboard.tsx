import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import TodaysQueuesCard from '@/components/user/queqe';
import WaitingList from '@/components/user/waiting_list';
import LocationCard from '@/components/user/waitlist-card';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Home',
        href: '/home',
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
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Home" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-2">
                    <LocationCard location={location} />
                    <TodaysQueuesCard queues={queues} />
                </div>
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative flex-1 overflow-hidden">
                    <h1 className="mb-6 text-2xl font-bold">Card List</h1>
                    <WaitingList />
                </div>
            </div>
        </AppLayout>
    );
}
