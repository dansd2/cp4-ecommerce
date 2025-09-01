{/*
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';


import canetaImg from './assets/caneta.jpg';
import copoImg from './assets/copo.jpg';
import ecobagImg from './assets/ecobag.jpg';
import kitImg from './assets/kit.jpg';
import cremeImg from './assets/creme.jpg';
import casaImg from './assets/casa.jpg';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Filtros de preço
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const imageMap = {
    'Caneta Ecológica': canetaImg,
    'Creme Natural': cremeImg,
    'EcoBag': ecobagImg,
    'Copo Ecológico': copoImg,
    'Kit de sementes': kitImg,
    'Casa de Passarinhos': casaImg,
  };

  // Carregar API
  useEffect(() => {
    axios.get('http://localhost:5000/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error("Erro ao carregar os produtos:", error);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // add carrinho
  const addToCart = (product) => {
    setCart([...cart, product]);

    axios.post('http://localhost:5000/cart', product)
      .catch(error => {
        console.error("Erro ao adicionar ao carrinho:", error);
      });
  };

  // rmvr carrinho
  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));

    axios.delete(`http://localhost:5000/cart/${productId}`)
      .catch(error => {
        console.error("Erro ao remover do carrinho:", error);
      });
  };

  //filtro de preço
  const filteredProducts = products.filter((product) => {
    const min = parseFloat(minPrice) || 0;
    const max = parseFloat(maxPrice) || Infinity;
    return product.price >= min && product.price <= max;
  });

  return (
    <div className="App">
      <h1>Loja EcoTrend - Produtos Sustentáveis</h1>

      <div className="filtro">
        <h2>Filtrar por preço</h2>
        <input
          type="number"
          placeholder="Preço Mínimo"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Preço Máximo"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>

      <div className="lista-produtos">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={imageMap[product.name] || 'https://via.placeholder.com/300x200?text=Sem+Imagem'}
              alt={product.name}
              style={{ width: '100%', maxHeight: '200px', objectFit: 'cover' }}
            />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p><strong>R$ {product.price}</strong></p>
            <button onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>
          </div>
        ))}
      </div>

      <div className="carrinho">
        <h2>Carrinho de Compras</h2>
        {cart.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - R$ {item.price}
                <button onClick={() => removeFromCart(item.id)}>Remover</button>
              </li>
            ))}
          </ul>
        )}
        <p>Total: R$ {cart.reduce((total, item) => total + item.price, 0).toFixed(2)}</p>
      </div>
    </div>
  );
}

export default App;

//npm install -g json-server
//npm install axios
//json-server --watch db.json --port 5000
*/}



{/*
import './App.css';
import { useState, useEffect } from 'react';

import canetaImg from './assets/caneta.jpg';
import copoImg from './assets/copo.jpg';
import ecobagImg from './assets/ecobag.jpg';
import kitImg from './assets/kit.jpg';
import cremeImg from './assets/creme.jpg';
import casaImg from './assets/casa.jpg';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const imageMap = {
    'Caneta Ecológica': canetaImg,
    'Creme Natural': cremeImg,
    'EcoBag': ecobagImg,
    'Copo Ecológico': copoImg,
    'Kit de sementes': kitImg,
    'Casa de Passarinhos': casaImg,
  };

  useEffect(() => {
    fetch('/db.json')
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error("Erro ao carregar JSON:", err));
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const filteredProducts = products.filter((product) => {
    const min = parseFloat(minPrice) || 0;
    const max = parseFloat(maxPrice) || Infinity;
    return product.price >= min && product.price <= max;
  });

  return (
    <div className="App">
      <h1>Loja EcoTrend - Produtos Sustentáveis</h1>

      <div className="filtro">
        <h2>Filtrar por preço</h2>
        <input
          type="number"
          placeholder="Preço Mínimo"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Preço Máximo"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>

      <div className="lista-produtos">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={imageMap[product.name] || 'https://via.placeholder.com/300x200?text=Sem+Imagem'}
              alt={product.name}
              style={{ width: '100%', maxHeight: '200px', objectFit: 'cover' }}
            />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p><strong>R$ {product.price}</strong></p>
            <button onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>
          </div>
        ))}
      </div>

      <div className="carrinho">
        <h2>Carrinho de Compras</h2>
        {cart.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - R$ {item.price}
                <button onClick={() => removeFromCart(item.id)}>Remover</button>
              </li>
            ))}
          </ul>
        )}
        <p>Total: R$ {cart.reduce((total, item) => total + item.price, 0).toFixed(2)}</p>
      </div>
    </div>
  );
}

export default App;
*/}

import './App.css';
import { useState, useEffect } from 'react';

import canetaImg from './assets/caneta.jpg';
import copoImg from './assets/copo.jpg';
import ecobagImg from './assets/ecobag.jpg';
import kitImg from './assets/kit.jpg';
import cremeImg from './assets/creme.jpg';
import casaImg from './assets/casa.jpg';

const productsData = [
  {
    id: "1",
    name: "Caneta Ecológica",
    price: 9.99,
    description: "Caneta ecológica, feita com materiais sustentáveis.",
  },
  {
    id: "2",
    name: "Creme Natural",
    price: 29.99,
    description: "Creme hidratante feito com ingredientes naturais.",
  },
  {
    id: "3",
    name: "EcoBag",
    price: 19.99,
    description: "Linda bolsa ecológica.",
  },
  {
    id: "4",
    name: "Copo Ecológico",
    price: 14.99,
    description: "Lindo copo ecológico",
  },
  {
    id: "5",
    name: "Kit de sementes",
    price: 5.99,
    description: "Kit de sementes para plantar",
  },
  {
    id: "6",
    name: "Casa de Passarinhos",
    price: 39.99,
    description: "Casa ecológica para passarinhos.",
  }
];

function App() {
  const [products] = useState(productsData); 
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const imageMap = {
    'Caneta Ecológica': canetaImg,
    'Creme Natural': cremeImg,
    'EcoBag': ecobagImg,
    'Copo Ecológico': copoImg,
    'Kit de sementes': kitImg,
    'Casa de Passarinhos': casaImg,
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const filteredProducts = products.filter((product) => {
    const min = parseFloat(minPrice) || 0;
    const max = parseFloat(maxPrice) || Infinity;
    return product.price >= min && product.price <= max;
  });

  return (
    <div className="App">
      <h1>Loja EcoTrend - Produtos Sustentáveis</h1>

      <div className="filtro">
        <h2>Filtrar por preço</h2>
        <input
          type="number"
          placeholder="Preço Mínimo"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Preço Máximo"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>

      <div className="lista-produtos">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={imageMap[product.name] || 'https://via.placeholder.com/300x200?text=Sem+Imagem'}
              alt={product.name}
              style={{ width: '100%', maxHeight: '200px', objectFit: 'cover' }}
            />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p><strong>R$ {product.price.toFixed(2)}</strong></p>
            <button onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>
          </div>
        ))}
      </div>

      <div className="carrinho">
        <h2>Carrinho de Compras</h2>
        {cart.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - R$ {item.price.toFixed(2)}
                <button onClick={() => removeFromCart(item.id)}>Remover</button>
              </li>
            ))}
          </ul>
        )}
        <p>Total: R$ {cart.reduce((total, item) => total + item.price, 0).toFixed(2)}</p>
      </div>
    </div>
  );
}

export default App;
