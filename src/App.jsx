import './index.css';
import dots from './img/Dots.svg'
import first from './img/FIRST.svg'
import subtract from './img/Subtract.svg'
import light from './img/LIGHT.svg'
import screenshot from './img/Screenshot.svg'
import arrow from './img/Arrow.svg'
import frame from './img/Frame 7.svg'
import shirt from './img/shirt.svg'
import arrowleft from './img/ArrowLeft.svg'
import arrowright from './img/ArrowRight.svg'
import framm from './img/framm.svg'
import men from './img/men.svg'
import rt from './img/rt.svg'
import text from './img/text.svg'


function App() {
  return (
  <div className="App">
    <header className='box items-center flex justify-between px-3 py-3'>
      <img className='' src={dots} alt=""/>
      <p className=' front-bold text-[17px]'> <b>SUMMER SALE UP TO 50% OFF</b></p>
      <img   src={dots} alt="" />
    </header>
    <body>
      <div className='items-center flex justify-center px-5 py-4 h-[80px] gap-[57px] mt-[60px] '>
        <img className='' src={first} alt="" />
        <img className='' src={subtract} alt="" />
        <img className='' src={light} alt=""/>
    </div>
    <div className='item-center flex justify-center h-[750px] gap-[90px] mt-[60px]'>
    <img className='' src={screenshot} alt=""/>
      </div>
    <div className='text text-[30px] items-start flex font-bold ml-[80px] mt-[-100px]'>
      <p> Spring season</p>
    </div>
    <div className='text text-[20px] items-start flex font-bold ml-[1500px] mt-[-60px]'>
      <p>VIEW COLLECTION</p>
      <img className='' src={arrow} alt=""/>
    </div> 
    <div className='app1'>
      <header className='box1 text text-[50px] items-center flex justify-between px-20 py-10  h-[20px] gap-[90px] mt-[85px]'>
     <img className='ml-[200px]' src={frame} alt=""/>
     </header>
     </div>
    <div className='flex w-full'>
      <img className='ml-20' src={arrowleft} alt=""/>
      <img className=' h-[700px] gap-[90px] mt-[60px] px-20 py-10 ' src={shirt} alt="w-1/2"/>
      <img className='mr-9' src={arrowright} alt=""/>
      <img src={framm} alt="" className='w-1/2'/>
      </div>
      <div className='text1 text-[30px] items-start flex font-bold ml-[430px] mt-[-210px]'>
      <p> Basic Shirt</p>
      </div>
      <div className='text1 text-[30px] items-start flex font-bold ml-[470px] mt-[-2px]'>
      <p>€49</p>
      </div>
      <div className='text text-[30px] items-start flex font-bold ml-[1050px] mt-[-1px]'>
      <button className='bg-black text-white text-[25px] px-4 py-4 rounded'>Shop Shirts</button>
      </div>
      <div className='flex r-full'>
      <img className=' h-[700px] gap-[90px] mt-[50px] px-30 py-10 ' src={men} alt="r-1/2"/>
      <header className='box2 text text-[50px] items-center flex justify-between px-2 py-3  h-[630px] gap-[90px] mt-[85px] rounded'>
      <img className='mt-[-260px] ' src={text} alt="r-1/2"/>
     <img className='mt-[500px] ml-[-300px]' src={rt} alt="r-1/2"/>
    
     </header>
      </div>
    </body>
   </div>
    
  );
}


export default App;
