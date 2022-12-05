import { createReducer, on } from "@ngrx/store"
import { DataCard } from "src/app/shared/interfaces/data-card.interface"
import { loadedImages, loadImages } from "../actions/images.actions";

export const initialState: {
    loading: boolean,
    images: DataCard
} = { loading: false, images: {total: 0, totalHits:0, hits: []}};

export const imagesReducer = createReducer(
    initialState,
    on(loadImages, (state) => {
        return {...state, loading: true}
    }),
    on(loadedImages, (state, {images} ) => {
        //console.log(item.)
        return {...state, loading: false, images}
    })
)

