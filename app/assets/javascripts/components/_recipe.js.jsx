
class Recipe_page extends React.Component {
	constructor(props) {
    super(props);
    this.state = {value: '1',readOnly: 'readOnly',phaseOption:'phase2',mealOption:'breakfast',foodOption:'vegetables'};
   this.handleOptionChange = this.handleOptionChange.bind(this);
   this.mealOptionChange = this.mealOptionChange.bind(this);
    this.foodOptionChange = this.foodOptionChange.bind(this);
  }
componentDidMount() {
    $('.drop_txt li  a').click(function(){
		$('.select_replace').html($(this).html());
	});

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
		
			<p className="recipes_hdr">Recipes</p>
			<p className="recipe_search_input">
			<span>
				<i></i>
				<input type="text" className="recipe_input" placeholder="Search Recipes"/>
				</span>
				<input type="submit" className="search_btn" data-target="#out_of_phase" data-toggle="modal" value="SEARCH" name=""/>
				
			</p>
		<div className="log_food_lft pull-left">
			<p className="filter_by">Filter by</p>
			<div className="phase_drop">
				<a data-toggle="collapse" data-target="#phases" href="javascript:void(0)" className="phases_hdr">Phases <span className="gray_up"></span>
			    </a>
			  <ul id="phases" className="collapse in">
			    <li>
			    	<input className="" type="radio" id="all_phases" name="phases" checked={this.state.phaseOption === 'all_phases'} onChange={this.handleOptionChange}/>
					<label htmlFor="all_phases"><span className="bullet_icon"><i></i></span><span>All Phases</span></label>
				</li>
				<li>
			    	<input className="" type="radio" id="phase1" name="phases" checked={this.state.phaseOption === 'phase1'} onChange={this.handleOptionChange}/>
					<label htmlFor="phase1"><span className="bullet_icon"><i></i></span><span>Phase1</span></label>
				</li>
				<li>
			    	<input className="" type="radio" id="phase2" name="phases" checked={this.state.phaseOption === 'phase2'} onChange={this.handleOptionChange}/>
					<label htmlFor="phase2"><span className="bullet_icon"><i></i></span><span>Phase2</span></label>
				</li>
				<li>
			    	<input className="" type="radio" id="phase3" name="phases" checked={this.state.phaseOption === 'phase3'} onChange={this.handleOptionChange}/>
					<label htmlFor="phase3"><span className="bullet_icon"><i></i></span><span>Phase3</span></label>
				</li>
			  </ul>


			</div>

			<div className="meal_time_drop">
				<a data-toggle="collapse" data-target="#meal" href="javascript:void(0)" className="meal_time_hdr">Meal <span className="gray_up"></span>
			    </a>
			  <ul id="meal" className="collapse in">
			    <li>
			    	<input className="" type="radio" id="all_meal" name="meal" checked={this.state.mealOption === 'all_meal'} onChange={this.mealOptionChange}/>
					<label htmlFor="all_meal"><span className="bullet_icon"><i></i></span><span>All Meal</span></label>
				</li>
				<li>
			    	<input className="" type="radio" id="breakfast" name="meal" checked={this.state.mealOption === 'breakfast'} onChange={this.mealOptionChange}/>
					<label htmlFor="breakfast"><span className="bullet_icon"><i></i></span><span>Breakfast</span></label>
				</li>
				<li>
			    	<input className="" type="radio" id="lunch" name="meal" checked={this.state.mealOption === 'lunch'} onChange={this.mealOptionChange}/>
					<label htmlFor="lunch"><span className="bullet_icon"><i></i></span><span>Lunch</span></label>
				</li>
				<li>
			    	<input className="" type="radio" id="dinner" name="meal" checked={this.state.mealOption === 'dinner'} onChange={this.mealOptionChange}/>
					<label htmlFor="dinner"><span className="bullet_icon"><i></i></span><span>Dinner</span></label>
				</li>
				<li>
			    	<input className="" type="radio" id="snack" name="meal" checked={this.state.mealOption === 'snack'} onChange={this.mealOptionChange}/>
					<label htmlFor="snack"><span className="bullet_icon"><i></i></span><span>Snack</span></label>
				</li>
			  </ul>


			</div>

			<div className="food_cat_drop">
			  <a data-toggle="collapse" data-target="#food_category" href="javascript:void(0)" className="food_cat_hdr">Food Category <span className="gray_up"></span>
			    </a>
			  <ul id="food_category" className="collapse in">
			    <li>
			    	<input className="" type="radio" id="all_food" name="food_categories"  checked={this.state.foodOption === 'all_food'} onChange={this.foodOptionChange}/>
					<label htmlFor="all_food"><span className="bullet_icon"><i></i></span><span>All Food Categories</span></label>
				</li>
				<li>
			    	<input className="" type="radio" id="vegetables" name="food_categories"  checked={this.state.foodOption === 'vegetables'} onChange={this.foodOptionChange}/>
					<label htmlFor="vegetables"><span className="bullet_icon"><i></i></span><span>Vegetables <a className="category">V</a></span></label>
				</li>
				<li>
			    	<input className="" type="radio" id="lean_protein" name="food_categories"  checked={this.state.foodOption === 'lean_protein'} onChange={this.foodOptionChange}/>
					<label htmlFor="lean_protein"><span className="bullet_icon"><i></i></span><span>Lean Protein <a className="category">lp</a></span></label>
				</li>
				<li>
			    	<input className="" type="radio" id="healthyfat" name="food_categories"  checked={this.state.foodOption === 'healthyfat'} onChange={this.foodOptionChange}/>
					<label htmlFor="healthyfat"><span className="bullet_icon"><i></i></span><span>Healthy Fat <a className="category">hp</a></span></label>
				</li>
				<li>
			    	<input className="" type="radio" id="fruit" name="food_categories"  checked={this.state.foodOption === 'fruit'} onChange={this.foodOptionChange}/>
					<label htmlFor="fruit"><span className="bullet_icon"><i></i></span><span>Fruit <a className="category">f</a></span></label>
				</li>
				<li>
			    	<input className="" type="radio" id="good_carbs" name="food_categories"  checked={this.state.foodOption === 'good_carbs'} onChange={this.foodOptionChange}/>
					<label htmlFor="good_carbs"><span className="bullet_icon"><i></i></span><span>Good Carbs <a className="category">gf</a></span></label>
				</li>
				<li>
			    	<input className="" type="radio" id="sb_breakfast" name="food_categories"  checked={this.state.foodOption === 'sb_breakfast'} onChange={this.foodOptionChange}/>
					<label htmlFor="sb_breakfast"><span className="bullet_icon"><i></i></span><span>SB Breakfast <a className="category">s</a></span></label>
				</li>
				<li>
			    	<input className="" type="radio" id="sb_lunch" name="food_categories"  checked={this.state.foodOption === 'sb_lunch'} onChange={this.foodOptionChange}/>
					<label htmlFor="sb_lunch"><span className="bullet_icon"><i></i></span><span>SB Lunch <a className="category">s</a></span></label>
				</li>
				<li>
			    	<input className="" type="radio" id="sb_dinner" name="food_categories"  checked={this.state.foodOption === 'sb_dinner'} onChange={this.foodOptionChange}/>
					<label htmlFor="sb_dinner"><span className="bullet_icon"><i></i></span><span>SB Dinner <a className="category">d</a></span></label>
				</li>
				<li>
			    	<input className="" type="radio" id="extras" name="food_categories"  checked={this.state.foodOption === 'extras'} onChange={this.foodOptionChange}/>
					<label htmlFor="extras"><span className="bullet_icon"><i></i></span><span>Extras <a className="category">ex</a></span></label>
				</li>

			  </ul>

			</div>
		</div>
		<div className="log_food_rht pull-right">
		<ul className="entry_section">
					<li className="active"><a href="#recipes" data-toggle="tab">Recipes</a></li>
					<li><a href="#recent" data-toggle="tab">Recent</a></li>
					<li><a href="#favorites" data-toggle="tab">Favorites</a></li>
				</ul>
				<div className="gap"></div>

				<div className="tab-content">
					<div className="tab-pane active" id="recipes">
						<div className="food_log_sec">
							
								<div className="log_left">
								<a href="javascript:void(0)" data-target="#log_food" data-toggle="modal">
									<div className="logged_txt">Asparagus Omelets with Goat Cheese</div>
									<div><span className="log_count">1</span> <i className="category">v</i><span className="log_count">1</span> <i className="category">lp</i><span className="log_count">1</span> <i className="category">hf</i><span className="calories_count">150 calories</span></div>
									</a>
								</div>
								<div className="log_right">
									 <a href="javascript:void(0)" data-toggle="modal" data-target="#edit_log_food" className="right_arrow"> <img src="https://s3.amazonaws.com/tracker-html-render/images/gray_arrow_right.png"/></a>
									
						        </div>
				        </div>
						<div className="food_log_sec">
							<div className="log_left">
								<div className="logged_txt">Apple Strudel Bar</div>
								<div><span className="log_count">1</span> <i className="category">v</i><span className="log_count">1</span> <i className="category">lp</i><span className="log_count">1</span> <i className="category">hf</i><span className="calories_count">150 calories</span></div>
							</div>
							<div className="log_right"> <img src="https://s3.amazonaws.com/tracker-html-render/images/error.png"/> &nbsp;&nbsp;&nbsp;
									 <a href="javascript:void(0)" data-toggle="modal" data-target="#edit_log_food" className="right_arrow"> <img src="https://s3.amazonaws.com/tracker-html-render/images/gray_arrow_right.png"/></a>
									
						        </div>
				        </div>
						<div className="food_log_sec">
							<div className="log_left">
								<div className="logged_txt"> Bread, Oatmeal, tosted</div>
								<div><span className="log_count">1</span> <i className="category">v</i><span className="log_count">1</span> <i className="category">lp</i><span className="log_count">1</span> <i className="category">hf</i><span className="calories_count">150 calories</span></div>
							</div>
							<div className="log_right">
									 <a href="javascript:void(0)" data-toggle="modal" data-target="#edit_log_food" className="right_arrow"> <img src="https://s3.amazonaws.com/tracker-html-render/images/gray_arrow_right.png"/></a>
									 
						        </div>
				        </div>
						<div className="food_log_sec">
							<div className="log_left">
								<div className="logged_txt">Cinnamon Bun</div>
								<div><span className="log_count">1</span> <i className="category">v</i><span className="log_count">1</span> <i className="category">lp</i><span className="log_count">1</span> <i className="category">hf</i><span className="calories_count">150 calories</span></div>
							</div>
							<div className="log_right"> <img src="https://s3.amazonaws.com/tracker-html-render/images/error.png"/> &nbsp;&nbsp;&nbsp;
									 <a href="javascript:void(0)" data-toggle="modal" data-target="#edit_log_food" className="right_arrow"> <img src="https://s3.amazonaws.com/tracker-html-render/images/gray_arrow_right.png"/></a>
									 
						        </div>
				        </div>
						<div className="food_log_sec">
							<div className="log_left">
								<div className="logged_txt">Apple Slices</div>
								<div><span className="log_count">1</span> <i className="category">v</i><span className="log_count">1</span> <i className="category">lp</i><span className="log_count">1</span> <i className="category">hf</i><span className="calories_count">150 calories</span></div>
							</div>
							<div className="log_right"> <img src="https://s3.amazonaws.com/tracker-html-render/images/error.png"/> &nbsp;&nbsp;&nbsp;
									 <a href="javascript:void(0)" data-toggle="modal" data-target="#edit_log_food" className="right_arrow"> <img src="https://s3.amazonaws.com/tracker-html-render/images/gray_arrow_right.png"/></a>
									
						        </div>
				        </div>
						<div className="food_log_sec">
							<div className="log_left">
								<div className="logged_txt">Apple Strudel Bar</div>
								<div><span className="log_count">1</span> <i className="category">v</i><span className="log_count">1</span> <i className="category">lp</i><span className="log_count">1</span> <i className="category">hf</i><span className="calories_count">150 calories</span></div>
							</div>
							<div className="log_right">
									 <a href="javascript:void(0)" data-toggle="modal" data-target="#edit_log_food" className="right_arrow"> <img src="https://s3.amazonaws.com/tracker-html-render/images/gray_arrow_right.png"/></a>
								
						        </div>
				        </div>
						<div className="food_log_sec">
							<div className="log_left">
								<div className="logged_txt"> Bread, Oatmeal, tosted</div>
								<div><span className="log_count">1</span> <i className="category">v</i><span className="log_count">1</span> <i className="category">lp</i><span className="log_count">1</span> <i className="category">hf</i><span className="calories_count">150 calories</span></div>
							</div>
							<div className="log_right">
									 <a href="javascript:void(0)" className="right_arrow"> <img src="https://s3.amazonaws.com/tracker-html-render/images/gray_arrow_right.png"/></a>
									 
						        </div>
				        </div>

					</div>
					<div className="tab-pane" id="recent">

						<div className="food_log_sec">
							
								<div className="log_left">
								<a href="javascript:void(0)" data-target="#log_food" data-toggle="modal">
									<div className="logged_txt">Asparagus Omelets with Goat Cheese</div>
									<div><span className="log_count">1</span> <i className="category">v</i><span className="log_count">1</span> <i className="category">lp</i><span className="log_count">1</span> <i className="category">hf</i><span className="calories_count">150 calories</span></div>
									</a>
								</div>
								<div className="log_right">
									 <a href="javascript:void(0)" className="right_arrow"> <img src="https://s3.amazonaws.com/tracker-html-render/images/gray_arrow_right.png"/></a>
																		
						        </div>
				        </div>
						<div className="food_log_sec">
							<div className="log_left">
								<div className="logged_txt">Apple Strudel Bar</div>
								<div><span className="log_count">1</span> <i className="category">v</i><span className="log_count">1</span> <i className="category">lp</i><span className="log_count">1</span> <i className="category">hf</i><span className="calories_count">150 calories</span></div>
							</div>
							<div className="log_right"> <img src="https://s3.amazonaws.com/tracker-html-render/images/error.png"/> &nbsp;&nbsp;&nbsp;
									 <a href="javascript:void(0)" data-toggle="modal" data-target="#edit_log_food" className="right_arrow"> <img src="https://s3.amazonaws.com/tracker-html-render/images/gray_arrow_right.png"/></a>
									
						        </div>
				        </div>
						<div className="food_log_sec">
							<div className="log_left">
								<div className="logged_txt"> Bread, Oatmeal, tosted</div>
								<div><span className="log_count">1</span> <i className="category">v</i><span className="log_count">1</span> <i className="category">lp</i><span className="log_count">1</span> <i className="category">hf</i><span className="calories_count">150 calories</span></div>
							</div>
							<div className="log_right">
									 <a href="javascript:void(0)" data-toggle="modal" data-target="#edit_log_food" className="right_arrow"> <img src="https://s3.amazonaws.com/tracker-html-render/images/gray_arrow_right.png"/></a>
									
						        </div>
				        </div>
						<div className="food_log_sec">
							<div className="log_left">
								<div className="logged_txt">Cinnamon Bun</div>
								<div><span className="log_count">1</span> <i className="category">v</i><span className="log_count">1</span> <i className="category">lp</i><span className="log_count">1</span> <i className="category">hf</i><span className="calories_count">150 calories</span></div>
							</div>
							<div className="log_right">  <img src="https://s3.amazonaws.com/tracker-html-render/images/error.png"/> &nbsp;&nbsp;&nbsp;
									 <a href="javascript:void(0)" data-toggle="modal" data-target="#edit_log_food" className="right_arrow"> <img src="https://s3.amazonaws.com/tracker-html-render/images/gray_arrow_right.png"/></a>
																		
						        </div>
				        </div>
						<div className="food_log_sec">
							<div className="log_left">
								<div className="logged_txt">Apple Slices</div>
								<div><span className="log_count">1</span> <i className="category">v</i><span className="log_count">1</span> <i className="category">lp</i><span className="log_count">1</span> <i className="category">hf</i><span className="calories_count">150 calories</span></div>
							</div>
							<div className="log_right"> <img src="https://s3.amazonaws.com/tracker-html-render/images/error.png"/> &nbsp;&nbsp;&nbsp;
									 <a href="javascript:void(0)" className="right_arrow"> <img src="https://s3.amazonaws.com/tracker-html-render/images/gray_arrow_right.png"/></a>
									
						        </div>
				        </div>
						<div className="food_log_sec">
							<div className="log_left">
								<div className="logged_txt">Apple Strudel Bar</div>
								<div><span className="log_count">1</span> <i className="category">v</i><span className="log_count">1</span> <i className="category">lp</i><span className="log_count">1</span> <i className="category">hf</i><span className="calories_count">150 calories</span></div>
							</div>
							<div className="log_right">
									 <a href="javascript:void(0)" className="right_arrow"> <img src="https://s3.amazonaws.com/tracker-html-render/images/gray_arrow_right.png"/></a>
									
						        </div>
				        </div>
						<div className="food_log_sec">
							<div className="log_left">
								<div className="logged_txt"> Bread, Oatmeal, tosted</div>
								<div><span className="log_count">1</span> <i className="category">v</i><span className="log_count">1</span> <i className="category">lp</i><span className="log_count">1</span> <i className="category">hf</i><span className="calories_count">150 calories</span></div>
							</div>
							<div className="log_right">
									 <a href="javascript:void(0)" className="right_arrow"> <img src="https://s3.amazonaws.com/tracker-html-render/images/gray_arrow_right.png"/></a>
									
						        </div>
				        </div>


					</div>
					<div className="tab-pane" id="favorites">

<div className="food_log_sec">
							
								<div className="log_left">
								<a href="javascript:void(0)" data-target="#log_food" data-toggle="modal">
									<div className="logged_txt">Asparagus Omelets with Goat Cheese</div>
									<div><span className="log_count">1</span> <i className="category">v</i><span className="log_count">1</span> <i className="category">lp</i><span className="log_count">1</span> <i className="category">hf</i><span className="calories_count">150 calories</span></div>
									</a>
								</div>
								<div className="log_right">
									 <a href="javascript:void(0)" data-toggle="modal" data-target="#edit_log_food" className="right_arrow"> <img src="https://s3.amazonaws.com/tracker-html-render/images/gray_arrow_right.png"/></a>
								
						        </div>
				        </div>
						<div className="food_log_sec">
							<div className="log_left">
								<div className="logged_txt">Apple Strudel Bar</div>
								<div><span className="log_count">1</span> <i className="category">v</i><span className="log_count">1</span> <i className="category">lp</i><span className="log_count">1</span> <i className="category">hf</i><span className="calories_count">150 calories</span></div>
							</div>
							<div className="log_right"> <img src="https://s3.amazonaws.com/tracker-html-render/images/error.png"/> &nbsp;&nbsp;&nbsp;
									 <a href="javascript:void(0)" data-toggle="modal" data-target="#edit_log_food" className="right_arrow"> <img src="https://s3.amazonaws.com/tracker-html-render/images/gray_arrow_right.png"/></a>
									
						        </div>
				        </div>
						<div className="food_log_sec">
							<div className="log_left">
								<div className="logged_txt"> Bread, Oatmeal, tosted</div>
								<div><span className="log_count">1</span> <i className="category">v</i><span className="log_count">1</span> <i className="category">lp</i><span className="log_count">1</span> <i className="category">hf</i><span className="calories_count">150 calories</span></div>
							</div>
							<div className="log_right">
									 <a href="javascript:void(0)" data-toggle="modal" data-target="#edit_log_food" className="right_arrow"> <img src="https://s3.amazonaws.com/tracker-html-render/images/gray_arrow_right.png"/></a>
									 
						        </div>
				        </div>
						<div className="food_log_sec">
							<div className="log_left">
								<div className="logged_txt">Cinnamon Bun</div>
								<div><span className="log_count">1</span> <i className="category">v</i><span className="log_count">1</span> <i className="category">lp</i><span className="log_count">1</span> <i className="category">hf</i><span className="calories_count">150 calories</span></div>
							</div>
							<div className="log_right"> <img src="https://s3.amazonaws.com/tracker-html-render/images/error.png"/> &nbsp;&nbsp;&nbsp;
									 <a href="javascript:void(0)" className="right_arrow"> <img src="https://s3.amazonaws.com/tracker-html-render/images/gray_arrow_right.png"/></a>
																		
						        </div>
				        </div>
						<div className="food_log_sec">
							<div className="log_left">
								<div className="logged_txt">Apple Slices</div>
								<div><span className="log_count">1</span> <i className="category">v</i><span className="log_count">1</span> <i className="category">lp</i><span className="log_count">1</span> <i className="category">hf</i><span className="calories_count">150 calories</span></div>
							</div>
							<div className="log_right"> <img src="https://s3.amazonaws.com/tracker-html-render/images/error.png"/> &nbsp;&nbsp;&nbsp;
									 <a href="javascript:void(0)" className="right_arrow"> <img src="https://s3.amazonaws.com/tracker-html-render/images/gray_arrow_right.png"/></a>
																		
						        </div>
				        </div>
						<div className="food_log_sec">
							<div className="log_left">
								<div className="logged_txt">Apple Strudel Bar</div>
								<div><span className="log_count">1</span> <i className="category">v</i><span className="log_count">1</span> <i className="category">lp</i><span className="log_count">1</span> <i className="category">hf</i><span className="calories_count">150 calories</span></div>
							</div>
							<div className="log_right">
									 <a href="javascript:void(0)" className="right_arrow"> <img src="https://s3.amazonaws.com/tracker-html-render/images/gray_arrow_right.png"/></a>
									
						        </div>
				        </div>
						<div className="food_log_sec">
							<div className="log_left">
								<div className="logged_txt"> Bread, Oatmeal, tosted</div>
								<div><span className="log_count">1</span> <i className="category">v</i><span className="log_count">1</span> <i className="category">lp</i><span className="log_count">1</span> <i className="category">hf</i><span className="calories_count">150 calories</span></div>
							</div>
							<div className="log_right">
									 <a href="javascript:void(0)" className="right_arrow"> <img src="https://s3.amazonaws.com/tracker-html-render/images/gray_arrow_right.png"/></a>
							 </div>
				        </div>

					</div>
				</div>
				</div>
		
</div>
	<div className="clearit"></div>

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

			<DropdownList/>
      </div>
		);
	}
}


class DropdownList extends React.Component {

	constructor() {
    super();
    this.state = {default_value:1,default_value1:1,readOnly: 'readOnly'};
 	$('.drop_txt li  a').click(function(){
 		alert();
		$('.select_replace').text($(this).text());
	});
  }


	

   render() {
      return (
	<div className="modal fade log_food" id="edit_log_food"  role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><img src="https://s3.amazonaws.com/tracker-html-render/images/close_white.png"/></button>
            <h2 className="modal-title">Log Food</h2>
          </div>
          <div className="modal-body">
	          
            	<div className="calories_big">375 Calories</div>
            	<div className="food_name_sec">
	            	<div className="pull-left food_name">Bread, Oatmeal, tosted</div><div className="pull-left"><span className="phase1_color"></span><span className="phase_no">1</span><span className="phase2_color"></span><span className="phase_no">2</span><span className="phase3_color"></span><span className="phase_no">3</span></div><div className=" pull-right fav_txt"><span className="add_fav"></span><span className="add_to_fav">Add to Favorites</span></div>
	            </div>

            <ul className="entry_section log_food_sec">
					<li className="active"><a href="#calories" data-toggle="tab">Calories</a></li>
					<li><a href="#recipe" data-toggle="tab">Recipe</a></li>
					<li><a href="#nutrition" data-toggle="tab">Nutrition</a></li>
				</ul>
				<div className="tab-content log_food_tab">
					<div className="tab-pane active" id="calories">
					<div className="edit_top">
					<div className="food_count"><span className="item_count">1</span><i className="category">lp</i><span className="item_count">1</span><i className="category">D</i></div>
					<div className="select_sec"><span className="item_hdr">Servings</span>
					<input type="number" className="log_servings select_parent" data-toggle="tooltip" required="" min="0" step="0.5" max="25"/>
						</div>
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
			        	<div className="select_sec">
			        		<span className="item_hdr">Date</span>
			        		<span className="date_section">
					                <input type="text" className="input-group-addon select_parent serve_date log_food_date" id="datetimepicker_edit_log_food"/>
					               </span>
						</div>
						<div><button className="copy_btn"><img src="https://s3.amazonaws.com/tracker-html-render/images/copy.png"/> COPY</button><button className="remove_btn"><img src="https://s3.amazonaws.com/tracker-html-render/images/remove_icon.png"/> REMOVE</button><button className="save_log_food">SAVE CHANGES</button></div>
					</div>
					</div>
					<div className="tab-pane" id="recipe">
					<p className="recipe_small_txt recipe_hdr">About this recipe</p>
					<p className="recipe_small_txt">Etiam porta sem malesuada magna mollis euismod. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
					<a href="overview_phase1.html" className="log_it see_detail">SEE DETAILS</a>
					</div>
					<div className="tab-pane" id="nutrition">

						<div className="nutrition-facts-wrapper" itemprop="nutrition"  itemtype="http://schema.org/NutritionInformation">
            <table className="table nutrition-facts-table" border="0" cellPadding="0" cellSpacing="0" align="center">
              <thead>
                <tr>
                  <th colSpan="2">Nutrition Facts </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="2">Serving Size 1 Package</td>
                </tr>
                <tr className="divider">
                  <td colSpan="2">Serving Per Container 4</td>
                </tr>
                <tr>
                  <td className="amount"><strong>Amount Per Serving</strong></td>
                  <td></td>
                </tr>
                <tr className="sm-divider">
                  <td colSpan="2"><span itemprop="calories"><strong>Calories</strong> 170</span> <span className="pull-right">Calories from Fat 45</span></td>
                </tr>
                <tr className="text-right">
                  <td></td>
                  <td><strong>% Daily Value*</strong></td>
                </tr>
                <tr>
                  <td itemprop="fatContent"><strong>Total Fat</strong> 5g</td>
                  <td className="text-right"><strong>8</strong>%</td>
                </tr>
                <tr>
                  <td className="inset" itemprop="saturatedFatContent">Saturated Fat 5g</td>
                  <td className="text-right"><strong>15</strong>%</td>
                </tr>
                <tr>
                  <td itemprop="transFatContent" className="inset"><em>Trans</em> Fat 0g</td>
                  <td></td>
                </tr>
                <tr>
                  <td itemprop="cholesterolContent"><strong>Cholesterol</strong> 30g</td>
                  <td className="text-right"><strong>10</strong>%</td>
                </tr>
                <tr>
                  <td itemprop="sodiumContent"><strong>Sodium</strong> 135mg</td>
                  <td className="text-right"><strong>6</strong>%</td>
                </tr>
                <tr>
                  <td itemprop="carbohydrateContent"><strong>Total Carbs</strong> 23g</td>
                  <td className="text-right"><strong>8</strong>%</td>
                </tr>
                <tr>
                  <td itemprop="fiberContent" className="inset">Fiber 5g</td>
                  <td className="text-right"><strong>20</strong>%</td>
                </tr>
                <tr>
                  <td className="inset" itemprop="sugarContent">Sugars 12g</td>
                  <td></td>
                </tr>
                <tr className="divider">
                  <td itemprop="proteinContent"><strong>Protein</strong> 7g</td>
                  <td className="text-right"><strong>14</strong>%</td>
                </tr>
               
                <tr>
                  <td colSpan="2" className="sm-table">*Percent Daily Values are based on a 2,000 calorie diet. Your daily values may be higher or lower depending on your calories needs:
                    </td>
                </tr>
              </tbody>
            </table>
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