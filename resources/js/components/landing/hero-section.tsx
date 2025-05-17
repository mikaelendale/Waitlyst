import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import { Clock3 } from 'lucide-react';

export default function HeroSection() {
    return (
        <section className="py-20">
            <div className="relative z-10 mx-auto w-full max-w-2xl px-6 lg:px-0">
                <div className="relative text-center">
                    <WaitlystLogo className="mx-auto" />
                    <h1 className="mx-auto mt-16 max-w-xl text-5xl font-semibold text-balance">Waitlists Made Effortless</h1>

                    <p className="text-muted-foreground mx-auto mt-4 mb-6 text-xl text-balance">
                        Waitlyst is the fastest way for businesses to manage customer queues — no downloads, no stress. Just smoother service.
                    </p>

                    <div className="flex flex-col items-center gap-2 *:w-full sm:flex-row sm:justify-center sm:*:w-auto">
                        <Button asChild variant="default">
                            <Link href="#link">
                                <span className="text-nowrap">Join the Waitlist</span>
                            </Link>
                        </Button>
                        <Button asChild variant="ghost">
                            <Link href="#link">
                                <span className="text-nowrap">Live Demo</span>
                            </Link>
                        </Button>
                    </div>
                </div>

                <div className="relative mt-12 overflow-hidden rounded-3xl bg-black/10 md:mt-16">
                    <img
                        src="https://images.unsplash.com/photo-1547623641-d2c56c03e2a7?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className="absolute inset-0 size-full object-cover"
                    /> 

                    <div className="bg-background relative m-4 overflow-hidden rounded-(--radius) border border-transparent shadow-xl ring-1 shadow-black/15 ring-black/10 sm:m-8 md:m-12">
                        <img src="images/demo.png" alt="app screen" width="2880" height="1842" className="object-top-left size-full object-cover" />
                    </div>
                </div>
            </div>
        </section>
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
