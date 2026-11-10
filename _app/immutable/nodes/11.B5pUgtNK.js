import{C as e,D as t,M as n,N as r,P as i,S as a,T as o,g as s,i as c,j as l,m as u,r as d,w as f,x as p}from"../chunks/CEhEv8CO.js";import{r as m}from"../chunks/BqRiXfu2.js";var h=s(`<h1>Library</h1> <p>Import <code>github.com/dbadminer/dbadminer</code> and pass the pool you already have. The library
	module imports only the Go standard library. <code>cmd/dbadminer</code> is its own module, so
	importing the library does not pull in database drivers.</p> <pre><code>cfg := dbadminer.DefaultConfig()
ex, err := dbadminer.New(db, cfg)
if err != nil &#123;
	log.Fatal(err)
&#125;
if err := ex.ListenAndServe(ctx); err != nil &#123;
	log.Fatal(err)
&#125;</code></pre> <p><code>DefaultConfig</code> is read-only and listens on <code>127.0.0.1:8080</code>. <code>New</code> keeps a zero <code>Config</code> read-only too. Choose the mode with <code>Access</code>:</p> <pre><code>cfg := dbadminer.DefaultConfig()
cfg.Access = dbadminer.AccessFull // or dbadminer.AccessReadOnly</code></pre> <p>Setting <code>ReadOnly</code> to false on that configured value still selects full access. <code>ListenAndServe</code> accepts a loopback address, <code>0.0.0.0</code>, or <code>::</code>. A
	specific public address is refused.</p> <p>Mount <code>ex.Handler()</code> on your own server if you want. Requests whose <code>Host</code> header is not loopback are rejected, and a present <code>Origin</code> must match that host.</p> <h2>Examples</h2> <p>See <code>examples/http</code>, <code>examples/chi</code>, and <code>examples/cobra</code> in the <a rel="noopener noreferrer" target="_blank">repository</a>.</p>`,1);function g(s,g){n(g,!0);var _=h();c(`1jzabyo`,t=>{p(()=>{e.title=`Library · ${m.name??``}`})});var v=t(o(_),16),y=t(f(v),7);r(),i(v),a(()=>d(y,`href`,m.github)),u(s,_),l()}export{g as component};