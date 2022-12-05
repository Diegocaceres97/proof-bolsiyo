import { createAction,props } from "@ngrx/store";
import { DataCard } from "src/app/shared/interfaces/data-card.interface";

export const loadImages = createAction( 
    '[Image List] load image'
);

export const loadedImages = createAction(
    '[Image List] loaded success' ,
    props<{images: DataCard}>()
)

