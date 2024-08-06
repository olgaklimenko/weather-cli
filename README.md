## CLI tool for retrieving the current weather in a specified city.

The weather data is sourced from the service openweathermap.org. Before running the tool, you need to register and obtain an `API_KEY` to use the service.

#### Usage:

```
TOKEN=[OPENWEATHERMAP_API_KEY] CITY=[CITY] node weather.js 
```

### Help:

```
node weather.js -h
```

### Set a default city:


```
node weather.js -s [CITY]
```

### Set the openweathermap.org token as default:


```
node weather.js -t [OPENWEATHERMAP_API_KEY]
```

If token and city are set by default, you can run the tool without specifying environment variables:

```
node weather.js
```

