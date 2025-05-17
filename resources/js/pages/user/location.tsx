import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { CreateLocationCard } from '@/components/user/create_location';
import ViewLocation from '@/components/user/View_location';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Home',
        href: '/home',
    },
    {
        title: 'Locations',
        href: '/locations',
    },
];

export default function Locations() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Locations" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="grid gap-4 md:grid-cols-2 items-start">
                    <ViewLocation />
                    <CreateLocationCard />
                </div>
            </div>
        </AppLayout>
    );
}
