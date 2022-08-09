import {
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  Paper,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const KefirInfo = ({ title, list, ordered }) => {
  return (
    <Box mt={4}>
      <Card elevation={3}>
        <CardContent>
          <CardHeader title={title} />
          <List>
            {list.map((item, index) => (
              <ListItem key={index}>
                {ordered ? `${index + 1}.` : ordered === false ? '•' : null}{' '}
                {item}
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};

export default KefirInfo;
