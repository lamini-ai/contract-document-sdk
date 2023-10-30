# Create a chat app that can be used to answer questions about documents
This is a simple ui app to run RAG(Retrieval Augmented Generation) on your data
1. Run ./make-app.sh script to get the tar version of the folder
2. Before ssh into machine, make sure you have enable tunnel forwarding to localhost:9001 ```ssh -L 9001:localhost:9001 USER@IPADDR```
3. Steps for running RAG app:
    1. Add your data in the data folder. A sample data has been added for you(its public documents available for contract)
    2. Run ./start-app.sh script, this script will create index and start frontend server
    3. Go to [http://localhost:9001](http://localhost:9001) to access the playground

# 

```
curl --location 'http://localhost:8001/v1/health/check' --header 'Authorization: Bearer test_token' --header 'Content-Type: application/json'
```
 
```
curl --location 'http://localhost:8001/v1/inference/embedding' --header 'Authorization: Bearer test_token' --header 'Content-Type: application/json' --data '{
   "prompt": "LaminiTest"
}'
```

```
curl --location 'http://localhost:8001/v2/lamini/completions' --header 'Authorization: Bearer test_token' --header 'Content-Type: application/json' --data '{
   "id": "LaminiTest",
"model_name": "meta-llama/Llama-2-7b-chat-hf",
   "in_value": {
     "question": "is pizza good?"      },
   "out_type": {
               "Answer": "str"
  }
}'
```

```
curl --location 'http://localhost:8001/v2/lamini/train' --header 'Authorization: Bearer test_token' --header 'Content-Type: application/json' --data '{
   "id": "LaminiTest",
   "model_name": "hf-internal-testing/tiny-random-gpt2",
"data": [      [{"input": "Larry"}, {"output": 1.0}],      [{"input": "Cici"}, {"output": 1.3}]  ],
"prompt_template": "{input:input}"
}'
```
