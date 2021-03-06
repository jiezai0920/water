/** @format */

import { TITLE } from '@/views/common/constant';

export default [
  {
    path: '/affix',
    name: 'Affix',
    meta: {
      title: TITLE.Affix,
    },
    component: () =>
      import(/* webpackChunkName: "affix" */ '@/views/demo/Affix.vue'),
  },
  {
    path: '/icon',
    name: 'Icon',
    meta: {
      title: TITLE.Icon,
    },
    component: () =>
      import(/* webpackChunkName: "icon" */ '@/views/demo/Icon.vue'),
  },
  {
    path: '/grid',
    name: 'Grid',
    meta: {
      title: TITLE.Grid,
    },
    component: () =>
      import(/* webpackChunkName: "grid" */ '@/views/demo/Grid.vue'),
  },
  {
    path: '/badge',
    name: 'Badge',
    meta: {
      title: TITLE.Badge,
    },
    component: () =>
      import(/* webpackChunkName: "badge" */ '@/views/demo/Badge.vue'),
  },
  {
    path: '/breadcrumb',
    name: 'Breadcrumb',
    meta: {
      title: TITLE.Breadcrumb,
    },
    component: () =>
      import(
        /* webpackChunkName: "breadcrumb" */ '@/views/demo/Breadcrumb.vue'
      ),
  },
  {
    path: '/button',
    name: 'Button',
    meta: {
      title: TITLE.Button,
    },
    component: () =>
      import(/* webpackChunkName: "button" */ '@/views/demo/Button.vue'),
  },
  {
    path: '/calendar',
    name: 'Calendar',
    meta: {
      title: TITLE.Calendar,
    },
    component: () =>
      import(/* webpackChunkName: "calendar" */ '@/views/demo/Calendar.vue'),
  },
  {
    path: '/cascader',
    name: 'Cascader',
    meta: {
      title: TITLE.Cascader,
    },
    component: () =>
      import(/* webpackChunkName: "cascader" */ '@/views/demo/Cascader.vue'),
  },
  {
    path: '/checkbox',
    name: 'Checkbox',
    meta: {
      title: TITLE.Checkbox,
    },
    component: () =>
      import(/* webpackChunkName: "checkbox" */ '@/views/demo/Checkbox.vue'),
  },
  {
    path: '/countdown',
    name: 'Countdown',
    meta: {
      title: TITLE.Countdown,
    },
    component: () =>
      import(/* webpackChunkName: "countdown" */ '@/views/demo/Countdown.vue'),
  },
  {
    path: '/input',
    name: 'Input',
    meta: {
      title: TITLE.Input,
    },
    component: () =>
      import(/* webpackChunkName: "input" */ '@/views/demo/Input.vue'),
  },
  {
    path: '/inputnumber',
    name: 'InputNumber',
    meta: {
      title: TITLE.InputNumber,
    },
    component: () =>
      import(
        /* webpackChunkName: "inputnumber" */ '@/views/demo/InputNumber.vue'
      ),
  },
  {
    path: '/link',
    name: 'Link',
    meta: {
      title: TITLE.Link,
    },
    component: () =>
      import(/* webpackChunkName: "link" */ '@/views/demo/Link.vue'),
  },
  {
    path: '/radio',
    name: 'Radio',
    meta: {
      title: TITLE.Radio,
    },
    component: () =>
      import(/* webpackChunkName: "radio" */ '@/views/demo/Radio.vue'),
  },
  {
    path: '/select',
    name: 'Select',
    meta: {
      title: TITLE.Select,
    },
    component: () =>
      import(/* webpackChunkName: "select" */ '@/views/demo/Select.vue'),
  },
  {
    path: '/spin',
    name: 'Spin',
    meta: {
      title: TITLE.Spin,
    },
    component: () =>
      import(/* webpackChunkName: "spin" */ '@/views/demo/Spin.vue'),
  },
  {
    path: '/switch',
    name: 'Switch',
    meta: {
      title: TITLE.Switch,
    },
    component: () =>
      import(/* webpackChunkName: "switch" */ '@/views/demo/Switch.vue'),
  },
  {
    path: '/empty',
    name: 'Empty',
    meta: {
      title: TITLE.Empty,
    },
    component: () =>
      import(/* webpackChunkName: "empty" */ '@/views/demo/Empty.vue'),
  },
  {
    path: '/modal',
    name: 'Modal',
    meta: {
      title: TITLE.Modal,
    },
    component: () =>
      import(/* webpackChunkName: "modal" */ '@/views/demo/Modal.vue'),
  },
  {
    path: '/page',
    name: 'Page',
    meta: {
      title: TITLE.Page,
    },
    component: () =>
      import(/* webpackChunkName: "page" */ '@/views/demo/Page.vue'),
  },
  {
    path: '/popconfirm',
    name: 'Popconfirm',
    meta: {
      title: TITLE.Popconfirm,
    },
    component: () =>
      import(
        /* webpackChunkName: "popconfirm" */ '@/views/demo/Popconfirm.vue'
      ),
  },
  {
    path: '/popover',
    name: 'Popover',
    meta: {
      title: TITLE.Popover,
    },
    component: () =>
      import(/* webpackChunkName: "popover" */ '@/views/demo/Popover.vue'),
  },
  {
    path: '/progress',
    name: 'Progress',
    meta: {
      title: TITLE.Progress,
    },
    component: () =>
      import(/* webpackChunkName: "progress" */ '@/views/demo/Progress.vue'),
  },
  {
    path: '/statistic',
    name: 'Statistic',
    meta: {
      title: TITLE.Statistic,
    },
    component: () =>
      import(/* webpackChunkName: "statistic" */ '@/views/demo/Statistic.vue'),
  },
  {
    path: '/table',
    name: 'Table',
    meta: {
      title: TITLE.Table,
    },
    component: () =>
      import(/* webpackChunkName: "table" */ '@/views/demo/Table.vue'),
  },
  {
    path: '/tag',
    name: 'Tag',
    meta: {
      title: TITLE.Tag,
    },
    component: () =>
      import(/* webpackChunkName: "tag" */ '@/views/demo/Tag.vue'),
  },
  {
    path: '/text',
    name: 'Text',
    meta: {
      title: TITLE.Text,
    },
    component: () =>
      import(/* webpackChunkName: "text" */ '@/views/demo/Text.vue'),
  },
  {
    path: '/timepicker',
    name: 'Timepicker',
    meta: {
      title: TITLE.Timepicker,
    },
    component: () =>
      import(
        /* webpackChunkName: "timepicker" */ '@/views/demo/Timepicker.vue'
      ),
  },
  {
    path: '/timeline',
    name: 'Timeline',
    meta: {
      title: TITLE.Timeline,
    },
    component: () =>
      import(/* webpackChunkName: "timeline" */ '@/views/demo/Timeline.vue'),
  },
  {
    path: '/tooltip',
    name: 'Tooltip',
    meta: {
      title: TITLE.Tooltip,
    },
    component: () =>
      import(/* webpackChunkName: "tooltip" */ '@/views/demo/Tooltip.vue'),
  },
  {
    path: '/datepicker',
    name: 'DatePicker',
    meta: {
      title: TITLE.DatePicker,
    },
    component: () =>
      import(
        /* webpackChunkName: "datepicker" */ '@/views/demo/DatePicker.vue'
      ),
  },
  {
    path: '/scroll',
    name: 'Scroll',
    meta: {
      title: TITLE.Scroll,
    },
    component: () =>
      import(/* webpackChunkName: "scroll" */ '@/views/demo/Scroll.vue'),
  },
];
