
class Accountdetails extends React.Component {
    constructor(props) {
    super(props);
    this.state = {data: 'password',text: 'SHOW',emailError:'',Error_class:'',error_icon:'',passwordError:'',pass_error:'',txt_error:''};
    this.toggle_password =this.toggle_password.bind(this);
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

validateEmail(e) 
    {
      var email_regex= /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
      var password_regex = new RegExp("^(?=.*[a-z])(?=.*[0-9])(?=\\S+$)(?=.{6,})");
      if (!email_regex.test($('.email_box input').val())) 
      { 
        this.setState({
        emailError: this.state.emailError = 'Email is not in correct format',
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

      if (!password_regex.test($('.password_input').val())) 
      { 
        this.setState({
        passwordError: this.state.passwordError = 'Your password must be at least 6 characters and have no spaces. Only alpha and numeric characters are allowed.',
        pass_error: this.state.pass_error = 'error_border',
        txt_error: this.state.txt_error = 'error'
      });
      }
      else
      {
        this.setState({
        passwordError: this.state.passwordError = '',
        pass_error: this.state.pass_error = '',
        txt_error: this.state.txt_error = ''
        });
      }
    }

 componentDidMount() {
    $('[value="Sign Up"]').click(function(){
      $('.account_section,.left_arrow').hide();
    $('.numi_account').show();
    $('<div  id="fade_popup" style="background: #000;    width: 100%;    height: 100%;    z-index: 99;    top: 0;    position: fixed;    opacity: .3;"></div>').appendTo('body');
  });

 $('.close_btn').click(function(){
      $('.account_section,.left_arrow').show();
    $('.numi_account').hide();
     $('#fade_popup').remove();
  });
 

  }

 render() {
      
      return (
         <div className="main_container">
         <Quicklinks/>
           <div className="forgot_password_hero">
           <div><img src="/assets/numi_small_logo.png" className="logo img-responsive"/></div>
              <div className="account_sec">
              <Link to="/Signup"><img src="/assets/back_white_icon.png" className="left_arrow"/></Link>
              <div className="account_section">
                <h3>Set up your account details</h3>
                <p className='email_box'><input type="text" className={this.state.Error_class} placeholder="Email"/><br/><span className="error">{this.state.emailError}</span></p>
                <p className="password_field">
                  <input type={this.state.data} className="password_input"  id={this.state.pass_error} placeholder="Password"/><span className="show_txt"  id={this.state.txt_error} onClick = {this.toggle_password}>{this.state.text}</span>
                  <span className="error">{this.state.passwordError}</span>
                </p>
                <p className="terms">I agree to the <i>Terms &amp; Conditions</i> &amp; <i>Privacy Policy</i></p>
                 <p><input type="submit" onClick={this.validateEmail} value="Sign Up" /></p>
               </div>

          <div className="numi_account">          
          <img src="/assets/warning_tri.png" className="warning"/>
          <h3>A NuMi account with the email address already exists</h3>
          <Link to="/forgot_password"><button className="close_btn">Forgot Password</button></Link><br/>
          <Link to="/login"><button className="close_btn">Login</button></Link><br/>
          <button className="close_btn">Close</button>


          </div>


              </div>
            </div>
          <Footer/>
         </div> 

      );
   }
}