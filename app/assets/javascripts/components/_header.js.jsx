

class Quicklinks extends React.Component {
render() {
      return (
         <div>
         <header>
            <nav className="navbar">
              <div className="container-fluid">
               <ul className="nav navbar-nav col-sm-12">
                 <li><a href="javascript:void(0)">Quick links:</a></li>
                 <li><a href="javascript:void(0)">Nutrisystem Account</a></li>
                 <li><a href="javascript:void(0)">Track With Numi</a></li>
                 <li><a href="javascript:void(0)">Grow With The Leaf</a></li> 
                 <li className="pull-right"><img src="/assets/nutri_logo.png"/></li>
               </ul>
              </div>
            </nav>
             <RouteHandler {...this.props}/>
         </header>
           
         </div>
      )
   }
}
