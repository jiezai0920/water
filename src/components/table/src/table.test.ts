/** @format */

import { shallowMount } from '@vue/test-utils';
import {
  sizeColArray,
  sizeOptionsArray,
} from '@/views/code/table/options/size';
import { fixCol, fixTopCol, fixOptions } from '@/views/code/table/options/fix';
import {
  slotColArray,
  slotOptionsArray,
} from '@/views/code/table/options/slot';
import Table from './Table.vue';

describe('Table.vue', () => {
  let wrapperModel: any = null;
  let wrapperFix: any = null;
  let wrapperFixTop: any = null;
  let wrapperScroll: any = null;

  const target: any = {
    scrollTop: 3,
    scrollLeft: 2,
    offsetWidth: 10,
    children: [
      {
        offsetWidth: 20,
      },
    ],
  };
  const target2: any = {
    scrollTop: 3,
    scrollLeft: 2,
    offsetWidth: 10,
    children: [
      {
        offsetWidth: 20,
      },
    ],
  };
  const ev: any = { target, currentTarget: target };
  const ev2: any = { target, currentTarget: target2 };

  beforeEach(() => {
    wrapperModel = shallowMount(Table, {
      propsData: {
        options: sizeOptionsArray,
        col: sizeColArray,
        loading: true,
      },
    });
    wrapperFix = shallowMount(Table, {
      propsData: {
        options: fixOptions,
        col: fixCol,
      },
    });
    wrapperFixTop = shallowMount(Table, {
      propsData: {
        options: fixOptions,
        col: fixTopCol,
        scroll: {
          y: 400,
        },
      },
    });
    wrapperScroll = shallowMount(Table, {
      propsData: {
        options: slotOptionsArray,
        col: slotColArray,
        scroll: {
          x: '130%',
          y: 400,
        },
      },
    });
  });

  it('render', (done) => {
    wrapperModel.vm.$nextTick(() => {
      try {
        wrapperModel.vm.theadChange({ name: '1' });
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('fix', (done) => {
    wrapperFix.vm.$nextTick(() => {
      try {
        wrapperFix.vm.getHoverIndex(1);
        wrapperFix.vm.scrollingTBodyLeftFn(ev);
        wrapperFix.vm.scrollingTBodyRightFn(ev);
        wrapperFix.vm.scrollingTBodyFn(ev);
        wrapperFix.vm.scrollingTHeadFn(ev);
        expect(wrapperFix.vm.$refs.tbody.scrollTop).toBe(3);
        wrapperFix.vm.scrollingTBodyFn(ev2);
        wrapperFix.vm.clearSort();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('scroll', (done) => {
    wrapperScroll.vm.$nextTick(() => {
      try {
        expect(wrapperScroll.vm.scrollHeightStyle).toEqual({
          maxHeight: '400px',
          overflowY: 'auto',
        });
        wrapperScroll.vm.getHoverIndex(2);
        expect(wrapperScroll.vm.hoverIndex).toBe(-1);
        wrapperScroll.vm.getHoverIndex();
        expect(wrapperScroll.vm.hoverIndex).toBe(-1);
        wrapperScroll.vm.clearSort();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('scroll top with fix', (done) => {
    wrapperFixTop.vm.$nextTick(() => {
      try {
        wrapperFixTop.vm.scrollingTBodyFn(ev);
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
