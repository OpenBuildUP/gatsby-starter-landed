module.exports = {
  //pathPrefix: `/mygatsby`,
  siteMetadata: {
    title: 'Open Build-UP',
    author: 'Open Build-UP',
    description: 'A Gatsby.js V2 Starter based on Open Build-UP by HTML5 UP',

    // 2차 내부 메뉴까지 작성 가능!
    // layout.graphql 수정이 필요 && 아래 scaffold layout 참고! (ex. menuLinks.item.items.items)
    menuLinks: [
      // Real Layout!
      {
        name: 'Offline Groups',
        link: '#',
        cl: '',
        items: [
          {
            name: 'Daegu',
            link: '/offline_groups/daegu',
          },
        ],
      },
      {
        name: 'Online Groups',
        link: '#',
        items: [
          {
            name: 'Facebook',
            link: 'https://www.facebook.com/groups/openbuildup',
          },
          {
            name: 'Kakao',
            link: 'https://open.kakao.com/o/gzRiCIoc',
          },
        ],
      },
      // Scaffold Layout!
      // {
      //   name: '',
      //   link: '#',
      //   cl: '', // ex. 'button primary',
      //   items: [
      //     {
      //       name: '',
      //       link: '#',
      //       items: [
      //         {
      //           name: '',
      //           link: '#',
      //         },
      //       ],
      //     },
      //   ],
      // },

      // Default
      // {
      //   name: 'Layouts',
      //   link: '#',
      //   items: [
      //     {
      //       name: 'Left Sidebar',
      //       link: '/left-sidebar',
      //     },
      //     {
      //       name: 'Right Sidebar',
      //       link: '/right-sidebar',
      //     },
      //     {
      //       name: 'No Sidebar',
      //       link: '/no-sidebar',
      //     },
      //     {
      //       name: 'SubMenu',
      //       link: '#',
      //       items: [
      //         {
      //           name: 'Option 1',
      //           link: '#',
      //         },
      //         {
      //           name: 'Option 2',
      //           link: '#',
      //         },
      //         {
      //           name: 'Option 3',
      //           link: '#',
      //         },
      //         {
      //           name: 'Option 4',
      //           link: '#',
      //         },
      //       ],
      //     },
      //   ],
      // },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/assets/images/`,
        name: 'images',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en',
      },
    },
    'gatsby-plugin-offline',
  ],
}
