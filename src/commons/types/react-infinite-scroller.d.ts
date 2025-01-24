declare module 'react-infinite-scroller' {
  interface InfiniteScrollProps {
    pageStart?: number;
    loadMore: () => void;
    hasMore?: boolean;
    loader?: ReactElement | null;
    useWindow?: boolean;
    children?: React.ReactNode;
  }

  export default function InfiniteScroll(props: InfiniteScrollProps): ReactElement;
}
