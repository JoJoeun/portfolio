import { useRouter } from 'next/router';
import type { MouseEvent } from 'react';
import LayoutNavigationUI from './LayoutNavigation.presenter';

export default function LayoutNavigation() {
  const router = useRouter();

  const onClickMenu = (e: MouseEvent<HTMLDivElement>): void => {
    void router.push(e.currentTarget.id);
  };

  return <LayoutNavigationUI onClickMenu={onClickMenu} />;
}
