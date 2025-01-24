import { Page } from './Pagination01.styles';
import { IPagination01UIProps } from './Pagination01.types';

export default function Pagination01UI(props: IPagination01UIProps): JSX.Element {
  return (
    <div>
      <Page onClick={props.onClickPrevPage}>{`<`}</Page>
      {Array.from({ length: 10 }, (_, index) => {
        const pageNumber = props.startPage + index;
        return (
          // startPage부터 시작해 lastPage를 초과하지 않는 페이지 번호만 렌더링
          pageNumber <= props.lastPage && (
            <Page
              key={pageNumber}
              id={String(pageNumber)}
              onClick={props.onClickPage}
              isActive={pageNumber === props.activePage}
            >
              {pageNumber}
            </Page>
          )
        );
      })}
      <Page onClick={props.onClickNextPage}>{`>`}</Page>
    </div>
  );
}
