export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fe806d802f86e73ff1ccd84',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-nemzu4fq',
                  apiId: '6c69fa53-0501-496b-b44e-f5337f841806'
                },
                {
                  buildHookId: '5fe806d893c2cc3bc6f54763',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-fe6qcmo8',
                  apiId: '99c520a5-b4d4-41de-a92c-ea2e8bb09d7b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kailashvetal47/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-fe6qcmo8.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
