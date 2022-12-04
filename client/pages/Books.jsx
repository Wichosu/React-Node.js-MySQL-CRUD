import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Books = () => {
  const [books, setBooks] = useState([]);
  const router = useRouter();
  const { pid } = router.query;

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books");
        setBooks(res.data);
      }catch(err){
        console.log(err);
      }
    }
    fetchAllBooks();
  }, [])

  const handleDelete = async (id) => {
    try{
      await axios.delete("http://localhost:8800/books/"+id)
      window.location.reload()
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div>
      <h1>Book shop</h1>
      <div className='books'>
        { books.map((book) => (
          <div key={book.id} className="book">
            {book.cover && <Image className='img' width={100} height={100} src={`/${book.cover}`} alt="" />}
            <h2>{book.title}</h2>
            <p>{book.description}</p>
            <span>{book.price}</span>
            <button className='delete' onClick={() => handleDelete(book.id)}>Delete</button>
            <button className='update'><Link href={`/Update/${book.id}`}>Update</Link></button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;
