import{C as e,D as t,M as n,N as r,P as i,S as a,T as o,f as s,g as c,i as l,j as u,m as d,w as f,x as p}from"../chunks/CEhEv8CO.js";import{r as m}from"../chunks/DVyEBs-7.js";var h=c(`<h1>Quick start</h1> <p> <code>*sql.DB</code> you already have, or run the Docker image.</p> <h2>Pick a path</h2> <ul><li><a href="/docs/install/">Install a release binary</a> and open <code>http://127.0.0.1:8080</code></li> <li><a href="/docs/library/">Embed the library</a> in an existing Go app</li> <li><a href="/docs/docker/">Run the Docker image</a> on loopback</li> <li><a href="/docs/cli/">Wire DSN and environment variables</a> for the CLI</li></ul> <h2>Five-minute library embed</h2> <pre><code>cfg := dbadminer.DefaultConfig()
ex, err := dbadminer.New(db, cfg)
if err != nil &#123;
	log.Fatal(err)
&#125;
if err := ex.ListenAndServe(ctx); err != nil &#123;
	log.Fatal(err)
&#125;</code></pre> <p>Import <code>github.com/dbadminer/dbadminer</code>. That import does not add database drivers to your
	module. <code>DefaultConfig</code> is read-only and listens on <code>127.0.0.1:8080</code>.</p> <h2>Safety first</h2> <p>Read-only mode is best effort. Prefer a database user that only has <code>SELECT</code>, and open
	SQLite with <code>mode=ro</code>. See <a href="/docs/security/">Security</a> before exposing the UI
	beyond your machine.</p>`,1);function g(c,g){n(g,!0);var _=h();l(`1xmjmrw`,t=>{p(()=>{e.title=`Quick start · ${m.name??``}`})});var v=t(o(_),2),y=f(v);r(2),i(v),r(14),a(()=>s(y,`${m.name??``} is a database explorer for Go. It starts read-only. Use a binary, embed the library next
	to a `)),d(c,_),u()}export{g as component};