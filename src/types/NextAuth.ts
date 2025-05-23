import type { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      number: string;
    } & DefaultSession['user'];
  }

  interface User {
    id: string;
    number: string;
  }
}
