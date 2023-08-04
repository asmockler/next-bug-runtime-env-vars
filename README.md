# Reproduction of Runtime Environment Variables Bug

**Next @ 13.4.12, no runtime variable**

- Run `yarn build`
- Run the server with `node .next/standalone/server.js`
- Visit `localhost:3000`

You should see the following output:

```json
{ "TEST": "not set" }
```

**Next @ 13.4.12, with runtime variable**

- Stop the server
- Run the server again, this time with the environment variable set: `TEST=present node .next/standalone/server.js`
- Visit `localhost:3000`

You should see something like this:

```json
{ "TEST": "present" }
```

**Next @ 13.4.13-canary.14**

Do the same, thing, this time with next@canary:

```diff
-"next": "13.4.12",
+"next": "13.4.13-canary.14",
```

In both cases (`node .next/standalone/server.js` and `TEST=present node .next/standalone/server.js`), you will get:

```json
{ "TEST": "not set" }
```
