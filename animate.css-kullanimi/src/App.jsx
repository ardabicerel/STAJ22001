import React from 'react'
import './App.css'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaArrowAltCircleUp, FaArrowAltCircleDown } from "react-icons/fa";

function App() {

  const solDivRef = React.useRef(null);
  const [isVisibleSol, setIsVisibleSol] = React.useState(false);
  const sagDivRef = React.useRef(null);
  const [isVisibleSag, setIsVisibleSag] = React.useState(false);
  const ortaDivRef = React.useRef(null);
  const [isVisibleOrta, setIsVisibleOrta] = React.useState(false);

  const toggleSolDiv = () => {

    if(!isVisibleSol) {
    const div =  solDivRef.current;
    div.classList.add("animate__fadeOutLeft");

    div.addEventListener("animationend", () => {
      div.classList.add("hidden");
      div.classList.remove("animate__fadeOutLeft");
      setIsVisibleSol(true);
    }, { once: true });
  } else {
    const div =  solDivRef.current;
    div.classList.remove("hidden");
    div.classList.add("animate__fadeInLeft");

    div.addEventListener("animationend", () => {
      div.classList.remove("animate__fadeInLeft");
    }, { once: true });
    setIsVisibleSol(false);
    }
  }

  const toggleSagDiv = () => {

    if(!isVisibleSag) {
    const div =  sagDivRef.current;
    div.classList.add("animate__fadeOutRight");

    div.addEventListener("animationend", () => {
      div.classList.add("hidden");
      div.classList.remove("animate__fadeOutRight");
      setIsVisibleSag(true);
    }, { once: true });
  } else {
    const div =  sagDivRef.current;
    div.classList.remove("hidden");
    div.classList.add("animate__fadeInRight");

    div.addEventListener("animationend", () => {
      div.classList.remove("animate__fadeInRight");
    }, { once: true });
    setIsVisibleSag(false);
    }
  }

  const toggleOrtaDiv = () => {

    if(!isVisibleOrta) {
    const div =  ortaDivRef.current;
    div.classList.add("animate__fadeOutUp");

    div.addEventListener("animationend", () => {
      div.classList.add("hidden");
      div.classList.remove("animate__fadeOutUp");
      setIsVisibleOrta(true);
    }, { once: true });
  } else {
    const div =  ortaDivRef.current;
    div.classList.remove("hidden");
    div.classList.add("animate__fadeInBottom");

    div.addEventListener("animationend", () => {
      div.classList.remove("animate__fadeInBottom");
    }, { once: true });
    setIsVisibleOrta(false);
    }
  }



  return (
    <>
      {!isVisibleSol ? (<FaArrowAltCircleLeft onClick={toggleSolDiv} className='cursor-pointer fixed top-4 left-4 text-3xl animate__animated animate__fadeInLeft' />) : (<FaArrowAltCircleRight onClick={toggleSolDiv} className='cursor-pointer fixed top-4 left-4 text-3xl animate__animated animate__fadeInLeft' />)}
      {!isVisibleOrta ? (<FaArrowAltCircleUp onClick={toggleOrtaDiv} className='cursor-pointer fixed top-4 left-1/2 transform -translate-x-1/2 text-3xl animate__animated animate__fadeInDown' />) : (<FaArrowAltCircleDown onClick={toggleOrtaDiv} className='cursor-pointer fixed top-4 left-1/2 transform -translate-x-1/2 text-3xl animate__animated animate__fadeInDown' />)}
      {!isVisibleSag ? (<FaArrowAltCircleRight onClick={toggleSagDiv} className='cursor-pointer fixed top-4 right-4 text-3xl animate__animated animate__fadeInRight' />) : (<FaArrowAltCircleLeft onClick={toggleSagDiv} className='cursor-pointer fixed top-4 right-4 text-3xl animate__animated animate__fadeInRight' />) }

      <div className="grid grid-cols-5 gap-4 w-full h-screen justify-center items-center flex mt-5">
        <div ref={solDivRef} className={`col-span-1 bg-neutral-900 h-full w-60 rounded-lg p-10 animate__animated ${!isVisibleSol ? "animate__fadeInLeft opacity-100 visible" : "opacity-0 invisible"}`}>
          <h2 className='text-white text-3xl font-bold text-center pt-4'>Yazarlar</h2>
        </div>
        <div ref={ortaDivRef} className={`col-span-3 bg-neutral-900 h-full flex-1 animate__animated rounded-lg p-5 ${!isVisibleOrta ? "animate__fadeInDown opacity-100 visible" : "opacity-0 invisible"}`}>
          <h3 className='float-left text-3xl font-bold pb-2'>Haberler</h3>
          <div className='clear-left'></div>
          <hr></hr>
            <div className='pt-5 text-white bg-neutral-800 text-lg my-4 p-4 rounded-sm'>
              <h4 className='float-left text-sm font-bold'>KLU'da "Yapay Zeka ve Robotik Teknolojileri Uygulama ve Araştırma Merkezi" Kuruldu</h4>
              <div className='clear-left'></div>
              <hr className='my-2'></hr>
              <p className='text-xs text-justify '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam elementum vel dui eget ornare. Curabitur vel enim congue, consectetur quam eget, volutpat velit. Aliquam accumsan nec quam a placerat. Nullam ac purus ac magna elementum porta ac sed lectus. Fusce pharetra imperdiet laoreet. Sed viverra arcu non ipsum semper mollis interdum condimentum nisl. Nulla convallis urna elit, at dapibus sapien hendrerit in. Nam ut eros nisl. Donec id elit in sapien imperdiet ullamcorper et vitae ipsum. Mauris id neque ut massa tempor blandit. Proin velit metus, luctus vitae gravida et, interdum a arcu. Nulla vel augue lacus. Phasellus pulvinar id dolor vel fermentum. Vivamus iaculis mauris eget enim blandit suscipit. Nam varius orci feugiat commodo auctor.</p>
            </div>
          
        </div>
        <div ref={sagDivRef} className={`col-span-1 bg-neutral-900 h-full w-60 rounded-lg p-10 animate__animated ${!isVisibleSag ? "animate__fadeInRight opacity-100 visible" : "opacity-0 invisible"}`}>
          <h2 className='text-white text-3xl font-bold text-center pt-4'>Son Dakika</h2>
        </div>
      </div>
    </>
  )
}

export default App
