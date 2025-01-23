import { Fragment } from 'react';
import { MenuItem, Wrapper } from './LayoutNavigation.styles';
import { ILayoutNavigationProps } from './LayoutNavigation.types';

// 계속 추가하며 map으로 뿌려주기
const NAVIGATION_MENUS = [
  { name: '커뮤니티', page: '/boards' },
  { name: '중고마켓', page: '/markets' },
  { name: '마이페이지', page: '/mypages' },
];

export default function LayoutNavigationUI(props: ILayoutNavigationProps): JSX.Element {
  return (
    <Wrapper>
      {NAVIGATION_MENUS.map((menu) => (
        <Fragment key={menu.name}>
          <MenuItem id={menu.name}>{menu.name}</MenuItem>
        </Fragment>
      ))}
    </Wrapper>
  );
}
