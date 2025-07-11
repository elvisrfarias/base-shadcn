type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface RequestOptions {
  method?: HttpMethod;
  headers?: Record<string, string>;
  body?: any;
  params?: Record<string, string | number>;
}

const BASE_URL = 'https://api.sistema.athus.com/api';

function buildQueryParams(params?: Record<string, string | number>): string {
  if (!params) return '';
  const query = new URLSearchParams(params as Record<string, string>).toString();
  return `?${query}`;
}

async function http<T = any>(
  endpoint: string,
  options: RequestOptions = {}
): Promise<T> {
  const { method = 'GET', headers, body, params } = options;

  const url = `${BASE_URL}${endpoint}${buildQueryParams(params)}`;

  const defaultHeaders: HeadersInit = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    ...headers,
  };

  const config: RequestInit = {
    method,
    headers: defaultHeaders,
    body: body ? JSON.stringify(body) : undefined,
  };

  try {
    const response = await fetch(url, config);

    const contentType = response.headers.get('Content-Type');
    const isJson = contentType?.includes('application/json');
    const data = isJson ? await response.json() : await response.text();

    if (!response.ok) {
      throw new Error(data?.message || 'Erro na requisição');
    }

    return data as T;
  } catch (error: any) {
    console.error(`[HTTP ERROR]: ${error.message}`);
    throw error;
  }
}

export const httpClient = {
  get: <T>(url: string, options?: RequestOptions) =>
    http<T>(url, { ...options, method: 'GET' }),
  post: <T>(url: string, body?: any, options?: RequestOptions) =>
    http<T>(url, { ...options, method: 'POST', body }),
  put: <T>(url: string, body?: any, options?: RequestOptions) =>
    http<T>(url, { ...options, method: 'PUT', body }),
  delete: <T>(url: string, options?: RequestOptions) =>
    http<T>(url, { ...options, method: 'DELETE' }),
};
