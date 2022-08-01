# ExpressJS template

## Requirements

| Requirement | Version  |
|-------------|----------|
| NodeJS      | 16+      |
| Docker      | 20.10.8+ |
| NPM         | 8+       |

---

## How to run the code

### Setup

1. Clone the repository.

    ```bash
    git clone git@github.com:AndreaPallotta/Templates.git
    ```

2. Navigate to the express directory

    ```bash
    cd Template/express
    ```

3. Run setup script to generate the `.env` file

    ```bash
    ./setup/env-gen.sh # UNIX
    ./setup/env-gen.bat # WINDOWS
    ```

4. Modify the .env file with your information

5. Install packages

    ```bash
    npm install
    ```

---

### CLI

1. Run npm start from the `express` directory

    ```bash
    npm start
    ```

    > Production npm commands coming soon

---

### DOCKER

1. If you modified the port number in the `.env` file, modify the `Dockerfile`

    - Open the `Dockerfile`
    - On line 8, change `EXPOSE 8081` with the same port in the `.env` file

2. From the CLI, build the docker image from the `express` directory

    ```bash
    docker build . -t express-node-app # The name is up to you
    ```

3. Verify that the image has been created successfully

    ```bash
    docker images

    # Example
    REPOSITORY         TAG        ID              CREATED
    node               16         3b66eb585643    5 days ago
    express-node-app   latest     d64d3505b0d2    1 minute ago
    ```

4. Run the image

    ```bash
    docker run -p 49160:<port-number> -d express-node-app
    # The port number depends on the EXPOSE field in the Dockerfile
    ```

5. Verify that the express server is running

    ```bash
    # Get container ID
    $ docker ps

    # Print app output
    $ docker logs <container id>

    # What you should see
    Server started on <host>:<port-number>
    ```

6. Stop the image

    ```bash
    docker kill <container id>
    ```
