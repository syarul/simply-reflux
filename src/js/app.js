var Router = require('react-router'),
    React = require('react'),
    Layout = require('./layout');

var routes = (
        
            <Router.Route handler={Layout} path='/' >;
                <Router.Route handler={require('./components/About')} name="about" />;
                <Router.DefaultRoute handler={require('./components/DoCount')} name="docount" />;
                <Router.Route handler={require('./components/FirebaseApp')} name="firebase" />;
                <Router.NotFoundRoute handler={require('./components/NotFoundRoute')} />;
            </Router.Route>
        
    );

Router.run(routes, Router.HistoryLocation, function(Handler) {
    React.render(<Handler/>, document.getElementById('content'));
});