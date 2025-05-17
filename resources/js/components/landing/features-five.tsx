import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import { CalendarCheck, ChevronRight, Target } from 'lucide-react';

export default function FeaturesOne() {
    return (
        <section>
            <div className="bg-accent py-24">
                <div className="mx-auto w-full max-w-5xl px-6">
                    <div className="grid gap-12 md:grid-cols-5">
                        <div className="md:col-span-2">
                            <h2 className="text-foreground text-4xl font-semibold text-balance">
                                The AI Coding Assistant that helps you write code faster
                            </h2>
                            <Button className="mt-8 pr-2" variant="outline" asChild>
                                <Link href="#">
                                    Learn more
                                    <ChevronRight className="size-4 opacity-50" />
                                </Link>
                            </Button>
                        </div>

                        <div className="space-y-6 md:col-span-3 md:space-y-10">
                            <div>
                                <div className="flex items-center gap-2">
                                    <Target className="size-5" />
                                    <h3 className="text-foreground text-lg font-semibold">Code Generation</h3>
                                </div>
                                <p className="text-muted-foreground mt-3 text-balance">
                                    Just describe the code you want to write and we'll generate it for you. From boilerplate code to complex business
                                    logic, we've got you covered.
                                </p>
                            </div>

                            <div>
                                <div className="flex items-center gap-2">
                                    <CalendarCheck className="size-5" />
                                    <h3 className="text-foreground text-lg font-semibold">Code Review</h3>
                                </div>
                                <p className="text-muted-foreground mt-3 text-balance">
                                    Get instant feedback on your code. Our AI will review your code and suggest improvements in terms of best
                                    practices and performance.
                                </p>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </section>
    );
}
