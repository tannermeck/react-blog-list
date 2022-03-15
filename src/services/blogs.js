import { checkError, client } from './client';

const getBlogs = async () => {
  const data = await client.from('blogs').select('*, author_id(*)');
  //   const data = await client.from('authors').select('*');
  return checkError(data);
};
export { getBlogs };
