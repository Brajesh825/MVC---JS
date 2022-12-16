const dogApis = {
  async getDogs() {
    console.log("getDogs");
    const response = await fetch("https://barkwireapi.brooks.now.sh/dogs");
    console.log(response.json);
    return response.json();
  },
  async getDog(id) {
    const response = await fetch(
      `https://barkwireapi.brooks.now.sh/dogs/${id}`
    );
    return response.json();
  },
};

export { dogApis };
