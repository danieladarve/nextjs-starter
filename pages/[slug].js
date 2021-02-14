import { useRouter } from 'next/router';
import Head from 'next/head';
import ErrorPage from 'next/error';

export default function Page(page) {
  const router = useRouter();
  if (!router.isFallback && !page?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  const {
    query: { id },
  } = router;
  return <div>The dynamic route is {id}</div>
}

// export async function getStaticProps(context) {
//
// }
