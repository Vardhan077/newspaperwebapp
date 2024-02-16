import { Component } from "react";
import {Link} from 'react-router-dom'
import ArticleDetailScreen from "../ArticleDetailScreen";
import HomeItems from '../HomeItems'
import {v4} from 'uuid'
import { IoMdSearch } from "react-icons/io";
// import { Player } from 'video-react';
import ReactPlayer from 'react-player'
import { CiFacebook } from "react-icons/ci";
import { BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";

import './index.css'

class HomeScreen extends Component{
    state = {list:[],headlines:[]}

    componentDidMount(){
        this.getData()
    }


    getData = async () => {
        try {
            const options = {
                method: 'GET'
            }
            const url = 'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=690db48467224d73b39d478ed4cc83a2'
            const res = await fetch(url, options)
            if (!res.ok) {
                throw new Error('Failed to fetch data');
            }
            const result = await res.json()
            console.log(result.articles)
            const filteredArticles = result.articles.filter(item => item.urlToImage); // Filter out items without an image URL
            const x = filteredArticles.slice(2, 19)
            this.setState({ list: x })
        } catch (error) {
            console.error('Error fetching data:', error);
            // Handle error here, for example, you can display an error message to the user
        }
    }
    

    itemsFunction = () =>{
        const {list} = this.state
        let a = list.slice(0,3)
        return(a.map(item =>(
            <HomeItems item = {item} key = {list.indexOf(item)} id = {encodeURIComponent(item.url)} />
        )))
    }

    mostReadFunc = item =>{
        const {title,author,url} = item
        let id = encodeURIComponent(url)
        return(
            <li>
                <Link to = {`/article/${id}`} className="mostReadLink">
                    <p className="sideTitle">{title}</p>
                    <p className="sideAuthor">{author}</p>
                </Link>
           
            </li>
        )
    }

    youShouldKnowFunTwo = () =>{
        const {list} = this.state
   
        return(list.map(item =>(
            <HomeItems item = {item} key = {list.indexOf(item)} id = {encodeURIComponent(item.url)} />
        )))
    }


    youShouldKnowFun = () =>{
        const {list} = this.state
        let a = list.slice(5,9)
        return(a.map(item =>(
            <HomeItems item = {item} key = {list.indexOf(item)} id = {encodeURIComponent(item.url)} />
        )))
    }

    editorsPicksFun = () =>{
        const {list} = this.state
        let a = list.slice(22,28)
        return(a.map(item =>(
            <HomeItems item = {item} key = {list.indexOf(item)} id = {encodeURIComponent(item.url)} />
        )))
    }

    render(){
        const {list} = this.state
        const mostRead = list.slice(1,9)
        let main = null;
        if (list.length > 0) {
            main = list[0];
        }

        if (!main) {
            return null;
        }
        const{title,urlToImage,description,content} = main
        console.log(main,'is main')
        return(
            <div>
                <div className="nav">
                    <h2 className="head">Sign Up for Our Newsletter</h2>
                    <h1 className="heading">BHARAT NEWS</h1>
                    <div className="in">
                        <p className="signin">SIGN IN</p>
                        <button className="button">SUBSCRIBE</button>
                    </div>
                </div>
                <hr className="line" />
                <div className="search">
                    <IoMdSearch className="searchIcon" />
                    <input type = 'search' placeholder="Search" />
                </div>
                <div className="mainBox">
                    
                        <Link to ='/main' className="mainMatter">
                            <h1 className="mainTitle">Larry Hogan's Senate Bid Complicated by Vetoes</h1>
                            <p className="read">7 MIN READ</p>
                            <p className="mainPublished">FEBRUARY 14, 2024 • 2:14 PM EST</p>
                            <p className="mainDesc">Hogan's veto record undercuts his image as the Republican even Democrats like</p>
                        </Link>
                        <Link to = '/main'>
                            <img src= {'https://res.cloudinary.com/dg9itycrz/image/upload/v1708076012/GettyImages-1247357077_evco9o.webp'} className="mainImg"/>
                        </Link>
                    
                    <div className="mmmm">
                        <div className="mostRead">
                            <h1 className="sidehead">MOST READ</h1>
                            <ol className="ordered">
                                {mostRead.map(item =>(
                                    this.mostReadFunc(item)
                                ))}
                            </ol>
                        </div>
                    </div>
                    
                </div>
                <div className="newsItems">   
                    {this.itemsFunction()}
                </div>
                <hr className="line lineT"/>
                <div className="youShouldKnow">
                    <h1 className="second">YOU SHOULD KNOW</h1>
                    <ul className="ysk">
                        {this.youShouldKnowFun()}
                    </ul>
                    
                </div>
                <hr className="line lineT"/>
            

                <div className="videoPlayer">
                    <div>
                        <div className="full">
                            <h1 className="video">VIDEO<span style = {{color:'red'}}></span></h1>
                            <ReactPlayer className = 'player' controls = {true} pip = {false} url = 'https://www.youtube.com/watch?v=KOEfDvr4DcQ' height='360px' width='640px' />
                        </div>
                        <h2 className="headingVid">
                        Face Your Biggest Fear To Win $800,000
                        </h2>
                    </div>
                    <div>
                    <div className="smallVid">
                    <ReactPlayer className = 'playerS' controls = {true} pip = {false} url = 'https://www.youtube.com/watch?v=Q6G5eYNPuiA' height='150px' width='270px' />
                    <h1 className="smallHeading"> Indian bowlers with Most Test wickets | WION</h1>
                    </div>
                    <div className="smallVid">
                    <ReactPlayer className = 'playerS' controls = {true} pip = {false} url = 'https://www.youtube.com/watch?v=7JXkKVA5RAA' height='150px' width='270px' />
                    <h1 className="smallHeading"> Will Paytm CRASH or Make a COMEBACK? </h1>
                    </div>
                    <div className="smallVid">
                    <ReactPlayer className = 'playerS' controls = {true} pip = {false} url = 'https://www.youtube.com/watch?v=d7YXPHU8Dr4' height='150px' width='270px' />
                    <h1 className="smallHeading"> Behind The Scenes Of Shark Tank India </h1>
                    </div>
                    </div>
                    

                    
                </div>

                <div className="youShouldKnowTwo">
                    <h1 className="second">MORE TO KNOW<span style={{color:'red'}}></span></h1>
                    <ul className="yskTwo">
                        {this.youShouldKnowFunTwo()}
                    </ul>
                </div>

                <hr className="line"/>

                <div className="bottom">
                    <h1 className="heading">BHARAT NEWS</h1>
                    <div className="icons">
                        <CiFacebook className="icon1 icon" />
                        <FiTwitter className="icon2 icon"  />
                        <BsInstagram className="icon3 icon"  />
                    </div>
                    
                </div>

            </div>
        )
    }
}


export default HomeScreen
















