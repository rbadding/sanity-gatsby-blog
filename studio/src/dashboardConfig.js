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
                  buildHookId: '5ff784e5144c3f1989dedf98',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-ztbzccon',
                  apiId: '408b4948-22e3-4e8d-9399-045f69bfffa0'
                },
                {
                  buildHookId: '5ff784e5af8f1018dd9187a5',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-c2znm8er',
                  apiId: 'e896e51e-1b0d-48f7-afc9-5e35300af5a9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rbadding/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-c2znm8er.netlify.app', category: 'apps' }
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
