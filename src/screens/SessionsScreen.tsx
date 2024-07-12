import { useEffect, useState } from 'react';
import { DataTable } from 'react-native-paper';
import { StatusCircle } from '../components';
import { unsubscribeSessions } from '../helpers';
import { Session } from '../types';

export const SessionsScreen = () => {
  const [sessions, setSessions] = useState<Session[]>([]);

  useEffect(() => {
    const unsubscribe = unsubscribeSessions(setSessions);
    return () => unsubscribe();
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
          <DataTable.Cell>
            <StatusCircle active={active} />
          </DataTable.Cell>
        </DataTable.Row>
      ))}
    </DataTable>
  );
};
