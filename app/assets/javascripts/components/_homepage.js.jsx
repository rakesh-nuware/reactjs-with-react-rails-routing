   
class Homepage extends React.Component {
	constructor(props) {
    super(props);
    this.state = {value: '1',display_cal:'none',readOnly: 'readOnly',activity_checkbox:'default',activity_thirty:'block',activity_sixty:'none',activity_array:[],remove_active:'',add_active:'activity_normal no_events',add_normal:''};
    this.show_calPopup = this.show_calPopup.bind(this);
    this.activityOptionChange = this.activityOptionChange.bind(this);
     this.saveChanges = this.saveChanges.bind(this);


  }

 

  show_calPopup()
    {
    	this.setState({
        display_cal: this.state.display_cal == 'block' ? 'none' : 'block'
       })
    }

saveChanges()
    {
    	this.setState({
        activity_thirty: this.state.activity_thirty == 'none' ? 'block' : 'none',
        activity_sixty: this.state.activity_sixty == 'block' ? 'none' : 'block'
       });


    	var final_activity_array = this.state.activity_array.length;
    	
		var sxity_child_element = document.getElementsByClassName("not_sixty_mins");
		var sixty_element_nomral = document.querySelectorAll('.reach_sixty_mins')[0].childNodes;
		var thirty_element = document.querySelectorAll('.not_sixty_mins .activity_active');
		var thirty_normal = document.querySelectorAll('.not_sixty_mins')[0].childNodes;
		
	if(document.getElementsByClassName('not_sixty_mins')[0].style.display !== "block")
	  {
	  	document.getElementsByClassName('remain_mins')[0].innerHTML = 30;
	  	var sixty_element = document.querySelectorAll('.reach_sixty_mins .activity_active').length;
		for (var i = 0; i < sixty_element; i++)
		{
			if(sixty_element > i)
			{
				if(i <= 2)
				{
					sxity_child_element[0].childNodes[i].classList.remove('activity_normal')
				sxity_child_element[0].childNodes[i].classList.add("activity_active");
				var thirty_element = document.querySelectorAll('.not_sixty_mins .activity_active');
				if(thirty_element.length > 0)
				{
					sxity_child_element[0].childNodes[i].classList.remove("no_events");
					if(sxity_child_element[0].childNodes[i+1] != undefined)
					{
						sxity_child_element[0].childNodes[i+1].classList.remove("no_events");
					}
					else
					{
						sxity_child_element[0].childNodes[i].classList.remove("no_events");
					}
					if(sxity_child_element[0].childNodes[i-1] != undefined)
					{
					sxity_child_element[0].childNodes[i-1].classList.add("no_events");
					}
				}
				}
				
			}
			
		}

		for(var j=0;j<sixty_element_nomral.length;j++)
		{
			sixty_element_nomral[j].classList.remove("activity_active",'no_events');
			sixty_element_nomral[j].classList.add('activity_normal');

			if(j>0)
			{
				sixty_element_nomral[j].classList.add("no_events");
			}
			
		}

		if(thirty_element.length > 0)
			{
				document.getElementsByClassName('acvtivity_count')[0].innerHTML = thirty_element.length * 10;
			    	document.getElementsByClassName('remain_mins')[0].innerHTML = document.getElementsByClassName('remain_mins')[0].innerHTML -  document.getElementsByClassName('acvtivity_count')[0].innerHTML;
			}
			else
			{
				document.getElementsByClassName('acvtivity_count')[0].innerHTML = 0;
			    	document.getElementsByClassName('remain_mins')[0].innerHTML = 30;
			}
		
	  }
	  else
	  {
		document.getElementsByClassName('remain_mins')[0].innerHTML = 60;
		
		for (var i = 0; i < thirty_element.length; i++) 
		{
			
			
			if(thirty_element.length > i)
			{
				var child_element = document.getElementsByClassName("reach_sixty_mins");
				child_element[0].childNodes[i].classList.add("activity_active");
				child_element[0].childNodes[i].classList.remove("activity_normal");
				var thirty_element = document.querySelectorAll('.not_sixty_mins .activity_active');
			this.state.activity_array.push(10);
			var sixty_element = document.querySelectorAll('.reach_sixty_mins .activity_active').length;
				if(sixty_element > 0)
				{
					child_element[0].childNodes[i].classList.remove("no_events");

					if(child_element[0].childNodes[i+1] != undefined)
					{
						child_element[0].childNodes[i+1].classList.remove("no_events");
					}
					else
					{
						child_element[0].childNodes[i].classList.remove("no_events");
					}
					if(child_element[0].childNodes[i-1] != undefined)
					{
					child_element[0].childNodes[i-1].classList.add("no_events");
					}
				}
			}

		}

		

    	for(var j=0;j<thirty_normal.length;j++)
		{
			thirty_normal[j].classList.remove("activity_active",'no_events');
			thirty_normal[j].classList.add('activity_normal');
			if(j>0)
			{
				thirty_normal[j].classList.add("no_events");
			}
			
		}

		 if(sixty_element > 0)
			{
				document.getElementsByClassName('acvtivity_count')[0].innerHTML = sixty_element * 10;
			    	document.getElementsByClassName('remain_mins')[0].innerHTML = document.getElementsByClassName('remain_mins')[0].innerHTML -  document.getElementsByClassName('acvtivity_count')[0].innerHTML;
			}
			else
			{
				document.getElementsByClassName('acvtivity_count')[0].innerHTML = 0;
			    	document.getElementsByClassName('remain_mins')[0].innerHTML = 60;
			}
    	

	  }
	 
    }
 

 activityOptionChange(e) {
  this.setState({
    activity_checkbox: e.target.id
  });
}



    componentDidMount() {
    $('.drop_txt li  a').click(function(){
		$('.select_replace').html($(this).html());
	});

   $('#datetimepicker_journal').datetimepicker({ 
    	format: 'MM/DD/YYYY',
		defaultDate: moment()
	});


  }


   render() {
      return (



		<div className="main_container">
<App/>
			<div className="inner_container">
			
				<div className="left_sec">
				<div className="serach_section">
				<div className="journal_sec">
					<div className="search">
						<a href="javascript:void(0)" className="cal_sec"><img src="https://s3.amazonaws.com/tracker-html-render/images/cals.png" onClick = {this.show_calPopup}/></a>
						<div className="calories_popup" style={{'display':this.state.display_cal}}>
						<a href="javascript:void(0)" className="close_btn"><img src="https://s3.amazonaws.com/tracker-html-render/images/close_blue.png"  onClick = {this.show_calPopup} /></a>
						<div className="popup_content">
							<p className="cal_hdr">Your Calories for today</p>
							<p><span className="divide"><i className="numbers">1200 - 1800</i><br/><i className="cal_range">Calories Range</i></span><span><i className="numbers">600</i> <br/><i className="cal_range">Calories Used</i></span></p>
						</div>
						  </div>
						  <a href="javascript:void(0)" className="date_section"><span className="convert_date">TODAY</span>
							        	<Datepicker_Example  selected={this.state.startDate}  onChange={this.handleChange}/>            

		</a><a href="javascript:void(0)" className="quick_log step-3" data-toggle="modal" data-target="#quicklog">QUICK LOG</a>
						  
					</div>
				</div>
			</div>
						<ul className="entry_section">
							<li className="active step-2"><a href="#entries" data-toggle="tab">Entries</a></li>
							<li className="step-4"><a href="#plan" data-toggle="tab">Plan</a></li>
						</ul>
						<div className="gap"></div>
						<div className="tab-content">
							<div className="tab-pane active" id="entries">
								<div className="cat_sec">
									<div className="cat_item">
										<img src="https://s3.amazonaws.com/tracker-html-render/images/breakfast.png"/>
										<span className="breakfast cat_txt">Breakfast <a  data-align="right" href="log_food.html"><img src="https://s3.amazonaws.com/tracker-html-render/images/plus.png" /></a>
											<div className="log_txt">
												<a href="javascript:void(0)" className="items_logged"  data-target="#breakfast" data-toggle="collapse">5 Items(s) logged <span className="gray_down"></span></a>
											</div>
										</span>
									</div>
									<div className="show_log collapse in" id="breakfast">
										
										<div className="log_content">
										  <div className="quick_log_img"><img src="https://s3.amazonaws.com/tracker-html-render/images/quick_log.png" /></div>
										  <div className="log_cnt_drop">
											<div className="log_left">
												<div className="logged_txt"> SB Breakfast</div>
												<div><span className="log_count">1</span> <i className="category">B</i><span className="calories_count">150 calories</span></div>
											</div>
											<div className="log_right">
												<a href="javascript:void(0)" data-toggle="dropdown">  <img src="https://s3.amazonaws.com/tracker-html-render/images/ellipsis.png"/></a>
												<ul className="dropdown-menu" role="menu" aria-labelledby="dropdownMenu">
										          <li>
										            <a href="log_food.html">Specify Lean Protein</a>
										          </li>
										          <li>
										            <a href="javascript:void(0)" className="remove_item">Remove</a>
										          </li>
										          <li>
										        </li></ul>
									        </div>
										  </div>
										</div>
										<div className="log_content">
										  <div className="quick_log_img"><img src="https://s3.amazonaws.com/tracker-html-render/images/quick_log.png" /></div>
										  <div className="log_cnt_drop">
											<div className="log_left">
												<div className="logged_txt"> SB Dinner</div>
												<div><span className="log_count">1</span> <i className="category">D</i><span className="calories_count">150 calories</span></div>
											</div>
											<div className="log_right">
												<a href="javascript:void(0)" data-toggle="dropdown">  <img src="https://s3.amazonaws.com/tracker-html-render/images/ellipsis.png"/></a>
												<ul className="dropdown-menu" role="menu" aria-labelledby="dropdownMenu">
										          <li>
										            <a href="log_food.html">Specify Lean Protein</a>
										          </li>
										          <li>
										            <a href="javascript:void(0)" className="remove_item">Remove</a>
										          </li>
										          <li>
										        </li></ul>
									        </div>
										  </div>
										</div>
										<div className="log_content">
										  <div className="log_cnt_drop">
											<div className="log_left">
												<div className="logged_txt"> Lean Protein</div>
												<div><span className="log_count">1</span> <i className="category">LP</i><span className="calories_count">150 calories</span></div>
											</div>
											<div className="log_right">
												<a href="javascript:void(0)" data-toggle="dropdown">  <img src="https://s3.amazonaws.com/tracker-html-render/images/ellipsis.png"/></a>
												<ul className="dropdown-menu" role="menu" aria-labelledby="dropdownMenu">
										          <li>
										            <a href="log_food.html">Specify Lean Protein</a>
										          </li>
										          <li>
										            <a href="javascript:void(0)" className="remove_item">Remove</a>
										          </li>
										          <li>
										        </li></ul>
									        </div>
										  </div>
										</div>
										<div className="log_content">
										  <div className="log_cnt_drop">
											<div className="log_left">
												<div className="logged_txt"> Fruit</div>
												<div><span className="log_count">1</span> <i className="category">F</i><span className="calories_count">150 calories</span></div>
											</div>
											<div className="log_right">
												<a href="javascript:void(0)" data-toggle="dropdown">  <img src="https://s3.amazonaws.com/tracker-html-render/images/ellipsis.png"/></a>
												<ul className="dropdown-menu" role="menu" aria-labelledby="dropdownMenu">
										          <li>
										            <a href="log_food.html">Specify Lean Protein</a>
										          </li>
										          <li>
										            <a href="javascript:void(0)" className="remove_item">Remove</a>
										          </li>
										          <li>
										        </li></ul>
									        </div>
										  </div>
										</div>
										<div className="log_content">
										  <div className="log_cnt_drop">
											<div className="log_left">
												<div className="logged_txt"> Chicken Salad</div>
												<div><span className="log_count">1</span> <i className="category">LP</i><span className="calories_count">150 calories</span></div>
											</div>
											<div className="log_right">
												  
											<Modal_popup/>
												
									        </div>
										  </div>
										</div>
										
									</div>
								</div>
								
								<div className="cat_sec">
									<div className="cat_item">
										<img src="https://s3.amazonaws.com/tracker-html-render/images/snack.png"/>
										<span className="breakfast cat_txt snack">Snack<a href="log_food.html"><img src="https://s3.amazonaws.com/tracker-html-render/images/plus.png" /></a>
										<div className="log_txt">
											<a href="javascript:void(0)" className="items_logged collapsed"  data-target="#break_snack" data-toggle="collapse">5 Items(s) logged <span className="gray_down"></span></a>
										</div>
										</span>
									</div>
									<div className="show_log collapse" id="break_snack">
										
										<div className="log_content">
										  <div className="quick_log_img"><img src="https://s3.amazonaws.com/tracker-html-render/images/quick_log.png" /></div>
										  <div className="log_cnt_drop">
											<div className="log_left">
												<div className="logged_txt"> SB Breakfast</div>
												<div><span className="log_count">1</span> <i className="category">B</i><span className="calories_count">150 calories</span></div>
											</div>
											<div className="log_right">
											<a href="javascript:void(0)" data-toggle="dropdown">  <img src="https://s3.amazonaws.com/tracker-html-render/images/ellipsis.png"/></a>
											<ul className="dropdown-menu" role="menu" aria-labelledby="dropdownMenu">
										          <li>
										            <a href="log_food.html">Specify Lean Protein</a>
										          </li>
										          <li>
										            <a href="javascript:void(0)" className="remove_item">Remove</a>
										          </li>
										          <li>
										        </li></ul>
											</div>
										  </div>
										</div>
									</div>
								</div>
								<div className="cat_sec">
									<div className="cat_item">
										<img src="https://s3.amazonaws.com/tracker-html-render/images/lunch.png"/>
										<span className="breakfast cat_txt lunch">Lunch<a href="log_food.html"><img src="https://s3.amazonaws.com/tracker-html-render/images/plus.png" /></a>
										<div className="log_txt">
											<a href="javascript:void(0)" className="items_logged collapsed" data-target="#lunch" data-toggle="collapse">5 Items(s) logged <span className="gray_down"></span></a>
										</div>
										</span>
									</div>
									<div className="show_log collapse" id="lunch">
										
										<div className="log_content">
										  <div className="quick_log_img"><img src="https://s3.amazonaws.com/tracker-html-render/images/quick_log.png" /></div>
										  <div className="log_cnt_drop">
											<div className="log_left">
												<div className="logged_txt"> SB Breakfast</div>
												<div><span className="log_count">1</span> <i className="category">B</i><span className="calories_count">150 calories</span></div>
											</div>
											<div className="log_right">
											<a href="javascript:void(0)" data-toggle="dropdown">  <img src="https://s3.amazonaws.com/tracker-html-render/images/ellipsis.png"/></a>
											<ul className="dropdown-menu" role="menu" aria-labelledby="dropdownMenu">
										          <li>
										            <a href="log_food.html">Specify Lean Protein</a>
										          </li>
										          <li>
										            <a href="javascript:void(0)" className="remove_item">Remove</a>
										          </li>
										          <li>
										        </li></ul>
											</div>
										  </div>
										</div>
									</div>
								</div>
								<div className="cat_sec">
									<div className="cat_item">
										<img src="https://s3.amazonaws.com/tracker-html-render/images/snack.png"/>
										<span className="breakfast cat_txt snack">Snack<a href="log_food.html"><img src="https://s3.amazonaws.com/tracker-html-render/images/plus.png" /></a>
										<div className="log_txt">
											<a href="javascript:void(0)" className="items_logged collapsed" data-target="#lunch_snack" data-toggle="collapse">5 Items(s) logged <span className="gray_down"></span></a>
										</div>
										</span>
									</div>
									<div className="show_log collapse" id="lunch_snack">
										
										<div className="log_content">
										  <div className="quick_log_img"><img src="https://s3.amazonaws.com/tracker-html-render/images/quick_log.png" /></div>
										  <div className="log_cnt_drop">
											<div className="log_left">
												<div className="logged_txt"> SB Breakfast</div>
												<div><span className="log_count">1</span> <i className="category">B</i><span className="calories_count">150 calories</span></div>
											</div>
											<div className="log_right">
											<a href="javascript:void(0)" data-toggle="dropdown">  <img src="https://s3.amazonaws.com/tracker-html-render/images/ellipsis.png"/></a>
											<ul className="dropdown-menu" role="menu" aria-labelledby="dropdownMenu">
										          <li>
										            <a href="log_food.html">Specify Lean Protein</a>
										          </li>
										          <li>
										            <a href="javascript:void(0)" className="remove_item">Remove</a>
										          </li>
										          <li>
										        </li></ul>
											</div>
										  </div>
										</div>
									</div>
								</div>
								<div className="cat_sec">
									<div className="cat_item">
										<img src="https://s3.amazonaws.com/tracker-html-render/images/dinner.png"/>
										<span className="breakfast cat_txt dinner">Dinner<a href="log_food.html"><img src="https://s3.amazonaws.com/tracker-html-render/images/plus.png" /></a>
										<div className="log_txt">
											<a href="javascript:void(0)" className="items_logged collapsed" data-target="#dinner" data-toggle="collapse">5 Items(s) logged <span className="gray_down"></span></a>
										</div>
										</span>
									</div>
									<div className="show_log collapse" id="dinner">
										
										<div className="log_content">
										  <div className="quick_log_img"><img src="https://s3.amazonaws.com/tracker-html-render/images/quick_log.png" /></div>
										  <div className="log_cnt_drop">
											<div className="log_left">
												<div className="logged_txt"> SB Breakfast</div>
												<div><span className="log_count">1</span> <i className="category">B</i><span className="calories_count">150 calories</span></div>
											</div>
											<div className="log_right">
											<a href="javascript:void(0)" data-toggle="dropdown">  <img src="https://s3.amazonaws.com/tracker-html-render/images/ellipsis.png"/></a>
											<ul className="dropdown-menu" role="menu" aria-labelledby="dropdownMenu">
										          <li>
										            <a href="log_food.html">Specify Lean Protein</a>
										          </li>
										          <li>
										            <a href="javascript:void(0)" className="remove_item">Remove</a>
										          </li>
										          <li>
										        </li></ul>
											</div>
										  </div>
										</div>
									</div>
								</div>
								<div className="cat_sec">
									<div className="cat_item">
										<img src="https://s3.amazonaws.com/tracker-html-render/images/snack.png"/>
										<span className="breakfast cat_txt snack">Snack<a href="log_food.html"><img src="https://s3.amazonaws.com/tracker-html-render/images/plus.png" /></a>
										<div className="log_txt">
											<a href="javascript:void(0)" className="items_logged collapsed" data-target="#dinner_snack" data-toggle="collapse">5 Items(s) logged <span className="gray_down"></span></a>
										</div>
										</span>
									</div>
									<div className="show_log collapse" id="dinner_snack">
										
										<div className="log_content">
										  <div className="quick_log_img"><img src="https://s3.amazonaws.com/tracker-html-render/images/quick_log.png" /></div>
										  <div className="log_cnt_drop">
											<div className="log_left">
												<div className="logged_txt"> SB Breakfast</div>
												<div><span className="log_count">1</span> <i className="category">B</i><span className="calories_count">150 calories</span></div>
											</div>
											<div className="log_right">
											<a href="javascript:void(0)" data-toggle="dropdown">  <img src="https://s3.amazonaws.com/tracker-html-render/images/ellipsis.png"/></a>
											<ul className="dropdown-menu" role="menu" aria-labelledby="dropdownMenu">
										          <li>
										            <a href="log_food.html">Specify Lean Protein</a>
										          </li>
										          <li>
										            <a href="javascript:void(0)" className="remove_item">Remove</a>
										          </li>
										          <li>
										        </li></ul>
											</div>
										  </div>
										</div>
									</div>
								</div>
								
								
							</div>

							<div className="tab-pane" id="plan">
								<div className="cat_sec">
									<div className="log_content">
										<div className="plan_drop mealplan">
											<div className="phase_mealplan">Your <b>Phase 1</b> mealplan</div>
											<div className="logged_txt practice_dayoff"><span>Make Practice Day</span>
												<div className="switch round off">
													<div className="toggle_btn"></div>
													<span className="on">ON</span>
													<span className="off">OFF</span>
												</div>
											</div>
										<div className="plan_left cat_hdr">CATEGORIES</div>
											<div className="plan_right plan_remain">
												REMAINING
											 </div>

										</div>
										  <div className="plan_drop">
											<div className="plan_left">
												<span className="logged_txt">Vegetable</span><i className="category">V</i>
												<div><span className="calories_count">Dialy Goal: 5</span></div>
											</div>
											<div className="plan_right">
												<input type="text" name="" value={this.props.value} readOnly={this.state.readOnly} className="item_count"/>
												<a href="log_food.html" className="plan_plus"> <img src="https://s3.amazonaws.com/tracker-html-render/images/plus.png"/></a>
											 </div>
										  </div>
										  <div className="plan_drop">
											<div className="plan_left">
												<span className="logged_txt">Lean Protein</span><i className="category">lp</i>
												<div><span className="calories_count">Dialy Goal: 5</span></div>
											</div>
											<div className="plan_right">
												<input type="text" name=""value={this.state.value} readOnly={this.state.readOnly} className="item_count"/>
												<a href="log_food.html" className="plan_plus"> <img src="https://s3.amazonaws.com/tracker-html-render/images/plus.png"/></a>
											 </div>
										  </div>
										  <div className="plan_drop">
											<div className="plan_left">
												<span className="logged_txt">Healthy Fat</span><i className="category">hf</i>
												<div><span className="calories_count">Dialy Goal: 5</span></div>
											</div>
											<div className="plan_right">
												<input type="text" name=""value={this.state.value} readOnly={this.state.readOnly} className="item_count"/>
												<a href="log_food.html" className="plan_plus"> <img src="https://s3.amazonaws.com/tracker-html-render/images/plus.png"/></a>
											 </div>
										  </div>
										  <div className="plan_drop">
											<div className="plan_left">
												<span className="logged_txt">Fruit</span><i className="category">f</i>
												<div><span className="calories_count">Dialy Goal: 5</span></div>
											</div>
											<div className="plan_right">
												<input type="text" name=""value={this.state.value} readOnly={this.state.readOnly} className="item_count"/>
												<a href="log_food.html" className="plan_plus"> <img src="https://s3.amazonaws.com/tracker-html-render/images/plus.png"/></a>
											 </div>
										  </div>
										  <div className="plan_drop">
											<div className="plan_left">
												<span className="logged_txt">Good Carbs</span><i className="category">gc</i>
												<div><span className="calories_count">Dialy Goal: 5</span></div>
											</div>
											<div className="plan_right">
												<input type="text" name=""value={this.state.value} readOnly={this.state.readOnly} className="item_count"/>
												<a href="log_food.html" className="plan_plus"> <img src="https://s3.amazonaws.com/tracker-html-render/images/plus.png"/></a>
											 </div>
										  </div>
										  <div className="plan_drop">
											<div className="plan_left">
												<span className="logged_txt">SB Breakfast</span><i className="category">b</i>
												<div><span className="calories_count">Dialy Goal: 5</span></div>
											</div>
											<div className="plan_right">
												<input type="text" name=""value={this.state.value} readOnly={this.state.readOnly} className="item_count"/>
												<a href="log_food.html" className="plan_plus"> <img src="https://s3.amazonaws.com/tracker-html-render/images/plus.png"/></a>
											 </div>
										  </div>
										  <div className="plan_drop">
											<div className="plan_left">
												<span className="logged_txt">SB Lunch</span><i className="category">l</i>
												<div><span className="calories_count">Dialy Goal: 5</span></div>
											</div>
											<div className="plan_right">
												<input type="text" name=""value={this.state.value} readOnly={this.state.readOnly} className="item_count"/>
												<a href="log_food.html" className="plan_plus"> <img src="https://s3.amazonaws.com/tracker-html-render/images/plus.png"/></a>
											 </div>
										  </div>
										  <div className="plan_drop">
											<div className="plan_left">
												<span className="logged_txt">SB Dinner</span><i className="category">d</i>
												<div><span className="calories_count">Dialy Goal: 5</span></div>
											</div>
											<div className="plan_right">
												<input type="text" name=""value={this.state.value} readOnly={this.state.readOnly} className="item_count"/>
												<a href="log_food.html" className="plan_plus"> <img src="https://s3.amazonaws.com/tracker-html-render/images/plus.png"/></a>
											 </div>
										  </div>
										  <div className="plan_drop">
											<div className="plan_left">
												<span className="logged_txt">Extras</span><i className="category">ex</i>
												<div><span className="calories_count">Dialy Goal: 5</span></div>
											</div>
											<div className="plan_right">
												<input type="text" name=""value={this.state.value} readOnly={this.state.readOnly} className="item_count"/>
												<a href="log_food.html" className="plan_plus"> <img src="https://s3.amazonaws.com/tracker-html-render/images/plus.png"/></a>
											 </div>
										  </div>
										  <div className="plan_drop">
											<div className="plan_left">
												<span className="logged_txt">Other</span><i className="category">o</i>
												<div className="calories_count">Dialy Goal: 5</div>
											</div>
											<div className="plan_right">
												<span className="item_count other_plans">-1</span>
											 </div>
										  </div>
										</div>
								</div>
								
							</div>
						   
						</div>
						<div className="activity_water">
						<div className="gap"></div>
						<div className="cat_sec">
		                            <div className="water_cnt">
		                             <WaterLog />
		                                <span className="water_txt">Water</span><br/>
		                                <div className="water_level"><span className="water_count">0</span> fl.oz</div>
		                                
		                            </div>
		                        </div>
		                        <div className="gap"></div>
		                        <div className="cat_sec">
		                            <div className="water_cnt activity_cnt">
		                                <span className="act_txt">Activity</span>
		                                <a href="javascript:void(0)" className="act_setting" data-toggle="modal" data-target="#Activity_Setting">Settings 
		                                <img src="https://s3.amazonaws.com/tracker-html-render/images/gray_arrow_right.png"/></a>
		                                <div className="act_time"><span className="acvtivity_count">0</span> mins</div>
		                                <ActivityLog display_thirty={this.state.activity_thirty} display_sixty={this.state.activity_sixty} activiy_arr={this.state.activity_array} add_active={this.state.add_active} add_normal={this.state.add_normal}/>
		                                
		                                
		                            </div>
		                            
		                        </div>
		                        <div className="connect_device">
		                            <div className="water_cnt">
		                                <span className="connect_txt">Connected Device</span>
		                                <div className="cnt_device_txt">Fitbit Scale <span>25 mins | 400 cals</span></div>
		                            </div>
		                        </div>
		                        </div>
				</div>
				<div className="right_sec">
				
						
						<div className="news_feed_sec">
						<p><img src="https://s3.amazonaws.com/tracker-html-render/images/newsfeed.png"/><span className="news_feed">News Feed</span> <span className="see_all"><a href="javascript:void(0)">See All </a> <img src="https://s3.amazonaws.com/tracker-html-render/images/pink_right.png"/></span></p>
						<div className="clearfix"></div>
						<article className="clearfix">
							<div className="thumb_nail"><img src="https://s3.amazonaws.com/tracker-html-render/images/thumb.jpg"/></div>
							<div className="description">
								<p className="rht_hdr">Avoid Vacation Weight Gain</p>
								<p className="small_txt">Vivamus sagittis lacus vel augue</p>
								<p className="read_more"><a href="javascript:void(0)">Read More <img src="https://s3.amazonaws.com/tracker-html-render/images/pink_right.png"/></a></p>
							</div>
						</article>
						<article className="clearfix">
							<div className="thumb_nail"><img src="https://s3.amazonaws.com/tracker-html-render/images/thumb.jpg"/></div>
							<div className="description">
								<p className="rht_hdr">Avoid Vacation Weight Gain</p>
								<p className="small_txt">Vivamus sagittis lacus vel augue</p>
								<p className="read_more"><a href="javascript:void(0)">Read More <img src="https://s3.amazonaws.com/tracker-html-render/images/pink_right.png"/></a></p>
							</div>
						</article>
						<article className="clearfix">
							<div className="thumb_nail"><img src="https://s3.amazonaws.com/tracker-html-render/images/thumb.jpg"/></div>
							<div className="description">
								<p className="rht_hdr">Avoid Vacation Weight Gain</p>
								<p className="small_txt">Vivamus sagittis lacus vel augue</p>
								<p className="read_more"><a href="javascript:void(0)">Read More <img src="https://s3.amazonaws.com/tracker-html-render/images/pink_right.png"/></a></p>
							</div>
						</article>
						<article className="clearfix">
							<div className="thumb_nail"><img src="https://s3.amazonaws.com/tracker-html-render/images/thumb.jpg"/></div>
							<div className="description">
								<p className="rht_hdr">Avoid Vacation Weight Gain</p>
								<p className="small_txt">Vivamus sagittis lacus vel augue</p>
								<p className="read_more"><a href="javascript:void(0)">Read More <img src="https://s3.amazonaws.com/tracker-html-render/images/pink_right.png"/></a></p>
							</div>
						</article>
						</div>
						<div className="clearfix"></div>
						<div className="right_sec_inner">
					<ul className="favorite_section">
							<li className="active"><a href="#favorite" data-toggle="tab">Favorites</a></li>
							<li><a href="#recent" data-toggle="tab">Recents</a></li>
						</ul>
						<div className="clearfix"></div>
						<div className="tab-content">
							<div className="tab-pane active" id="favorite">
								<div className="fav_empty"><img src="https://s3.amazonaws.com/tracker-html-render/images/fav-icon.png"/>
								<h4>Favorite Your Meal</h4>
								<p className="fav_text">Log Meals faster. Click the star next to your meal recommendation on the Log It screen and it will automatically appear in your Favorites</p>
								</div>
							</div>
							<div className="tab-pane" id="recent">
								<div className="fav_empty"><img src="https://s3.amazonaws.com/tracker-html-render/images/journal_recent_icon.png"/>
								<h4>Start Logging Meals</h4>
								<p className="fav_text">The meal recommendations you//'ve logged most recently will appear here.</p>
								</div>
								
							</div>
						   
						</div>
						</div>

				</div>
				<div className="clearfix"></div>
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
		                <input type="text" name="email_signup" className="pull-left"  id="email_signup" value="" placeholder="Email Address"/>
		                <input type="submit" name="submit" className="" value="Sign Up" id="newsletter_submit"/>
		              </form>
		            </div>
		            <div className="hidden-sm hidden-xs"><a href="http://www.symantec.com/ssl-certificates" target="_blank" className="symantec-verify">ABOUT SSL CERTIFICATES</a> <a href="https://www.paypal.com/webapps/mpp/paypal-popup" title="How PayPal Works"><img src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg" alt="PayPal Logo" data-pin-nopin="true"/></a> </div>
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


			


{/*  Activity setting popup  */}

<div className="modal fade" id="Activity_Setting"  role="dialog" aria-labelledby="Activity_Setting">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><img src="https://s3.amazonaws.com/tracker-html-render/images/close_white.png"/></button>
            <h2 className="modal-title">Activity Settings</h2>
          </div>
          <div className="modal-body">
          <h4>Choose your activity goal.</h4>
	            	<div className="quicklog_alert">
	            			<div className="activity_set">
	            			<span className="default_txt">Default</span><input className="default" type="radio" id="default"  checked={this.state.activity_checkbox === 'default'} onChange={this.activityOptionChange} name="activity"/>
	            			<label htmlFor="default"><span><i></i></span></label>
	            			<p>30 mins</p>
	            			</div>
	            			<div className="activity_set">
	            			 <input className="normal" type="radio" id="normal" name="activity"  checked={this.state.activity_checkbox === 'normal'} onChange={this.activityOptionChange}/>
	            			 <label htmlFor="normal"><span><i></i></span></label>
	            			 <p className="def_normal">60 mins</p>
	            			 </div>
							<button className="add_entry ok save_changes" data-dismiss="modal" onClick={this.saveChanges}>SAVE CHANGES</button>
					</div>

			 </div>
          </div>
        </div>
      </div>


<Quicklog />




		</div>
		);
	}
}


class Quicklog extends React.Component {

	constructor() {
    super();
    this.state = {default_value:1,default_value1:1,readOnly: 'readOnly'};
 	this.add_count = this.add_count.bind(this);
 	this.reduce_count = this.reduce_count.bind(this);
 	  }


	 add_count(e)
    {
    	
    	if (parseInt(this.state.default_value) >= 10) {
        return;
      }
      else
      {
      this.setState({
        default_value: parseInt(this.state.default_value) + 1
       });
      }
    }

    reduce_count()
    {
    	if (parseInt(this.state.default_value) <= 0) {
        return;
      }
      else
      {
      	this.setState({
        default_val: parseInt(this.state.default_value) - 1
       });
      }
    }

   render() {
      return (
         <div>
            {/* Quick log modal */}
	<div className="modal fade" id="quicklog" tabIndex="-1" role="dialog" aria-labelledby="quicklog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><img src="https://s3.amazonaws.com/tracker-html-render/images/close_white.png"/></button>
            <h2 className="modal-title">Quick Log</h2>
          </div>
          <div className="modal-body">
          <div className="quickly_log">
            	<h4>Quickly log food portions in your journal</h4>
            	<div className="select_sec"><span className="item_hdr">Meal</span>
            	<span className="select_parent">
            	<a href="javascript:void(0)" data-toggle="dropdown" className="select_drop drop_txt">
	            	<i className="select_replace">
		            	<img src="https://s3.amazonaws.com/tracker-html-render/images/breakfast.png"/>
		            	<span>Breakfast</span>
	            	</i>
            	</a>
            	<ul className="dropdown-menu drop_txt" role="menu" aria-labelledby="dropdownMenu">
		          <li>
		            <a href="javascript:void(0)">
		            	<span><img src="https://s3.amazonaws.com/tracker-html-render/images/breakfast.png"/></span>
		            	<span className="list_break">Breakfast</span>
	            	</a>
		          </li>
		          <li>
		            <a href="javascript:void(0)"><span><img src="https://s3.amazonaws.com/tracker-html-render/images/snack.png"/></span><span className="list_snack">Snack</span></a>
		          </li>
		          <li>
		            <a href="javascript:void(0)"><span><img src="https://s3.amazonaws.com/tracker-html-render/images/lunch.png"/></span><span className="list_lunch">Lunch</span></a>
		          </li>
		          <li>
		            <a href="javascript:void(0)"><span><img src="https://s3.amazonaws.com/tracker-html-render/images/snack.png"/></span><span className="list_snack">Snack</span></a>
		          </li>
		
		            <li>
		              <a href="javascript:void(0)"><span><img src="https://s3.amazonaws.com/tracker-html-render/images/dinner.png"/></span><span className="list_dinner">Dinner</span></a>
		            </li>
			        <li>
			          <a href="javascript:void(0)"><span><img src="https://s3.amazonaws.com/tracker-html-render/images/snack.png"/></span><span className="list_snack">Snack</span></a>
			        </li>
		        </ul></span>
		        </div>
		        <div className="quick_content">
		        <table  width="100%" cellPadding="0" cellSpacing="0">
		        <tbody><tr>
		        	<td className="qc_content_left">
			        	<div className="qc_left">
							<span className="logged_txt">Vegetable</span><i className="category">V</i>
							<div><span className="calories_count">Remaining: 5</span></div>
			        	</div>
			        	<div className="qc_right">
							<input type="text" name="" value={this.state.default_value} readOnly={this.state.readOnly}  className="item_count"/>
							<a href="javascript:void(0)" className="plus_minus"> <i className="minus_sign" onClick={this.reduce_count}></i><i className="plus_sign" onClick = {this.add_count}></i></a>
										
			        	</div>
		        	</td>
		        	<td className="qc_content_right">
			        	<div className="qc_left">
							<span className="logged_txt">Lean Protein</span><i className="category">LP</i>
							<div><span className="calories_count">Remaining: 5</span></div>
			        	</div>
			        	<div className="qc_right">
							<input type="text" name="" value={this.state.default_value} readOnly={this.state.readOnly} className="item_count"/>
							<a href="javascript:void(0)" className="plus_minus"> <i className="minus_sign"></i><i className="plus_sign" onClick={this.add_count}></i></a>
										
			        	</div>
		        	</td>
	        	</tr>
		        	 <tr>
		        	<td className="qc_content_left">
			        	<div className="qc_left">
							<span className="logged_txt">Healthy Fat</span><i className="category">hr</i>
							<div><span className="calories_count">Remaining: 5</span></div>
			        	</div>
			        	<div className="qc_right">
							<input type="text" name=""  readOnly={this.state.readOnly} className="item_count"/>
							<a href="javascript:void(0)" className="plus_minus"> <i className="minus_sign"></i><i className="plus_sign"></i></a>
										
			        	</div>
		        	</td>
		        	<td className="qc_content_right">
			        	<div className="qc_left">
							<span className="logged_txt">Fruit</span><i className="category">F</i>
							<div><span className="calories_count">Remaining: 5</span></div>
			        	</div>
			        	<div className="qc_right">
							<input type="text" name=""  readOnly={this.state.readOnly} className="item_count"/>
							<a href="javascript:void(0)" className="plus_minus"> <i className="minus_sign"></i><i className="plus_sign"></i></a>
										
			        	</div>
		        	</td>
	        	</tr>
		        	 <tr>
		        	<td className="qc_content_left">
			        	<div className="qc_left">
							<span className="logged_txt">Good Carbs</span><i className="category">gf</i>
							<div><span className="calories_count">Remaining: 5</span></div>
			        	</div>
			        	<div className="qc_right">
							<input type="text" name=""  readOnly={this.state.readOnly} className="item_count"/>
							<a href="javascript:void(0)" className="plus_minus"> <i className="minus_sign"></i><i className="plus_sign"></i></a>
										
			        	</div>
		        	</td>
		        	<td className="qc_content_right">
			        	<div className="qc_left">
							<span className="logged_txt">SB Breakfast</span><i className="category">B</i>
							<div><span className="calories_count">Remaining: 5</span></div>
			        	</div>
			        	<div className="qc_right">
							<input type="text" name=""  readOnly={this.state.readOnly} className="item_count"/>
							<a href="javascript:void(0)" className="plus_minus"> <i className="minus_sign"></i><i className="plus_sign"></i></a>
										
			        	</div>
		        	</td>
	        	</tr>
		        	 <tr>
		        	<td className="qc_content_left">
			        	<div className="qc_left">
							<span className="logged_txt">SB Lunch</span><i className="category">l</i>
							<div><span className="calories_count">Remaining: 5</span></div>
			        	</div>
			        	<div className="qc_right">
							<input type="text" name=""  readOnly={this.state.readOnly} className="item_count"/>
							<a href="javascript:void(0)" className="plus_minus"> <i className="minus_sign"></i><i className="plus_sign"></i></a>
										
			        	</div>
		        	</td>
		        	<td className="qc_content_right">
			        	<div className="qc_left">
							<span className="logged_txt">SB Lunch</span><i className="category">D</i>
							<div><span className="calories_count">Remaining: 5</span></div>
			        	</div>
			        	<div className="qc_right">
							<input type="text" name=""  readOnly={this.state.readOnly} className="item_count"/>
							<a href="javascript:void(0)" className="plus_minus"> <i className="minus_sign"></i><i className="plus_sign"></i></a>
										
			        	</div>
		        	</td>
	        	</tr>
		        	 <tr>
		        	<td className="qc_content_left">
			        	<div className="qc_left">
							<span className="logged_txt">Extras</span><i className="category">EX</i>
							<div><span className="calories_count">Remaining: 5 (Optional)</span></div>
			        	</div>
			        	<div className="qc_right">
							<input type="text" name=""  readOnly={this.state.readOnly} className="item_count"/>
							<a href="javascript:void(0)" className="plus_minus"> <i className="minus_sign"></i><i className="plus_sign"></i></a>
										
			        	</div>
		        	</td>
		        	<td className="qc_content_right quick_logging">
			        	<a href="javascript:void(0)"><img src="https://s3.amazonaws.com/tracker-html-render/images/quick_log.png"/> All About Quick Logging</a>
		        	</td>
	        	</tr>
	        	</tbody></table>
	        	</div>
		        	
		        	<div className="clearfix"></div>

		        
		       
		        <div className="modal-footer">
	             	<button className="add_entry">ADD TO ENTRIES</button><br/><br/>
			        <a href="log_food.html" className="view_log">View All Log Food option <img src="https://s3.amazonaws.com/tracker-html-render/images/pink_right.png"/></a>
	          	</div>
          	</div>

          	<div className="quickLog_alert alert_popup display_none">
            	
	            	<div className="modal-body">
         			 <h4>About Quick Logging</h4>
	            	<div className="quicklog_alert">
	            		Some information about Quick Log for first time users. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
					</div>
					<button className="add_entry ok">OK</button><button className="learn_more">LEARN MORE</button>
        		<div className="clearfix"></div>
			 </div>
		        </div>
          

          	<div className="all_about_quick">
            	<a href="javascript:void(0)" className="view_log back_log"><img src="https://s3.amazonaws.com/tracker-html-render/images/pink_left.png"/> Back to Quick Log</a>
            	<div className="quick_log_big">
	            	<div className="all_abt_popup_lft"><img src="https://s3.amazonaws.com/tracker-html-render/images/quick_log_big.png"/></div>
	            	<div className="all_abt_popup_rht">
	            		Quick logging provides a simple and easy way to stay on-plan!<br/><br/>

						Simply track your food category portions instead of the exact foods you eat.<br/><br/>

						If your eating the the required foods and portions you are on-plan!<br/><br/>

						Add multiple servings of food categories to a meal in one step.<br/><br/>

						An accurate caloric estimate is given for each food category serving.<br/><br/>

						You can always edit a quick logged food to say exactly what you ate from the "entries" screen
					</div>
		        </div>
          	</div>

      	</div>
          	


          </div>
          
        </div>
      </div>
         </div>
      );
   }
}


class WaterLog extends React.Component {
glassClick(e) {
	var parse_water = parseInt(document.getElementsByClassName('water_count')[0].innerHTML);
    if(e.target.className === 'add_glass'){
      e.target.className = 'filled_glass'
     document.getElementsByClassName('water_count')[0].innerHTML =parse_water + 8;
      
    }
    else{
      e.target.className = 'add_glass';
      document.getElementsByClassName('water_count')[0].innerHTML =parse_water - 8;
    }

    if(document.querySelectorAll('.filled_glass').length >1)
	{
		if(e.target.previousElementSibling.className ==="filled_glass")
	      {
			e.target.previousElementSibling.className += " no_events";
	      }
	}


    if(document.querySelectorAll('.empty_glass').length >0 && e.target.nextElementSibling.className ==="empty_glass")
    {
    	e.target.nextElementSibling.className ="add_glass";
    }
    else
    {
    	 if(e.target.nextElementSibling == null || e.target.nextElementSibling.className ==="empty_glass")
		    {
		    	if(document.querySelectorAll('.filled_glass').length <= 7)
		    	{
		    	var element = e.target.previousElementSibling;
				var remove_class = 'no_events';
				element.className = element.className.replace(' ' + remove_class, '').replace(remove_class, '');
		    	return;
		    	}
		    	
		    }
		    else
		    {

		    	e.target.nextElementSibling.className ="empty_glass";
		    	if(document.querySelectorAll('.add_glass').length == 1 && document.querySelectorAll('.filled_glass').length ==0)
		    	{
		    	return;
				}
				else
				{
					var element = e.target.previousElementSibling;
				var remove_class = 'no_events';
				element.className = element.className.replace(' ' + remove_class, '').replace(remove_class, '');
				}
   			 }
    }


    

  }

  

   render() {
      return (
      	<div>
	      	<span className='add_glass' onClick={this.glassClick.bind(this)}></span>
	      	<span className='empty_glass' onClick={this.glassClick.bind(this)}></span>
	      	<span className='empty_glass' onClick={this.glassClick.bind(this)}></span>
	      	<span className='empty_glass' onClick={this.glassClick.bind(this)}></span>
	      	<span className='empty_glass' onClick={this.glassClick.bind(this)}></span>
	      	<span className='empty_glass' onClick={this.glassClick.bind(this)}></span>
	      	<span className='empty_glass' onClick={this.glassClick.bind(this)}></span>
	      	<span className='empty_glass' onClick={this.glassClick.bind(this)}></span>
	    </div>
);
}
}


class ActivityLog extends React.Component {
 componentDidMount() {

    if(document.getElementsByClassName('activity_active').length == 0 && document.getElementsByClassName('not_sixty_mins')[0].style.display === "block")
	  {
	  	document.getElementsByClassName('remain_mins')[0].innerHTML = 30;
	  }
	  else
	  {
	  		document.getElementsByClassName('remain_mins')[0].innerHTML = 60;
	  }

  }

 

 

activityClick(e) {
	var parse_activity = parseInt(document.getElementsByClassName('acvtivity_count')[0].innerHTML);
	var parse_remian_mins = parseInt(document.getElementsByClassName('remain_mins')[0].innerHTML);
    if(e.target.className === 'activity_normal'){
      e.target.className = 'activity_active';
      if(e.target.nextElementSibling !== null)
      {
      	var element = e.target.nextElementSibling;
		element.classList.remove("no_events");
		if(e.target.previousElementSibling !== null)
		{
			e.target.previousElementSibling.classList.add("no_events");
		}
      }
      else
      {
      	if(e.target.previousElementSibling.classList.contains("activity_active"))
	      {
			e.target.previousElementSibling.classList.add("no_events");
	      }
      }
      
     document.getElementsByClassName('acvtivity_count')[0].innerHTML = parse_activity + 10;
     document.getElementsByClassName('remain_mins')[0].innerHTML = parse_remian_mins - 10;
     this.props.activiy_arr.push(10);
      
    }
    else{
      e.target.className = 'activity_normal';
      if(e.target.previousElementSibling !== null)
		{
			e.target.previousElementSibling.classList.remove("no_events");
			if(e.target.nextElementSibling !== null)
			{
				e.target.nextElementSibling.classList.add('no_events');	

			}
			
		}
		else
		{
			e.target.nextElementSibling.classList.add('no_events');	
		}
      
      document.getElementsByClassName('acvtivity_count')[0].innerHTML =parse_activity - 10;
      document.getElementsByClassName('remain_mins')[0].innerHTML = parse_remian_mins + 10;
       this.props.activiy_arr.splice(0, 1);
    }


  }

  

   render() {
      return (
      	<div>
		      	<div className="not_sixty_mins" style={{'display':this.props.display_thirty}}>
                	<span className="activity_normal" onClick={this.activityClick.bind(this)}></span>
                	<span className='activity_normal no_events'  onClick={this.activityClick.bind(this)}></span>
                	<span className='activity_normal no_events'  onClick={this.activityClick.bind(this)}></span>
               		 
                </div>
                <div className="reach_sixty_mins"  style={{'display':this.props.display_sixty}}>
               		 <span className="activity_normal" onClick={this.activityClick.bind(this)}></span>
                	<span className='activity_normal no_events' onClick={this.activityClick.bind(this)} ></span>
                	<span className='activity_normal no_events' onClick={this.activityClick.bind(this)}></span>
                	<span className='activity_normal no_events' onClick={this.activityClick.bind(this)} ></span>
                	<span className='activity_normal no_events'  onClick={this.activityClick.bind(this)}></span>
                	<span className='activity_normal no_events' onClick={this.activityClick.bind(this)} ></span>
                </div>
                <p className="five_mins_reach">You’re <span className="remain_mins"></span> min. away from completing your final activity</p>
		    </div>
);
}
}


class Datepicker_Example extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
 
  render() {
    return (
    	<span className='input-group date' id='datetimepicker_journal'>
            <input type='hidden' className="form-control" />
            <span className="input-group-addon">
                <span className="calender_down"></span>
        </span>
        </span>
        )
  }
}