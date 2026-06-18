import React, { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products") // thanks to proxy
      .then(res => res.json())
      .then(data => setProducts(data.products))
      .catch(err => console.error("Error fetching products:", err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>🛒 Shopping App</h1>
      <ul>
        {products.map(p => (
          <li key={p.id}>
            {p.name} - ${p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
