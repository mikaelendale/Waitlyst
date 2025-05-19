'use client';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AlertCircle, ArrowRight, Filter, MoreHorizontal, Plus, Search, Settings, Store, Users } from 'lucide-react';
import { useState } from 'react';

export function AdminDashboard() {
    const [activeTab, setActiveTab] = useState('locations');
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div className="mx-auto w-full max-w-[1400px]">
            {/* Simple Header */}
            <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <h1 className="text-2xl font-medium">Super Admin</h1>

                <div className="flex items-center gap-2">
                    <div className="relative flex-1 sm:w-64">
                        <Search className="text-muted-foreground absolute top-2.5 left-2.5 h-4 w-4" />
                        <Input placeholder="Search..." className="h-9 pl-8" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                    </div>
                    <Button size="sm" variant="outline" className="h-9 w-9 p-0">
                        <Filter className="h-4 w-4" />
                    </Button>
                    <Button size="sm" className="h-9">
                        <Plus className="mr-2 h-4 w-4" />
                        New
                    </Button>
                </div>
            </div>

            {/* System Alerts - Only show if there are alerts */}
            <div className="mb-6">
                <div className="mb-2 flex items-center gap-2">
                    <AlertCircle className="text-destructive h-4 w-4" />
                    <h2 className="text-sm font-medium">System Alerts (2)</h2>
                </div>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                    <div className="bg-destructive/10 rounded-md p-3 text-sm">
                        <div className="flex items-start justify-between">
                            <div>
                                <p className="font-medium">Payment processing system is down</p>
                                <p className="text-muted-foreground mt-1 text-xs">All locations • 10 minutes ago</p>
                            </div>
                            <Button variant="ghost" size="sm" className="h-7 px-2">
                                Fix
                            </Button>
                        </div>
                    </div>
                    <div className="rounded-md bg-yellow-500/10 p-3 text-sm">
                        <div className="flex items-start justify-between">
                            <div>
                                <p className="font-medium">Unusual traffic spike detected</p>
                                <p className="text-muted-foreground mt-1 text-xs">Downtown • 25 minutes ago</p>
                            </div>
                            <Button variant="ghost" size="sm" className="h-7 px-2">
                                View
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Key Stats */}
            <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                <Card className="overflow-hidden">
                    <CardContent className="p-0">
                        <div className="p-3">
                            <div className="text-muted-foreground mb-1 text-xs">Locations</div>
                            <div className="text-2xl font-medium">8</div>
                        </div>
                        <div className="bg-primary/20 h-1 w-full">
                            <div className="bg-primary h-full w-[75%]"></div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="overflow-hidden">
                    <CardContent className="p-0">
                        <div className="p-3">
                            <div className="text-muted-foreground mb-1 text-xs">Users</div>
                            <div className="text-2xl font-medium">12,450</div>
                        </div>
                        <div className="bg-primary/20 h-1 w-full">
                            <div className="bg-primary h-full w-[60%]"></div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="overflow-hidden">
                    <CardContent className="p-0">
                        <div className="p-3">
                            <div className="text-muted-foreground mb-1 text-xs">Revenue</div>
                            <div className="text-2xl font-medium">$128,450</div>
                        </div>
                        <div className="bg-primary/20 h-1 w-full">
                            <div className="bg-primary h-full w-[85%]"></div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="overflow-hidden">
                    <CardContent className="p-0">
                        <div className="p-3">
                            <div className="text-muted-foreground mb-1 text-xs">Waitlists</div>
                            <div className="text-2xl font-medium">145</div>
                        </div>
                        <div className="bg-primary/20 h-1 w-full">
                            <div className="bg-primary h-full w-[40%]"></div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="overflow-hidden">
                    <CardContent className="p-0">
                        <div className="p-3">
                            <div className="text-muted-foreground mb-1 text-xs">Alerts</div>
                            <div className="text-destructive text-2xl font-medium">2</div>
                        </div>
                        <div className="bg-destructive/20 h-1 w-full">
                            <div className="bg-destructive h-full w-[20%]"></div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Main Content Tabs */}
            <Tabs defaultValue="locations" value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="mb-4">
                    <TabsTrigger value="locations">Locations</TabsTrigger>
                    <TabsTrigger value="admins">Admins</TabsTrigger>
                    <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>

                {/* Locations Tab */}
                <TabsContent value="locations" className="mt-0">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {[
                            {
                                id: 1,
                                name: 'Downtown',
                                status: 'active',
                                users: 42,
                                waitlist: 15,
                                revenue: '$2,845',
                            },
                            {
                                id: 2,
                                name: 'Westside',
                                status: 'active',
                                users: 38,
                                waitlist: 12,
                                revenue: '$2,210',
                            },
                            {
                                id: 3,
                                name: 'Northside',
                                status: 'active',
                                users: 29,
                                waitlist: 8,
                                revenue: '$1,950',
                            },
                            {
                                id: 4,
                                name: 'Airport',
                                status: 'maintenance',
                                users: 0,
                                waitlist: 0,
                                revenue: '$0',
                            },
                        ].map((location) => (
                            <Card key={location.id} className="overflow-hidden">
                                <CardContent className="p-0">
                                    <div className="border-b p-4">
                                        <div className="mb-1 flex items-center justify-between">
                                            <h3 className="font-medium">{location.name}</h3>
                                            <Badge
                                                variant={location.status === 'active' ? 'default' : 'outline'}
                                                className={
                                                    location.status === 'maintenance' ? 'border-yellow-500/20 bg-yellow-500/10 text-yellow-500' : ''
                                                }
                                            >
                                                {location.status}
                                            </Badge>
                                        </div>
                                        <p className="text-muted-foreground text-xs">Urban Roasters - {location.name}</p>
                                    </div>

                                    <div className="space-y-3 p-4">
                                        <div className="grid grid-cols-3 gap-2 text-sm">
                                            <div>
                                                <div className="text-muted-foreground text-xs">Users</div>
                                                <div>{location.users}</div>
                                            </div>
                                            <div>
                                                <div className="text-muted-foreground text-xs">Waitlist</div>
                                                <div>{location.waitlist}</div>
                                            </div>
                                            <div>
                                                <div className="text-muted-foreground text-xs">Revenue</div>
                                                <div>{location.revenue}</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-muted/50 flex items-center justify-between p-2">
                                        <Button variant="ghost" size="sm" className="h-7 px-2">
                                            Manage
                                            <ArrowRight className="ml-1 h-3 w-3" />
                                        </Button>

                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                                                    <MoreHorizontal className="h-4 w-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem>View Dashboard</DropdownMenuItem>
                                                <DropdownMenuItem>Edit Location</DropdownMenuItem>
                                                <DropdownMenuItem>View Analytics</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}

                        {/* Add Location Card */}
                        <Card className="overflow-hidden border-dashed">
                            <CardContent className="p-0">
                                <div className="flex h-[204px] items-center justify-center">
                                    <Button variant="ghost" className="flex h-auto flex-col py-4">
                                        <Plus className="mb-2 h-8 w-8" />
                                        <span>Add Location</span>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>

                {/* Admins Tab */}
                <TabsContent value="admins" className="mt-0">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {[
                            {
                                id: 1,
                                name: 'Alex Johnson',
                                role: 'Location Manager',
                                location: 'Downtown',
                                status: 'online',
                                lastActive: '2 minutes ago',
                            },
                            {
                                id: 2,
                                name: 'Sam Wilson',
                                role: 'Location Manager',
                                location: 'Westside',
                                status: 'online',
                                lastActive: '5 minutes ago',
                            },
                            {
                                id: 3,
                                name: 'Jamie Smith',
                                role: 'Location Manager',
                                location: 'Northside',
                                status: 'offline',
                                lastActive: '1 hour ago',
                            },
                        ].map((admin) => (
                            <Card key={admin.id}>
                                <CardContent className="p-4">
                                    <div className="mb-4 flex items-start justify-between">
                                        <Avatar className="h-10 w-10">
                                            <AvatarFallback>
                                                {admin.name
                                                    .split(' ')
                                                    .map((n) => n[0])
                                                    .join('')}
                                            </AvatarFallback>
                                        </Avatar>
                                        <Badge
                                            variant="outline"
                                            className={admin.status === 'online' ? 'border-green-500/20 bg-green-500/10 text-green-500' : ''}
                                        >
                                            {admin.status}
                                        </Badge>
                                    </div>

                                    <div className="mb-4 space-y-1">
                                        <h3 className="font-medium">{admin.name}</h3>
                                        <p className="text-muted-foreground text-sm">{admin.role}</p>
                                    </div>

                                    <div className="space-y-2 text-xs">
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">Location:</span>
                                            <span>{admin.location}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">Last active:</span>
                                            <span>{admin.lastActive}</span>
                                        </div>
                                    </div>

                                    <div className="mt-4 flex justify-between border-t pt-4">
                                        <Button variant="ghost" size="sm" className="h-7 px-2">
                                            Edit
                                        </Button>
                                        <Button variant="ghost" size="sm" className="h-7 px-2">
                                            Permissions
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}

                        {/* Add Admin Card */}
                        <Card className="border-dashed">
                            <CardContent className="p-0">
                                <div className="flex h-[204px] items-center justify-center">
                                    <Button variant="ghost" className="flex h-auto flex-col py-4">
                                        <Plus className="mb-2 h-8 w-8" />
                                        <span>Add Admin</span>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>

                {/* Settings Tab */}
                <TabsContent value="settings" className="mt-0">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        {[
                            {
                                id: 1,
                                title: 'General Settings',
                                description: 'System-wide configuration',
                                icon: <Settings className="h-5 w-5" />,
                            },
                            {
                                id: 2,
                                title: 'Security & Permissions',
                                description: 'Access control and security',
                                icon: <Users className="h-5 w-5" />,
                            },
                            {
                                id: 3,
                                title: 'Locations Management',
                                description: 'Manage all locations',
                                icon: <Store className="h-5 w-5" />,
                            },
                            {
                                id: 4,
                                title: 'System Alerts',
                                description: 'Configure system notifications',
                                icon: <AlertCircle className="h-5 w-5" />,
                            },
                        ].map((setting) => (
                            <Card key={setting.id} className="overflow-hidden">
                                <CardContent className="p-0">
                                    <div className="flex items-center gap-4 p-4">
                                        <div className="bg-primary/10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md">
                                            {setting.icon}
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <h3 className="truncate font-medium">{setting.title}</h3>
                                            <p className="text-muted-foreground truncate text-sm">{setting.description}</p>
                                        </div>
                                        <Button size="sm" className="h-8">
                                            Configure
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}
