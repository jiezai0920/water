import WEmpty from '../empty/Empty.vue';

export default {
  name: 'WCascaderSearch',
  functional: true,
  props: {
    search: Array,
    emptyText: String,
    width: String,
    searchKeyWord: String,
    hoverIndex: Number,
    getSearchResult: Function,
    change: Function,
    searchRender: {
      type: Function,
      default: (createElement: Function, searchKeyWord: string, sResult: any) => {
        const valueRes = sResult.path.split(searchKeyWord);
        let valueResLen = valueRes.length - 1;
        if (valueRes.length > 1) {
          while (valueResLen) {
            valueRes.splice(valueResLen, 0, createElement('span', {
              class: 'w-cascader-search-keyword',
            }, searchKeyWord));
            valueResLen--;
          }
        }
        return valueRes;
      },
    },
  },
  render: (createElement: Function, { props }: any) => {
    const {
      emptyText,
      search,
      width,
      searchKeyWord,
      hoverIndex,
      getSearchResult,
      change,
      searchRender,
    } = props;

    const searchResult = search.filter(
      (searchItem: any) => searchItem.path.indexOf(searchKeyWord) > -1,
    );

    getSearchResult(searchResult);

    let liElem = [createElement('li', {
      class: ['w-cascader-search-empty'],
      on: {
        click: (ev: MouseEvent) => {
          ev.stopPropagation();
        },
      },
    }, [
      createElement(WEmpty, {
        props: {
          imageStyle: {
            height: '72px',
          },
        },
      }, emptyText)])];

    if (searchResult.length) {
      liElem = searchResult.map((sResult: any, sResultIndex: number) => {
        const {
          disabled,
          option,
          nextPanel,
          index,
          floor,
          value,
        } = sResult;

        return createElement('li', {
          class: ['w-cascader-search-item', {
            'w-cascader-search-disabled': disabled,
            'w-cascader-search-hover': hoverIndex === sResultIndex,
          }],
          on: {
            click: (ev: MouseEvent) => {
              if (!disabled) {
                change({
                  value,
                  current: value[value.length - 1],
                  option,
                  index,
                  floor,
                  nextPanel,
                }, ev);
              } else {
                ev.stopPropagation();
              }
            },
          },
        }, searchRender(createElement, searchKeyWord, sResult, searchResult));
      });
    }

    return createElement('ul', {
      class: 'w-cascader-search',
      style: {
        width,
      },
    }, liElem);
  },
};
