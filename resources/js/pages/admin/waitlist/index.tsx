'use client';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Input } from '@/components/ui/input';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { ArrowUpRight, Download, Footprints, Globe, Search, Share2, TrendingUp, Waves } from 'lucide-react';
import { useState } from 'react';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';
const chartData = [
    { month: 'January', desktop: 186, mobile: 80 },
    { month: 'February', desktop: 305, mobile: 200 },
    { month: 'March', desktop: 237, mobile: 120 },
    { month: 'April', desktop: 73, mobile: 190 },
    { month: 'May', desktop: 209, mobile: 130 },
    { month: 'June', desktop: 214, mobile: 140 },
];
const SigninData = [
    { date: '2024-07-15', running: 450, swimming: 300 },
    { date: '2024-07-16', running: 380, swimming: 420 },
    { date: '2024-07-17', running: 520, swimming: 120 },
    { date: '2024-07-18', running: 140, swimming: 550 },
    { date: '2024-07-19', running: 600, swimming: 350 },
    { date: '2024-07-20', running: 480, swimming: 400 },
];
const chartConfig = {
    desktop: {
        label: 'Desktop',
        color: '#4F46E5', // Indigo-600
    },
    mobile: {
        label: 'Mobile',
        color: '#22D3EE', // Cyan-400
    },
    running: {
        label: 'Running',
        color: '#10B981', // Emerald-500
        icon: Footprints,
    },
    swimming: {
        label: 'Swimming',
        color: '#3B82F6', // Blue-500
        icon: Waves,
    },
} satisfies ChartConfig;

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: 'dashboard',
    },
    {
        title: 'Waitlist Signups',
        href: '/waitlist-signups',
    },
];

export default function WailistSignup() {
    const [timeRange, setTimeRange] = useState('7d');

    // Mock data - would be replaced with actual API data
    const totalSignups = 2458;
    const weeklyGrowth = 18.7;
    const dailySignups = [42, 56, 78, 98, 120, 132, 124];
    const conversionRate = 64;

    // Recent signups
    const recentSignups = [
        {
            id: 1,
            name: 'Emma Thompson',
            email: 'emma@example.com',
            date: '2 minutes ago',
            source: 'Product Hunt',
            avatar: '/placeholder.svg?height=40&width=40',
        },
        {
            id: 2,
            name: 'Michael Chen',
            email: 'michael@example.com',
            date: '5 minutes ago',
            source: 'Twitter',
            avatar: '/placeholder.svg?height=40&width=40',
        },
        {
            id: 3,
            name: 'Sophia Rodriguez',
            email: 'sophia@example.com',
            date: '10 minutes ago',
            source: 'Direct',
            avatar: '/placeholder.svg?height=40&width=40',
        },
        {
            id: 4,
            name: 'James Wilson',
            email: 'james@example.com',
            date: '15 minutes ago',
            source: 'Google',
            avatar: '/placeholder.svg?height=40&width=40',
        },
        {
            id: 5,
            name: 'Olivia Johnson',
            email: 'olivia@example.com',
            date: '20 minutes ago',
            source: 'Twitter',
            avatar: '/placeholder.svg?height=40&width=40',
        },
    ];
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Waitlist" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="mx-auto w-full max-w-[1200px] p-4">
                    {/* Header with Time Range */}
                    <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                        <div>
                            <h1 className="text-2xl font-medium">Waitlist Dashboard</h1>
                            <p className="text-muted-foreground">Track pre-registrations for your product launch</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <Button variant="outline" className="w-[140px]">
                                Last 7 days
                            </Button>

                            <Button variant="outline">
                                <Download className="mr-2 h-4 w-4" />
                                Export
                            </Button>
                        </div>
                    </div>

                    {/* Key Stats Row */}
                    <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
                        {/* Total Signups */}
                        <Card className="overflow-hidden">
                            <CardContent className="p-6">
                                <div className="mb-4 flex items-center justify-between">
                                    <h3 className="text-muted-foreground text-sm font-medium">Total Signups</h3>
                                    <div className="bg-primary/10 flex h-8 w-8 items-center justify-center rounded-full">
                                        <TrendingUp className="text-primary h-4 w-4" />
                                    </div>
                                </div>
                                <div className="mb-2 text-3xl font-bold">{totalSignups.toLocaleString()}</div>
                                <div className="flex items-center text-sm">
                                    <Badge className="border-0 bg-green-500/10 text-green-500 hover:bg-green-500/20">
                                        <ArrowUpRight className="mr-1 h-3 w-3" />
                                        {weeklyGrowth}%
                                    </Badge>
                                    <span className="text-muted-foreground ml-2">vs last week</span>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Conversion Rate */}
                        <Card className="overflow-hidden">
                            <CardContent className="p-6">
                                <div className="mb-4 flex items-center justify-between">
                                    <h3 className="text-muted-foreground text-sm font-medium">Conversion Rate</h3>
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/10">
                                        <Share2 className="h-4 w-4 text-blue-500" />
                                    </div>
                                </div>
                                <div className="mb-2 text-3xl font-bold">{conversionRate}%</div>
                                <div className="bg-muted h-2 w-full rounded-full">
                                    <div className="h-2 rounded-full bg-blue-500" style={{ width: `${conversionRate}%` }} />
                                </div>
                            </CardContent>
                        </Card>

                        {/* Geographic Reach */}
                        <Card className="overflow-hidden">
                            <CardContent className="p-6">
                                <div className="mb-4 flex items-center justify-between">
                                    <h3 className="text-muted-foreground text-sm font-medium">Geographic Reach</h3>
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500/10">
                                        <Globe className="h-4 w-4 text-purple-500" />
                                    </div>
                                </div>
                                <div className="mb-2 text-3xl font-bold">24 Countries</div>
                                <div className="flex gap-1">
                                    {['🇺🇸', '🇬🇧', '🇩🇪', '🇮🇳', '🇨🇦'].map((flag, i) => (
                                        <div key={i} className="text-lg">
                                            {flag}
                                        </div>
                                    ))}
                                    <div className="text-muted-foreground flex items-center text-sm">+19 more</div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Chart and Sources */}
                    <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
                        {/* Daily Signups Chart */}
                        <Card className="md:col-span-2">
                            <CardHeader>
                                <CardTitle>Tooltip - Icons</CardTitle>
                                <CardDescription>Tooltip with icons.</CardDescription>
                            </CardHeader>
                            <CardContent className="pt-6">
                                <ChartContainer config={chartConfig}>
                                    <BarChart accessibilityLayer data={SigninData}>
                                        <XAxis
                                            dataKey="date"
                                            tickLine={false}
                                            tickMargin={10}
                                            axisLine={false}
                                            tickFormatter={(value) => {
                                                return new Date(value).toLocaleDateString('en-US', {
                                                    weekday: 'short',
                                                });
                                            }}
                                        />
                                        <Bar dataKey="running" stackId="a" fill="var(--color-running)" radius={[0, 0, 4, 4]} />
                                        <Bar dataKey="swimming" stackId="a" fill="var(--color-swimming)" radius={[4, 4, 0, 0]} />
                                        <ChartTooltip content={<ChartTooltipContent hideLabel />} cursor={false} defaultIndex={1} />
                                    </BarChart>
                                </ChartContainer>
                            </CardContent>
                        </Card>

                        {/* Traffic Sources */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Bar Chart - Stacked + Legend</CardTitle>
                                <CardDescription>January - June 2024</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ChartContainer config={chartConfig}>
                                    <BarChart accessibilityLayer data={chartData}>
                                        <CartesianGrid vertical={false} />
                                        <XAxis
                                            dataKey="month"
                                            tickLine={false}
                                            tickMargin={10}
                                            axisLine={false}
                                            tickFormatter={(value) => value.slice(0, 3)}
                                        />
                                        <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                                        <ChartLegend content={<ChartLegendContent />} />
                                        <Bar dataKey="desktop" stackId="a" fill="var(--color-desktop)" radius={[0, 0, 4, 4]} />
                                        <Bar dataKey="mobile" stackId="a" fill="var(--color-mobile)" radius={[4, 4, 0, 0]} />
                                    </BarChart>
                                </ChartContainer>
                            </CardContent>
                            <CardFooter className="flex-col items-start gap-2 text-sm">
                                <div className="flex gap-2 leading-none font-medium">
                                    Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                                </div>
                                <div className="text-muted-foreground leading-none">Showing total visitors for the last 6 months</div>
                            </CardFooter>
                        </Card>
                    </div>

                    {/* Recent Signups */}
                    <Card>
                        <CardContent className="pt-6">
                            <div className="mb-6 flex items-center justify-between">
                                <h2 className="text-lg font-medium">Recent Signups</h2>
                                <div className="relative w-[240px]">
                                    <Search className="text-muted-foreground absolute top-2.5 left-2.5 h-4 w-4" />
                                    <Input placeholder="Search users..." className="h-9 pl-8" />
                                </div>
                            </div>

                            <div className="space-y-4">
                                {recentSignups.map((user) => (
                                    <div key={user.id} className="flex items-center justify-between border-b py-2 last:border-0">
                                        <div className="flex items-center gap-3">
                                            <Avatar className="h-10 w-10 border">
                                                <AvatarFallback>
                                                    {user.name
                                                        .split(' ')
                                                        .map((n) => n[0])
                                                        .join('')}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <p className="font-medium">{user.name}</p>
                                                <p className="text-muted-foreground text-sm">{user.email}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <Badge variant="outline" className="bg-primary/5 hover:bg-primary/10">
                                                {user.source}
                                            </Badge>
                                            <span className="text-muted-foreground text-sm">{user.date}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 text-center">
                                <Button>View All Signups</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AppLayout>
    );
}
