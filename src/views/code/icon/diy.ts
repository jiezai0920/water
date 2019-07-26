import { ApiEntity } from '@/views/entity/demoentity';
import { codeCommon } from '@/views/code/icon/base';
import { IMAGE, ALT } from '@/views/common/constant';

const base: ApiEntity = {
  title: '定制图标',
  desc: '在内容直接写图标即可',
  code: codeCommon({ content: `\n  <img src="${IMAGE}" alt="${ALT}" />\n` }),
};

export default base;
