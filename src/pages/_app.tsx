import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import Head from "next/head";
import { api } from "~/utils/api";
import "~/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Mercurial</title>
        <meta
          name="description"
          content="See what your friends are investing in."
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto flex bg-backgroundDark text-white">
        <div className="min-h-screen flex-grow ">
          <Component {...pageProps} />
        </div>
      </div>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
