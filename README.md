# Notes

This project is a simple note-taking app that can create and display notes. All notes are displayed by default, in chronological order. You can create a new note with a tag (Business, Personal, or Hobby) and it will be displayed at the top of the notes list. 

This app is written in vanilla javascript and JQuery, and is hosted at [https://duranangela.github.io/notes/](https://duranangela.github.io/notes/). 

<img width="693" alt="screen shot 2018-12-28 at 12 28 21 pm" src="https://user-images.githubusercontent.com/35884097/50527518-023e5880-0aa6-11e9-8c6f-5d6133728606.png">

The backend is built through AWS, using API Gateway, Lambda, and DynamoDB. It is directly available [here](https://ba2w3lgnm5.execute-api.us-west-1.amazonaws.com/prod/), and has two endpoints, get '/todos' and post '/todos'.

The two lambda files included in the repo are copies of the actual code used for AWS Lambda.
