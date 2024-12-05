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
import model from './img/model.svg'
import model1 from './img/model1.svg'
import model2 from './img/model2.svg'
import model3 from './img/model3.svg'
import buttonleft from './img/Buttonleft.svg'
import buttonright from './img/Buttonright.svg'
import mmmm from './img/mmmm.png'
import cp from './img/cp.png'
import pp from './img/pp.png'
import ttt from './img/ttt.svg'
import pt from './img/pt.svg'
import oo from './img/oo.svg'
import ll from './img/ll.svg'
import home from './img/home.svg'
function App() {
  return (
    <div className="App bg">
      <header className='box items-center flex justify-between px-3 py-3'>
        <img className='' src={dots} alt="" />
        <p className=' front-bold text-[17px]'> <b>SUMMER SALE UP TO 50% OFF</b></p>
        <img src={dots} alt="" />
      </header>
      <body>
        <div className='items-center flex justify-center px-5 py-4 h-[80px] gap-[57px] mt-[60px] '>
          <img className='' src={first} alt="" />
          <img className='' src={subtract} alt="" />
          <img className='' src={light} alt="" />
        </div>
        <div className='item-center flex justify-center h-[850px] gap-[90px] mt-[60px]'>
          <img className='' src={screenshot} alt="" />
        </div>
        <div className='text text-[30px] items-start flex font-bold ml-[80px] mt-[-100px]'>
          <p> Spring season</p>
        </div>
        <div className='text text-[20px] items-start flex font-bold ml-[1500px] mt-[-60px]'>
          <p>VIEW COLLECTION</p>
          <img className='' src={arrow} alt="" />
        </div>
        <div className='app1'>
          <header className='box1 text text-[50px] items-center flex justify-between px-20 py-10  h-[20px] gap-[90px] mt-[85px]'>
            <img className='ml-[200px]' src={frame} alt="" />
          </header>
        </div>
        <div className='flex w-full'>
          <img className='ml-20' src={arrowleft} alt="" />
          <img className=' h-[754px] gap-[90px] mt-[60px] px-20 py-10 ' src={shirt} alt="w-1/2" />
          <img className='mr-9' src={arrowright} alt="" />
          <img src={framm} alt="" className='w-1/2' />
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
          <img className=' box3 h-[636px] w-[596px]  mt-[170px] mr-[190px] ml-[350px] px-25 py-30 rounded-[10px] ' src={men} alt="" />
          <header className='box2 text2 text-[60px] items-center flex justify-between px-30 py-30  h-[636px] w-[-596px] r-[8px] gap-[0px] mt-[170px]  mr-[190px] ml-[-90px] rounded'>
            <img className='mt-[-260px] ' src={text} alt="" />
            <img className='mt-[550px] ml-[-190px]' src={rt} alt="" />
          </header>
        </div>
        <div className='text text-[-1px] items-start flex font-bold ml-[400px] mt-[-100px] mr-[200px]'>
          <button className='bg-black text-white text-[18px] px-4 py-4 rounded'>Shop Sweaters</button>
        </div>
        <div className='flex w-full items-center flex justify-between  px-3 py-3'>
          <img className=' h-[974px] w-[757px] mt-[-1px] mr-[-100px] ml-[360px] px-20 py-20 rounded-l-md' src={image} alt="" />
          <img className=' h-[974px] w-[757px] mt-[83px] mr-[337px] ml-[-320px] px-10 py-15 rounded-r-md' src={image2} alt="" />
        </div>
        <div className='text4 text-[18px] items-start flex font-bold ml-[1110px] mt-[-200px]'>
          <p>MEN</p>
          <img className='' src={arroww} alt="" />
        </div>
        <div className='text4 text-[18px] h-[20px] w-[86px] gap-[8px] items-start flex font-bold ml-[510px] mt-[-30px]'>
          <p>WOMEN</p>
          <img className='' src={arroww} alt="" />
        </div>
        <header className='box6 items-center flex justify-between px-3 py-3'>
          <p className=' front-bold text-[17px] text-[50px] flex font-bold ml-[830px] mt-[130px]'> <b>Hot off the press</b></p>
        </header>
        <div className="mt-5 flex  items-center justify-center"></div>
        <div className='w-[1260px] h-[286px] ml-[450px]  border-2 rounded-md flex '></div>
        <div className=' text4 text-[100px] h-[120px] w-[1000px]  items-start flex font-bold mr-[10px] ml-[485px] mt-[-250px]'>
          <img src={Bloomberg} alt="" />
        </div>
        <div className='text4 text-[100px] h-[120px] w-[1000px]  items-start flex font-bold mr-[100px] ml-[900px] mt-[-120px]'>
          <img src={forbes} alt="" />
        </div>
        <div className='text4 text-[100px] h-[120px] w-[1000px]  items-start flex font-bold mr-[100px] ml-[1350px] mt-[-120px]'>
          <img src={vektorr} alt="" />
        </div>
        <div className='text4 text-[18px] h-[75px] w-[298px]  ml-[480px] mt-[-65px]'>
          <p>“First Light: Where great design and the finest materials unite in ultimate comfort”</p>
        </div>
        <div className='text4  text-[18px] h-[75px] w-[298px]  ml-[895px] mt-[-78px]'>
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
        <div className='items-start flex font-bold ml-[573px] mt-[-13px]'>
          <img src={up} alt="" />
        </div>
        <div className='items-start flex font-bold ml-[990px] mt-[-25px]'>
          <img src={up} alt="" />
        </div>
        <div className='items-start flex font-bold ml-[1445px] mt-[-25px]'>
          <img src={up} alt="" />
        </div>

        <div className='box3 front-bold text-[17px] text-[50px] flex font-bold ml-[780px] mt-[130px]'>
          <p>Women — Must Haves</p>
        </div>
        <div className='flex w-full rounded-md '>
          <img className=' box5 h-[420px] w-[313px]  mt-[50px] mr-[190px] ml-[450px] px-25 py-30 ' src={model} alt="" />
          <img className=' box5 h-[420px] w-[313px]  mt-[50px] mr-[-290px] ml-[-150px] px-25 py-30 ' src={model1} alt="" />
          <img className=' box5 h-[420px] w-[313px]  mt-[50px] mr-[-290px] ml-[330px] px-25 py-30  ' src={model2} alt="" />
          <img className=' box5 h-[420px] w-[313px]  mt-[50px] mr-[-290px] ml-[330px] px-25 py-30  ' src={model3} alt="" />
          <img className='ml-[-1160px] h-[56px] w-[56px] mt-[220px]' src={buttonleft} alt="" />
          <img className='ml-[1280px] h-[56px] w-[56px] mt-[220px]' src={buttonright} alt="" />
        </div>
        <div className='text1 w-[256px] h-[26px] text-[16px] items-start flex font-bold ml-[470px] mt-[30px]'>
          <p> Basic Shirt</p>
        </div>
        <div className='text1 text-[16px] items-start flex font-bold ml-[710px] mt-[-30px]'>
          <p>€49</p>
        </div>

        <div className='text1 w-[256px] h-[26px] text-[16px] items-start flex font-bold ml-[850px] mt-[-25px]'>
          <p>Beige Jumper</p>
        </div>
        <div className='text1 text-[16px] items-start flex font-bold ml-[1050px] mt-[-25px]'>
          <p>€99</p>
        </div>

        <div className='text1 w-[256px] h-[26px] text-[16px] items-start flex font-bold ml-[1200px] mt-[-25px]'>
          <p>Signature Jacket</p>
        </div>
        <div className='text1 text-[16px] items-start flex font-bold ml-[1405px] mt-[-25px]'>
          <p>€249</p>
        </div>

        <div className='text1 w-[256px] h-[26px] text-[16px] items-start flex font-bold ml-[1550px] mt-[-25px]'>
          <p>Navy Jumper</p>
        </div>
        <div className='box6 front-bold text-[17px] text-[50px] flex font-bold ml-[750px] mt-[100px]'>
          <p>We always have your back</p>
        </div>
        <div className='flex w-full'>
          <img className='h-[754px] gap-[90px] mt-[-10px] mr-[-130px] ml-[370px] px-20 py-10 rounded ' src={mmmm} alt="w-1/2" />
        </div>
        <div className='flex w-full'>
          <img className=' w-[720px]  h-[400px] mt-[-755px] mr-[-130px] ml-[1100px] px-20 py-10 rounded ' src={cp} alt="w-1/2" />
        </div>
        <div className='flex w-full'>
          <img className=' w-[720px]  h-[410px] mt-[-410px] mr-[-130px] ml-[1100px] px-20 py-10 rounded ' src={pp} alt="w-1/2" />
        </div>
        <div className='text text-[-1px] items-start flex font-bold ml-[670px] mt-[-150px] mr-[300px]'>
          <button className='bg-black text-white text-[15px] px-4 py-4 rounded-[10px]'><p>100% Premium Cotton</p>
            <p>We use ethically sourced cotton only.</p></button>
        </div>
        <div className='text text-[16px] items-start flex font-bold ml-[1350px] mt-[-430px] mr-[500px]'>
          <button className='bg-black text-white text-[15px] px-4 py-4 rounded-[10px]'><p>Made in Portugal</p>
            <p>With hand finished details</p></button>
        </div>
        <div className='text text-[16px]  items-start flex font-bold ml-[1320px] mt-[270px] mr-[500px]'>
          <button className='bg-black text-white text-[14px] px-4 py-4 rounded-[10px]'><p>Breathable material</p>
            <p>Keeping you cool throughout the day</p></button>
        </div>
        <div className="mt-5 flex  items-center justify-center"></div>
        <div className='w-[1290px] h-[120px] ml-[450px] mt-[100px] border-t-2 border-b-2  flex '>
        </div>
        <div className='items-start flex font-bold w-[150px] h-[100px] ml-[460px] mt-[-85px] rounded-md'>
          <img src={ttt} alt="" />
        </div>
        <div className='items-start flex font-bold w-[150px] h-[100px] ml-[780px] mt-[-100px] rounded-md'>
          <img src={pt} alt="" />
        </div>
        <div className='items-start flex font-bold w-[150px] h-[100px] ml-[1140px] mt-[-100px]'>
          <img src={oo} alt="" />
        </div>
        <div className=' items-start flex font-bold w-[150px] h-[100px] ml-[1510px] mt-[-100px]'>
          <img src={ll} alt="" />
        </div>
        <div className='text4 text-[16px] h-[38px] w-[140px]  ml-[530px] mt-[-93px]'>
          <p>Premium stain resistant fabrics</p>
        </div>
        <div className='text4 text-[16px] h-[38px] w-[140px]  ml-[850px] mt-[-39px]'>
          <p>Free Express Shipping</p>
        </div>
        <div className='text4 text-[16px] h-[38px] w-[140px]  ml-[1210px] mt-[-39px]'>
          <p>Free returns within 30 days</p>
        </div>
        <div className='text4 text-[16px] h-[38px] w-[140px]  ml-[1580px] mt-[-39px]'>
          <p>Customers rate us 4.8 / 5.0</p>
        </div>
        <div className='flex w-full'>
          <img className='h-[610px] w-[608px]  mt-[150px] mr-[190px] ml-[450px] px-25 py-30 rounded-l-md ' src={home} alt="" />
          <div className=' text-[16px] h-[95px] w-[195px] mt-[270px] ml-[-102px] '>
          <p>Willemsparkweg 63 1071 GS Amsterdam The Netherlands</p>
          </div>
          </div>
        <header className='box10 w-[680px] h-[610px] ml-[1058px] mt-[-610px] items-center rounded-r-md flex justify-between px-3 py-3'>
        <p className=' front-bold text-[32px] mt-[-450px] ml-[70px]'> <b>Visit our popup shop</b></p>
      </header>
      <div className=' text3 text-[16px] h-[195px] w-[575px] mt-[-370px] ml-[1150px] '>
          <p>Monday</p>
        </div>
        <div className=' text3 text-[16px] h-[195px] w-[575px] mt-[-150px] ml-[1150px] '>
          <p>Tuesday</p>
          </div>
          <div className=' text3 text-[16px] h-[195px] w-[575px] mt-[-150px] ml-[1150px] '>
          <p>Wednesday</p>
          </div>
          <div className=' text3 text-[16px] h-[195px] w-[575px] mt-[-150px] ml-[1150px] '>
          <p>Thursday</p>
          </div>
          <div className=' text3 text-[16px] h-[195px] w-[575px] mt-[-150px] ml-[1150px] '>
          <p>Friday</p>
          </div>
          <div className=' text3 text-[16px] h-[195px] w-[575px] mt-[-150px] ml-[1150px] '>
          <p>Saturday</p>
          </div>
          <div className=' text3 text-[16px] h-[195px] w-[575px] mt-[-150px] ml-[1150px] '>
          <p>Sunday</p>
      </div>
      <div className=' text3 text-[16px] h-[195px] w-[575px] mt-[-465px] ml-[1350px] '>
          <p>12.00 - 19.00</p>
        </div>
        <div className=' text3 text-[16px] h-[195px] w-[575px] mt-[-150px] ml-[1350px] '>
          <p>10.00 - 19.00</p>
          </div>
          <div className=' text3 text-[16px] h-[195px] w-[575px] mt-[-150px] ml-[1350px] '>
          <p>10.00 - 19.00</p>
          </div>
          <div className=' text3 text-[16px] h-[195px] w-[575px] mt-[-150px] ml-[1350px] '>
          <p>10.00 - 21.00</p>
          </div>
          <div className=' text3 text-[16px] h-[195px] w-[575px] mt-[-150px] ml-[1350px] '>
          <p>10.00 - 19.00</p>
          </div>
          <div className=' text3 text-[16px] h-[195px] w-[575px] mt-[-150px] ml-[1350px] '>
          <p>10.00 - 18.00</p>
          </div>
          <div className=' text3 text-[16px] h-[195px] w-[575px] mt-[-150px] ml-[1350px] '>
          <p>12.00 - 18.00</p>
      </div>
      </body>
    </div>


  );
}



export default App;
