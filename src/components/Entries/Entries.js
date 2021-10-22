import { gql, useQuery } from "@apollo/client";

const GET_ALL_ENTRIES = gql`
  query GetAllEntries {
    entryMany {
      _id
      startTime
      endTime
      tag {
        name
      }
    }
  }
`;

const Entries = () => {
  const { data, loading, error } = useQuery(GET_ALL_ENTRIES);

  if (loading) return <div>loading...</div>;
  if (error) return <div>Error :(</div>;

  return (
    <div>
      <h1>My entries</h1>
      {data.entryMany.map((singleEntry) => {
        return (
          <div key={singleEntry._id}>
            <span>startTime: {singleEntry.startTime}</span>
            <span>endTime: {singleEntry.endTime}</span>
            <span> Tag: {singleEntry.tag.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Entries;

