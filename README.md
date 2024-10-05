Simple to do app created for demonstration purposes. Uses Svelte and GraphQL.

*Note that you will need to have [Node.js](https://nodejs.org) installed.*

---

# svelte app

Before excute client, Graqhql server is required.
If not yet, check [this](https://techformist.com/spin-up-your-own-local-graphql-server-within-15-min/).

```bash
npx postgraphile -c 'postgres://<user name>:<pass>@localhost/<database name>' --watch -p 5050 --cors
```

↑You need to set 'id' as <strong>primary key</strong>. Otherwise CRUD operation is not avairable.  

## Get started

Clone this repository...

Install the dependencies...

```bash
cd prj_svelte_graphql_todolist
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.