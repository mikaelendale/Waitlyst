import AppLayoutTemplate from '@/layouts/app/app-header-layout';
import { type BreadcrumbItem } from '@/types';
import { type ReactNode } from 'react';
import { Toaster } from 'sonner';
import { useEffect } from 'react';

interface AppLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export default ({ children, breadcrumbs, ...props }: AppLayoutProps) => {
    useEffect(() => {
        // Detect Laravel flash session messages from a global variable or meta tag
        // Example assumes window.LaravelSessionMessages is set in your blade template
        if (typeof window !== 'undefined' && (window as any).LaravelSessionMessages) {
            const messages = (window as any).LaravelSessionMessages;
            if (messages.success) {
                import('sonner').then(({ toast }) => toast.success(messages.success));
            }
            if (messages.error) {
                import('sonner').then(({ toast }) => toast.error(messages.error));
            }
            if (messages.warning) {
                import('sonner').then(({ toast }) => toast.warning(messages.warning));
            }
            if (messages.info) {
                import('sonner').then(({ toast }) => toast.info(messages.info));
            }
        }
    }, []);

    return (
        <AppLayoutTemplate breadcrumbs={breadcrumbs} {...props}>
            {children}
            <Toaster />
        </AppLayoutTemplate>
    );
};
