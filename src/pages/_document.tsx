import NextDocument, { Head, Html, Main, NextScript } from "next/document";

type Props = {};

class Document extends NextDocument<Props> {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icon/apple-touch-icon.webp"
          />
          <link
            rel="icon"
            type="image/webp"
            sizes="32x32"
            href="/icon/favicon-32x32.webp"
          />
          <link
            rel="icon"
            type="image/webp"
            sizes="16x16"
            href="/icon/favicon-16x16.webp"
          />
          <meta
            name="description"
            content="岡山大学校友会が主催する、部活動フェスティバル2022の公式HPです。部活動やサークル選びに迷っている新入生のみなさんや、コロナ禍で部活動に所属できていない2・3回生のみなさんにご覧いただくため、各団体が協力して制作しました。"
          />
          <meta name="og:image" content="https://clubs.st.okayama-u.ac.jp/club-fes-ogp.webp" />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
