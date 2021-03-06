<!-- @format -->

<template>
  <div>
    <h1>{{ Modal }}</h1>
    <p>模态对话框。 <code>0.2.0</code> 新增。</p>
    <h2>何时使用</h2>
    <p>
      需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用
      <code>Modal</code> 在当前页面正中打开一个浮层，承载相应的操作。
    </p>
    <h2>代码演示</h2>
    <OnlineReview
      :tem-code="base.code"
      :js-code="base.js"
      :title="base.title"
      :desc="base.desc"
      iframe-height="300px"
    ></OnlineReview>
    <OnlineReview
      :tem-code="before.code"
      :js-code="before.js"
      :title="before.title"
      :desc="before.desc"
      iframe-height="300px"
    ></OnlineReview>
    <OnlineReview
      :tem-code="content.code"
      :js-code="content.js"
      :title="content.title"
      :desc="content.desc"
      iframe-height="300px"
    ></OnlineReview>
    <OnlineReview
      :tem-code="esc.code"
      :js-code="esc.js"
      :title="esc.title"
      :desc="esc.desc"
      iframe-height="300px"
    ></OnlineReview>
    <OnlineReview
      :tem-code="diy.code"
      :js-code="diy.js"
      :title="diy.title"
      :desc="diy.desc"
      iframe-height="300px"
    ></OnlineReview>
    <OnlineReview
      :tem-code="style.code"
      :js-code="style.js"
      :title="style.title"
      :desc="style.desc"
      iframe-height="300px"
    ></OnlineReview>
    <OnlineReview
      :tem-code="mask.code"
      :js-code="mask.js"
      :title="mask.title"
      :desc="mask.desc"
      iframe-height="300px"
    ></OnlineReview>
    <OnlineReview
      :tem-code="method.code"
      :js-code="method.js"
      :title="method.title"
      :desc="method.desc"
      iframe-height="300px"
    ></OnlineReview>
    <h2>Modal API</h2>
    <ApiTable :data="props"></ApiTable>
    <h2>Modal Method</h2>
    <MethodTable :data="methods"></MethodTable>
    <h2>Confirm API</h2>
    <p>确认弹框 <code>0.13.0</code> 新增。</p>
    <p>包括</p>
    <ul>
      <li><code>$WConfirm.info</code></li>
      <li><code>$WConfirm.success</code></li>
      <li><code>$WConfirm.error</code></li>
      <li><code>$WConfirm.warning</code></li>
      <li><code>$WConfirm.confirm</code></li>
    </ul>
    <p>以上均为一个函数，参数为 object，具体属性如下：</p>
    <ApiTable :data="confirmProps"></ApiTable>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import ApiTable from '@/views/components/ApiTable.vue';
  import MethodTable from '@/views/components/MethodTable.vue';
  import WRow from '@/components/grid/src/Row.vue';
  import WCol from '@/components/grid/src/Col.vue';
  import OnlineReview from '@/views/components/OnlineReview.vue';
  import { ApiEntity } from '@/views/entity/demoentity';
  import base from '@/views/code/modal/base';
  import diy from '@/views/code/modal/diy';
  import before from '@/views/code/modal/before';
  import style from '@/views/code/modal/style';
  import content from '@/views/code/modal/content';
  import mask from '@/views/code/modal/mask';
  import esc from '@/views/code/modal/esc';
  import method from '@/views/code/modal/method';
  import { props, confirmProps, methods } from '@/views/api/modal';
  import { PropsEntity, MethodsEntity } from '@/views/entity/apientity';
  import { TITLE } from '@/views/common/constant';

  @Component({
    components: {
      ApiTable,
      MethodTable,
      WRow,
      WCol,
      OnlineReview,
    },
  })
  export default class ModalView extends Vue {
    Modal: string = TITLE.Modal;

    base: ApiEntity = base;

    diy: ApiEntity = diy;

    before: ApiEntity = before;

    style: ApiEntity = style;

    content: ApiEntity = content;

    mask: ApiEntity = mask;

    esc: ApiEntity = esc;

    method: ApiEntity = method;

    props: PropsEntity[] = props;

    confirmProps: PropsEntity[] = confirmProps;

    methods: MethodsEntity[] = methods;
  }
</script>
