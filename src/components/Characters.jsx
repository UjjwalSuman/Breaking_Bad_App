import React from 'react';
import { Grid, Box } from '@material-ui/core';
import ToolTip from './ToolTip';

const Characters = ({ data, isLoading }) => {
  if (isLoading) {
    return <div>Loading....</div>;
  }
  if (!isLoading && data.length <= 0) {
    return <div> Oops, no match found </div>;
  }

  return (
    <>
      <Box
        style={{
          margin: 20,
        }}
      >
        <Grid container spacing={4}>
          {data.map((item) => (
            <Grid item xs={3} key={item.char_id}>
              <ToolTip item={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Characters;
