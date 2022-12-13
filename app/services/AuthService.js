import {LOGIN} from '../utils/URL';
import {api} from './API'; // import API.js file to use it for creating service

export const authApi = api.injectEndpoints({
  endpoints: build => ({
    // this is used for calling login API by passing user's login credentials.
    login: build.mutation({
      query: credentials => ({
        url: LOGIN,
        method: 'POST',
        body: credentials,
      }),
    }),

    //    getHomeDetails: build.query<GetAddressResponse, GetAddressRequest>({
    //     query: (params) => ({
    //     url: GET_ADDRESS,
    //     params: params,
    //     }),
    //     }),
  }),
  overrideExisting: true,
});

export const {useLoginMutation} = authApi;