import type { Schema, Attribute } from '@strapi/strapi';

export interface CollectionCollectionSneakers extends Schema.Component {
  collectionName: 'components_collection_collection_sneakers';
  info: {
    displayName: 'collection sneakers';
    icon: 'archive';
  };
  attributes: {};
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'collection.collection-sneakers': CollectionCollectionSneakers;
    }
  }
}
