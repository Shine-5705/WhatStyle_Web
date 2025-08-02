export interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  path?: string;
  type?: 'website' | 'article' | 'product';
  noIndex?: boolean;
}

export interface Schema {
  '@context': string;
  '@type': string;
  [key: string]: string | number | boolean | object | undefined;
}
