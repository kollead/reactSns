import React, {useState, useCallback, useEffect} from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button';
import { useSelector} from 'react-redux';
import useInput from '../hooks/useInput';

const {TextArea} = Input;

function PostCardContent({postData, editMode, onModifyPost, onClickModify}) {
  const { modifyPostLoading, modifyPostDone } = useSelector((state) => state.post);
  const [editText, onChangeText, setEditText] = useInput(postData);
  useEffect(() => {
    if (modifyPostDone) {
      onClickModify();
    }
  }, [modifyPostDone]);

  return (
    <div>
      {editMode
        ? (
          <>
            <TextArea value={editText} onChange={onChangeText} />
            <Button.Group>
              <Button loading={modifyPostLoading} onClick={onModifyPost(editText)}>수정</Button>
              <Button type="danger" onClick={onClickModify}>수정 취소</Button>
            </Button.Group>
          </>
        )
        : postData.split(/(#[^\s#]+)/g).map((v) => {
          if (v.match(/(#[^\s#]+)/)) {
            return <Link key={v} href={`/hashtag/${v.slice(1)}`}><a>{v}</a></Link>;
          }
          return v;
        })}
    </div>
  );
}

PostCardContent.propTypes = {
  postData: PropTypes.string.isRequired,
  editMode: PropTypes.bool,
  onModifyPost: PropTypes.func.isRequired,
  onClickModify: PropTypes.func.isRequired,
};

PostCardContent.defaultProps = {
  editMode: false,
};

export default PostCardContent;
