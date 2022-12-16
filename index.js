import { App } from "./lib/App.js";
import { Router } from "./lib/Router.js";
import { dog, dogs } from "./components/dogComponents.js";

const app = new App("#app");
const router = new Router(app);

app.addComponent(dogs, router);
app.addComponent(dog, router);

router.addRoute("dogs", "^#/dogs$");
router.addRoute("dog", "^#/dogs/([0-9]+)$");
