import { onRequest } from "../functions/[[path]].js";

export default {
  fetch(request, env) {
    return onRequest({ request, env });
  },
};
