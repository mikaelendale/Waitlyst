'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { ArrowLeft, Check, Clock3, Copy } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

const dummyLocation = {
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
    activeUsers: 42,
    waitlistCount: 15,
};

export default function WaitlistPage() {
    const location = dummyLocation;
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [waitlistPosition] = useState(location.waitlistCount + 1);
    const [shareableLink, setShareableLink] = useState('');
    const [isCopied, setIsCopied] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            setIsSubmitted(true);
            setShareableLink(`https://waitlyst.com/waitlist/share/${location.id}?ref=${btoa(formData.email)}`);
        }, 1500);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(shareableLink);
        setIsCopied(true);
        toast('Link copied!', {
            description: 'The link has been copied to your clipboard.',
        });
        setTimeout(() => setIsCopied(false), 2000);
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

            <div className="container mx-auto max-w-5xl px-4 py-12">
                <Button variant="ghost" className="mb-8 -ml-2 flex items-center gap-2" onClick={() => router.back()}>
                    <ArrowLeft className="h-4 w-4" />
                    Back
                </Button>

                <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                    {/* Left Column - Location Preview */}
                    <div>
                        <div className="mb-6">
                            <div className="relative mb-4 h-64 overflow-hidden rounded-lg">
                                <img src={location.image || '/placeholder.svg'} alt={location.title} className="h-full w-full object-cover" />
                            </div>

                            <div className="mb-2 flex items-center justify-between">
                                <h1 className="text-2xl font-bold">{location.title}</h1>
                                <Badge variant="outline">{location.category}</Badge>
                            </div>

                            <p className="text-muted-foreground mb-4">{location.description}</p>

                            <div className="mb-6 flex flex-wrap gap-2">
                                {location.tags.map((tag: string, index: number) => (
                                    <Badge key={index} variant="secondary" className="bg-secondary/10 border-primary">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>

                            <div className="mb-6 grid grid-cols-2 gap-4">
                                <div className="bg-muted rounded-lg p-4">
                                    <div className="text-muted-foreground text-sm">Active Users</div>
                                    <div className="font-mono text-2xl">{location.activeUsers}</div>
                                </div>
                                <div className="bg-muted rounded-lg p-4">
                                    <div className="text-muted-foreground text-sm">In Waitlist</div>
                                    <div className="font-mono text-2xl">{location.waitlistCount}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Form or Success */}
                    <div>
                        {!isSubmitted ? (
                            <div>
                                <div className="mb-6 flex items-center justify-between">
                                    <h2 className="text-2xl font-bold">Join Waitlist</h2>
                                    <div className="bg-primary text-primary-foreground rounded-md px-4 py-2 font-mono">#{waitlistPosition}</div>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Name</Label>
                                        <Input
                                            id="name"
                                            name="name"
                                            placeholder="Enter your name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="Enter your email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="phone">Phone</Label>
                                        <Input
                                            id="phone"
                                            name="phone"
                                            placeholder="Enter your phone number"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message">Message (Optional)</Label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            placeholder="Any special requests?"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            rows={3}
                                            className="resize-none"
                                        />
                                    </div>

                                    <Button type="submit" className="w-full" disabled={isLoading}>
                                        {isLoading ? (
                                            <div className="flex items-center gap-2">
                                                <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                                                Processing...
                                            </div>
                                        ) : (
                                            'Join Queue'
                                        )}
                                    </Button>
                                </form>
                            </div>
                        ) : (
                            <div>
                                <div className="mb-6 flex items-center justify-between">
                                    <h2 className="text-2xl font-bold">You're In</h2>
                                    <div className="bg-primary text-primary-foreground rounded-md px-4 py-2 font-mono">#{waitlistPosition}</div>
                                </div>

                                <Card className="bg-muted mb-6 border-none p-6">
                                    <div className="mb-6 text-center">
                                        <div className="bg-primary text-primary-foreground mb-2 inline-flex h-12 w-12 items-center justify-center rounded-full">
                                            <Check className="h-6 w-6" />
                                        </div>
                                        <h3 className="text-xl font-medium">Queue Confirmed</h3>
                                        <p className="text-muted-foreground">You're now in the waitlist for {location.title}</p>
                                    </div>

                                    <div className="space-y-4">
                                        <div>
                                            <Label className="mb-2 block">Your Link</Label>
                                            <div className="flex gap-2">
                                                <Input value={shareableLink} readOnly className="flex-1 font-mono text-xs" />
                                                <Button size="icon" onClick={copyToClipboard} variant="outline">
                                                    {isCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </Card>

                                <div className="text-muted-foreground text-sm">
                                    <p>We'll notify you when it's your turn.</p>
                                    <p>Current wait: ~{Math.round(waitlistPosition * 2.5)} minutes</p>
                                </div>

                                <Button variant="outline" className="mt-6 w-full" onClick={() => router.push('/')}>
                                    Return to Search
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
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
