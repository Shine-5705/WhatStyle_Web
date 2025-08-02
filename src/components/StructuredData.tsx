import { Schema } from '@/types/seo';


interface StructuredDataProps {
  data: Schema | Schema[];
}

export const StructuredData = ({ data }: StructuredDataProps) => {
  const schemas = Array.isArray(data) ? data : [data];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
};
