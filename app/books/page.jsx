"use client"
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import '../css/all.css';

function Books() {
  const [posts, setPosts] = useState([]);
  const [blockId, setBlockId] = useState(null);
  const [block, setBlock] = useState(null);
  const colors = ['black', 'red'];
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const [filter, setFilter] = useState('');
  const [sortBy, setSortBy] = useState('');
  useEffect(() => {
    fetchPosts();
  }, []);
  const fetchPosts = async () => {
    try {
      const response = await fetch('https://api.escuelajs.co/api/v1/categories/3/products?offset=0&limit=10');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.log('Error loading posts:', error);
    }
  };
  const handleUserClick = (postId) => {
    const selectedPost = posts.find((post) => post.id === postId);
    setBlockId(postId);
    setBlock(selectedPost);
    const newURL = `http://localhost:3000/books/${postId}`;
    window.history.pushState(null, '', newURL);
  };
  useEffect(() => {
    const handlePopstate = () => {
      const postId = window.location.pathname.replace('/books/', '');
      setBlockId(postId);
    };
    window.addEventListener('popstate', handlePopstate);
    return () => {
      window.removeEventListener('popstate', handlePopstate);
    };
  }, []);
  const handleClick = () => {
    setCurrentColorIndex((currentColorIndex + 1) % colors.length);
    if (block) {
      const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      const existingItemIndex = cartItems.findIndex((item) => item.id === block.id);
      if (existingItemIndex !== -1) {
        cartItems[existingItemIndex].quantity += 1;
      } else {
        const newItem = { id: block.id, title: block.title, price: block.price, images: block.images, quantity: 1 };
        cartItems.push(newItem);
      }
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
  };
  const blockStyle = {
    width: '50px',
    height: '50px',
    color: colors[currentColorIndex],
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
    cursor: 'pointer',
  };
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };
  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(filter.toLowerCase())
  );
  const sortedPosts = filteredPosts.sort((a, b) => {
    if (sortBy === 'cheapest') {
      return a.price - b.price;
    } else if (sortBy === 'expensive') {
      return b.price - a.price;
    } else {
      return 0;
    }
  });

  return (
    <div className="container_new_in">
      <div className="new_in">
        <h1>Books</h1>
        <div className="new-in_top">
          <select className="filter box_sort_filter" value={sortBy} onChange={handleSortChange}>
            <option value="">Sort</option>
            <option value="cheapest">The cheapest</option>
            <option value="expensive">The most expensive</option>
          </select>
          <input
            type="text"
            className="box_sort_filter"
            placeholder="Filter"
            value={filter}
            onChange={handleFilterChange}
          />
        </div>
      </div>
      <div className="clothing">
        {block && (
          <div className="clothing_block">
            <img src={block.images} alt="Image" />
            <div className="clothing_block-box">
              <p>{block.title}</p>
              <h2>Price: {block.price}$</h2>
            </div>
            <div className="clothing_block-box clothing_block_center">
              <button className="add_to_cart" onClick={handleClick}>Add to Cart</button>
              <FontAwesomeIcon icon={faHeart} style={blockStyle} onClick={handleClick} />
            </div>
            <div className="clothing_block-box">
              <h3>Product Information</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa numquam quibusdam eveniet tenetur ipsam,
                ratione repudiandae possimus necessitatibus ad modi cumque unde veniam quaerat illo sed voluptatum
                temporibus providentfugit.
              </p>
            </div>
          </div>
        )}
        <ul className="ul">
          {sortedPosts.map((post) => (
            <li
              key={post.id}
              className="li"
              style={blockId ? { display: 'none' } : {}}
              onClick={() => handleUserClick(post.id)}
            >
              <img src={post.images} alt="" />
              <span>№ {post.id}</span>
              <p>{post.title}</p>
              <p>{post.price} $</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Books;