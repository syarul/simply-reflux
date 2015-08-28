var React = require('react'),
    ReactFireMixin = require('reactfire'),
    Firebase = require('firebase');

module.exports = React.createClass({
    displayName: 'FirebaseApp',
    //testing firebase+react
    mixins: [ReactFireMixin],
    getInitialState: function() {
        var temp = '...';
        return {
            singleObject: {
                '.key': temp,
                '.value': temp
            },
            array: {
                '.key': temp,
                'name': temp,
                'age': temp
            }
        };
    },
    componentWillMount: function() {
        this.bindAsObject(new Firebase('https://scorching-inferno-2673.firebaseio.com/data'), 'singleObject');
        this.bindAsObject(new Firebase('https://scorching-inferno-2673.firebaseio.com/items'), 'array');
    },
    render: function() {
        var datafromfirebase = this.state.singleObject;
        var arrayfromfirebase = this.state.array;
        //console.log(this.state.array)
        return (
            <div>
                <h1 className="header">
                   Firebase Test
   
                </h1>
                <p>Object</p>
                <ul>
                <li>key: {datafromfirebase['.key']}</li>
                <li>value: {datafromfirebase['.value']}</li>
                </ul>
                <p>Array</p>
                <ul>
                <li>key: {arrayfromfirebase['.key']}</li>
                <li>name: {arrayfromfirebase['name']}</li>
                <li>age: {arrayfromfirebase['age']}</li>
                </ul>
            </div>
     
        );
    }
});