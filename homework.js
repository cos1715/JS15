class ProductsService {
  static #baseUrl = "https://dummyjson.com/products";
  static getAllProducts = async () => {
    try {
      const resp = await fetch(this.#baseUrl);
      const data = await resp.json();
      return data;
    } catch (e) {
      console.error(e);
    }
  };
  static getProduct = async (id) => {
    try {
      const resp = await fetch(`${this.#baseUrl}/${id}`);
      const data = await resp.json();
      return data;
    } catch (e) {
      console.error(e);
    }
  };
  static searchProducts = async (search) => {
    try {
      const url = new URL(`${this.#baseUrl}/search`);
      url.searchParams.set("q", search);
      const resp = await fetch(url);
      const data = await resp.json();
      return data;
    } catch (e) {
      console.error(e);
    }
  };
  static filterProducts = async ({
    limit = 10,
    skip = 0,
    select = ["title", "price"],
  } = {}) => {
    try {
      const url = new URL(this.#baseUrl);
      url.searchParams.set("limit", limit);
      url.searchParams.set("skip", skip);
      url.searchParams.set("select", select);
      const resp = await fetch(url);
      const data = await resp.json();
      return data;
    } catch (e) {
      console.error(e);
    }
  };
  static createProducts = async (product) => {
    try {
      const url = new URL(`${this.#baseUrl}/add`);
      const resp = await fetch(url, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });
      const data = await resp.json();
      return data;
    } catch (e) {
      console.error(e);
    }
  };
  static updateProducts = async (id, product) => {
    try {
      const url = new URL(`${this.#baseUrl}/${id}`);
      const resp = await fetch(url, {
        method: "put",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });
      const data = await resp.json();
      return data;
    } catch (e) {
      console.error(e);
    }
  };
  static deleteProducts = async (id) => {
    try {
      const url = new URL(`${this.#baseUrl}/${id}`);
      const resp = await fetch(url, {
        method: "delete",
      });
      const data = await resp.json();
      return data;
    } catch (e) {
      console.error(e);
    }
  };
}

ProductsService.getAllProducts();
ProductsService.getProduct(1);
ProductsService.searchProducts("phone");
ProductsService.filterProducts();
ProductsService.createProducts({ title: "My custom Product", price: 0.99 });
ProductsService.updateProducts(1, { title: "My custom Product", price: 0.99 });
ProductsService.deleteProducts(1);

Promise.all([
  ProductsService.deleteProducts(1),
  ProductsService.deleteProducts(2),
  ProductsService.deleteProducts(3),
  ProductsService.deleteProducts(4),
  ProductsService.deleteProducts(3243),
])
  .then((data) => {
    console.log(data);
  })
  .catch((e) => console.log(e));
