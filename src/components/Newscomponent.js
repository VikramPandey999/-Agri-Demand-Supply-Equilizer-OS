import React, {useEffect,useState} from 'react'
import Newsitem from "./Newsitem";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from './Spinner';

function Newscomponent() {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [results, setResults] = useState(0)
    
    const updateNews = async () => {
        const url=`https://newsapi.org/v2/everything?q=agri&apiKey=c0937a1ada014e91a6739e5fa0e041b3&page=${page}`;
        setLoading(true);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.articles);
        setResults(parsedData.results);
        setLoading(false);
    };

    useEffect(() => {
        updateNews();
    },[])

    const fetchMoreData = async () =>{
        const url=`https://newsapi.org/v2/everything?q=agri&apiKey=c0937a1ada014e91a6739e5fa0e041b3&page=${page+1}`;
        setPage(page+1);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setResults(parsedData.results);
    };
  return (
    <>
    {loading && <Spinner/> }
    <InfiniteScroll dataLength={articles.length} next={fetchMoreData} hasMore={articles.length < results}
    loader={<Spinner/>}
>
    <div className="container" style={{marginTop:'100px'}}>
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4 container" key={element.url}>
                  <Newsitem
                    title={element.title ? element.title : ""}
                    description={element.description.length == 20 ? element.description : ""}
                    urlToImage={element.urlToImage? element.urlToImage : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fouikar.com%2F441031616913073459402507.html&psig=AOvVaw0mM41SlwvDfFEphQhMTo8S&ust=1645014982859000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJjdp8HcgfYCFQAAAAAdAAAAABAO"}
                    url={element.url}
                    author={element.author}
                    publishedAt={element.publishedAt}
                    name={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  )
}

export default Newscomponent