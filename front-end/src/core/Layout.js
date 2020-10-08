import React from 'react'
import Menu from './Menu'

/**
* @author
* @function Layout
**/

const Layout = ({ 
    title="title", 
    description="description",
    className, children
  }) => {

      return(
    <div>
      <Menu />
       <div className="container">
           <div className="row">
               <div className="col-md-6 col-sm-12 col-xs-12">
                   <h1>{ title }</h1>
                   <p>{ description }</p>
               </div>
           </div>
           </div> 
           <div className="{children}">{children}</div>
    </div>
   )

 }

export default Layout