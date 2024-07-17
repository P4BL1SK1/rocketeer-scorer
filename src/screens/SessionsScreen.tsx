import { useEffect } from 'react';
import { DataTable } from 'react-native-paper';
import { useTheme } from '../../theme';
import { SessionStatus } from '../components';
import { DialogButtonIcon } from '../components/common';
import { deleteSession, unsubscribeSessions } from '../helpers';
import { useAppDispatch, useAppSelector } from '../store';

export const SessionsScreen = () => {
  const dispatch = useAppDispatch();
  const { colors } = useTheme();
  const { sessions } = useAppSelector((state) => state.scorer);

  useEffect(() => {
    const unsubscribe = unsubscribeSessions(dispatch);
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
        <DataTable.Title>Actions</DataTable.Title>
      </DataTable.Header>
      {sessions.map(({ id, counter, played, won, lost, active }) => (
        <DataTable.Row key={id}>
          <DataTable.Cell>{counter}</DataTable.Cell>
          <DataTable.Cell>{played}</DataTable.Cell>
          <DataTable.Cell>{won}</DataTable.Cell>
          <DataTable.Cell>{lost}</DataTable.Cell>
          <DataTable.Cell>
            <SessionStatus id={id} active={active} />
          </DataTable.Cell>
          <DataTable.Cell>
            <DialogButtonIcon
              icon="delete"
              dialogText="Are you sure you want to delete session?"
              color={colors.cancel}
              onAccept={() => deleteSession(id)}
              onCancel={() => {
                return;
              }}
            />
          </DataTable.Cell>
        </DataTable.Row>
      ))}
    </DataTable>
  );
};
