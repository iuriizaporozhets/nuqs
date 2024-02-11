/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/3bPRztjwG1M
 */

import Image from 'next/image'

type QuoteProps = {
  author: {
    name: string
    avatar: string
    handle?: string
  }
  text: React.ReactNode
  url?: string
}

export function Quote({ text, author, url }: QuoteProps) {
  return (
    <div className="mx-auto flex w-full max-w-md flex-col gap-4 rounded-lg bg-white p-6 shadow-md dark:bg-zinc-900">
      <div className="flex items-center gap-3">
        <Image
          src={author.avatar}
          alt={author.name}
          width={36}
          height={36}
          className="h-9 w-9 rounded-full"
          crossOrigin="anonymous"
        />
        <div className="grid gap-0.5 text-sm">
          {url ? (
            <a href={url} className="font-semibold hover:underline">
              {author.name}
            </a>
          ) : (
            <div className="font-semibold">{author.name}</div>
          )}
          {author.handle && (
            <div className="text-zinc-500 dark:text-zinc-400">
              {author.handle}
            </div>
          )}
        </div>
      </div>
      <blockquote className="text-md font-medium leading-snug text-zinc-800 dark:text-zinc-200">
        {text}
      </blockquote>
    </div>
  )
}