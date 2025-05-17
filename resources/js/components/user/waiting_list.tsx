'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ChevronLeft, ChevronRight, Edit, LoaderCircle, MoreHorizontal, Send, Trash } from 'lucide-react';
import { useState } from 'react';

// Sample data
const ITEMS_PER_PAGE = 7;
const allItems = [
    {
        id: 1,
        title: 'Project Alpha',
        description: 'A cutting-edge web application with modern features',
        status: 'Active',
    },
];

export default function WaitingList() {
    const [currentPage, setCurrentPage] = useState(1);
    const [processing, setProcessing] = useState(false);

    // Calculate total pages
    const totalPages = Math.ceil(allItems.length / ITEMS_PER_PAGE);

    // Get current items
    const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
    const currentItems = allItems.slice(indexOfFirstItem, indexOfLastItem);

    // Change page
    const goToPage = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };
    return (
        <>
            <div className="space-y-6">
                <div className="space-y-4">
                    {currentItems.map((item) => (
                        <Card key={item.id} className="overflow-hidden">
                            <CardContent className="p-0">
                                <div className="flex items-center justify-between p-4">
                                    <div className="flex-1">
                                        <h3 className="text-lg font-medium">{item.title}</h3>
                                        <p className="text-muted-foreground mt-1 text-sm">{item.description}</p>
                                        <div className="mt-2">
                                            <span
                                                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                                    item.status === 'Active'
                                                        ? 'bg-green-100 text-green-800'
                                                        : item.status === 'In Progress'
                                                          ? 'bg-blue-100 text-blue-800'
                                                          : item.status === 'Completed'
                                                            ? 'bg-purple-100 text-purple-800'
                                                            : 'bg-gray-100 text-gray-800'
                                                }`}
                                            >
                                                {item.status}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <Button variant="default" size="icon">
                                                    <Send className="h-4 w-4" />
                                                    <span className="sr-only">Notify</span>
                                                </Button>
                                            </DialogTrigger>
                                            <DialogContent className="sm:max-w-[425px]">
                                                <DialogHeader>
                                                    <DialogTitle>Notify User</DialogTitle>
                                                    <DialogDescription>Send a notification to the user.</DialogDescription>
                                                </DialogHeader>
                                                <div className="grid gap-4 py-4">
                                                    <div className="grid grid-cols-4 items-center gap-4">
                                                        <Label htmlFor="name" className="text-right">
                                                            Name
                                                        </Label>
                                                        <Input disabled value={item.title} className="col-span-3" />
                                                    </div>
                                                    <div className="grid grid-cols-4 items-center gap-4">
                                                        <Label htmlFor="username" className="text-right">
                                                            Username
                                                        </Label>
                                                        <Input disabled id="username" value={item.status} className="col-span-3" />
                                                    </div>
                                                </div>
                                                <DialogFooter>
                                                    <Button
                                                        type="button"
                                                        className="mt-4 w-full"
                                                        tabIndex={4}
                                                        disabled={processing}
                                                        onClick={async () => {
                                                            setProcessing(true);
                                                            await new Promise((res) => setTimeout(res, 3000));
                                                            setProcessing(false);
                                                        }}
                                                    >
                                                        {processing && <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />}
                                                        {processing ? 'Notifying...' : 'Notify'}
                                                    </Button>
                                                </DialogFooter>
                                            </DialogContent>
                                        </Dialog>
                                        <Button variant="outline" size="icon">
                                            <Edit className="h-4 w-4" />
                                            <span className="sr-only">Edit</span>
                                        </Button>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="outline" size="icon">
                                                    <MoreHorizontal className="h-4 w-4" />
                                                    <span className="sr-only">More options</span>
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem>
                                                    <Trash className="mr-2 h-4 w-4" />
                                                    Delete
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-center space-x-2 pt-4">
                    <Button variant="outline" size="icon" onClick={() => goToPage(Math.max(1, currentPage - 1))} disabled={currentPage === 1}>
                        <ChevronLeft className="h-4 w-4" />
                        <span className="sr-only">Previous page</span>
                    </Button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <Button
                            key={page}
                            variant={currentPage === page ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => goToPage(page)}
                            className="h-8 w-8 p-0"
                        >
                            {page}
                        </Button>
                    ))}

                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => goToPage(Math.min(totalPages, currentPage + 1))}
                        disabled={currentPage === totalPages}
                    >
                        <ChevronRight className="h-4 w-4" />
                        <span className="sr-only">Next page</span>
                    </Button>
                </div>
            </div>
        </>
    );
}
