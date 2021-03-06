<!-- @format -->

<template>
  <div class="w-affix">
    <!-- 在定位的过程中位置会变，滚动之后刷新就会有问题 -->
    <!-- 多套一层是为了获取位置 -->
    <div :style="affixStyle">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
  import { Component, Prop, Emit, Vue } from 'vue-property-decorator';
  import { addObserved, removeObserved } from './helper';
  import getScroll from '@/helper/getscroll';
  import getOffset from '@/helper/getoffset';
  import { isNumber } from '@/helper/type';

  interface AffixEntity {
    [offsetPlace: string]: number;
  }

  export interface ChangeEntity {
    affixStatus: boolean;
    scrollStatus: boolean;
  }

  @Component
  export default class Affix extends Vue {
    name: string = 'WAffix';

    affixStyle: string = '';

    target: Window = window;

    @Prop(Number) private offsetTop!: number;

    @Prop(Number) private offsetBottom!: number;

    @Prop({
      type: Number,
      default: 10,
    })
    private index!: number;

    @Prop(Boolean) private disabled!: boolean;

    @Prop({
      type: Boolean,
      default: true,
    })
    private destroy!: boolean;

    @Prop({
      type: String,
      default: 'fixed',
    })
    private position!: string;

    @Prop({
      type: Function,
      default: () => {},
    })
    private change!: Function;

    get offsetType(): string {
      return isNumber(this.offsetBottom) ? 'bottom' : 'top';
    }

    get offsetValue(): number {
      let valueDefault = 10;
      if (isNumber(this.offsetTop)) {
        valueDefault = this.offsetTop;
      }
      if (isNumber(this.offsetBottom)) {
        valueDefault = this.offsetBottom;
      }
      return valueDefault;
    }

    get offsetIsTop(): boolean {
      return this.offsetType === 'top';
    }

    mounted() {
      addObserved(this.target, this.updatePostion);
      this.updatePostion();
    }

    beforeDestroy() {
      if (this.destroy) {
        removeObserved(this.target);
      }
    }

    @Emit('change')
    updatePostion() {
      const { offsetWidth, offsetHeight } = this.$el as HTMLElement;

      const scrollTop = getScroll(this.target, true);
      const elOffset = getOffset(this.$el as HTMLElement);
      const windowHeight = window.innerHeight;
      const isStatic: boolean =
        (this.offsetIsTop && elOffset.top - this.offsetValue <= scrollTop) ||
        (!this.offsetIsTop &&
          elOffset.top + this.offsetBottom + offsetHeight >
            scrollTop + windowHeight);
      const sticky: boolean = !this.disabled && isStatic;
      const position = sticky
        ? `position: ${this.position}; zIndex: ${this.index};`
        : '';
      const offset: string = sticky
        ? `${this.offsetType}: ${this.offsetValue}px; width: ${offsetWidth}px`
        : '';
      this.affixStyle = `${position}${offset}`;

      const changeEmit: ChangeEntity = {
        affixStatus: sticky,
        scrollStatus: isStatic,
      };

      this.change(changeEmit);

      return changeEmit;
    }
  }
</script>
