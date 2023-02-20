# cloudflare-worker-proxy

## Deploying
* Clone this repository or fork and then clone your fork
* Update `src/index.ts` with your desired domains
* Run `wrangler publish src/index.ts --name cloudflare-origin-proxy` to publish your worker

## Dev Container
```bash
docker run -d -it --network=host -v ~/cloudflare-worker-proxy:/cloudflare-worker-proxy --name cloudflare-worker-proxy-nodejs node:19 /cloudflare-worker-proxy/utilities/use-omz.sh
```

## Inspired By
- https://developers.cloudflare.com/rules/origin-rules/
- https://developers.cloudflare.com/workers/examples/bulk-origin-proxy/
