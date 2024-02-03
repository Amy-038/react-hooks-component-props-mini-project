import React from "react";
import Article from "./Article";


function ArticleList( { posts } ){
    const articlesList = posts.map((article) => {
        return(
        <>
        <Article key={article.id} title={article.title} date={article.date} preview={article.preview} />
        </>
        )
    })

    return(
        <main>{articlesList}</main>
    )
}

export default ArticleList;