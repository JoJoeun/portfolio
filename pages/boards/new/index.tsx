import { useRouter } from 'next/router';
import BoardWrite from '../../../src/components/units/board/write/BoardWrite.container';

export default function BoardsNewPage() {
  const router = useRouter();
  if (!router.isReady) return <></>;

  return <BoardWrite isEdit={false} />;
}
