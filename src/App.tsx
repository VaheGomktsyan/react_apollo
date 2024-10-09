import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_DATA = gql`
  query all {
    users {
      id
      name
    }
  }
`;

interface Data {
  users: { id: string; name: string }[];
}

interface DataVars {}

const App: React.FC = () => {
  const { loading, error, data } = useQuery<Data, DataVars>(GET_DATA);
  console.log(data);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Data from GraphQL API:</h1>
      <ul>
        {data?.users.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
