# nodejs-dynamodb-crud
An example project in NodeJS to perform CRUD operations with DynamoDB.

# Running the application 🚀

Clone this project, you'll find a `docker-compose.yml` file at the root, it contains a dependency on `localstack`. It is nothing but AWS dynamodb module wrapper for local testing on development, ideally if you don't use this approach you'll have to additionally integrate AWS(fine for production use!) even for playing around with DynamoDB therefore I've used localstack to avoid unnecesarry integration of AWS and quickly get up and playing with DynamoDB. 

1. Run the `docker-compose.yml` file.
2. When the localstack image is ready, you're good to test the CRUD operations. Navigate to `src/examples` dir, pickup a file of your choice, and simply run `node ${fileName}` and you'll see the output in your terminal.



