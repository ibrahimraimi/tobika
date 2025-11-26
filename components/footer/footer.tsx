import type { Language } from '@/types/languages'
import type { Dictionary } from '@/utils/dictionaries'
import { Link } from 'next-view-transitions'
import { Logo } from '../logo'

type FooterProps = { language: Language; dictionary: Dictionary }

export const Footer = ({ language, dictionary }: FooterProps) => {
  return (
    <div className="w-full border-t mt-4">
      <div className="max-w-6xl mx-auto py-4">
        <div className="flex justify-between px-4 gap-4 xl:px-0 md:flex-row flex-col">
          <div className="flex items-center gap-2">
            <Logo size={20} />

            <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Tobika</p>

            <div className="h-3 border-r" />

            <span className="text-xs text-muted-foreground">{dictionary.data_provided_by}</span>
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link href={`/${language}/docs`} className="hover:text-foreground">
              {dictionary.documentation}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
