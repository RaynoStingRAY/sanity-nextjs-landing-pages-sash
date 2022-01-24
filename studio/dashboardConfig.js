export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '61ef00d12880ef6c2c72e39d',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-sash-studio',
                  apiId: '3284e66d-5442-4ffd-b2aa-8c1b023feb41'
                },
                {
                  buildHookId: '61ef00d12075926dcb08d9ff',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-sash',
                  apiId: '1553e47f-a5ab-4af9-9b9c-07bfeb941408'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/RaynoStingRAY/sanity-nextjs-landing-pages-sash',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-sash.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
