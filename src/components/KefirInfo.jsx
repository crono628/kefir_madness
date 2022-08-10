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
              return (
                <ListItem
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                  }}
                  key={uuidv4()}
                >
                  {ordered
                    ? `${index + 1}. `
                    : ordered === false
                    ? ' • '
                    : null}
                  {item.content}
                  {item.sub && (
                    <List>
                      {item.sub.map((subItem) => {
                        return (
                          <ListItem key={uuidv4()}>{' • ' + subItem}</ListItem>
                        );
                      })}
                    </List>
                  )}
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
