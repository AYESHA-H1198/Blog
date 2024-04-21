import { Link } from 'react-router-dom';
import articles from './article-content';

const ArticlesListPage = () => {
  return (
    <div className='bg-black min-h-screen'>
      <div className='container mx-auto px-4 py-8'>
        <h1 className='text-center text-3xl font-bold text-white mb-8'>Articles</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {articles.map(article => (
            <Link key={article.name} to={`/articles/${article.name}`} className="block bg-white rounded p-4 transition duration-300 hover:bg-gray-100">
              <h3 className='font-bold text-xl text-blue-500 mb-2'>{article.title}</h3>
              <p className='text-gray-700'>{article.content[0].substring(0, 100)}...</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ArticlesListPage;

