Before running, do a `npm install`
```
npm i
```

To run:
```
node app
```

To run the simulation at a specific time, simply specify the start date:
```
node app '2016-01-14T09:05:00+1000'
```
Any [valid Date dateString](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) will work

To run the tests:
```
npm test
```
A test watcher is also implemented:
```
npm run watch
```

My assumption is that at minute 0, the North and South lights are red.

I intentionally did not use any libraries (except for testing).