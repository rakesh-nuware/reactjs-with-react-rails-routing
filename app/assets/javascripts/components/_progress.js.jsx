
class Progress_page extends React.Component {
	constructor(props) {
    super(props);
    this.state = {value: '1',readOnly: 'readOnly',phaseOption:'phase2',mealOption:'breakfast',foodOption:'vegetables',dropvalue: <ul className="dropdown-menu" id="dropdown">      <li>Books</li>      <li>Podcasts</li>      <li>Tech I Like</li>      <li>About me</li>      <li>Add a Blog</li>    </ul>};
   this.handleOptionChange = this.handleOptionChange.bind(this);
   this.mealOptionChange = this.mealOptionChange.bind(this);
    this.foodOptionChange = this.foodOptionChange.bind(this);
  }

  handleOptionChange(e) {
  this.setState({
    phaseOption: e.target.id
  });
}
 mealOptionChange(e) {
  this.setState({
    mealOption: e.target.id
  });
}

foodOptionChange(e) {
  this.setState({
    foodOption: e.target.id
  });
}
   render() {
      return (
		

<div className="main_container">
	
	<div className="inner_container">
		<div className="progress_div">
			<div className="progress_top_sec">
				<p className="progress_hdr">My Progress</p><p className="progress_log_weight"><button className="ok" data-target="#log_weight" data-toggle="modal">LOG WEIGHT</button></p>
				<div className="weight_section">
					<p className="weight_txt">Starting Weight</p>
					<p><span className="weight_number"><input type="text" className="edit_goal_weight toggle_input" value="190" readOnly={this.state.readOnly} /></span><span className="create_small_txt">&nbsp;&nbsp;lbs&nbsp;&nbsp;</span><img src="https://s3.amazonaws.com/tracker-html-render/images/pencil.png" className="pencil_img"/></p>
					<span className="save_cancel"><a href="javascript:void(0);" className="save_txt">Save</a> | <a href="javascript:void(0);" className="cancel_txt">Cancel</a></span>
				</div>
				<div className="weight_section">
					<p className="weight_txt">Current Weight</p>
					<p><span className="weight_number"><input type="text" className="edit_goal_weight toggle_input" value="200" readOnly={this.state.readOnly} /></span><span className="create_small_txt">&nbsp;&nbsp;lbs&nbsp;&nbsp;</span><img src="https://s3.amazonaws.com/tracker-html-render/images/pencil.png" className="pencil_img"/></p>
					<span className="save_cancel"><a href="javascript:void(0);" className="save_txt">Save</a> | <a href="javascript:void(0);" className="cancel_txt">Cancel</a></span>
				</div>
				<div className="weight_section">
					<p className="weight_txt">Goal Weight</p>
					<p><span className="weight_number"><input type="text" className="edit_goal_weight toggle_input" value="190" readOnly={this.state.readOnly} /></span><span className="create_small_txt">&nbsp;&nbsp;lbs&nbsp;&nbsp;</span><img src="https://s3.amazonaws.com/tracker-html-render/images/pencil.png" className="pencil_img"/></p>
					<span className="save_cancel"><a href="javascript:void(0);" className="save_txt">Save</a> | <a href="javascript:void(0);" className="cancel_txt">Cancel</a></span>
				</div>
			</div>
				<p className="numbers clearit">Weight Loss</p>
				<ul className="entry_section">
					<li><a href="#all_time" data-toggle="tab">All Time</a></li>
					<li className="active"><a href="#one_week" data-toggle="tab">1 Week</a></li>
					<li><a href="#one_month" data-toggle="tab">1 Month</a></li>
					<li><a href="#three_month" data-toggle="tab">3 Month</a></li>
					<li><a href="#six_month" data-toggle="tab">6 Month</a></li>
				</ul>

				<div className="tab-content">
					<div className="tab-pane" id="all_time">
						<p className="progess_lose_txt">You’ve lost 2 lbs in all time</p>
					</div>
					<div className="tab-pane active" id="one_week">
					<p className="progess_lose_txt">You’ve lost 2 lbs in 1 week</p>
					 <div id="chart_div" style={{'width': '100%', 'height': '100%'}}>
					 	<div style={{'position': 'relative'}}>
					 		<div dir="ltr" style={{'position': 'relative', 'width': '790px', 'height': '200px'}}>
					 			<div aria-label="A chart." style={{'position': 'absolute','left': '0px', 'top': '0px', 'width': '100%', 'height': '100%'}}><svg width="790" height="200" aria-label="A chart." style={{'overflow': 'hidden'}}><defs id="defs"><clipPath id="_ABSTRACT_RENDERER_ID_0"><rect x="92" y="38" width="607" height="124"></rect></clipPath></defs><rect x="0" y="0" width="790" height="200" stroke="none" stroke-width="0" fill="#ffffff"></rect><g><rect x="92" y="38" width="607" height="124" stroke="none" stroke-width="0" fill-opacity="0" fill="#ffffff"></rect><g clip-path="url(https://s3.amazonaws.com/tracker-html-render/progress.html#_ABSTRACT_RENDERER_ID_0)"><g><rect x="92" y="161" width="607" height="1" stroke="none" stroke-width="0" fill="#cccccc"></rect><rect x="92" y="130" width="607" height="1" stroke="none" stroke-width="0" fill="#cccccc"></rect><rect x="92" y="100" width="607" height="1" stroke="none" stroke-width="0" fill="#cccccc"></rect><rect x="92" y="69" width="607" height="1" stroke="none" stroke-width="0" fill="#cccccc"></rect><rect x="92" y="38" width="607" height="1" stroke="none" stroke-width="0" fill="#cccccc"></rect></g><g><path d="M135.78571428571428,146.125C135.78571428571428,146.125,193.5,135.87500000000014,222.35714285714286,130.75C251.2142857142857,125.62499999999986,280.07142857142856,120.50000000000014,308.92857142857144,115.375C337.78571428571433,110.24999999999986,366.6428571428571,105.12500000000014,395.5,100C424.3571428571429,94.87499999999986,453.21428571428567,89.75000000000014,482.07142857142856,84.625C510.9285714285714,79.49999999999986,539.7857142857142,74.37500000000014,568.6428571428571,69.25C597.5,64.12499999999986,655.2142857142857,53.875,655.2142857142857,53.875" stroke="#3366cc" stroke-width="2" fill-opacity="1" fill="none"></path></g></g><g><circle cx="135.78571428571428" cy="146.125" r="6" stroke="none" stroke-width="0" fill="#3366cc"></circle><circle cx="222.35714285714286" cy="130.75" r="6" stroke="none" stroke-width="0" fill="#3366cc"></circle><circle cx="308.92857142857144" cy="115.375" r="6" stroke="none" stroke-width="0" fill="#3366cc"></circle><circle cx="395.5" cy="100" r="6" stroke="none" stroke-width="0" fill="#3366cc"></circle><circle cx="482.07142857142856" cy="84.625" r="6" stroke="none" stroke-width="0" fill="#3366cc"></circle><circle cx="568.6428571428571" cy="69.25" r="6" stroke="none" stroke-width="0" fill="#3366cc"></circle><circle cx="655.2142857142857" cy="53.875" r="6" stroke="none" stroke-width="0" fill="#3366cc"></circle></g><g><g><text text-anchor="middle" x="135.78571428571428" y="181.05" font-family="Arial" font-size="13" stroke="none" stroke-width="0" fill="#222222">Sat</text></g><g><text text-anchor="middle" x="222.35714285714286" y="181.05" font-family="Arial" font-size="13" stroke="none" stroke-width="0" fill="#222222">Sun</text></g><g><text text-anchor="middle" x="308.92857142857144" y="181.05" font-family="Arial" font-size="13" stroke="none" stroke-width="0" fill="#222222">Mon</text></g><g><text text-anchor="middle" x="395.5" y="181.05" font-family="Arial" font-size="13" stroke="none" stroke-width="0" fill="#222222">Tue</text></g><g><text text-anchor="middle" x="482.07142857142856" y="181.05" font-family="Arial" font-size="13" stroke="none" stroke-width="0" fill="#222222">Wed</text></g><g><text text-anchor="middle" x="568.6428571428571" y="181.05" font-family="Arial" font-size="13" stroke="none" stroke-width="0" fill="#222222">Thu</text></g><g><text text-anchor="middle" x="655.2142857142857" y="181.05" font-family="Arial" font-size="13" stroke="none" stroke-width="0" fill="#222222">Fri</text></g><g><text text-anchor="end" x="79" y="166.05" font-family="Arial" font-size="13" stroke="none" stroke-width="0" fill="#444444">200</text></g><g><text text-anchor="end" x="79" y="135.3" font-family="Arial" font-size="13" stroke="none" stroke-width="0" fill="#444444">202</text></g><g><text text-anchor="end" x="79" y="104.55" font-family="Arial" font-size="13" stroke="none" stroke-width="0" fill="#444444">204</text></g><g><text text-anchor="end" x="79" y="73.8" font-family="Arial" font-size="13" stroke="none" stroke-width="0" fill="#444444">206</text></g><g><text text-anchor="end" x="79" y="43.05" font-family="Arial" font-size="13" stroke="none" stroke-width="0" fill="#444444">208</text></g></g></g><g></g></svg><div aria-label="A tabular representation of the data in the chart." style={{'position': 'absolute', 'left': '-10000px', 'top': 'auto', 'width': '1px', 'height': '1px', 'overflow': 'hidden'}}><table><thead><tr><th>X</th><th>Y</th></tr></thead><tbody><tr><td>Sat</td><td>201</td></tr><tr><td>Sun</td><td>202</td></tr><tr><td>Mon</td><td>203</td></tr><tr><td>Tue</td><td>204</td></tr><tr><td>Wed</td><td>205</td></tr><tr><td>Thu</td><td>206</td></tr><tr><td>Fri</td><td>207</td></tr></tbody></table></div></div></div><div aria-hidden="true" style={{'display': 'none', 'position': 'absolute', 'top': '210px', 'left': '800px',' white-space': 'nowrap', 'font-family': 'Arial',' font-size': '13px'}}>...</div><div></div></div></div>
					
					</div>
					<div className="tab-pane" id="one_month">
					<p className="progess_lose_txt">You’ve lost 2 lbs in 1 month</p>
					</div>
					<div className="tab-pane" id="three_month">
					<p className="progess_lose_txt">You’ve lost 2 lbs in 3 month</p>
					</div>
					<div className="tab-pane" id="six_month">
					<p className="progess_lose_txt">You’ve lost 2 lbs in 6 month</p>
					</div>
				</div>
				
				<div className="lost_history">
					<p className="recent_his clearit">WEIGHT LOG HISTORY</p>
					<div className="recentgoal_date">June 07, 2016</div><div className="recent_lbs">250 lbs</div>
					<div className="recentgoal_date">June 07, 2016</div><div className="recent_lbs">250 lbs</div>
					<div className="recentgoal_date">June 07, 2016</div><div className="recent_lbs">250 lbs</div>
					<div className="recentgoal_date">June 07, 2016</div><div className="recent_lbs">250 lbs</div>
					<div className="recentgoal_date">June 07, 2016</div><div className="recent_lbs">250 lbs</div>
					<div className="recentgoal_date">June 07, 2016</div><div className="recent_lbs">250 lbs</div>
				</div>
				<div className="mile_stones">
				<p className="recent_his">YOUR MILESTONES</p>
					<div className="goal_icon_sec">
						<img src="https://s3.amazonaws.com/tracker-html-render/images/5_milestone.png"/>
						<div className="goal_lost_txt">You lost your first 5 lbs!</div>
					</div>

					<div className="goal_icon_sec">
						<img src="https://s3.amazonaws.com/tracker-html-render/images/10_milestone.png"/>
						<div className="goal_lost_txt">You lost your first 10 lbs!</div>
					</div>
				</div>

					<div className="hor_line"></div>

			</div>

		</div>
		
		
	
	<footer>
		<div className="row">
          <ul className="page-links col-xs-6 col-sm-3 col-md-2">
            <li><strong>Get to Know Us</strong></li>
            <li><a href="/diet/meal-plans.jsp?plan=southbeach">View Plan</a></li>
            <li><a href="/how-it-works/index.jsp">How It Works</a></li>
            <li><a href="/catalog/food.jsp">View Menu</a></li>
            <li><a href="/about/index.jsp">About Us</a></li>
            <li><a href="/guarantee/index.jsp">Guarantee</a></li>
          </ul>
          <ul className="page-links col-xs-6 col-sm-3 col-md-2">
            <li><strong>Let Us Help You</strong></li>
            <li><a href="/help/contact.jsp">Contact Us</a></li>
            <li><a href="mailto:customerservice@southbeachdiet.com">Email Us</a></li>
            <li><a href="/help/site-map.jsp">Sitemap</a></li>
            <li><a href="http://sbd.southbeachdiet.com">Blog</a></li>
            <li><a href="/jsp/myaccount/myprogram/index.jsp">My Account</a></li>
          </ul>
          <ul className="social col-xs-6 col-sm-3 col-md-3">
            <li><strong>Connect With Us</strong></li>
            <li> <a href="https://www.facebook.com/SouthBeachDiet" target="_blank">
              <svg id="Facebook_logo" data-name="Facebook logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.9 49.76">
                <title>facebook</title>
                <path className="black" d="M37.44,0.13H31c-7.25,0-11.93,4.81-11.93,12.25V18H12.56a1,1,0,0,0-1,1v8.18a1,1,0,0,0,1,1h6.49V48.86a1,1,0,0,0,1,1h8.46a1,1,0,0,0,1-1V28.22h7.59a1,1,0,0,0,1-1V19a1,1,0,0,0-1-1H29.55V13.23c0-2.3.55-3.47,3.54-3.47h4.35a1,1,0,0,0,1-1V1.15A1,1,0,0,0,37.44.13Z" transform="translate(-11.55 -0.12)"></path>
              </svg>
              </a> </li>
            <li> <a href="https://twitter.com/southbeachdiet" target="_blank">
              <svg id="Twitter_Logo_Silhouette" data-name="Twitter Logo Silhouette" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.02 39.82">
                <title>twitter</title>
                <path className="black" d="M49.51,9.8a20.08,20.08,0,0,1-5.77,1.58,10.1,10.1,0,0,0,4.42-5.56,20.27,20.27,0,0,1-6.39,2.44,10.06,10.06,0,0,0-17.14,9.17A28.55,28.55,0,0,1,3.91,6.93,10.07,10.07,0,0,0,7,20.35a10.06,10.06,0,0,1-4.55-1.26v0.13a10.07,10.07,0,0,0,8.07,9.86,10.19,10.19,0,0,1-2.65.35A9.65,9.65,0,0,1,6,29.24a10.06,10.06,0,0,0,9.39,7,20.18,20.18,0,0,1-12.49,4.3,21.37,21.37,0,0,1-2.4-.14A28.42,28.42,0,0,0,15.9,44.91c18.5,0,28.61-15.32,28.61-28.61l0-1.3A20.08,20.08,0,0,0,49.51,9.8Z" transform="translate(-0.49 -5.09)"></path>
              </svg>
              </a> </li>
            <li> <a href="https://www.youtube.com/southbeachdiet" target="_blank">
              <svg id="YouTube_Logo_Silhouette" data-name="YouTube Logo Silhouette" xmlns="http://www.w3.org/2000/svg" viewBox="200 110 112 280">
                <title>youtube</title>
                <path className="black" d="M422.6 193.6c-5.3-45.3-23.3-51.6-59-54 -50.8-3.5-164.3-3.5-215.1 0 -35.7 2.4-53.7 8.7-59 54 -4 33.6-4 91.1 0 124.8 5.3 45.3 23.3 51.6 59 54 50.9 3.5 164.3 3.5 215.1 0 35.7-2.4 53.7-8.7 59-54C426.6 284.8 426.6 227.3 422.6 193.6zM222.2 303.4v-94.6l90.7 47.3L222.2 303.4z"></path>
              </svg>
              </a> </li>
            <li> <a href="https://www.instagram.com/southbeachdiet/" target="_blank">
              <svg id="Logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.46 47.46">
                <title>instagram</title>
                <circle className="black" cx="23.73" cy="23.73" r="7.91"></circle>
                <path className="black" d="M47.53,14.16a17.42,17.42,0,0,0-1.1-5.76,11.63,11.63,0,0,0-2.74-4.2,11.63,11.63,0,0,0-4.2-2.74A17.42,17.42,0,0,0,33.72.35c-2.53-.12-3.34-0.14-9.78-0.14s-7.25,0-9.78.14A17.42,17.42,0,0,0,8.4,1.46a11.63,11.63,0,0,0-4.2,2.74A11.63,11.63,0,0,0,1.46,8.4a17.42,17.42,0,0,0-1.1,5.76C0.24,16.69.21,17.5,0.21,23.94s0,7.25.14,9.78a17.42,17.42,0,0,0,1.1,5.76,11.63,11.63,0,0,0,2.74,4.2,11.63,11.63,0,0,0,4.2,2.74,17.42,17.42,0,0,0,5.76,1.1c2.53,0.12,3.34.14,9.78,0.14s7.25,0,9.78-.14a17.42,17.42,0,0,0,5.76-1.1,12.13,12.13,0,0,0,6.94-6.94,17.42,17.42,0,0,0,1.1-5.76c0.12-2.53.14-3.34,0.14-9.78S47.64,16.69,47.53,14.16Zm-23.59,22A12.19,12.19,0,1,1,36.13,23.94,12.19,12.19,0,0,1,23.94,36.13Zm12.67-22a2.85,2.85,0,1,1,2.85-2.85A2.85,2.85,0,0,1,36.61,14.12Z" transform="translate(-0.21 -0.21)"></path>
              </svg>
              </a> </li>
            <li> <a href="https://www.pinterest.com/southbeachdiet/" target="_blank">
              <svg id="Pinterest" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                <title>pinterest</title>
                <path className="black" d="M25,1A24,24,0,1,0,49,25,24,24,0,0,0,25,1Zm2.33,32.07c-2.18-.17-3.1-1.25-4.8-2.29-0.94,4.93-2.09,9.66-5.49,12.13-1.05-7.45,1.54-13,2.75-19-2.05-3.46.25-10.41,4.58-8.69,5.33,2.11-4.61,12.84,2.06,14.19,7,1.4,9.81-12.09,5.49-16.47-6.24-6.33-18.17-.14-16.7,8.92,0.36,2.22,2.65,2.89.92,5.95-4-.89-5.19-4-5-8.24,0.25-6.88,6.18-11.69,12.13-12.35,7.52-.84,14.58,2.76,15.56,9.84C39.86,25,35.37,33.69,27.33,33.07Z" transform="translate(-1 -1)"></path>
              </svg>
              </a> </li>
          </ul>
          <div className="newsletter secondary-font col-md-offset-2 col-xs-12 col-sm-6 col-md-3">
            <div id="bx-newsletter">
              Sign up for our free newsletter &amp; receive helpful hints &amp; inspiration every other week.
              <form>
                <input type="text" name="email_signup" className="pull-left" onclick="emailClick('Email Address')" id="email_signup" value="" placeholder="Email Address"/>
                <input type="submit" name="submit" className="" value="Sign Up" id="newsletter_submit"/>
              </form>
            </div>
            <div className="hidden-sm hidden-xs"><a href="http://www.symantec.com/ssl-certificates" target="_blank" className="symantec-verify">ABOUT SSL CERTIFICATES</a> <a href="https://www.paypal.com/webapps/mpp/paypal-popup" title="How PayPal Works" onclick="javascript:window.open('https://www.paypal.com/webapps/mpp/paypal-popup','WIPaypal','toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=1060, height=700'); return false;"><img src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg" alt="PayPal Logo" data-pin-nopin="true"/></a> </div>
          </div>
        </div>
		<div className="footer-bottom secondary-font">
        <p className="no-margin trademark">SouthBeach Diet and related trademarks are registered trademarks and trademarks in the United States and/or other countries, used under license from SBD Enterprises, LLC.</p>
        <div className="row">
          <p className="no-margin col-xs-12 col-sm-6 copyright">© 2016 SBD Enterprises, LLC. All Rights Reserved.</p>
          <p className="no-margin col-xs-12 col-sm-6 text-right text-left-xs links"><a href="/terms/index.jsp">Terms &amp; Conditions</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="/privacy/index.jsp">Privacy Policy</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="https://signup.linkshare.com/publishers/registration/landing?ls-locale=us&amp;host=linkshare&amp;mid=3454" target="_blank">Affiliates</a></p>
        </div>
      </div>
	</footer>
</div>



		);
	}
}


