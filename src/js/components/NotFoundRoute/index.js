var React = require('react');

module.exports = React.createClass({
    displayName: 'NotFoundRoute',
    render: function() {
        return (
            <h1 className="header">
               404 Not Found.
            </h1>
        );
    }
});