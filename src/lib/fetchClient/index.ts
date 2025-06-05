'use client';

import { signOut } from 'next-auth/react';
import { getCookie } from './../../../node_modules/cookies-next/src/index';

interface FetchClientProps {
  input: string | URL | Request;
  init?: RequestInit | undefined;
}

export const fethClient = async ({
  input,
  init,
}: FetchClientProps): Promise<Response> => {
  const jwt = getCookie('jwt');

  const response = await fetch(input, {
    ...init,
    headers: {
      ...init?.headers,
      ...(jwt && { Authorization: `Bearer ${jwt}` }),
    },
  });

  if (response.status === 401) {
    await signOut();
  }

  return response;
};
