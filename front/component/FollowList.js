import React from 'react';
import {useDispatch} from 'react-redux';
import {List, Button, Card} from 'antd';
import PropTypes from 'prop-types';
import {stopOutLined} from '@ant-design/icons';
import { UNFOLLOW_REQUEST, REMOVE_FOLLOWER_REQUEST } from '../reducers/user';

function FollowList({header, data}) {
  const dispatch = useDispatch();
  const onCancle = (id) => () => {
    if (header === 'Following') {
      dispatch({
        type: UNFOLLOW_REQUEST,
        data: id,
      });
    }
    dispatch({
      type: REMOVE_FOLLOWER_REQUEST,
      data: id,
    });
  };
  return (
    <List
      style={{marginBottom: 20}}
      grid={{gutter: 4, xs: 2, md: 3}}
      size="small"
      header={<div>{header}</div>}
      loadMore={<div style={{textAlign: 'center', margin: '10px 0'}}><Button>Load More</Button></div>}
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item style={{marginTop: 20}}>
          <Card actions={[
            <stopOutLined key="stop" onClick={onCancle(item.id)} />]}
          >
            <Card.Meta description={item.nickname} />
          </Card>
        </List.Item>
      )}
    />
  );
}

FollowList.propTypes = {
  header: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

export default FollowList;
