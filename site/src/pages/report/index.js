import React from 'react'
import Layout from '@theme/Layout'
import Head from '@docusaurus/Head'

function Report() {
  return (
    <Layout title="Report" description="Report renderer">
      <Head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossorigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/frictionless-components/dist/frictionless-components.css"
        />
        <script src="https://unpkg.com/frictionless-components/dist/frictionless-components.js"></script>
        <script>{`
          if (document.readyState === 'complete') location.reload()
          if (document.readyState === 'loading') window.addEventListener("load", () => {
            const value = 'Z2hwXzVkQ3BTZUoxTURJNlF3MzlwOWlqVmlxU2YwcnpnaTNSVklBcA=='
            const params = new URLSearchParams(window.location.search)
            const user = params.get('user')
            const repo = params.get('repo')
            const flow = params.get('flow')
            const run = params.get('run')
            const callback = (error, {user, repo, flow, run}) => {
              const params = new URLSearchParams(location.search)
              params.set('user', user)
              params.set('repo', repo)
              params.set('flow', flow)
              if (run) params.set('run', run)
              const url = location.pathname + '?' + params.toString()
              window.history.replaceState({}, '',  url)
            }
            const element = document.getElementById('workflow')
            const props = { token: atob(value), user, repo, flow, run, callback }
            frictionlessComponents.render(frictionlessComponents.Workflow, props, element)
          })
        `}</script>
      </Head>
      <div className="cotainer margin-vert--lg">
        <div id="workflow"></div>
      </div>
    </Layout>
  )
}

export default Report
