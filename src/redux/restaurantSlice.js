import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



//for calling APIS in redux/slice we use Thunk
//Thunk is a marhod provided by redux to make api calls use of promise
//API calls are asychronous function , so thunk make use of ,content of promise


//function to call API


export const fechResturant = createAsyncThunk('restaurantList/fechResturant', () => {
    const result = axios.get('/restaurant.json').then(response => response.data);

    return result;  
    
    //normal call  or static data call 
})

const restaurantSlice = createSlice({
    name: "restaurantList",
    initialState: {
        loading: false,// pending
        allRestaurant: [], //resolve
        error: "",//reject
        searchRestaurant: [],

    },
    extraReducers: (builder) => {
        builder.addCase(fechResturant.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fechResturant.fulfilled, (state, action) => {
            state.loading = false
            state.allRestaurant = action.payload
            state.searchRestaurant = action.payload
            state.error = ""

        })
        builder.addCase(fechResturant.rejected, (state, action) => {
            state.loading = false;
            state.allRestaurant = [];
            state.error = action.error.message
        })
    },
    reducers: {
        search: (state, action) => {
            state.allRestaurant.restaurants = state.searchRestaurant.restaurants.filter(
                item => item.neighborhood.toLowerCase().includes(action.payload)

            )
        }
    }
})
export default restaurantSlice.reducer;
export const { search } = restaurantSlice.actions