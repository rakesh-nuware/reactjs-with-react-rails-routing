var Route = ReactRouter.Route,
    DefaultRoute = ReactRouter.DefaultRoute;

this.MyRoutes = (
  <Route>
    <DefaultRoute handler={Onboarding} />
    <Route handler={ForgotPassword} path='forgot_password'/>
    <Route handler={Signup} path='Signup'/>
    <Route handler={Accountdetails} path='account_details'/>
    <Route handler={Homepage} path='Journal'/>
    <Route handler={Recipe_page} path='Recipe'/>
    <Route handler={Progress_page} path='Progress'/>
    <Route handler={Onboarding} path='login'/>
    <Route handler={Profile} path='Profile'/>
    <Route handler={ConnectDevice} path='ConnectDevice'/>
  </Route>
);
