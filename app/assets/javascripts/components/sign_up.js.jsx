
class Signup extends React.Component {
    constructor(props) {
    super(props);
    this.state = {gender_radio:'',disable_btn:'btn disabled',disable:'disabled'};
     this.radio_toggle = this.radio_toggle.bind(this);
  }
    


   radio_toggle(e) {
    this.setState({
      gender_radio: e.target.id,
      disable_btn:this.state.disable_btn="",
      disable:this.state.disable=""
      });
  }

signUp()
{
  return false;
}

  componentDidMount() {
    $('.men').click(function(){

        if($(this).find('span').hasClass('men_normal'))
        {
          $(this).find('span').removeClass('men_normal').addClass('men_active');
          $(this).parents('.gender_img').find('span.women_active').removeClass('women_active').addClass('women_normal');
          
        }
      })
      $('.women').click(function(){

        if($(this).find('span').hasClass('women_normal'))
        {

          $(this).find('span').removeClass('women_normal').addClass('women_active');
          $(this).parents('.gender_img').find('span.men_active').removeClass('men_active').addClass('men_normal');
        }
      })
}
   render() {
      
      return (
         <div className="main_container">
         <Quicklinks/>
           <div className="forgot_password_hero">
           <div><img src="/assets/numi_small_logo.png" className="logo img-responsive"/></div>
              <div className="signup_sec">
                <h1>Hello</h1>
                <h5 className="hdr_txt">Let’s start setting up your account.</h5>
                <div className='email_box'><input type="text"  placeholder="Name"/></div>
                <hr/>
                <h5 className="hdr_txt">Please select your gender</h5>
                <p className="gender_img">
                  <span className="men">
                    <input className="" type="radio" id="male" name="gender" checked={this.state.gender_radio === 'male'} onChange={this.radio_toggle}/>
                    <label htmlFor="male"><span className="men_normal"></span></label>
                  </span>
                  <span className="women">
                    <input className="" type="radio" id="female" name="gender" checked={this.state.gender_radio === 'female'} onChange={this.radio_toggle}/>
                    <label htmlFor="female"><span className="women_normal"></span></label>
                  </span>
                </p>
                <Link to="/account_details"><button disabled={this.state.disable}  className={this.state.disable_btn}>Continue</button></Link>
              </div>
            </div>
          <Footer/>
         </div> 

      );
   }
}