import { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';

type Props = {
  title?: string;
  description?: string;
  keywords?: string;
  children: ReactNode;
};

const PageWrapper = ({
  title = 'Vausly Media',
  description = 'Explore Vausly Media – Creative digital content, projects, and stories.',
  keywords = 'vausly media, digital creator, projects, blog, portfolio',
  children,
}: Props) => (
  <>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Vausly Media" />
      <link rel="canonical" href={window.location.href} />
    </Helmet>
    {children}
  </>
);

export default PageWrapper;
