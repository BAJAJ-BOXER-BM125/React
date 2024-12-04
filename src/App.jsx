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
import image from './img/image.svg'
import image2 from './img/image2.svg'
import arroww from './img/Arroww.svg'
import Bloomberg from './img/Bloomberg.svg'
import forbes from './img/Forbes.svg'
import vektorr from './img/Vectorr.svg'
import up from './img/up.svg'



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
    <div className='item-center flex justify-center h-[850px] gap-[90px] mt-[60px]'>
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
      <img className=' h-[754px] gap-[90px] mt-[60px] px-20 py-10 ' src={shirt} alt="w-1/2"/>
      <img className='mr-9' src={arrowright} alt=""/>
      <img src={framm} alt="" className='w-1/2'/>
      </div>
      <div className='text1 text-[30px] items-start flex font-bold ml-[430px] mt-[-210px]'>
      <p> Basic Shirt</p>
      </div>
      <div className='text1 text-[30px] items-start flex font-bold ml-[470px] mt-[-2px]'>
      <p>€49</p>
      </div>
      <div className='text text-[30px] items-start flex font-bold ml-[1095px] mr-[-100px] mt-[-1px]'>
      <button className='bg-black text-white text-[25px] px-4 py-4 rounded'>Shop Shirts</button>
      </div>
      <div className='flex w-full '>
      <img className=' box3 h-[636px] w-[596px]  mt-[170px] mr-[190px] ml-[350px] px-25 py-30 rounded ' src={men} alt=""/>
      <header className='box2 text2 text-[60px] items-center flex justify-between px-30 py-30  h-[636px] w-[-596px] r-[8px] gap-[0px] mt-[170px]  mr-[190px] ml-[-90px] rounded'>
      <img className='mt-[-260px] ' src={text} alt=""/>
     <img className='mt-[550px] ml-[-190px]' src={rt} alt=""/>
     </header>
     </div>
     <div className='text text-[-1px] items-start flex font-bold ml-[400px] mt-[-100px] mr-[200px]'>
     <button className='bg-black text-white text-[18px] px-4 py-4 rounded'>Shop Sweaters</button>
     </div>
     <div className='flex w-full items-center flex justify-between  px-3 py-3'>
      <img className=' h-[974px] w-[757px] mt-[-1px] mr-[-100px] ml-[360px] px-20 py-20 rounded' src={image} alt=""/>
      <img className=' h-[974px] w-[757px] mt-[83px] mr-[337px] ml-[-320px] px-10 py-15 rounded' src={image2} alt=""/>
     </div>
     <div className='text4 text-[18px] items-start flex font-bold ml-[1110px] mt-[-200px]'>
      <p>MEN</p>
      <img className='' src={arroww} alt=""/>
      </div>
    <div className='text4 text-[18px] h-[20px] w-[86px] gap-[8px] items-start flex font-bold ml-[510px] mt-[-30px]'>
      <p>WOMEN</p>
      <img className='' src={arroww} alt=""/>
    </div>
     <header className='box6 items-center flex justify-between px-3 py-3'>
      <p className=' front-bold text-[17px] text-[50px] flex font-bold ml-[830px] mt-[130px]'> <b>Hot off the press</b></p> 
    </header>
    <div className="mt-5 flex  items-center justify-center"></div>
      <div className='w-[1260px] h-[286px] ml-[450px]  border-2 rounded-md flex '></div>
     <div className=' text4 text-[100px] h-[120px] w-[1000px]  items-start flex font-bold mr-[10px] ml-[485px] mt-[-250px]'>
      <img src={Bloomberg} alt=""/>
      </div>
      <div className='text4 text-[100px] h-[120px] w-[1000px]  items-start flex font-bold mr-[100px] ml-[900px] mt-[-120px]'>
      <img src={forbes} alt=""/>
      </div>
      <div className='text4 text-[100px] h-[120px] w-[1000px]  items-start flex font-bold mr-[100px] ml-[1350px] mt-[-120px]'>
      <img src={vektorr} alt=""/>
      </div>
      <div className='text4 text-[18px] h-[75px] w-[298px]  ml-[480px] mt-[-65px]'>
      <p>“First Light: Where great design and the finest materials unite in ultimate comfort”</p>
      </div>
      <div className='text4 text-[18px] h-[75px] w-[298px]  ml-[895px] mt-[-78px]'>
      <p>“First light proves it is possible to combine great design with the finest materials available.”</p>
      </div>
      <div className='text4 text-[18px] h-[75px] w-[298px]  ml-[1350px] mt-[-78px]'>
      <p>““Redefining excellence with premium materials and visionary robust design.””</p>
      </div>
      <div className='text7 text-[14px] items-start flex font-bold ml-[478px] mt-[80px]'>
      <p> READ ARTICLE</p>
    </div>
    <div className='text7 text-[14px] items-start flex font-bold ml-[895px] mt-[-25px]'>
      <p> READ ARTICLE</p>
    </div>
    <div className='text7 text-[14px] items-start flex font-bold ml-[1350px] mt-[-25px]'>
      <p> READ ARTICLE</p>
    </div>
    <div className='items-start flex font-bold ml-[575px] mt-[-15px]'>
     <img src={up} alt=""/>
    </div>








    </body>
   </div>
  
    
  );
}



export default App;
