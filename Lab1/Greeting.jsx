function Greeting({name, children}) { //12 weeks in and I FINALLY understand ternary operator syntax! :face-palm:
    
    return (
        <div className="GreetingComponent componentBox">
            <h1>Hello, {name ? name : "World"}</h1> 
            {children}
        </div>
    )
}

export default Greeting