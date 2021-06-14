import React, {useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import { FOLLOW_REQUEST, UNFOLLOW_REQUEST } from '../reducers/user';

const FollowButton = ({post}) => {
  const dispatch = useDispatch();
  const {user, followLoading, unfollowLoading} = useSelector((state) => state.user);
  const isFollowing = user?.user.Following.find((v) => v.id === post.User.id);
  const onClickButton = useCallback(
    () => {
      if (isFollowing) {
        dispatch({
          type: UNFOLLOW_REQUEST,
          data: post.user.id,
        });
      } else {
        dispatch({
          type: FOLLOW_REQUEST,
          data: post.user.id,
        });
      }
    }, [],
  );

  return (
    <Button loading={followLoading || unfollowLoading} onClick={onClickButton}>
      {isFollowing ? 'unfollow' : 'follow'}
    </Button>
  );
};

FollowButton.propTypes = {
  post: PropTypes.object.isRequired,
};

export default FollowButton;