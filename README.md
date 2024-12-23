# substreams-example

Sample of Solana block info retrieved with substrems and subgraph API.

## Usage

Start the container with Devcontainer in advance. See below for details.

- https://github.com/streamingfast/substreams-starter/tree/cc97ae69e8e83d59ebe9c060a5edab265d285d7c/.devcontainer#clone-in-local-vscode

Execute the following command to deploy subgraph on the graph-node.

```sh
# substremas build

cd substreams/solana
substreams build

# substreams auth

cd -
substreams auth

# subgraph deploy

cd subgraphs/solana
npm run deploy-local
```

