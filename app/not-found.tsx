import Link from 'next/link';
import { Terminal, Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="container-main min-h-[70vh] flex items-center justify-center py-20">
      <div className="text-center max-w-md space-y-6">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-gold-500/20 border border-gold-500/30 flex items-center justify-center text-gold-500">
          <Terminal className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-gold-500/10 text-gold-600 dark:text-gold-400 border border-gold-500/20 font-bold">
            404 ERROR
          </span>
          <h1 className="text-3xl font-bold tracking-tight text-warm-950 dark:text-warm-100">
            Page Not Found
          </h1>
          <p className="text-sm text-warm-600 dark:text-warm-400 leading-relaxed">
            The page or article you are looking for might have been moved or does not exist.
          </p>
        </div>
        <div className="flex items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gold-500 text-warm-950 font-bold text-xs hover:bg-gold-400 transition-colors shadow-sm"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
