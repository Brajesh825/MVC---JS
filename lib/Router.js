class Router {
  constructor(app) {
    this.app = app;
    this.routes = [];
    this.hashChange = this.hashChange.bind(this);
    window.addEventListener("hashchange", this.hashChange);
    window.addEventListener("DOMContentLoaded", this.hashChange);
  }

  addRoute(name, path) {
    console.log(name, path);
    this.routes.push({
      name,
      path,
    });
  }

  hashChange() {
    const { hash } = window.location;
    const route = this.routes.find((route) => {
      return hash.match(new RegExp(route.path));
    });

    console.log(this.routes);

    if (route) {
      const params = new RegExp(route.path).exec(hash);
      this.params = params;
      this.app.showComponent(route.name);
    }
  }
}

export { Router };
