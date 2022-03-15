import { useState, useEffect } from 'react';
import { getBlogs } from '../services/blogs';

export default function Main() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const data = await getBlogs();
      console.log(data);
      setBlogs(data);
    };
    fetch();
  }, []);
  return (
    <>
      <div>Hello</div>
    </>
  );
}
