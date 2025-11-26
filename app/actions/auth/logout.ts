'use server'

import type { Language } from '@/types/languages/index'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function logout(language: Language) {
  ;(await cookies()).delete('session')
  redirect(`/${language}/sign-in`)
}
