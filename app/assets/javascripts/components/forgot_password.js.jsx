
class ForgotPassword extends React.Component {
    constructor(props) {
    super(props);
    this.state = {account_error:'',emailError:'',Error_class:'',hdr_txt:'Please enter your email address and we’ll send you info on how to reset your password.'};
     this.verifyAccount = this.verifyAccount.bind(this);
  }
    


  verifyAccount(e) 
    {
      var email_regex= /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
      if (!email_regex.test($('#verify_email').val())) 
      { 
        this.setState({
        emailError: this.state.emailError = 'We could not find that account',
        Error_class: this.state.Error_class = 'error_border'
      });
        $('#verifyAccount,.email_box').show();
        $('#verify_ok').hide();
      }
      else
      {
        this.setState({
        emailError: this.state.emailError = '',
        Error_class: this.state.Error_class = '',
        hdr_txt: this.state.hdr_txt = 'We have sent you an email with instructions for resetting your password.'
        });
        $('#verifyAccount,.email_box').hide();
        $('#verify_ok').show();

      }
    }


   render() {
      
      return (
         <div className="main_container">
         <Quicklinks/>
           <div className="forgot_password_hero">
           <div><img src="/assets/numi_small_logo.png" className="logo img-responsive"/></div>
              <div className="forgot_sec">
                <h1>Forgot Password</h1>
                <h6 className="hdr_txt">{this.state.hdr_txt}</h6>
                <div className='email_box'><input type="text" className={this.state.Error_class} placeholder="Email" id="verify_email"/><p className="error text-left">{this.state.emailError}</p></div>
                
                <button id="verifyAccount" onClick={this.verifyAccount}>Email Me</button>
                <button id="verify_ok">Ok</button>
              </div>
            </div>
          <Footer/>
         </div> 

      );
   }
}