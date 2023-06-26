import { useState } from 'react';
import './App.css';
//npm i react-bootstrap --save
import {Card, Navbar } from 'react-bootstrap';

function App() {
const data = [
    {
     img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9CnZ_UoSUHRviTAsICbumOtjwTGaCXp32JQ&usqp=CAU",
     productName: "HD MATTE LIPSTICK",
     star:"⭐⭐⭐⭐⭐",
     pricerossLine:"38$",
     originalPrice:"22$"
    },
    {
     img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxluzSK424szlMvSGA29rOdFiJH-MJQNOMfw&usqp=CAU",
     productName: "Mamaearth Glow Serum Foundation",
     star:"⭐⭐⭐⭐",
     pricerossLine:"48$",
     originalPrice:"45$"
    },
    {
     img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQBMJnXn1CFx-tFhQ9jdklZRelLeP5EOuoRg&usqp=CAU",
     productName: "All Day Liquid Foundation",
     star:"⭐⭐⭐⭐⭐",
     pricerossLine:"13$",
     originalPrice:"10$"
    },
    {
     img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvS2DzqKH5nw_e1DuF9lkNwiuFPoChV4gaqA&usqp=CAU",
     productName: "Lenphor Luminous Liquid Foundation",
     star:"⭐⭐",
     pricerossLine:"65$",
     originalPrice:"44$"
    },
    {
     img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7mHS3esGIGB_3TQqTVNYsbrapmLkcTF-9ow&usqp=CAU",
     productName: "Blue Heaven ",
     star:"⭐⭐⭐⭐⭐",
     pricerossLine:"45$",
     originalPrice:"32$"
    },
    {
     img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnpzyNwlU0Dx7nazglIGxcTHjm0txsiG9muA&usqp=CAU",
     productName: "Cushion Matte Lipstick",
     star:"⭐⭐⭐⭐⭐",
     pricerossLine:"28$",
     originalPrice:"22$"
    },
    {
     img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZcjRPMxAbFsbIXZVZYXfUm95t1GLDNuvNlQ&usqp=CAU",
     productName: "Avocado Oil",
     star:"⭐⭐⭐",
     pricerossLine:"18$",
     originalPrice:"10$"
    },
    {
     img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtsTm6rezrbWI59vDuRM7NzWRV7jzgjUDPtQ&usqp=CAU",
     productName: "Mamaearth Matte Lipstick",
     star:"⭐⭐⭐⭐",
     pricerossLine:"15$",
     originalPrice:"10$"
    },
    {
     img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRls08wvVK2uq6tHKlwmQW7aynLjBjBnL7J9Q&usqp=CAU",
     productName: "Transferproof Lipstick",
     star:"⭐⭐⭐⭐⭐",
     pricerossLine:"26$",
     originalPrice:"18$"
    },
    {
     img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzbufj2g2gCJzIBA87si0bTL27DcNvi8uzzQ&usqp=CAU",
     productName: "Touch of Spice",
     star:"⭐⭐⭐⭐",
     pricerossLine:"19$",
     originalPrice:"16$"
    }
 ]
  const [count, setCount]= useState(0);
  return (
    <div className='body'>
     {/*--------------------------- img section----------------------------------------------- */}
     <img className='head' src="https://logan.nnnow.com/content/dam/nnnow-project/27-sep-2021/MakeupDesktop.jpg" alt='header nothing'/>
      {data.map((prod,idx)=>(
         <Content 
         key={idx}
         img={prod.img}
         productName={prod.productName}
         star={prod.star}
         fakePrice={prod.pricerossLine}
         originalPrice={prod.originalPrice}
         count={count}
         setCount={setCount}
        />
      ))}
      


    </div>


  );
}

export default App;


let Content=({key,img,productName,star,fakePrice,originalPrice ,count,setCount})=>{
  const [show, setShow] = useState(true) 
  // add to cart clickFunction
let cartnumber=(count, setCount )=>{
  setShow(!show) 
  setCount(count=count+1)
  
}

// remove from cart clickFunction

let removecartnumber=(count, setCount)=>{
  setShow(!show)
  setCount(count=count-1)
 
}

  return(
    <div className='body1'>
    {/* ---------------------------cart section------------------------------------ */}
    <div className='cart'>
      <Navbar fixed="top">
      <div className='cartbtn '>
        🛒
         (<div className='cartNumber'>{count}</div>)
      </div>
      </Navbar>
    </div>
{/* ---------------------------card section------------------------------------ */}
    <div className='card-container'>
        <Card key={key} className='card'>
        <Card.Img variant="top" src={img} className='img' />
        <Card.Body className='cardBody'>
          <Card.Title className='prodName'>{productName}</Card.Title>
            <div className='star'> {star}</div>
            <div className='priceTable'>
            <span className='priceTitle'>Price: </span>
            <span className='fakePrice'>{fakePrice}</span>
            <span className='originalPrice'>{originalPrice}</span>
            </div>
            
             { !show? <div className='cardBtnDiv'><button className='cardBtn' onClick={()=>removecartnumber(count, setCount)}>Remove From Cart</button></div>
                      : 
                    <div className='cardBtnDiv'><button className='cardBtn' onClick={()=>cartnumber(count, setCount)}>Add To Cart</button></div>  
             } 
        </Card.Body>
      </Card>
    
    </div>
    </div>

  )
}