<h1>Steps to spin up the api on local</h1>

1. Clone the repo into your local folder

2. using terminal go to the project folder

3. run npm i to install dependencies


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
   ![Screenshot 2024-08-12 at 5 50 56 pm](https://github.com/user-attachments/assets/21a86679-92d9-4df5-b7ec-65cdaa46320b)


7. After this step , you can create a db with a desired name

8. Run the below commands against the db to create a table and stored procs


<p>Script to create table</p>
[Table Creation script.zip](https://github.com/user-attachments/files/16578832/Table.Creation.script.zip)
<p>Scripts to create stored proc</p>
[StoredProc_GenerationScripts.zip](https://github.com/user-attachments/files/16578837/StoredProc_GenerationScripts.zip)

9. Create some sample data inside the product table
10. modify the .env file and fill the details of your db name, database user, database password, host etc
11. Once done, run the below command to spin up the api server
    `node index.js`
    <img width="786" alt="Screenshot 2024-08-12 at 6 04 54 pm" src="https://github.com/user-attachments/assets/63d52bd4-481f-4693-933c-a4a2be6f6f61">

13. install postman and import the postman collection to get the endpoints for getAllProducts, deleteProduct, updateProduct, fetchProductById.
    [Product Inventory.postman_collection.json](https://github.com/user-attachments/files/16577585/Product.Inventory.postman_collection.json)

    ![Screenshot 2024-08-12 at 6 05 43 pm](https://github.com/user-attachments/assets/75ab65b9-b247-4365-b83a-0f81a48438b0)

