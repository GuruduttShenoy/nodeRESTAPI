<h1>Steps to spin up the api on local</h1>

1. Clone the repo into your local folder

2. using terminal go to the project folder

3. run npm i to install dependencies

Postman Collection for testing

[Product Inventory.postman_collection.json](https://github.com/user-attachments/files/16577585/Product.Inventory.postman_collection.json)

<h2>Steps to setup DB</h2>

1. Install docker
2. run the below command on your terminal

`sudo docker pull mcr.microsoft.com/mssql/server:2022-latest`

This command will exract the image of sql server into your local

3. run the below command to launch the image that we downloaded on to docker

`docker run -d --name sql_server_test -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=dockerStrongPwd123' -p 1433:1433 mcr.microsoft.com/mssql/server:2022-latest`

Notes: We can setup any password that we like in place of `dockerStrongPwd123` in  `'SA_PASSWORD=dockerStrongPwd123'`
       We can also give the database name we like in place of `sql_server_test` in `--name sql_server_test`

4. run `docker ps` to check and confirm that we have the sql server container up and running

5. To manage the database we can use Azure Data studio

`https://learn.microsoft.com/en-us/azure-data-studio/download-azure-data-studio?tabs=win-install%2Cwin-user-install%2Credhat-install%2Cwindows-uninstall%2Credhat-uninstall`

6. Once installed click on new connection and enter the required parameters to connect to sql server

7. After this step , you can create a db with a desired name

8. Run the below commands against the db to create a table and stored procs


