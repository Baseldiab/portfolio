import { NextRequest } from 'next/server';
import { i18nRouter } from 'next-i18n-router';
import i18nConfig from './i18nConfig';
import { Config } from 'next-i18n-router/dist/types';

export function middleware(request: NextRequest) {
  return i18nRouter(request, i18nConfig as Config);
}

// applies this middleware only to files in the app directory
export const config = {
  matcher: '/((?!api|static|.*\\..*|_next).*)'
};
