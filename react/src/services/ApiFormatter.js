import { app, server } from '@/utils/env';
import { nullSafe } from '@/utils/validation';

class ApiFormatter {
  static getHeaders(contentType = 'application/json') {
    const headers = {
      'Content-Type': contentType,
      Accept: 'application/json',
    };

    try {
      const user = JSON.parse(localStorage.getItem('user'));

      if (user?.authToken && app.isJWT) {
        headers['Authorization'] = `Bearer ${user.authToken}`;
      }
    } catch {
      return headers;
    }
    return headers;
  }

  static formatEndpoint(endpoint) {
    if (endpoint.startsWith(app.prefix)) {
      return endpoint;
    }

    if (!endpoint.startsWith('/')) {
      endpoint = `/${endpoint}`;
    }

    return `${app.prefix}/${server.host}:${server.port}${endpoint}`;
  }

  static handleError(res, data) {
    if (!res.ok || !nullSafe(data)) {
      throw new Error(`(${res.status}) ${data?.Error || res.statusText}`);
    }
  }

  static formatFetch(method, body, contentType) {
    const headers = ApiFormatter.getHeaders(contentType);

    if (method === 'GET') {
      return { headers };
    }

    try {
      body = JSON.stringify(body);
      return { headers, method, body };
    } catch (err) {
      throw new Error('400: Request Body Invalid');
    }
  }
}

export default ApiFormatter;
