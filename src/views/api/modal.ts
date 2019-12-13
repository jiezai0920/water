export const props = [
  {
    param: 'loading',
    desc: '确定按钮 loading',
    type: 'Boolean',
    require: '否',
    default: '无',
  },
  {
    param: 'mask',
    desc: '是否展示遮罩',
    type: 'Boolean',
    require: '否',
    default: 'true',
  },
  {
    param: 'maskClosable',
    desc: '是否点击遮罩关闭',
    type: 'Boolean',
    require: '否',
    default: '无',
  },
  {
    param: 'esc',
    desc: '是否支持键盘 <code>esc</code> 关闭',
    type: 'Boolean',
    require: '否',
    default: '无',
  },
  {
    param: 'center',
    desc: '垂直居中展示对话框',
    type: 'Boolean',
    require: '否',
    default: 'true',
  },
  {
    param: 'cancelable',
    desc: '是否显示取消按钮',
    type: 'Boolean',
    require: '否',
    default: 'true',
  },
  {
    param: 'okable',
    desc: '是否显示确定按钮',
    type: 'Boolean',
    require: '否',
    default: 'true',
  },
  {
    param: 'transfer',
    desc: '是否转移到 body 下',
    type: 'Boolean',
    require: '否',
    default: 'true',
  },
  {
    param: 'getContainer',
    desc: '浮层渲染父节点，默认渲染到 body 上。支持返回 <code> Promise </code>',
    type: 'Function',
    require: '否',
    default: '() => document.body',
  },
  {
    param: 'before',
    desc: '确定之前的回调',
    type: 'Function',
    require: '否',
    default: '无',
  },
  {
    param: 'cancel',
    desc: '取消的回调，返回当前状态',
    type: 'Function',
    require: '否',
    default: '() => {}',
  },
  {
    param: 'ok',
    desc: '确定的回调，返回当前状态',
    type: 'Function',
    require: '否',
    default: '() => {}',
  },
  {
    param: 'change',
    desc: '对话框显示隐藏的回调，返回当前状态',
    type: 'Function',
    require: '否',
    default: '() => {}',
  },
  {
    param: 'title',
    desc: '对话框的标题',
    type: 'String',
    require: '否',
    default: '无',
  },
  {
    param: 'cancelText',
    desc: '取消按钮的文案',
    type: 'String',
    require: '否',
    default: '取消',
  },
  {
    param: 'okText',
    desc: '确定按钮的文案',
    type: 'String',
    require: '否',
    default: '确定',
  },
  {
    param: 'okType',
    desc: '确定按钮的类型',
    type: 'String',
    require: '否',
    default: '无',
  },
  {
    param: 'modalStyle',
    desc: '对话框整体的样式',
    type: 'Object',
    require: '否',
    default: '() => {}',
  },
  {
    param: 'bodyStyle',
    desc: '对话框 body 的样式',
    type: 'Object',
    require: '否',
    default: '() => {}',
  },
  {
    param: 'footerClassName',
    desc: '底部最外层的 class 名字',
    type: 'String | Object | Array',
    require: '否',
    default: '无',
  },
  {
    param: 'titleClassName',
    desc: '标题最外层的 class 名字',
    type: 'String | Object | Array',
    require: '否',
    default: '无',
  },
  {
    param: 'bodyClassName',
    desc: '内容最外层的 class 名字',
    type: 'String | Object | Array',
    require: '否',
    default: '无',
  },
];

export const methods = [
  {
    name: 'change',
    desc: '显示隐藏触发的方法',
    return: '当前状态',
  },
  {
    name: 'ok',
    desc: '点击确定触发的方法',
    return: '当前状态',
  },
  {
    name: 'cancel',
    desc: '点击取消触发的方法',
    return: '当前状态',
  },
];

export const confirmProps = [
  {
    param: 'title',
    desc: '标题',
    type: 'String | Function',
    require: '否',
    default: '无',
  },
  {
    param: 'content',
    desc: '内容',
    type: 'String | Function',
    require: '否',
    default: '无',
  },
  {
    param: 'icon',
    desc: '图标。只有 <code>creatConfirm</code> 生效',
    type: 'String | Function',
    require: '否',
    default: '无',
  },
  {
    param: 'cancelText',
    desc: '取消按钮的文案',
    type: 'String',
    require: '否',
    default: '取消',
  },
  {
    param: 'okText',
    desc: '确定按钮的文案',
    type: 'String',
    require: '否',
    default: '确定',
  },
  {
    param: 'okType',
    desc: '确定按钮的类型',
    type: 'String',
    require: '否',
    default: '无',
  },
  {
    param: 'cancelable',
    desc: '是否显示取消按钮',
    type: 'Boolean',
    require: '否',
    default: 'true',
  },
  {
    param: 'okable',
    desc: '是否显示确定按钮',
    type: 'Boolean',
    require: '否',
    default: 'true',
  },
  {
    param: 'maskClosable',
    desc: '是否点击遮罩关闭',
    type: 'Boolean',
    require: '否',
    default: '无',
  },
  {
    param: 'before',
    desc: '确定之前的回调',
    type: 'Function',
    require: '否',
    default: '无',
  },
  {
    param: 'cancel',
    desc: '取消的回调，返回当前状态',
    type: 'Function',
    require: '否',
    default: '() => {}',
  },
  {
    param: 'ok',
    desc: '取消的回调，返回当前状态',
    type: 'Function',
    require: '否',
    default: '() => {}',
  },
  {
    param: 'change',
    desc: '对话框显示隐藏的回调，返回当前状态',
    type: 'Function',
    require: '否',
    default: '() => {}',
  },
];
