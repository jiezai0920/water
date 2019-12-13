export const props = [
  {
    param: 'options',
    desc: '指定可选项， 每项具体设置参照 <code>fieldNames</code> 参数',
    type: 'Array',
    require: '否',
    default: '无',
  },
  {
    param: 'fieldNames',
    desc: '自定义属性的字段名',
    type: 'Object',
    require: '否',
    default:
      "{ value: 'value', label: 'label', key: 'key', loading: 'loading', disabled: 'disabled' }",
  },
  {
    param: 'search',
    desc: '搜索的开关',
    type: 'Boolean',
    require: '否',
    default: '无',
  },
  {
    param: 'loading',
    desc: '加载模式',
    type: 'Boolean',
    require: '否',
    default: '无',
  },
  {
    param: 'disabled',
    desc: '禁用模式',
    type: 'Boolean',
    require: '否',
    default: '无',
  },
  {
    param: 'transfer',
    desc: '是否转移到 body 下',
    type: 'Boolean',
    require: '否',
    default: 'true',
  },
  {
    param: 'emptyText',
    desc: '搜索未匹配到的文案',
    type: 'String',
    require: '否',
    default: '未匹配到结果',
  },
  {
    param: 'mode',
    desc:
      '选择器的模式，支持 单选模式(<code>single</code>)、多选模式(<code>multiple</code>)，标签模式(<code>tag</code>)',
    type: 'String',
    require: '否',
    default: 'single',
  },
  {
    param: 'size',
    desc: '设置大小，可选值为 <code>small</code> <code>large</code> 或者不设',
    type: 'String',
    require: '否',
    default: '无',
  },
  {
    param: 'placeholder',
    desc: '选择框默认文字',
    type: 'String',
    require: '否',
    default: '无',
  },
  {
    param: 'prefix',
    desc: '选中的前缀',
    type: 'String',
    require: '否',
    default: '无',
  },
  {
    param: 'suffix',
    desc: '选中的后缀',
    type: 'String',
    require: '否',
    default: '无',
  },
  {
    param: 'placement',
    desc: '下拉框位置',
    type: 'String',
    require: '否',
    default: 'bottom',
  },
  {
    param: 'interval',
    desc: '下拉框间距，单位 px',
    type: 'Number',
    require: '否',
    default: '4',
  },
  {
    param: 'zIndex',
    desc: '下拉弹出的层级',
    type: 'Number',
    require: '否',
    default: '1',
  },
  {
    param: 'before',
    desc: '改变之前触发，返回 Promise 对象',
    type: 'Function',
    require: '否',
    default:
      'function() {return new Promise((resolve, reject) => {resolve();});}',
  },
  {
    param: 'getContainer',
    desc: '浮层渲染父节点，默认渲染到 body 上。支持返回 <code> Promise </code>',
    type: 'Function',
    require: '否',
    default: '无',
  },
  {
    param: 'change',
    desc:
      '改变触发，返回 {Event对象,选中的值,当前数据,所有数据}({ev,value,item,options})',
    type: 'Function',
    require: '否',
    default: '() => {}',
  },
  {
    param: 'focus',
    desc: '获取焦点触发，返回 Event 对象',
    type: 'Function',
    require: '否',
    default: '() => {}',
  },
  {
    param: 'blur',
    desc: '失去焦点触发，返回 Event 对象',
    type: 'Function',
    require: '否',
    default: '() => {}',
  },
  {
    param: 'click',
    desc: '点击选择框触发，返回 Event 对象',
    type: 'Function',
    require: '否',
    default: '() => {}',
  },
];

export const methods = [
  {
    name: 'change',
    desc: '改变触发',
    return: '{Event对象,选中的值,当前数据,所有数据}({ev,value,item,options})',
  },
  {
    name: 'focus',
    desc: '获取焦点触发',
    return: 'Event 对象',
  },
  {
    name: 'blur',
    desc: '失去触发',
    return: 'Event 对象',
  },
  {
    name: 'click',
    desc: '点击选择框触发',
    return: 'Event 对象',
  },
];

export const changeProps = [
  {
    desc: 'Event对象',
    type: 'Event',
    key: 'ev',
  },
  {
    desc: '选中的值',
    type: 'String',
    key: 'value',
  },
  {
    desc: '当前数据',
    type: 'Array',
    key: 'item',
  },
  {
    desc: '所有数据',
    type: 'Array',
    key: 'options',
  },
];
