import React, {useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import {Card, Popover, Button, Avatar, List, Comment} from 'antd';
import {EllipsisOutlined, HeartOutlined, MessageOutlined, HeartTwoTone, RetweetOutlined} from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import PostImages from './PostImages';
import CommentForm from './CommentForm';
import PostCardContent from './PostCardContent';
import FollowButton from './FollowButton';
import { REMOVE_POST_REQUEST, LIKE_POST_REQUEST, UNLIKE_POST_REQUEST, RETWEET_REQUEST } from '../reducers/post';

function PostCard({post}) {
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const id = useSelector((state) => state.user.user?.id);
  const {removePostLoading} = useSelector((state) => state.post);
  const dispatch = useDispatch();

  const onLike = useCallback(
    () => {
      if (!id) {
        return alert('로그인이 필요합니다.');
      }
      return dispatch({
        type: LIKE_POST_REQUEST,
        data: post.id,
      });
    }, [id],
  );

  const onUnLike = useCallback(
    () => {
      if (!id) {
        return alert('로그인이 필요합니다.');
      }
      return dispatch({
        type: UNLIKE_POST_REQUEST,
        data: post.id,
      });
    }, [id],
  );

  const onRetweet = useCallback(
    () => {
      if (!id) {
        return alert('로그인이 필요합니다.');
      }
      return dispatch({
        type: RETWEET_REQUEST,
        data: post.id,
      });
    },
    [id],
  );

  const onToggleComment = useCallback(
    () => {
      setCommentFormOpened((prev) => !prev);
    }, [],
  );

  const onRemovePost = useCallback(
    () => {
      if (!id) {
        return alert('로그인이 필요합니다.');
      }
      return dispatch({
        type: REMOVE_POST_REQUEST,
        data: post.id,
      });
    }, [id],
  );
  const liked = post.Likers.find((v) => v.id === id);

  return (
    <div style={{marginBottom: 10}}>
      <Card
        cover={post.Images[0] && <PostImages images={post.Images} />}
        actions={[
          <RetweetOutlined key="retweet" onClick={onRetweet} />,
          liked
            ? <HeartTwoTone twoToneColor="eb2f96" key="heart" onClick={onUnLike} />
            : <HeartOutlined key="heart" onClick={onLike} />,
          <MessageOutlined key="comment" onClick={onToggleComment} />,
          <Popover
            key="more"
            content={(
              <Button.Group>
                {id && post.User.id === id
                  ? (
                    <>
                      <Button>Modify</Button>
                      <Button type="danger" loading={removePostLoading} onClick={onRemovePost}>Remove</Button>
                    </>
                  )
                  : <Button>Report</Button>}
              </Button.Group>
            )}
          >
            <EllipsisOutlined />
          </Popover>,
        ]}
        extra={id && <FollowButton post={post} />}
      >
        <Card.Meta
          avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
          title={post.User.nickname}
          description={<PostCardContent postData={post.content} />}
        />
      </Card>
      {commentFormOpened && (
        <div>
          <CommentForm post={post} />
          <List
            header={`${post.Comments.length}개의 댓글`}
            itemLayout="horizontal"
            dataSource={post.Comments}
            renderItem={(item) => (
              <li>
                <Comment
                  author={item.User.nickname}
                  avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                  content={item.content}
                />
              </li>
            )}
          />
        </div>
      )}
      {/* <CommentForm/>
      <Comments/> */}
    </div>
  );
}

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.object,
    content: PropTypes.string,
    createdAt: PropTypes.string,
    Comments: PropTypes.arrayOf(PropTypes.object),
    Likers: PropTypes.arrayOf(PropTypes.object),
    Images: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default PostCard;
