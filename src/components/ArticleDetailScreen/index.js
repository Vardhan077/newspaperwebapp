import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './index.css';

const ArticleDetailScreen = props => {
    const [list, setList] = useState(null); 

    const { id } = useParams();
    const decodedId = decodeURIComponent(id);

    useEffect(() => {
        const getItem = async () => {
            try {
                const options = {
                    method: 'GET'
                };
                const url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=690db48467224d73b39d478ed4cc83a2`;
                const res = await fetch(url, options);
                const result = await res.json();
                const r = result.articles;
                const foundArticle = r.find(item => item.url === decodedId);
                setList(foundArticle);
            } catch (error) {
                console.error('Error fetching article:', error);
            }
        };

        getItem();
    }, [id]);

    return (
        <div className='itemContainer'>
            {list && ( 
                <div className='inside'>
                    <p className='title'>{list.title}</p>
                    <p className='contentTag'>CONTENT</p>
                    <p className='content'>{list.content}</p>
                    <p className='description'>{list.description}&nbsp;&nbsp;&nbsp;{list.description}&nbsp;&nbsp;&nbsp;{list.description}&nbsp;&nbsp;&nbsp;{list.description}&nbsp;&nbsp;&nbsp;{list.description}&nbsp;&nbsp;&nbsp;{list.description}&nbsp;&nbsp;&nbsp;{list.description}</p>
                    <img className='pic' src={list.urlToImage} alt='image' />
                    <h3 className='author'><span className='span'>BY</span>{list.author}</h3>
                    <p className='published'>{list.publishedAt}</p>
                    <p className='descTag'>DESCRIPTION</p>
                    <p className='description'>{list.description}&nbsp;&nbsp;&nbsp;{list.description}&nbsp;&nbsp;&nbsp;{list.description}&nbsp;&nbsp;&nbsp;{list.description}&nbsp;&nbsp;&nbsp;{list.description}&nbsp;&nbsp;&nbsp;{list.description}&nbsp;&nbsp;&nbsp;{list.description}{list.description}&nbsp;&nbsp;&nbsp;{list.description}&nbsp;&nbsp;&nbsp;{list.description}&nbsp;&nbsp;&nbsp;{list.description}&nbsp;&nbsp;&nbsp;{list.description}&nbsp;&nbsp;&nbsp;{list.description}&nbsp;&nbsp;&nbsp;{list.description}</p>
                </div>
            )}
        </div>
    );
}

export default ArticleDetailScreen;




