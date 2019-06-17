import { ApiEntity } from '@/views/entity/demoentity';
import CheckboxGroup from '@/components/checkbox/CheckboxGroup.vue';
import { myDatas, DataEntity } from '@/views/code/checkbox/base';

const base: ApiEntity = {
  title: 'Checkbox 组',
  desc: '方便的从数组生成 Checkbox 组。',
  code: `<${CheckboxGroup.name} :options="${myDatas.map((data: DataEntity) => JSON.stringify(data))}"></${CheckboxGroup.name}>`,
  render: (h: Function) => h(
    'section',
    {
      class: 'demo-demo',
    },
    [
      h(CheckboxGroup,
        {
          props: {
            options: myDatas,
          },
        }),
    ],
  ),
};

export default base;
