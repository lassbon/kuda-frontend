import { createContext, useContext, useState } from "react";

const ContextBlur =createContext()

 const BlurContextProvider = ({children}) =>{
    const [isToggled, setIsToggled] = useState(true)
    function toggler (){
       return setIsToggled(!isToggled)
    }
    return <ContextBlur.Provider value= {{isToggled, toggler}}>{children}</ContextBlur.Provider>
}
 function useBlurContext(){
    const context = useContext(ContextBlur)
    return context
 }

 export {BlurContextProvider,useBlurContext}