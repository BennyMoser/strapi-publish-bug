import type { Schema, Attribute } from '@strapi/strapi';

export interface OtherComponentNoPublish extends Schema.Component {
  collectionName: 'components_other_component_no_publishes';
  info: {
    displayName: 'Component No Publish';
  };
  attributes: {
    no_publish: Attribute.Relation<
      'other.component-no-publish',
      'oneToOne',
      'api::no-publish.no-publish'
    >;
  };
}

export interface OtherComponentPublish extends Schema.Component {
  collectionName: 'components_other_component_publishes';
  info: {
    displayName: 'Component Publish';
    description: '';
  };
  attributes: {
    publish: Attribute.Relation<
      'other.component-publish',
      'oneToOne',
      'api::publish.publish'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'other.component-no-publish': OtherComponentNoPublish;
      'other.component-publish': OtherComponentPublish;
    }
  }
}
