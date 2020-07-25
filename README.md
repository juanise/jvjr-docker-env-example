# jvjr-docker-env example
Clone this repository.

Execute:
```
npm install
``` 
Execute app in local and see what happens.
```
npm start
```

Build docker image:
```
docker build -f Dockerfile-jvjr -t my-jvjr-image . 
``` 
Execute docker image:
```
docker run --rm --name jvjr -e REACT_APP_FIRST="First changed" -e REACT_APP_SECOND="Second changed" -e THIRD="Third with value" -p 8090:80 my-jvjr-image:latest 
```
