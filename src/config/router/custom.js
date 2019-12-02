export default [
  {
    show: true,
    title: '文章管理',
    icon: 'el-icon-tickets',
    name: 'article',
    path: '/article',
    component: 'article',
    order: 0,
    children: [
      {
        show: true,
        title: '所有文章',
        icon: 'el-icon-tickets',
        name: 'article',
        path: '/article',
        component: 'article',
        order: 0
      },
      {
        show: true,
        title: '添加文章',
        icon: 'el-icon-tickets',
        name: 'article-add',
        path: '/article/add',
        component: 'article/add',
        order: 0
      }
    ]
  },
  {
    show: true,
    title: '上传组件',
    icon: 'el-icon-tickets',
    name: 'upload',
    path: '/upload-file',
    component: 'upload-file',
    order: 0
  }
]
