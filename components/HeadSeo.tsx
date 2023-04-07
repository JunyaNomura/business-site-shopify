import Head from "next/head"
import changeViewport from "../features/hooks/useChangeViewport"
const HeadSeo = ({
  title,
  description,
  url,
  ogImageUrl,
  ogTwitterImage,
  ogType,
  children,
}) => {
  return (
    <Head>
      {/* basic metadata */}
      <title>{title}</title>
      <meta name="viewport" content={changeViewport()}/>
      <meta name="description" content={description} />

      {/* open graph metadata */}
      <meta property="og:site_name" content="CompanyName" />
      <meta property="og:url" content="URL" />
      
      {/* ogType = website or article */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={url} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:locale" content="ja_JP" />

      {/* facebook metadata */}
      <meta property="fb:app_id" content="AppID" />

      {/* twitter metadata */}
      <meta name="twitter:card" content="summary_large_image" />
      {/* siteMetadata.twitterHandle = "@Twitterアカウント名" */}
      <meta name="twitter:site" content="twitter account" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogTwitterImage} />

      {children}
    </Head>
  )
}

export default HeadSeo