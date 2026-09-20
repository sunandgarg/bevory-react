import { onRequest } from "../functions/[[path]].js";

export default {
  fetch(request, env, ctx) {
    return onRequest({
      request,
      env,
      waitUntil: (promise) => ctx.waitUntil(promise),
    });
  },
};
