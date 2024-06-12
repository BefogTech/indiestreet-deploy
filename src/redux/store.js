// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/authSlice";
import { VendorAPI } from "./slices/GetAllVendor";
import { BusinessCategory } from "./slices/BusinessCategorySlice";
import { ProductCategory } from "./slices/ProductCategorySlice";
import { ProductAPI } from "./slices/ProductUpload";
import dialogReducer from "./slices/dialogSlice";
 import productReducer from './slices/productSlice';
export const store = configureStore({
  reducer: {
    products: productReducer, 
    dialog: dialogReducer,
    [authSlice.reducerPath]: authSlice.reducer,
    [VendorAPI.reducerPath]: VendorAPI.reducer,
    [BusinessCategory.reducerPath]: BusinessCategory.reducer,
    [ProductCategory.reducerPath]: ProductCategory.reducer,
    [ProductAPI.reducerPath]: ProductAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authSlice.middleware,
      VendorAPI.middleware,
      BusinessCategory.middleware,
      ProductCategory.middleware,
      ProductAPI.middleware
    ),
});
