import * as controller from "api/controllers/appController";
import { match } from "path-to-regexp";

const routes = {
  "/count": {
    GET: controller.count_all_records,
  }
};

const compiledRoutes = {};
Object.keys(routes).forEach((route) => {
  compiledRoutes[route] = { ...routes[route], match: match(route) };
});

export default function handle(req, res) {
  // Routes
  const {
    query: { route },
    method,
  } = req;
  const routeJoined = `/${route.join("/")}`;
  const matchingRoute = Object.values(compiledRoutes).find((r) =>
    r.match(routeJoined)
  );
  if (matchingRoute && matchingRoute[method]) {
    const handler = matchingRoute[method];
    const { params } = matchingRoute.match(routeJoined);
    handler({ ...req, params }, res);
    return;
  }
  res.statusCode = 404;
  res.end();
}

export async function getApiData(route) {
  return new Promise(function (res, rej) {
    const request = { query: { route: route.split("/") }, method: "GET" };
    const response = {
      send: function (data) {
        res(JSON.parse(JSON.stringify(data)));
      },
      end: res,
    };
    handle(request, response);
  });
}
