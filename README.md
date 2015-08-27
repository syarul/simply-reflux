# simply-reflux
Simplest way to understand react + flux using [reflux](https://github.com/reflux/refluxjs)  implementation. I try to keep it clean with fewest modules as possible. The application itself does only one simple thing to update a counter with a single button. Though the underlaying structure of this manifest the reflux architecture of unidirectional dataflow.

Update 1: added few sample pages routing and 404 page, require static file server with HTML5 Push State.
Update 2: added firebase test.

#installation
```
clone repo
npm install
gulp
```
BrowserSync up and start hacking with live reload.

#pushstate-server

To run the app with static file server that support HTML5 Push State,
```
npm start
```
visit http://localhost:4200/

#todo

Will add more features for testing purpose.
