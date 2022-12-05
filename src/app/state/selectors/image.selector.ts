import { createSelector } from "@ngrx/store";
import { DataCard } from "src/app/shared/interfaces/data-card.interface";
import { AppState } from "../app.state";

export interface FeatureState {
    loading: boolean,
    images: DataCard
}

export const selectImagesFeature = (state: AppState) => state.image;

export const selectFeatureCount = createSelector(
    selectImagesFeature,
    (state: FeatureState) => state.images
)

export const selectLoading = createSelector(
    selectImagesFeature,
    (state: FeatureState) => state.loading
)