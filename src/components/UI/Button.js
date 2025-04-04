const Button = ({textOnly, onclick, children}) =>{
    return(
        <button onclick={onclick} className={textOnly ? "text-button":"button"}>
           {children} 
        </button>
    )
}  

export default Button