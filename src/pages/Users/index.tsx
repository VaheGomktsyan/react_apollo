import React from "react";
import { Link } from "react-router-dom";
import {
  useDeleteDataMutation,
  useGetDataQuery,
} from "../../features/apiSlice";

export const DataComponent: React.FC = () => {
  const { data, error, isLoading } = useGetDataQuery();
  const [deleteData] = useDeleteDataMutation();
  console.log("=>", data);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: )</p>;

  return (
    <div>
      <h3>Users</h3>
      {data?.map((item: any) => (
        <div key={item.id}>
          <p>
            {item.name} {item.surname} ---- {item.email}
          </p>
          <button onClick={() => deleteData({ id: item.id })}>&times;</button>
          <Link to={"/user/"+item.id}>see more </Link>
        </div>
      ))}
    </div>
  );
};


