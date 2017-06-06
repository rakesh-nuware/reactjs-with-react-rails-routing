var RouteHandler = ReactRouter.RouteHandler,
    Link = ReactRouter.Link;
class Onboarding extends React.Component {
    constructor(props) {
    super(props);
    this.state = {data: 'password',text: 'SHOW',isChecked: true,emailError:'',Error_class:'',error_icon:'',success_icon:'success_icon'};
    this.toggle_password =this.toggle_password.bind(this);
    this.rememberCheckbox = this.rememberCheckbox.bind(this);
     this.validateEmail = this.validateEmail.bind(this);
  }
    toggle_password(event)
    {
         var contents =  document.getElementsByClassName('show_txt')[0].textContent;
         var password_txt = document.getElementsByClassName('password_input')[0].value;
         if(password_txt.length > 0)
         {
          if(this.state.data === 'password')
           {
               contents ="SHOW";
               this.setState({data: 'text',text: 'HIDE'});
           } 
           else 
           {
             contents ="HIDE";
               this.setState({data: 'password',text: 'SHOW'});
           }
         }
        
    }
    rememberCheckbox(e) 
    {
      this.setState({
        isChecked: !this.state.isChecked
      });
    }

  validateEmail(e) 
    {
      var email_regex= /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
      if (!email_regex.test($('#email').val())) 
      { 
        this.setState({
        emailError: this.state.emailError = 'Invalid Email',
        Error_class: this.state.Error_class = 'error_border',
        error_icon: this.state.error_icon = 'error_icon'
      });
      }
      else
      {
        this.setState({
        emailError: this.state.emailError = '',
        Error_class: this.state.Error_class = '',
        error_icon: this.state.error_icon = this.state.success_icon
        });
      }
    }


  
   render() {
      
      return (
         <div className="main_container">
         <Quicklinks/>
         <div className="hero_img">
            <div className="inner_container">
              <div className="col-sm-6 padding-0 onboard-lft">
               <p><img src="/assets/numi_logo.png"/></p>
                <p className="welcome_txt font-din">Welcome to brand new NuMi!</p>
                <p className="everything_you">It’s everything you love about NuMi, but better, faster and more beautiful. We think you’re going to love it!</p>
              </div>
              <div className="col-sm-6 padding-0">
               <div className="login_sec">
                <p className="login_hdr font-din">Log In to NuMi</p>
                <p className="email_field"><input type="text" id="email" className={this.state.Error_class} placeholder="Email" /><span className={this.state.error_icon}></span><br/><span className="error">{this.state.emailError}</span></p>
                <p className="password_field">
                  <input type={this.state.data} className="password_input" placeholder="Password"/><span className="show_txt"   onClick = {this.toggle_password}>{this.state.text}</span>
                </p>
                <p className="remember_me">
                  <input id="remember_check"  type="checkbox"  checked={this.state.isChecked}   onChange={this.rememberCheckbox}  />
                  <label htmlFor="remember_check">
                    <span className="bullet_icon">
                      <i></i>
                    </span>
                    <span>
                      Remember me on this computer
                    </span>
                  </label>
                </p>
                <p><Link to="/Profile"><input type="submit" onClick={this.validateEmail} value="Log In" /></Link></p>
                <p className="forgot_password"><Link to="/forgot_password">Forgot your password</Link></p>
                <p className="or">or</p>
                <p className="fb_icon"><a href="javascript:void(0)"><img src="/assets/fb_icon.png" /> &nbsp;&nbsp;&nbsp; Log In with Facebook</a></p>
                <div className="no_account">Don’t have an account? <Link to="/Signup">Sign Up for NuMi</Link></div>
                </div>
              </div>
              </div>
             </div>
              <div className="account_btm">
                <p className="nutri_customer">Nutrisystem Customers<br/> Sign Up for a NuMi Account Today!</p>
                <div className="display_block">
                  <ul className="account_btm_lft mt">
                    <li>Complete Nutrisystem® entrée database</li>
                    <li>Matches to your plan for seamless tracking</li>
                    <li>News Feed - Daily tips and inspiration from the Nutrisystem team</li>
                    <li>All your favorite Recipe Center recipes - plus thousands more!</li>
                    <li>Activity suggestions--track your My Daily 3 &reg;</li>
                    <li>Free easy-to-use app; take it on the go</li>
                    <li>Sync Fitbit&reg;, Apple&reg; Health, Jawbone&reg; <br/>& more</li>
                  </ul>
                  <div  className="account_btm_rht mt"><img src="../assets/device.png" className="img-responsive"/></div>
                </div>
              </div>
              <Footer/>
             </div> 

      );
   }
}