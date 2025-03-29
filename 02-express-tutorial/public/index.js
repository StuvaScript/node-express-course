//* **`` Fetch the data from the url
async function getData() {
  try {
    const res = await fetch("http://localhost:3000/api/v1/products");

    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err.message);
  }
}

//* **`` Calls the getData() function and populates the data into the DOM
async function displayData() {
  try {
    const data = await getData();

    if (!data) {
      throw new Error(`Data not found`);
    }

    const wrapper = document.createElement("div");
    document.querySelector("button").after(wrapper);

    data.forEach((item) => {
      const div = document.createElement("div");

      const id = document.createElement("p");
      id.innerText = `ID: ${item.id}`;
      const name = document.createElement("p");
      name.innerText = `Name: ${item.name}`;
      const image = document.createElement("p");
      image.innerText = `Image: ${item.image}`;
      const price = document.createElement("p");
      price.innerText = `Price: ${item.price}`;
      const desc = document.createElement("p");
      desc.innerText = `Desc: ${item.desc}`;

      div.append(id, name, image, price, desc);
      wrapper.append(div);
    });
  } catch (err) {
    console.error(err.message);
  }
}
