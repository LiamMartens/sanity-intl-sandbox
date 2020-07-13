import S from '@sanity/desk-tool/structure-builder';
import * as Structure from 'sanity-plugin-intl-input/lib/structure';

export const getDefaultDocumentNode = (props) => {
  return Structure.getDefaultDocumentNode(props);
};

export default () => {
  const list = S.list();
  return list
    .title('Content')
    .items([
      S.listItem()
        .title('Site settings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .views(Structure.getDocumentNodeViewsForSchemaType('siteSettings'))
        ),
      S.listItem()
        .id('homepage')
        .title('Homepage')
        .child(
          S.list()
            .id('homepage')
            .title('Homepage')
            .items([
              S.listItem()
                .id('homepage')
                .title('Homepage')
                .child(
                  S.document()
                    .schemaType('homepage')
                    .documentId('homepage')
                    .views(Structure.getDocumentNodeViewsForSchemaType('homepage')),
                ),
            ])
        ),
    ]);
}