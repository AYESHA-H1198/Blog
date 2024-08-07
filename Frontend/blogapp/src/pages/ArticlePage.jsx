import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import articles from './article-content';

const ArticlePage = () => {
    const { articleId } = useParams();
    const [article, setArticle] = useState(null); 
    const [backgroundImage, setBackgroundImage] = useState('');

    useEffect(() => {
        const foundArticle = articles.find(article => article.name === articleId);
        if (foundArticle) {
            setArticle(foundArticle); 
            setBackgroundImage(foundArticle.backgroundImage);
        } else {
            console.log(`Article with ID '${articleId}' not found.`);
        }
    }, [articleId]); 

    if (!article) {
        return <div>Loading...</div>; 
    }

    return (
        <div 
            style={{
                backgroundImage: `url(${backgroundImage})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                minHeight: '100vh',
                minWidth: '100vw', // Ensure the background covers the entire viewport
                
            }}
            className='px-6'
        >
            <h1 
                style={{
                    textAlign: 'center', 
                    fontWeight: 'bold', 
                    fontSize: article.title === 'The Fastest Way to Learn React' ? '3rem' : '2rem',
                    color: article.title === 'The Fastest Way to Learn React' ? 'white' : 'black',
                }}
            >
                {article.title}
            </h1>
            {article.content.map((paragraph, index) => (
                <p 
                    key={index} 
                    style={{
                        fontSize: article.title === 'The Fastest Way to Learn React' ? '1.25rem' : '1rem',
                        color: article.title === 'The Fastest Way to Learn React' ? 'white' : 'black',
                    }}
                >
                    {paragraph}
                </p>
            ))}
        </div>
    );
}

export default ArticlePage;



