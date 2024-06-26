export function getProducts() {
  const data = fetch("https://api.escuelajs.co/api/v1/products").then((res) =>
    res.json()
  );
  return data;
}
