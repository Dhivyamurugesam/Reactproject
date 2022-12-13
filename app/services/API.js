import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query';
import {BASE_URL} from '../utils/URL';

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, {getState}) => {
    headers.set('Content-Type', 'application/json');
    headers.set('cache-control', 'no-cache');
      // const token = (getState() as RootState).auth.token;
      // if (token) {
      // headers.set("Authorization", `Bearer ${token}`);
      // }
    return headers;
  },
});

const baseQueryWithInterceptor: BaseQueryFn<
  FetchArgs,
  FetchBaseQueryError,
> = async (args, api, extraOptions) => {
  //   const isNetworkavailable = store.getState().device.isNetworkAvailable;
  //   if (!isNetworkavailable) {
  //     return NetworkError;
  //   }
  let result = await baseQuery(args, api, extraOptions);
  console.log('Result with Network request', result);
  //   if (result.error && result.error.status === 401) {
  //     // try to get a new token
  //     const refresh_token = store.getState().auth.loginData?.refresh_token;
  //     const refreshResult: any = await baseQuery(
  //       {
  //         url: REFRESH_TOKEN,
  //         method: 'POST',
  //         body: {refresh_token},
  //       },
  //       api,
  //       extraOptions,
  //     );
  //     if (refreshResult.data && refreshResult?.data?.code === 0) {
  //       // store the new token
  //     //   store.dispatch(setLoginData(refreshResult.data));
  //       // retry the initial query
  //       result = await baseQuery(args, api, extraOptions);
  //     } else {
  //       // api.dispatch(loggedOut())
  //     }
  //   } else if (result.error && result.error.status === 400) {
  //     // Utility.showSnackBar(result.error.data.message);
  //   }
  return result;
};

export const api = createApi({
  baseQuery: baseQueryWithInterceptor,
  endpoints: () => ({}),
});