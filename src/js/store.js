(function(Reflux, TodoActions, global) {
    'use strict';

    var initCount = 0;

    global.todoListStore = Reflux.createStore({
        // this will set up listeners to all publishers in TodoActions
        listenables: [TodoActions],
        onPressBtn: function() {
            this.updateCount({
                pressCounter:initCount++
            });
        },
        // called whenever we change a count. normally this would mean a database API call
        updateCount: function(count){
            // if we used a real database, we would likely do the below in a callback
            this.count = count;
            this.trigger(count); // sends the updated count to all listening components (App)
        },
        getInitialState: function() {
              this.count = {
                    pressCounter: initCount++
                };
                return this.count;     
        }
    })

})(window.Reflux, window.TodoActions, window);