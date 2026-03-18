const createAppMock = () => {
  const routes = new Map();

  const register = (method, path, ...handlers) => {
    routes.set(`${method.toUpperCase()} ${path}`, handlers[handlers.length - 1]);
  };

  return {
    get: (path, ...handlers) => register("GET", path, ...handlers),
    post: (path, ...handlers) => register("POST", path, ...handlers),
    put: (path, ...handlers) => register("PUT", path, ...handlers),
    delete: (path, ...handlers) => register("DELETE", path, ...handlers),
    getRoute(method, path) {
      const handler = routes.get(`${method.toUpperCase()} ${path}`);
      if (!handler) {
        throw new Error(`Route not registered: ${method.toUpperCase()} ${path}`);
      }
      return handler;
    },
  };
};

const createResponseMock = () => {
  const headers = {};
  return {
    statusCode: 200,
    headers,
    body: undefined,
    sentStatus: null,
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(payload) {
      this.body = payload;
      return this;
    },
    send(payload) {
      this.body = payload;
      return this;
    },
    sendStatus(code) {
      this.statusCode = code;
      this.sentStatus = code;
      return this;
    },
    setHeader(name, value) {
      headers[name.toLowerCase()] = value;
    },
  };
};

module.exports = {
  createAppMock,
  createResponseMock,
};
