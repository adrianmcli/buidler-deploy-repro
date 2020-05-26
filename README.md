# Local test-chain deployment bug reproduction repo

Whne running `buidler listen --export deploys.json` is supposed to:

1. Run Buidler EVM
2. Run the deploy scripts in the `/deploy` folder
3. Print out the deployed addresses to `deploys.json`

However, if you examine `deploys.json`, you will only find the following:

```json
{
  "chainId": "0x7a69",
  "contracts": {}
}
```

Note that there are no contract addresses.

## To test

Run `npm run node`, which will basically run `buidler listen --export deploys.json`.
