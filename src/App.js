import './App.css';
import Article from './components/Article/Article'

import {useState, useEffect} from 'react'

function App() {
  
  const article = [{
    image : 'image1.jpg',
    heading : "Man tells Abhishek 'You've a beautiful wife you don't deserve', actor responds",
    body : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod pretium nibh nec accumsan. Mauris quis vulputate felis. Integer vel euismod felis. Nunc dapibus sapien a nibh venenatis, at faucibus mi rutrum. Quisque bibendum in enim ut varius. Sed pellentesque semper tempus. Proin eget magna efficitur, tincidunt elit eu, accumsan leo. Pellentesque sed sollicitudin nisl, vel scelerisque sem. ",
    footer : 'Only you can give such replies!'
  },
  {
    image : 'image2.jpg',
    heading : "He was a big actor, don't want to take names!",
    body : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod pretium nibh nec accumsan. Mauris quis vulputate felis. Integer vel euismod felis. Nunc dapibus sapien a nibh venenatis, at faucibus mi rutrum. Quisque bibendum in enim ut varius. Sed pellentesque semper tempus. Proin eget magna efficitur, tincidunt elit eu, accumsan leo. Pellentesque sed sollicitudin nisl, vel scelerisque sem. ",
    footer : 'I quickly got away!'
  },
  {
    image : 'image3.jpg',
    heading : "Asian Paints announces 'Cherish' as colour of the year 2021!",
    body : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod pretium nibh nec accumsan. Mauris quis vulputate felis. Integer vel euismod felis. Nunc dapibus sapien a nibh venenatis, at faucibus mi rutrum. Quisque bibendum in enim ut varius. Sed pellentesque semper tempus. Proin eget magna efficitur, tincidunt elit eu, accumsan leo. Pellentesque sed sollicitudin nisl, vel scelerisque sem. ",
    footer : 'Cherish is enduring and uplifting!'
  },
  {
    image : 'image4.jpg',
    heading : "Manipal School of FinTech with Axis Bank opens admissions for 3rd batch",
    body : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod pretium nibh nec accumsan. Mauris quis vulputate felis. Integer vel euismod felis. Nunc dapibus sapien a nibh venenatis, at faucibus mi rutrum. Quisque bibendum in enim ut varius. Sed pellentesque semper tempus. Proin eget magna efficitur, tincidunt elit eu, accumsan leo. Pellentesque sed sollicitudin nisl, vel scelerisque sem. ",
    footer : 'Become a part of our growth journey'
  }
]


  const [articleIndex, setArticleIndex] = useState(0);
  const [currentArticle, setCurrentArticle] = useState(article[articleIndex])
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)


  function handleTouchStart(e){
    setTouchStart(e.targetTouches[0].clientY);
  }

  function handleTouchMove(e){
    setTouchEnd(e.targetTouches[0].clientY);
  }
  
  function handleTouchEnd(e){
    if(touchStart - touchEnd > 150) {
      if(articleIndex < article.length){
        setArticleIndex(articleIndex => articleIndex+1);
        setCurrentArticle(article[articleIndex]);
      }else{
        setArticleIndex(0);
      }
    }
  }

  
  function animTrigger(){
    var articleComp = document.getElementById('art');

    articleComp.classList.remove('fadeInAnimation');
    articleComp.classList.add('fadeInAnimation');
}

  useEffect(()=> alert('View in mobile device | Swipe up to scroll articles'), [])

  useEffect(()=>{
    animTrigger();
  }, [currentArticle])
  

  return (
      <div className="App" 
          onTouchStart={handleTouchStart} 
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
      >
        <Article article={currentArticle}  />
      </div>
  );
}

export default App;
