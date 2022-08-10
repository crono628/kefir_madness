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
import { v4 as uuidv4 } from 'uuid';

const KefirInfo = ({ title, list, ordered }) => {
  return (
    <Box>
      <Card elevation={3}>
        <CardContent>
          <CardHeader title={title} />
          <List>
            {list.map((item, index) => {
              let count = list.reduce((acc, curr) => {
                if (curr.charAt(0) === '-') {
                  return acc + 1;
                }
                return acc;
              }, 0);
              return (
                <ListItem
                  sx={item.charAt(0) === '-' ? { marginLeft: '30px' } : null}
                  key={uuidv4()}
                >
                  {item.charAt(0) === '-'
                    ? '  •'
                    : ordered
                    ? `${
                        index - count + 1 > 0 ? index - count + 1 : index + 1
                      }. `
                    : ordered === false
                    ? '•'
                    : null}
                  {item.replace('-', ' ')}
                </ListItem>
              );
            })}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};

export default KefirInfo;
