import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Data {
  id: string;
  name: string;
  surname: string;
  email: string;
}

interface AddDataResponse {
  addData: Data;
}
interface DeleteDataResponse {
  deleteData: { id: number };
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/graphql",
  }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    getData: builder.query<Data[], void>({
      query: () => ({
        url: "",
        method: "POST",
        body: {
          query: `
                        query getData {
                            users{
                                id
                                name
                                surname
                                email
                            }
                        }
                    `,
        },
      }),
      transformResponse: (response: any) => response.data.users,
      providesTags: ["Users"],
    }),
    addData: builder.mutation<
      AddDataResponse,
      { name: string; surname: string; email: string }
    >({
      query: (newData) => ({
        url: "",
        method: "POST",
        body: {
          query: ` mutation addUser($name:String!, $surname:String!, $email:String!){
                        createUser(createUserInput:{name: $name, surname: $surname, email:$email}) {
                            name
                            surname
                            email
                        }
                    }`,
          variables: newData,
        },
      }),
      invalidatesTags: ["Users"],
    }),
    deleteData: builder.mutation<DeleteDataResponse, { id: number }>({
      query: (newData) => ({
        url: "",
        method: "POST",
        body: {
          query: `mutation deleteUser($id:Int!){
                        removeUser(id:$id){
                          name
                        }
                      }`,
          variables: newData,
        },
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const { useGetDataQuery, useAddDataMutation, useDeleteDataMutation } =
  apiSlice;
