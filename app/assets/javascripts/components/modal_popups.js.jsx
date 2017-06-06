
 class BMI_popup extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment(),
      item_count:1,readOnly: 'readOnly'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
  componentDidMount() {
$('.bmi_popup button').click(function(){
$('.modal').modal('hide');
});
  }
render() {
    return (

      <div className="modal fade log_food">
      <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-body">
            <div className="numi_account bmi_popup">          
               <img src="/assets/warning_tri.png" className="warning"/>
              <h3>Your BMI is unhealthy. Please consult your physician for more details</h3>
              <button>OK</button>
            </div>
        </div>
        </div> 
        </div>
        </div>

        )
  }
}

       
var sampleModalId = 'edit_food_popup';
var Modal_popup = React.createClass({
  handleShowSampleModal: function() {
    var modalContainer = document.createElement('div');
    modalContainer.id = sampleModalId;
    document.body.appendChild(modalContainer);
    ReactDOM.render(<BMI_popup/>, modalContainer, function() {
      var modalObj = $('#'+sampleModalId).find('.modal');
      modalObj.modal('show');
      modalObj.on('hidden.bs.modal', this.handleHideSampleModal);
    }.bind(this));
  },
  handleHideSampleModal: function() {
    $('#'+sampleModalId).remove();
  },
  render: function(){    
    return (
      <div>
        <a href="javascript:void(0);" className="text-center" onClick={this.handleShowSampleModal}><p><input type="submit" className="submit_btn" value="Continue" /></p></a>
      </div>
    )
  }
});


    





 class BMI_unhealthy extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment(),
      item_count:1,readOnly: 'readOnly'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
  componentDidMount() {
$('.bmi_popup button').click(function(){
$('.modal').modal('hide');
});
  }
render() {
    return (

      <div className="modal fade log_food">
      <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-body">
            <div className="numi_account bmi_popup">          
               <img src="/assets/warning_tri.png" className="warning"/>
              <h3>The entered weight is below your healthy weight range.</h3>
              <button>OK</button>
            </div>
        </div>
        </div> 
        </div>
        </div>

        )
  }
}

       
var sampleModalId = 'edit_food_popup';
var Modal_popup1 = React.createClass({
  handleShowSampleModal: function() {
    var modalContainer = document.createElement('div');
    modalContainer.id = sampleModalId;
    document.body.appendChild(modalContainer);
    ReactDOM.render(<BMI_unhealthy/>, modalContainer, function() {
      var modalObj = $('#'+sampleModalId).find('.modal');
      modalObj.modal('show');
      modalObj.on('hidden.bs.modal', this.handleHideSampleModal);
    }.bind(this));
  },
  handleHideSampleModal: function() {
    $('#'+sampleModalId).remove();
  },
  render: function(){    
    return (
      <div>
        <a href="javascript:void(0);" className="text-center" onClick={this.handleShowSampleModal}><p><input type="submit" className="submit_btn" value="Continue" /></p></a>
      </div>
    )
  }
});
