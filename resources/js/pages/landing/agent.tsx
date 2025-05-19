import { cn } from '@/lib/utils';
import { Clock3 } from 'lucide-react';
('use client');

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Clock, Filter, MapPin, Search, Share } from 'lucide-react';
import { useState } from 'react';

// Sample data for the cards
const locations = [
    {
        id: 1,
        title: 'Urban Roasters',
        description: 'Specialty coffee & pastries',
        category: 'Café',
        rating: 4.8,
        waitTime: '15 min',
        distance: '0.5 miles',
        image: 'https://placehold.co/600x400/png',
        tags: ['Coffee', 'Breakfast', 'Wifi'],
        mapUrl: 'https://maps.google.com/?q=Urban+Roasters',
    },
    {
        id: 2,
        title: 'Pixel Arcade',
        description: 'Retro gaming & snacks',
        category: 'Entertainment',
        rating: 4.6,
        waitTime: '30 min',
        distance: '1.2 miles',
        image: 'https://placehold.co/600x400/png',
        tags: ['Games', 'Drinks', 'Nightlife'],
        mapUrl: 'https://maps.google.com/?q=Pixel+Arcade',
    },
    {
        id: 3,
        title: 'Green Garden',
        description: 'Farm-to-table restaurant',
        category: 'Restaurant',
        rating: 4.9,
        waitTime: '45 min',
        distance: '0.8 miles',
        image: 'https://placehold.co/600x400/png',
        tags: ['Vegan', 'Organic', 'Lunch'],
        mapUrl: 'https://maps.google.com/?q=Green+Garden',
    },
    {
        id: 4,
        title: 'Tech Hub',
        description: 'Co-working space & café',
        category: 'Workspace',
        rating: 4.7,
        waitTime: '5 min',
        distance: '0.3 miles',
        image: 'https://placehold.co/600x400/png',
        tags: ['Workspace', 'Coffee', 'Wifi'],
        mapUrl: 'https://maps.google.com/?q=Tech+Hub',
    },
    {
        id: 5,
        title: 'Sunset Lounge',
        description: 'Cocktails & live music',
        category: 'Bar',
        rating: 4.5,
        waitTime: '20 min',
        distance: '1.5 miles',
        image: 'https://placehold.co/600x400/png',
        tags: ['Drinks', 'Music', 'Nightlife'],
        mapUrl: 'https://maps.google.com/?q=Sunset+Lounge',
    },
    {
        id: 6,
        title: 'Book Nook',
        description: 'Independent bookstore & café',
        category: 'Bookstore',
        rating: 4.8,
        waitTime: '10 min',
        distance: '0.7 miles',
        image: 'https://placehold.co/600x400/png',
        tags: ['Books', 'Coffee', 'Quiet'],
        mapUrl: 'https://maps.google.com/?q=Book+Nook',
    },
];

export default function AgentLanding() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedLocation, setSelectedLocation] = useState<(typeof locations)[0] | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    const filteredLocations = locations.filter((location) => {
        const matchesSearch =
            location.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            location.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            location.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

        const matchesCategory = selectedCategory === '' || location.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    const openLocationModal = (location: (typeof locations)[0]) => {
        setSelectedLocation(location);
        setIsModalOpen(true);
    };
    return (
        <>
            <section className="py-20">
                <div className="relative z-10 mx-auto w-full max-w-2xl px-6 lg:px-0">
                    <div className="relative text-center">
                        <WaitlystLogo className="mx-auto" />
                    </div>
                </div>
            </section>
            <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-6">
                {/* Improved Search Bar - Single Row */}
                <div className="mb-8 w-full max-w-4xl">
                    <div className="bg-card border-border/40 flex items-center gap-2 rounded-full border p-2 shadow-lg">
                        <div className="relative flex-grow">
                            <Search className="text-primary absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform" />
                            <Input
                                placeholder="Search places, categories, or tags..."
                                className="h-10 rounded-full border-none bg-transparent pl-10 shadow-none"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                            <SelectTrigger className="bg-secondary/10 h-10 w-[130px] rounded-full border-none">
                                <SelectValue placeholder="Category" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Categories</SelectItem>
                                <SelectItem value="Café">Café</SelectItem>
                                <SelectItem value="Restaurant">Restaurant</SelectItem>
                                <SelectItem value="Bar">Bar</SelectItem>
                                <SelectItem value="Entertainment">Entertainment</SelectItem>
                                <SelectItem value="Workspace">Workspace</SelectItem>
                                <SelectItem value="Bookstore">Bookstore</SelectItem>
                            </SelectContent>
                        </Select>

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="bg-secondary/10 h-10 w-10 rounded-full">
                                    <Filter className="h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem>Distance (Nearest)</DropdownMenuItem>
                                <DropdownMenuItem>Rating (Highest)</DropdownMenuItem>
                                <DropdownMenuItem>Wait Time (Shortest)</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>

                {/* Bento Grid Cards */}
                <div className="mb-8 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredLocations.map((location) => (
                        <Card
                            key={location.id}
                            className="group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-xl"
                            onClick={() => openLocationModal(location)}
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={location.image || '/placeholder.svg'}
                                    alt={location.title}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute top-2 right-2">
                                    <Badge variant="secondary" className="font-medium">
                                        {location.category}
                                    </Badge>
                                </div>
                            </div>

                            <CardHeader className="pb-2">
                                <div className="flex items-start justify-between">
                                    <CardTitle className="text-xl">{location.title}</CardTitle>
                                    <div className="bg-primary/10 text-primary rounded-full px-2 py-1 text-sm font-medium">{location.rating}★</div>
                                </div>
                                <CardDescription>{location.description}</CardDescription>
                            </CardHeader>

                            <CardContent className="pb-2">
                                <div className="flex flex-wrap gap-1">
                                    {location.tags.map((tag, index) => (
                                        <Badge key={index} variant="outline" className="bg-secondary/10">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>

                            <CardFooter className="text-muted-foreground flex justify-between text-sm">
                                <div className="flex items-center">
                                    <MapPin className="mr-1 h-3 w-3" />
                                    {location.distance}
                                </div>
                                <div className="flex items-center">
                                    <Clock className="mr-1 h-3 w-3" />
                                    Wait: {location.waitTime}
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                {/* Pagination */}
                <Pagination className="mb-8">
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#" onClick={() => setCurrentPage(Math.max(1, currentPage - 1))} />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#" isActive={currentPage === 1} onClick={() => setCurrentPage(1)}>
                                1
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#" isActive={currentPage === 2} onClick={() => setCurrentPage(2)}>
                                2
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext href="#" onClick={() => setCurrentPage(currentPage + 1)} />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>

                {/* Location Modal */}
                {selectedLocation && (
                    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                        <DialogContent className="sm:max-w-[500px]">
                            <DialogHeader>
                                <DialogTitle className="text-2xl">{selectedLocation.title}</DialogTitle>
                                <DialogDescription>
                                    {selectedLocation.description} • {selectedLocation.category}
                                </DialogDescription>
                            </DialogHeader>

                            <div className="relative my-4 h-56 overflow-hidden rounded-md">
                                <img
                                    src={selectedLocation.image || '/placeholder.svg'}
                                    alt={selectedLocation.title}
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            <div className="grid gap-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <MapPin className="text-primary mr-2 h-4 w-4" />
                                        <span>{selectedLocation.distance} away</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Clock className="text-primary mr-2 h-4 w-4" />
                                        <span>Current wait: {selectedLocation.waitTime}</span>
                                    </div>
                                </div>

                                <div className="my-2 flex flex-wrap gap-2">
                                    {selectedLocation.tags.map((tag, index) => (
                                        <Badge key={index} variant="secondary">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>

                                <Separator />

                                <div className="flex items-center justify-between">
                                    <div className="text-lg font-medium">Rating: {selectedLocation.rating}★</div>
                                    <a
                                        href={selectedLocation.mapUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary flex items-center hover:underline"
                                    >
                                        <MapPin className="mr-1 h-4 w-4" />
                                        View on Map
                                    </a>
                                </div>
                            </div>

                            <DialogFooter className="mt-4 flex flex-col gap-2 sm:flex-row">
                                <Button variant="outline" className="w-full sm:w-auto" onClick={() => setIsModalOpen(false)}>
                                    <Share className="mr-2 h-4 w-4" />
                                    Share
                                </Button>
                                <Button
                                    className="w-full sm:w-auto"
                                    onClick={() => {
                                        setIsModalOpen(false);
                                        window.location.href = route('agent.show', { id: selectedLocation.id });
                                    }}
                                >
                                    <Clock className="mr-2 h-4 w-4" />
                                    Join Waitlist
                                </Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                )}
            </div>
        </>
    );
}

const WaitlystLogo = ({ className }: { className?: string }) => (
    <div
        aria-hidden
        className={cn(
            'border-background relative flex size-9 translate-y-0.5 items-center justify-center rounded-(--radius) border bg-linear-to-b from-blue-500 to-indigo-600 shadow-lg ring-1 shadow-black/20 ring-black/10',
            className,
        )}
    >
        <Clock3 className="mask-b-from-25% size-6 fill-white stroke-white drop-shadow-sm" />
        <Clock3 className="absolute inset-0 m-auto size-6 fill-white stroke-white opacity-65 drop-shadow-sm" />
        <div className="absolute inset-2 z-1 m-auto h-4.5 w-px translate-y-px rounded-full bg-black/10"></div>
    </div>
);
