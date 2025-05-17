import { useAppearance } from '@/hooks/use-appearance';
import { Sun, Moon } from 'lucide-react';

export default function ModeToggler({ className = '', ...props }) {
    const { appearance, updateAppearance } = useAppearance();
    const isDark = appearance === 'dark';

    return (
        <button
            type="button"
            aria-label="Toggle dark mode"
            onClick={() => updateAppearance(isDark ? 'light' : 'dark')}
            className={`inline-flex items-center rounded-full p-2 transition-colors ${className}`}
            {...props}
        >
            {isDark ? (
                <Sun className="h-5 w-5 text-yellow-500" />
            ) : (
                <Moon className="h-5 w-5 text-gray-800" />
            )}
        </button>
    );
}
