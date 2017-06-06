
class Profile extends React.Component {
    constructor(props) {
    super(props);
    this.state = {gender_radio:'',guide_radio:'daily_guide',success_phase_radio:'greater_than_60',disable_btn:'btn disabled',disable:'disabled'};
     this.radio_toggle = this.radio_toggle.bind(this);
  }
    


   radio_toggle(e) {
    this.setState({
      gender_radio: e.target.id,
      guide_radio: e.target.id,
      success_phase_radio: e.target.id,
      disable_btn:this.state.disable_btn="",
      disable:this.state.disable=""
      });
  }

    
  componentDidMount() {
    

   $('#datetimepicker_log_food').datetimepicker({ 
    format : "MMM DD, YYYY",
    defaultDate: moment(new Date(),"MM/DD/YYYY")
  });
     $('#datetimepicker_phase_option').datetimepicker({ 
     format : "MMM DD, YYYY",
    defaultDate: moment(new Date(),"MM/DD/YYYY")
  });

    $('.submit_btn').click(function(){
      $('.profile_section').hide();
    $('.welcome_curr_user').show();
    
  });

$('.lets_get_start').click(function(){
  var current_user = true;
  if(current_user == true)
  {
  $('.free_plan,.welcome_curr_user').hide();
  $('.ns_plan,.left_arrow,.current_plan').show();
  }
  else
  {
      $('.welcome_curr_user,.current_plan').hide();
  $('.ns_plan,.left_arrow,.free_plan').show();
  }

});

$('.ns_plan li').click(function(){
  $('.ns_plan').hide();
$('.phase_option').show();
});

$('.ns_plan .left_arrow').click(function(){
  $('.ns_plan').hide();
$('.welcome_curr_user').show();
});

$('.phase_option .left_arrow').click(function(){
  $('.phase_option').hide();
$('.ns_plan').show();
});

$('.success_phase .left_arrow').click(function(){
  $('.success_phase').hide();
$('.ns_plan').show();
});
$('.success_guidance .left_arrow').click(function(){
  $('.success_guidance').hide();
$('.success_phase').show();
});

$('.confirm_goal_weight .left_arrow').click(function(){
  $('.confirm_goal_weight').hide();
$('.success_guidance').show();
});
$('.low_blood_sugar .left_arrow').click(function(){
  $('.low_blood_sugar').hide();
$('.confirm_goal_weight').show();
});



 $('.phase_option label').click(function(){
  $('.phase_option label').css('opacity','0.4');
        $(this).css('opacity','1');
       });
  $('.success_phase label').click(function(){
  $('.success_phase label').css('opacity','0.4');
        $(this).css('opacity','1');
   });
    $('.success_guidance label').click(function()
    {
    $('.success_guidance label').css('opacity','0.4');
      $(this).css('opacity','1');
     });

    $('.low_blood_sugar label').click(function()
    {
    $('.low_blood_sugar label').css('opacity','0.4');
      $(this).css('opacity','1');
     });
$('.choose_success_plan').click(function(){
  $('.ns_plan').hide();
  $('.success_phase').show();
});

$('.success_phase button').click(function(){
  $('.success_phase').hide();
  $('.success_guidance').show();
});

$('.success_guidance button').click(function(){
  $('.success_guidance').hide();
  $('.confirm_goal_weight').show();
});
$('.confirm_goal_weight button').click(function(){
  $('.confirm_goal_weight').hide();
  $('.low_blood_sugar').show();
});

}
   render() {
      
      return (
         <div className="main_container">
         <Quicklinks/>
           <div className="forgot_password_hero">
           <div><img src="/assets/numi_small_logo.png" className="logo img-responsive"/></div>
              <div className="signup_sec" id="profile_sec">
              <div className="profile_section">
               <Link to="/login"> <img src="/assets/back_white_icon.png" className="left_arrow"/></Link>
                <h3>Tell us about yourself</h3>
                <p>
                <span className="left_sec">Date of Birth</span> 
                  <span className="select_back"><select><option>Month</option></select></span>
                  <span className="select_back"><select><option>Date</option></select></span>
                  <span className="select_back"><select><option>Year</option></select></span>
                </p>
                <p><span className="left_sec">Height</span> <span className="feet"><input type="text"/> ft.</span> <span className="feet"><input type="text"/> in.</span></p>
                <p><span className="left_sec">Current Weight</span> <span className="curr_weight"><input type="text"/> lbs.</span></p>
                <p><span className="left_sec">Goal Weight</span> <span className="goal_weight"><input type="text"/> lbs.</span></p>
                <p><span className="left_sec">Start Date</span>
                 <span  className="date_pick input-group date" id='datetimepicker_journal'>
                  <input type="text"  className="input-group-addon select_parent serve_date log_food_date"  id="datetimepicker_log_food" />
                  </span>
                  </p>
                  <p className="text-center"><input type="submit" className="submit_btn" value="Continue" /></p>
                {/* <Modal_popup/> */}
                </div>
                <div className="welcome_curr_user text-center">
                  <p><img src="/assets/leaf.png" /></p>
                  <span className="numi_txt">NuMi is all about you.</span>
                  <p>Because everyone’s needs are not the same, we’ve made NuMi more personalized and customized than ever. Please take a minute to confirm some of your info and we will cater the diet tracker just for you.</p>
                    <p> <button  className="lets_get_start">Let's get started</button></p>
                </div>

                <div className="ns_plan">
                <img src="/assets/back_white_icon.png" className="left_arrow"/><span className="gray_border">?</span>
                <div className="ns_select_plan text-center">
                <h3 className="choose_hdr">Choose Nutrisystem Plan</h3>
                <div className="current_plan">
                  <h6>Your current plan</h6>
                  <h3 className="selected_plan">CORE</h3>
                  <button>Continue with this plan</button>
                  <p className="or">OR</p>
                  <h6>Choose a current plan</h6>
                </div>

                <div className="free_plan">
                <h6> Currently you are not using NuMi with a Nutrisystem Program. </h6>
                <div>
                  <p>If you are on the Nutrisystem SUCCCESS plan we have great news! We now fully support that program.</p>
                  <button className="choose_success_plan">Choose Success Plan</button>
                  <p>If were using NuMi for general calorie counting and diet tracking we’ve still got you covered there too.</p>
                  <button className="calorie_tracker">Choose Calorie Tracker  Plan</button>
                  <p className="or">OR</p>
                  <h6>Choose a current plan</h6>
                  </div>
                </div>

                  <ul>
                    <li>core</li>
                    <li>turbu takeoff</li>
                    <li>Success</li>
                    <li>Vegetarian</li>
                    <li>Diabetic</li>
                    <li>Balance</li>
                    <li>Weekends My Way</li>
                    <li>Dinners My Way</li>
                    <li>Uniquely Yours</li>
                    <li>Jumpstart</li>
                    <li>Other</li>
                  </ul>
                  </div>
                </div>

                <div className="phase_option">
                <img src="/assets/back_white_icon.png" className="left_arrow"/>
                  <div className="phase_inner">
                  <h6>Phase Options</h6>
                  <h2>Is this your 1st week? (Turbo Takeoff)</h2>
                  <span className="yes">
                    <input className="" type="radio" id="yes"  checked={this.state.gender_radio === "yes"} onChange={this.radio_toggle}/>
                    <label htmlFor="yes">Yes</label>
                  </span>
                  <span className="no">
                    <input className="" type="radio" id="no" checked={this.state.gender_radio === "no"} onChange={this.radio_toggle}/>
                    <label htmlFor="no">No</label>
                  </span>
                  <p className="turbo_takeoff">
                  <span className="turbo_take">Turbo Takeoff Ends</span>
                  <span  className="date_pick input-group date"  id="datetimepicker_journal">
                  <input type="text"  className="input-group-addon select_parent serve_date log_food_date"  id="datetimepicker_phase_option" />
                  </span>
                  </p>
                  <button disabled={this.state.disable}  className={this.state.disable_btn}>Continue</button>
                  </div>
                </div>

                <div className="success_phase">
                <img src="/assets/back_white_icon.png" className="left_arrow"/>
                  <div className="text-center">
                  <h6>Phase Options</h6>
                  <h2>What is your activity level?</h2>
                  <p className="less_than_60">
                    <input className="" type="radio" id="less_than_60"  checked={this.state.success_phase_radio === "less_than_60"} onChange={this.radio_toggle}/>
                    <label htmlFor="less_than_60">Less Than 60 Minutes Daily  </label>
                  </p>
                  <p className="equal_60">
                    <input className="" type="radio" id="equal_60" checked={this.state.success_phase_radio === "equal_60"} onChange={this.radio_toggle}/>
                    <label htmlFor="equal_60">60 Minutes Daily</label>
                  </p>
                  <p className="greater_than_60">
                    <input className="" type="radio" id="greater_than_60" checked={this.state.success_phase_radio === "greater_than_60"} onChange={this.radio_toggle}/>
                    <label htmlFor="greater_than_60">More Than 60 Minutes Daily</label>
                  </p>
                  <button>Continue</button>
                  </div>
                </div>



                <div className="success_guidance">
                <img src="/assets/back_white_icon.png" className="left_arrow"/>
                  <div className="text-center">
                  <h6>Phase Options</h6>
                  <h2>How would you get our<br/> Success Guidance?</h2>
                  <p className="daily_guide">
                    <input className="" type="radio" id="daily_guide"  checked={this.state.guide_radio === "daily_guide"} onChange={this.radio_toggle}/>
                    <label htmlFor="daily_guide">Daily Guidance</label>
                  </p>

                  <p className="meal_guide">
                    <input className="" type="radio" id="meal_guide"  checked={this.state.guide_radio === "meal_guide"} onChange={this.radio_toggle}/>
                    <label htmlFor="meal_guide">Per Meal Guidance</label>
                  </p>
                  <p className="daily_hdr">Daily Guidance</p>
                  <div className="daily_sub">Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia.</div>

                  <p className="daily_hdr meal_guide_p">Per Meal Guidance</p>
                  <div className="daily_sub">Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia.</div>
                  
                  <button>Continue</button>
                  </div>
                </div>


                <div className="confirm_goal_weight">
                <img src="/assets/back_white_icon.png" className="left_arrow"/>
                  <div className="text-center">
                  <h6>Phase Options</h6>
                  <h3>Confirm Your Goal Weight</h3>
                  <p>
                    <span className="left_sec">Current Weight</span> <span className="curr_weight"><input type="text"/> lbs.</span>
                  </p>
                  <p>
                    <span className="left_sec">Goal Weight</span> <span className="goal_weight"><input type="text"/> lbs.</span>
                  </p>

                  
                  <button>Continue</button>
                  </div>
                </div>

                <div className="low_blood_sugar">
                <img src="/assets/back_white_icon.png" className="left_arrow"/>
                  <div className="text-center">
                  <h6 className="text-center">Phase Options</h6>
                  <h3>Do you have low blood sugar at night?</h3>
                  <h6>You have >100lbs to lose and we recommend modifying your meal plan slightly.</h6>
                  <span className="blood_yes">
                    <input className="" type="radio" id="blood_yes"  checked={this.state.gender_radio === "blood_yes"} onChange={this.radio_toggle}/>
                    <label htmlFor="blood_yes">Yes</label>
                  </span>
                  <span className="blood_no">
                    <input className="" type="radio" id="blood_no" checked={this.state.gender_radio === "blood_no"} onChange={this.radio_toggle}/>
                    <label htmlFor="blood_no">No</label>
                  </span>
                  <p className="mailto">If you have any questions on how you sould customize your diet based on your diabetic needs, email <a href="mailto:XX@nutrisystem.com">XX@nutrisystem.com</a> or call us or visit <a href="www.nutrisystem.com" target="_blank">nutrisystem.com/XXXX</a></p>
                  <button disabled={this.state.disable}  className={this.state.disable_btn}>Continue</button>
                  </div>
                </div>


              </div>
            </div>
          <Footer/>
         </div> 

      );
   }
}