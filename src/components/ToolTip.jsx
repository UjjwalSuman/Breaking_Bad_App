import React from 'react';
import {
  Card, makeStyles, Tooltip, Typography,
} from '@material-ui/core';

const useStyle = makeStyles({
  img: {
    height: 300,
    width: '100%',
    objectFit: 'cover',
  },
});

const Character = ({ item }) => {
  const classes = useStyle();
  return (
    <Card>
      <Tooltip
        title={(
          <>
            <Typography>
              Name:
              {item.name}
            </Typography>
            <Typography>
              NickName:
              {item.nickname}
            </Typography>
            <Typography>
              Status:
              {item.status}
            </Typography>
          </>
        )}
        arrow
        placement="top"
      >
        <img src={item.img} className={classes.img} alt="character" />
      </Tooltip>
    </Card>
  );
};

export default Character;
