('use client');


import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input'; 
import { Bell, Check, ChevronLeft, ChevronRight, Filter, Mail, Phone, Search, X } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

// Sample data for the queue
const queueData = [
    {
        id: 1,
        name: 'Alex Johnson',
        email: 'alex@example.com',
        phone: '555-123-4567',
        position: 1,
        waitingSince: '10:30 AM',
        location: 'Urban Roasters',
        locationId: 1,
        status: 'waiting',
        message: 'Table for 2 please',
        notified: false,
    },
    {
        id: 2,
        name: 'Sam Wilson',
        email: 'sam@example.com',
        phone: '555-987-6543',
        position: 2,
        waitingSince: '10:45 AM',
        location: 'Urban Roasters',
        locationId: 1,
        status: 'waiting',
        message: 'Near the window if possible',
        notified: true,
    },
    {
        id: 3,
        name: 'Jamie Smith',
        email: 'jamie@example.com',
        phone: '555-456-7890',
        position: 3,
        waitingSince: '11:00 AM',
        location: 'Urban Roasters',
        locationId: 1,
        status: 'waiting',
        message: '',
        notified: false,
    },
    {
        id: 4,
        name: 'Taylor Reed',
        email: 'taylor@example.com',
        phone: '555-789-0123',
        position: 4,
        waitingSince: '11:15 AM',
        location: 'Urban Roasters',
        locationId: 1,
        status: 'waiting',
        message: 'Prefer quiet area',
        notified: false,
    },
    {
        id: 5,
        name: 'Jordan Lee',
        email: 'jordan@example.com',
        phone: '555-234-5678',
        position: 5,
        waitingSince: '11:30 AM',
        location: 'Urban Roasters',
        locationId: 1,
        status: 'waiting',
        message: '',
        notified: false,
    },
    {
        id: 6,
        name: 'Morgan Chen',
        email: 'morgan@example.com',
        phone: '555-345-6789',
        position: 6,
        waitingSince: '11:45 AM',
        location: 'Urban Roasters',
        locationId: 1,
        status: 'waiting',
        message: 'Birthday celebration',
        notified: false,
    },
    {
        id: 7,
        name: 'Riley Kim',
        email: 'riley@example.com',
        phone: '555-456-7890',
        position: 7,
        waitingSince: '12:00 PM',
        location: 'Urban Roasters',
        locationId: 1,
        status: 'waiting',
        message: '',
        notified: false,
    },
    {
        id: 8,
        name: 'Casey Brown',
        email: 'casey@example.com',
        phone: '555-567-8901',
        position: 8,
        waitingSince: '12:15 PM',
        location: 'Urban Roasters',
        locationId: 1,
        status: 'waiting',
        message: 'Allergic to nuts',
        notified: false,
    },
    {
        id: 9,
        name: 'Avery Davis',
        email: 'avery@example.com',
        phone: '555-678-9012',
        position: 9,
        waitingSince: '12:30 PM',
        location: 'Urban Roasters',
        locationId: 1,
        status: 'waiting',
        message: '',
        notified: false,
    },
    {
        id: 10,
        name: 'Quinn Miller',
        email: 'quinn@example.com',
        phone: '555-789-0123',
        position: 10,
        waitingSince: '12:45 PM',
        location: 'Urban Roasters',
        locationId: 1,
        status: 'waiting',
        message: 'Need high chair',
        notified: false,
    },
];

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
    const [queue, setQueue] = useState(queueData);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedUser, setSelectedUser] = useState<(typeof queueData)[0] | null>(null);
    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
    const [activeFilter, setActiveFilter] = useState<'all' | 'waiting' | 'notified'>('all');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const filteredQueue = queue.filter(
        (user) =>
            (user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                user.phone.includes(searchQuery)) &&
            (activeFilter === 'all' || (activeFilter === 'waiting' && !user.notified) || (activeFilter === 'notified' && user.notified)),
    );

    // Calculate pagination
    const totalPages = Math.ceil(filteredQueue.length / itemsPerPage);
    const paginatedQueue = filteredQueue.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handleNotify = (userId: number) => {
        setQueue(queue.map((user) => (user.id === userId ? { ...user, notified: true } : user)));

        toast({
            title: 'Notification sent',
            description: 'The user has been notified of their turn.',
        });
    };

    const openConfirmModal = (user: (typeof queueData)[0]) => {
        setSelectedUser(user);
        setIsConfirmModalOpen(true);
    };

    const openDetailsModal = (user: (typeof queueData)[0]) => {
        setSelectedUser(user);
        setIsDetailsModalOpen(true);
    };

    const confirmArrival = () => {
        if (!selectedUser) return;

        setQueue(queue.filter((user) => user.id !== selectedUser.id));
        setIsConfirmModalOpen(false);

        toast({
            title: 'Arrival confirmed',
            description: `${selectedUser.name} has been removed from the queue.`,
        });
    };

    const getInitials = (name: string) => {
        return name
            .split(' ')
            .map((part) => part[0])
            .join('')
            .toUpperCase();
    };

    const goToPage = (page: number) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
    };

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

                <div className="max-w-7xl px-2 py-10">
                    <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                        <div>
                            <h1 className="text-3xl font-bold tracking-tight">Queue</h1>
                            <p className="text-muted-foreground mt-1">Urban Roasters • {queue.length} in line</p>
                        </div>

                        <div className="flex w-full items-center gap-3 md:w-auto">
                            <div className="relative flex-grow md:w-64">
                                <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
                                <Input
                                    placeholder="Search..."
                                    className="h-10 pl-9"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" size="icon" className="h-10 w-10">
                                        <Filter className="h-4 w-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem onClick={() => setActiveFilter('all')}>All ({queue.length})</DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => setActiveFilter('waiting')}>
                                        Waiting ({queue.filter((u) => !u.notified).length})
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => setActiveFilter('notified')}>
                                        Notified ({queue.filter((u) => u.notified).length})
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>

                    <div className="mb-6 space-y-3">
                        {paginatedQueue.length === 0 ? (
                            <div className="text-muted-foreground py-12 text-center">
                                <p>No users found in queue</p>
                            </div>
                        ) : (
                            paginatedQueue.map((user) => (
                                <div
                                    key={user.id}
                                    className="bg-accent flex flex-col justify-between gap-4 rounded-lg p-4 transition-shadow hover:shadow-sm sm:flex-row sm:items-center"
                                    onClick={() => openDetailsModal(user)}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="bg-muted flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full font-mono text-sm">
                                            {user.position}
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Avatar className="h-10 w-10">
                                                <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <div className="font-medium">{user.name}</div>
                                                <div className="text-muted-foreground text-sm">{user.phone}</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-3 flex items-center justify-between gap-3 sm:mt-0 sm:justify-end">
                                        <div className="hidden text-right md:block">
                                            <div className="text-muted-foreground text-sm">Waiting since</div>
                                            <div>{user.waitingSince}</div>
                                        </div>

                                        {user.notified ? (
                                            <Badge variant="default" className="ml-auto md:ml-0">
                                                Notified
                                            </Badge>
                                        ) : (
                                            <Badge variant="outline" className="ml-auto md:ml-0">
                                                Waiting
                                            </Badge>
                                        )}

                                        <div className="flex items-center gap-1">
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    if (!user.notified) handleNotify(user.id);
                                                }}
                                                disabled={user.notified}
                                                className="h-8 w-8"
                                            >
                                                <Bell className="h-4 w-4" />
                                            </Button>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    openConfirmModal(user);
                                                }}
                                                className="h-8 w-8"
                                            >
                                                <Check className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Cool Minimal Pagination */}
                    {totalPages > 1 && (
                        <div className="mt-6 flex items-center justify-end gap-1">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => goToPage(currentPage - 1)}
                                disabled={currentPage === 1}
                                className="h-8 w-8"
                            >
                                <ChevronLeft className="h-4 w-4" />
                            </Button>

                            <div className="flex items-center">
                                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                    <Button
                                        key={page}
                                        variant={currentPage === page ? 'default' : 'ghost'}
                                        size="icon"
                                        onClick={() => goToPage(page)}
                                        className={`h-8 w-8 ${currentPage === page ? 'pointer-events-none' : ''}`}
                                    >
                                        <span className="font-mono text-xs">{page}</span>
                                    </Button>
                                ))}
                            </div>

                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => goToPage(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className="h-8 w-8"
                            >
                                <ChevronRight className="h-4 w-4" />
                            </Button>
                        </div>
                    )}

                    {/* Confirm Arrival Modal */}
                    {selectedUser && (
                        <Dialog open={isConfirmModalOpen} onOpenChange={setIsConfirmModalOpen}>
                            <DialogContent className="sm:max-w-[400px]">
                                <DialogHeader>
                                    <DialogTitle>Confirm Arrival</DialogTitle>
                                    <DialogDescription>Has this person arrived at the location?</DialogDescription>
                                </DialogHeader>

                                <div className="flex items-center gap-4 py-4">
                                    <Avatar className="h-12 w-12">
                                        <AvatarFallback>{getInitials(selectedUser.name)}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-medium">{selectedUser.name}</p>
                                        <p className="text-muted-foreground text-sm">Position #{selectedUser.position}</p>
                                    </div>
                                </div>

                                <DialogFooter>
                                    <Button variant="outline" onClick={() => setIsConfirmModalOpen(false)}>
                                        Cancel
                                    </Button>
                                    <Button onClick={confirmArrival}>
                                        <Check className="mr-2 h-4 w-4" />
                                        Confirm
                                    </Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    )}

                    {/* User Details Modal */}
                    {selectedUser && (
                        <Dialog open={isDetailsModalOpen} onOpenChange={setIsDetailsModalOpen}>
                            <DialogContent className="sm:max-w-[400px]">
                                <DialogHeader>
                                    <div className="flex items-center justify-between">
                                        <DialogTitle>Queue Position #{selectedUser.position}</DialogTitle>
                                         
                                    </div>
                                </DialogHeader>

                                <div className="py-4">
                                    <div className="mb-6 flex items-center gap-4">
                                        <Avatar className="h-16 w-16">
                                            <AvatarFallback>{getInitials(selectedUser.name)}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <h3 className="text-xl font-medium">{selectedUser.name}</h3>
                                            <p className="text-muted-foreground">Waiting since {selectedUser.waitingSince}</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <Phone className="text-muted-foreground h-4 w-4" />
                                            <span>{selectedUser.phone}</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Mail className="text-muted-foreground h-4 w-4" />
                                            <span>{selectedUser.email}</span>
                                        </div>
                                    </div>

                                    {selectedUser.message && (
                                        <div className="bg-muted mt-6 rounded-md p-3">
                                            <p className="text-sm">{selectedUser.message}</p>
                                        </div>
                                    )}
                                </div>

                                <div className="flex gap-2">
                                    <Button
                                        variant={selectedUser.notified ? 'outline' : 'default'}
                                        className="flex-1"
                                        onClick={() => {
                                            if (!selectedUser.notified) {
                                                handleNotify(selectedUser.id);
                                            }
                                        }}
                                        disabled={selectedUser.notified}
                                    >
                                        <Bell className="mr-2 h-4 w-4" />
                                        {selectedUser.notified ? 'Notified' : 'Notify'}
                                    </Button>
                                    <Button className="flex-1" onClick={() => openConfirmModal(selectedUser)}>
                                        <Check className="mr-2 h-4 w-4" />
                                        Arrived
                                    </Button>
                                </div>
                            </DialogContent>
                        </Dialog>
                    )}
                </div>
            </div>
        </AppLayout>
    );
}
