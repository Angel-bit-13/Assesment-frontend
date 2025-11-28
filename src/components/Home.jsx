import React, { useEffect, useState } from 'react';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load products.');
        setLoading(false);
      });
  }, []);

  if (loading) return <h2 style={{ textAlign: 'center' }}>Loading...</h2>;
  if (error) return <h2 style={{ textAlign: 'center', color: 'red' }}>{error}</h2>;

  return (
    <div className='py-10 px-5 bg-cyan-100 min-h-screen'>
      <h1 className='font-semibold text-center font-serif text-2xl caret-cyan-900'>PRODUCTS</h1>

      <div className='grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-5 mt-6'>
        {products.map((product) => (
          <div
            key={product.id}
            className="border border-gray-300 rounded-lg p-4 bg-white shadow-md"
          >
            <img
            src={product.image}
            alt={product.title}
            className="w-full h-[180px] object-contain"
          />

          <h3 className="text-[16px] mt-2.5">
              {product.title.length > 50
                ? product.title.substring(0, 50) + '...'
                : product.title}
            </h3>
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Price:</strong> ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
