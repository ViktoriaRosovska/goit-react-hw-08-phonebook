import { Box } from '@mui/material';

export default function Home() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: '150px',
      }}
    >
      <h1>Welcome to Phonebook application</h1>
      <p>Work easy with your phone contacts</p>
    </Box>
  );
}
