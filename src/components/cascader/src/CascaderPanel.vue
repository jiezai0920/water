<!-- @format -->

<template>
  <div style="display: inline-block">
    <template v-for="(optItem, optItemIndex) in optionMenu">
      <WScroll :key="optItemIndex" class="w-cascader-scroll">
        <ul class="w-cascader-list">
          <w-option
            v-for="(optOne, optOneIndex) in optItem.options"
            :key="`${optOne[fieldNames.value]}_${floor}_${optOneIndex}`"
            mode="cascader"
            :active="optItem.index === optOneIndex"
            :class="{
              ['w-cascader-last']:
                !optOne[fieldNames.children] ||
                optOne[fieldNames.children].length < 1,
              ['w-cascader-loading']: optOne[fieldNames.loading],
            }"
            :option-change="
              handleOptionChange.bind(this, optItemIndex, optOneIndex)
            "
            :disabled="optOne.disabled || false"
            :value="optOne[fieldNames.value]"
            :label="optOne[fieldNames.label]"
            :loading="optOne[fieldNames.loading]"
            :field-names="fieldNames"
            >{{ optOne[fieldNames.value] }}</w-option
          >
        </ul>
      </WScroll>
    </template>
  </div>
</template>

<script lang="ts">
  import { Component, Model, Prop, Watch, Vue } from 'vue-property-decorator';
  import docClick from '@/directives/doclick';
  import { noop, noopArray } from '@/helper/noop';
  import { hasOwn } from '@/helper/o';
  import WOption from '@/components/select/src/Option.vue';
  import WScroll from '@/components/scroll/src/Scroll.vue';
  import {
    FieldNamesEntity,
    ReturnParamsEntity,
    fieldNamesDefault,
  } from './entity';
  import { getChildOptions, getCascaderOptions } from './helper';

  Vue.directive('doc-click', docClick as any);

  interface MenuItemEntity {
    index: number;
    options: any[];
  }

  @Component({
    components: {
      WOption,
      WScroll,
    },
  })
  export default class CascaderPanel extends Vue {
    optionMenu: MenuItemEntity[] = [];

    currentOption: any = {};

    floor = 0;

    @Model('model', { type: Array }) readonly value!: string[];

    @Prop({
      type: Array,
      default: noopArray,
    })
    private oldValue!: string[];

    @Prop({
      type: Array,
      default: noop,
    })
    private option!: any[];

    @Prop({
      type: Object,
      default: (): FieldNamesEntity => fieldNamesDefault,
    })
    private fieldNames!: FieldNamesEntity;

    mounted() {
      getCascaderOptions({
        origin: this.optionMenu,
        fieldNames: this.fieldNames,
        value: this.value,
        options: this.option,
      });
    }

    handleOptionChange(
      menuIndex: number,
      itemIndex: any,
      current: ReturnParamsEntity,
    ) {
      if (
        !hasOwn(current, this.fieldNames.disabled) ||
        (hasOwn(current, this.fieldNames.disabled) &&
          !current[this.fieldNames.disabled])
      ) {
        this.optChange(
          current[this.fieldNames.label],
          current.ev,
          false,
          menuIndex,
          itemIndex,
        );
      } else {
        current.ev!.stopPropagation();
      }
    }

    optChange(
      current: string,
      ev: MouseEvent | undefined,
      emit: boolean,
      menuIndex: number,
      itemIndex: number,
    ) {
      if (current) {
        const { children, label } = this.fieldNames;
        const newOption = this.optionMenu[menuIndex].options.find(
          (optItem: any) => optItem[label] === current,
        );

        // 如果当前禁用
        if (
          newOption &&
          hasOwn(newOption, 'disabled') &&
          newOption.disabled &&
          ev
        ) {
          ev.stopPropagation();
          return;
        }

        this.floor = menuIndex;
        // 更新选中高亮索引
        this.optionMenu.splice(menuIndex, 1, {
          index: itemIndex,
          options: this.optionMenu[menuIndex].options,
        });

        const hasChild =
          newOption &&
          hasOwn(newOption, children) &&
          newOption[children].length > 0;

        this.setValue(current, !!ev);

        if (!emit) {
          this.currentOption = {
            value: this.value,
            current,
            item: newOption,
            index: itemIndex,
            floor: this.floor,
            [children]: hasChild ? newOption[children].slice() : [],
          };
          this.$emit('panelChange', this.currentOption, ev);
        }

        if (!hasChild) {
          this.optionMenu.length = menuIndex + 1;
        }
        // 如果是最后一个就关上下拉 or 当前不可选
        if (hasChild && ev) {
          getChildOptions({
            item: newOption[this.fieldNames.children],
            origin: this.optionMenu,
            index: menuIndex,
          });

          ev.stopPropagation();
        }
      }
    }

    // 运用数组的引用来做
    // resetValue {Boolean} true 是否当前索引( this.floor )之后的数据
    setValue(current: string, resetValue: boolean) {
      this.value.splice(this.floor, 1, current);
      // 如果重选了，就清除之后的
      while (this.value.length - 1 > this.floor && resetValue) {
        this.value.pop();
      }
    }

    reset() {
      this.optionMenu = this.optionMenu.map((menuItem: any) => {
        menuItem.index = -1;
        return menuItem;
      });
      this.optionMenu.length = 1;
      this.floor = 0;
    }

    updataOptions() {
      this.optionMenu = [];
      getCascaderOptions({
        origin: this.optionMenu,
        fieldNames: this.fieldNames,
        value: this.value,
        options: this.option,
      });
    }

    @Watch('option')
    watchOption() {
      this.reset();
      this.updataOptions();
    }

    @Watch('value')
    watchValue(newValue: string[], oldValue: string[]) {
      // 如果有三条数据，选一个就关上，就恢复下拉
      if (newValue.toString() !== oldValue.toString()) {
        this.updataOptions();
      }
      // 如果点击删除
      if (!newValue.length) {
        this.reset();
      }
    }
  }
</script>
