import {useEffect, useRef} from 'react';
import {UseLocalStorage} from './../../../utils/useLocalStorage.jsx'
import DetectDarkMode from "../../../utils/detectDarkMode.jsx";

import img1 from "./../../../../public/img/icons/sun.svg"
import img2 from "./../../../../public/img/icons/moon.svg"

import './DarkModeBtn.scss'

const DarkModeBtn = () => {
    const [mode,setMode]=UseLocalStorage('mode',DetectDarkMode());

    const btnRef=useRef(null);

    useEffect(()=>{
        if(mode==='dark'){
            document.body.classList.add('dark')
            btnRef.current.classList.add('dark-mode-btn--active')
        }else{
            document.body.classList.remove('dark')
            btnRef.current.classList.remove('dark-mode-btn--active')
        }
    },[mode])

    useEffect(()=>{
        window.matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change',(event)=>{
            const newColorScheme=event.matches ? 'dark':'light';
            setMode(newColorScheme)
        });
    },[setMode])

    const changeMode = () => {
        setMode((currentValue)=>{
            return currentValue==='light'?'dark':'light'
        })
    }

    return (
        <button ref={btnRef} className="dark-mode-btn" onClick={changeMode}>
            <img src={img1} alt="Light mode" className="dark-mode-btn__icon"/>
            <img src={img2} alt="Dark mode" className="dark-mode-btn__icon"/>
        </button>
    );
};

export default DarkModeBtn;