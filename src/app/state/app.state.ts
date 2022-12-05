import { ActionReducerMap } from '@ngrx/store';
import { DataCard } from '../shared/interfaces/data-card.interface';
import { imagesReducer } from './reducers/images.reducers';

export interface AppState {
  image: { loading: boolean; images: DataCard };
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    image: imagesReducer
}
