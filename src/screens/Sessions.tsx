import { useEffect } from 'react';
import { DataTable } from 'react-native-paper';
import { useAppDispatch, useAppSelector } from '../store';
import { getSessions } from '../store/session';

export const Sessions = () => {
  const dispatch = useAppDispatch();
  const { sessions } = useAppSelector((state) => state.scorer);

  useEffect(() => {
    dispatch(getSessions());
  }, []);

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
