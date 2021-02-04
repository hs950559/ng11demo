import { DefaultDataServiceConfig, EntityMetadataMap } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  Comment: {},
};

export const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: 'https://jsonplaceholder.typicode.com',
};

// because the plural of "hero" is not "heros"
// const pluralNames = { Hero: 'Heroes' };

export const entityConfig = {
  entityMetadata,
  // pluralNames
};
