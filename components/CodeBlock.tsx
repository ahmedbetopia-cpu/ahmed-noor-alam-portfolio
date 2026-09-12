'use client';

import React, { useState } from 'react';
import { Check, Copy, Terminal } from 'lucide-react';

interface CodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {
  children?: React.ReactNode;
}

function extractTextContent(node: React.ReactNode): string {
  if (node === null || node === undefined) return '';
  if (typeof node === 'string') return node;
  if (typeof node === 'number') return String(node);
  if (Array.isArray(node)) {
    return node.map(extractTextContent).join('');
  }
  if (React.isValidElement(node)) {
    return extractTextContent((node.props as { children?: React.ReactNode }).children);
  }
  return '';
}

export function CodeBlock({ children, className = '', ...props }: CodeBlockProps) {
  const [isCopied, setIsCopied] = useState(false);

  // Extract language from child <code> class (e.g. language-powershell)
  let language = '';
  if (React.isValidElement(children) && (children.props as { className?: string })?.className) {
    const codeClassName = (children.props as { className?: string }).className || '';
    const match = /language-([a-zA-Z0-9_#-]+)/.exec(codeClassName);
    if (match) {
      language = match[1];
    }
  }

  const handleCopy = async () => {
    const rawText = extractTextContent(children).trim();
    if (!rawText) return;

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(rawText);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = rawText;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code to clipboard:', err);
    }
  };

  return (
    <div className="not-prose my-6 rounded-2xl border border-warm-200/30 dark:border-olive-800/80 bg-[#11170d] shadow-xl overflow-hidden group">
      {/* Code Header Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#171e13] border-b border-warm-200/10 dark:border-olive-800/60 select-none">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 mr-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-emerald-400">
            <Terminal className="w-3.5 h-3.5 text-emerald-400" />
            <span>{language ? language.toUpperCase() : 'COMMAND'}</span>
          </div>
        </div>

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          type="button"
          aria-label={isCopied ? 'Code copied to clipboard' : 'Copy code to clipboard'}
          className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-lg transition-all duration-200 cursor-pointer ${
            isCopied
              ? 'bg-emerald-500/25 text-emerald-300 border border-emerald-500/40 shadow-sm'
              : 'text-warm-300 hover:text-white bg-white/5 hover:bg-white/10 active:scale-95 border border-white/10'
          }`}
        >
          {isCopied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-warm-300" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Pre/Code Area */}
      <div className="relative">
        <pre
          className={`p-4 sm:p-5 overflow-x-auto text-[13px] sm:text-sm font-mono leading-relaxed text-warm-100 bg-transparent m-0 selection:bg-emerald-500/40 selection:text-white ${className}`}
          {...props}
        >
          {children}
        </pre>
      </div>
    </div>
  );
}

export default CodeBlock;
