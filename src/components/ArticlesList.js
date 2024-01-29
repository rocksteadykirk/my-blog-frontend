// reusable ArticlesList Component

import { Link } from "react-router-dom";


const ArticlesList = ({articles}) => {
    return (
        <>
            {articles.map(article => (
                <Link key={article.name} className="article-list-item" to={`/articles/${article.name}`}>   {/* Remember to add key when using methods like map */}
                    <h3>{article.title}</h3>
                    <p>{article.content[0].substring(0, 150)}...</p>  {/* substring(0, 150) For displaying a sample of content*/}
                </Link>
            ))}
        </>
    )
}

export default ArticlesList;