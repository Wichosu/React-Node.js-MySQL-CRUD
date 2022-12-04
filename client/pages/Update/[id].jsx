import axios from 'axios';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Update = () => {
  const router = useRouter();
  const { id } = router.query;

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
      await axios.put("http://localhost:8800/books/"+id, book)
      router.push("/")
    }catch(err){
      console.log(err)
    }
  }

  console.log(book);

  return (
    <div className='App'>
      <div className='form'>
        <h1>Update The Book</h1>
        <input type='text' placeholder='title' onChange={handleChange} name='title' />
        <input type='text' placeholder='cover' onChange={handleChange} name='cover' />
        <input type='text' placeholder='description' onChange={handleChange} name='description' />
        <input type='number' placeholder='price' onChange={handleChange} name='price' />
        <button className='form-button' onClick={handleClick}>Update</button>
      </div>
    </div>
  );
}

export default Update;