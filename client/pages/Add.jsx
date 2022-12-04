import axios from 'axios';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Add = () => {
  const router = useRouter();

  const [book, setBook] = useState({
    title: "",
    cover: "",
    description: "",
    price: null,
  });

  const handleChange = (e) => {
    setBook((prev) => ({...prev, [e.target.name]: e.target.value }))
  };

  const handleClick = async (e) => {
    e.preventDefault()
    try{
      await axios.post("http://localhost:8800/books", book)
      router.push("/")
    }catch(err){
      console.log(err)
    }
  }

  console.log(book);

  return (
    <div className='form'>
      <h1>Add New Book</h1>
      <input type='text' placeholder='title' onChange={handleChange} name='title' />
      <input type='text' placeholder='cover' onChange={handleChange} name='cover' />
      <input type='text' placeholder='description' onChange={handleChange} name='description' />
      <input type='number' placeholder='price' onChange={handleChange} name='price' />
      <button onClick={handleClick}>Add</button>
    </div>
  );
}

export default Add;
