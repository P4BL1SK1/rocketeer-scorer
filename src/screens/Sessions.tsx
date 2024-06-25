import { DataTable } from 'react-native-paper';
import { useAppSelector } from '../store';

export const Sessions = () => {
  const { sessions } = useAppSelector((state) => state.scorer);

  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Counter</DataTable.Title>
        <DataTable.Title>Played</DataTable.Title>
        <DataTable.Title>Won</DataTable.Title>
        <DataTable.Title>Lost</DataTable.Title>
        <DataTable.Title>Status</DataTable.Title>
      </DataTable.Header>
      {sessions.map(({ id, counter, played, won, lost, active }) => (
        <DataTable.Row key={id}>
          <DataTable.Cell>{counter}</DataTable.Cell>
          <DataTable.Cell>{played}</DataTable.Cell>
          <DataTable.Cell>{won}</DataTable.Cell>
          <DataTable.Cell>{lost}</DataTable.Cell>
          <DataTable.Cell>{active ? 'Active' : 'Finalized'}</DataTable.Cell>
        </DataTable.Row>
      ))}
    </DataTable>
  );
};
