# Serverless Backends

## What are Backend Servers?
As of now we were writing backends on express and running on localhost on port 3000, using command `node index.js`.

When you have to deploy it on the internet there are few ways-
1. Go to `AWS`, `GCP`, `Azure` or `CloudFare`
    1. Rent a VM (Virtual Machines) and deploy your app
    2. Put it in an `Auto Scaling group`
    3. Deploy it in a Kubernetes Cluster

There are a few downsides to doing this-
1. Taking care of how/when to scale
2. Base cost even if no one is visiting you website
3. Monitoring various servers to make sure no server is down.

What if, you could just write the code and someone else could take care of all of these problems?

## Whare are `serverless` backends?
**"Serverless"** is a backend deployment in which the `cloud provider` dynamically manages the allocation and provisioning of servers. The term `serverless` doesnt mean there are no servers involved. Instead, it means that developers and operators **do not have to worry about servers**.

Simply, what if you could just write your express routes and run a comand. The app would automatically
1. **Deploy**
2. **Autoscale**
3. **Charge you on a `per request` basis (rather than you paying for VMs)**

### Prooblems with this approach
1. **More expensive at scale.**
2. **Cold start problem**. (as we are charged based on request, and there are no request for lets say few hours the provider will shut down servers for us.
But then suddenly a request comes, so at this point it takes a little more time to respond because to serve the request `processing/latency` will take time)
    * **One solution** can be to have a `warm pool` that means 1 server will always be up and then it can scale based on the number of request. (with a little more charge)

## Famous serverless providers
There are many famous backend serverless providers -
1. **AWS Lambda**
2. **Google Cloud Functions**
3. **Cloudflare workers**  (free, without CC, till some numbers of request)

## When should you use a serverless achitecture?
1. When you have to get off the ground fast and dont want to worry about deployments.
2. When you can not anticipate the traffic and dont want to worry about autoscaling.
3. If you have very low traffic and want to optimise for costs

## Cloudflare workers setup
Go to `Workers and pages` after login to `https://cloudflare.com/`
Try creating a test worker from the UI (Common worker examples) and try hitting the URL at which it is deployed

Check out how Cloudflare workers work.
https://developers.cloudflare.com/workers/reference/how-workers-works/#:~:text=Though Cloudflare Workers behave similarly,used by Chromium and Node.

## Initializing a worker
To create and deploy your application, you can take the following steps:
1. Initialize a worker
`npm create cloudflare -- my-app`
    Select Typescript as now you can.
    Select `no` for `Do you want to deploy your application`
    
2. You have a workspace now
3. Check out the dependencies `"wrangler": "^3.0.0"`, and no express or HTTP server.
4. Start the worker locally.
`npm run dev`
5. How to return json?
```tsx
export default {
    async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		return new Response('Hello World!'); 
	},
};
```

**Where is the express code? HTTP server?**
Cloudflare expects you to just write the logic to handle a request.
Creating an HTTP server on top is handled by cloudflare.

## `Routing` 
```ts
export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
	// 	return new Response('Hello World!'); 	
		console.log(request.body);
		console.log(request.headers);
		console.log(request.method);
		
		if (request.method === "GET") {
			return Response.json({
				message: "You sent a request"
			});
		} else {
			return Response.json({
				message: "You did not send a GET request"
			});
		}
	},
};
```

## Pushing the code
Using wrangler which is our cli
`npx wragelr login`
And it will open a page to log in, do that. try
`npx wrangler whoami`
And to deploy
`npm run deploy`

Note: Wrangler is a CLI to interact with cloudflare using CLI.


### Can we add express to cloudflare?
Express has a deep Node.js dependencies, which is not kind of thing of cloudflare runtime.
Yet there are very similar APIs like express
1. GitHub - **honojs/hono**: Ultrafast web framework for cloudflare workers, deno, bun and node.js
2. GitHub - **lukeed/worktop**: The next generation web framework for Cloudflare Workers
3. GitHub - **kwhitley/itty-router**: A little router

Lets try hono
1. Initialize a new app
`npm create hono@latest my-app2`
2. Move to `my-app2` and install the dependencies
```
cd my-app
npm i
```
3. Hello world
```js
import { Hono } from 'hono'
const app = new Hono()

app.get('/', (c) => c.text('Hello Cloudflare workers!'))

export default app
```

Checkout examples on official cloudflare website on workers.

