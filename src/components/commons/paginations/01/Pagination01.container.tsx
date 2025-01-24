import type { IPagination01Props } from './Pagination01.types';
import type { MouseEvent } from 'react';
import { useState } from 'react';
import Pagination01UI from './Pagination01.presenter';

export default function Pagination01(props: IPagination01Props): JSX.Element {
  const [startPage, setStartPage] = useState(1);
  const [activePage, setActivePage] = useState(1);
  //   count가 undefined이면 10으로 설정-널리쉬
  const lastPage = Math.ceil((props.count ?? 10) / 10);

  const onClickPage = (e: MouseEvent<HTMLSpanElement>): void => {
    const activePage = Number(e.currentTarget.id); // 현재 클릭한 페이지 id 업데이트
    setActivePage(activePage); // state상태 업데이트 "함수내의  activePage 데이터는 함수내에서 소멸"
    void props.refetch({ page: activePage });
  };

  const onClickPrevPage = () => {
    if (startPage === 1) return; // 시작 페이지가 1페이지면 동작 X
    setStartPage(startPage - 10);
    setActivePage(startPage - 10);
    void props.refetch({ page: startPage - 10 });
  };

  const onClickNextPage = () => {
    // 다음 페이지 묶음으로 이동할 때 startPage+ 한묶음(10)이 lastPage를 초과하지 않도록 조건문 설정
    // lastPage 35, startPage 31이라면 41 > 35이므로 다음 페이지묶음으로 이동하지 않는다.
    if (startPage + 10 <= lastPage) {
      setStartPage(startPage + 10);
      setActivePage(startPage + 10);
      void props.refetch({ page: startPage + 10 });
    }
  };

  return (
    <Pagination01UI
      startPage={startPage}
      lastPage={lastPage}
      activePage={activePage}
      onClickPrevPage={onClickPrevPage}
      onClickPage={onClickPage}
      onClickNextPage={onClickNextPage}
    />
  );
}
