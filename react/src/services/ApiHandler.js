import ApiFormatter from '@/services/apiFormatter';

class ApiHandler {
  static async get(endpoint, contentType) {
    const formattedEndpoint = ApiFormatter.formatEndpoint(endpoint);
    try {
      const req = ApiFormatter.formatFetch('GET', undefined, contentType);
      const res = await fetch(formattedEndpoint, req);
      const data = await res.json();
      ApiFormatter.handleError(res, data);
      return data;
    } catch (err) {
      return { ErrorMsg: err };
    }
  }

  static async post(endpoint, body, contentType) {
    const formattedEndpoint = ApiFormatter.formatEndpoint(endpoint);
    try {
      const req = ApiFormatter.formatFetch('POST', body, contentType);
      const res = await fetch(formattedEndpoint, req);
      const data = await res.json();
      ApiFormatter.handleError(res, data);
      return data;
    } catch (err) {
      return { ErrorMsg: err };
    }
  }
}

export default ApiHandler;
