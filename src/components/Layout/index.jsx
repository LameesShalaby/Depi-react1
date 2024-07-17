import Footer from "../Footer";

const Layout = (props) => {
    
    return (
      <div>
         <div className="container">
          <main>{props.children}</main>
         </div>
        <Footer/>
      </div>
    )
  }
  
  export default Layout
