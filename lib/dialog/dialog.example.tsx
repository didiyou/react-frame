import React,{useState} from 'react'
import Dialog,{alert,confirm,modal}from './dialog'
export default function(){
    const [x,setX] = useState(false)
    const openModal = ()=>{
        const close = modal(<h1>你好
            <button onClick={()=>close()}></button>
        </h1>)
    }
    return(
        <>
        <div>
        <h1>example 1</h1>
            <button onClick={()=> setX(!x)}>click</button>
            <Dialog visible={x} buttons={[
            <button onClick={()=>{setX(false)}}>1</button>,
            <button onClick={()=>{setX(false)}}>2</button>]}
            onClose={()=>{setX(false)}}
            >
                <div>hi</div>
            </Dialog>
        </div>
        <div>
            <h1>example 2</h1>
            <button onClick={()=>alert('1')}>alert</button>
            <button onClick={()=>confirm('1',()=>{console.log('yes')},()=>{console.log('no')})}>confirm</button>
            <button onClick={()=>alert('1')}>alert</button>
        </div>
        <div>
            <h1>example 3</h1>
            <button onClick={()=>openModal()}>modal</button>
        </div>
        </>
    )
} 