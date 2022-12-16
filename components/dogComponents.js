import { dogApis } from "../apis/dogApis.js";
import { dogTemplate } from "../templates/dogTemplates.js";

const dogs = {
  name: "dogs",
  model: {
    dogs: [],
  },
  view(model) {
    return `
      <ul class="dogs">
        ${model.dogs.map((dog) => `<li>${dogTemplate(dog)}</li>`).join("")}
      </ul>
      `;
  },
  async controller(model) {
    console.log("view all dogs");
    const dogs = await dogApis.getDogs();
    model.dogs = dogs;
  },
};

const dog = {
  name: "dog",
  model: {
    dog: {},
  },
  view(model) {
    return dogTemplate(model.dog);
  },
  async controller(model) {
    console.log("Get One Dog");
    const dog = await dogApis.getDog(this.router.params[1]);
    model.dog = dog;
  },
};

export { dog, dogs };
