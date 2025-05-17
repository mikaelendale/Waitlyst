import WaitingList from '@/components/user/waiting_list';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Waitlist',
        href: '/waitlist',
    },
];

export default function WaitlistEntry() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Waitlist Entry" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="grid items-start gap-4 md:grid-cols-2"></div>
                    <h1 className="mb-6 text-2xl font-bold">Card List</h1>
                    <WaitingList />
                
            </div>
        </AppLayout>
    );
}
