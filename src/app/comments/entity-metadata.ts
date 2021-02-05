import { EntityMetadataMap } from '@ngrx/data';
import { compareCourses } from '../shared/utils/utils';

export const entityMetadata: EntityMetadataMap = {
  Comment: {
    sortComparer: compareCourses,
    entityDispatcherOptions: {
      optimisticUpdate: true,
    },
  },
};
