import AppHeaderLayout from '@/layouts/app/app-header-layout';
import AppSidebarLayout from '@/layouts/app/app-sidebar-layout';
import { type BreadcrumbItem } from '@/types';
import { usePage } from '@inertiajs/react';
import { type ReactNode } from 'react';
import { Toaster } from 'sonner';

interface AppLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export default function AppLayout({ children, breadcrumbs, ...props }: AppLayoutProps) {
    const { auth } = usePage().props;

    if (auth.user.role === 'admin') {
        return (
            <AppSidebarLayout breadcrumbs={breadcrumbs} {...props}>
                {children}
                <Toaster />
            </AppSidebarLayout>
        );
    }

    return (
        <AppHeaderLayout breadcrumbs={breadcrumbs} {...props}>
            {children}
            <Toaster/>
        </AppHeaderLayout>
    );
}
