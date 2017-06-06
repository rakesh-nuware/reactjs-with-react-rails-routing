
class ConnectDevice extends React.Component {
  

   render() {
      
      return (
         <div className="main_container">
         <Quicklinks/>
           <div className="forgot_password_hero">
           <div><img src="/assets/numi_small_logo.png" className="logo img-responsive"/></div>
              <div className="connect_device">
                <img src="/assets/back_white_icon.png" className="left_arrow"/>
              <div className="connect_device1">
                 <img src="/assets/connect_device.png" />
                <h3 className="hdr_txt">Connect your device</h3>
                <h5 className="hdr_txt">Connect devices to your account to help you achieve your fitness goals.</h5>
                
              <button>Connect Fitness Device</button>
                <p className="not_now">Not Now</p>
                </div>

                <div className="connect_device2">
                 <img src="/assets/connect_device.png" />
                <h3 className="hdr_txt">Stay on track</h3>
                <h5 className="hdr_txt">Get the ultimate guide for your weight loss journey: Delicious recipes. Encouragement and motivation. The hottest diet and workout tips. Special offers and promotions.All customized to your Nutrisystem plan. Take your inbox to the next level!</h5>
                <button>Enable</button>
                <p className="not_now">Not Now</p>
                </div>

              </div>
            </div>
          <Footer/>
         </div> 

      );
   }
} 