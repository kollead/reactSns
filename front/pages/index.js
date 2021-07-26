import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import AppLayout from '../component/AppLayout';
import PostForm from '../component/PostForm';
import PostCard from '../component/PostCard';
import {LOAD_POSTS_REQUEST} from '../reducers/post';
import {LOAD_USER_INFO_REQUEST} from '../reducers/user';

const Home = () => {
  const {user} = useSelector((state) => state.user);
  const {mainPosts, hasMorePost, loadPostsLoading,
    retweetError} = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: LOAD_USER_INFO_REQUEST});
    dispatch({type: LOAD_POSTS_REQUEST});
  }, []);

  useEffect(() => {
    if (retweetError) {
      alert(retweetError);
    }
  }, [retweetError]);

  useEffect(() => {
    function onScroll() {
      console.log(window.scrollY, document.documentElement.clientHeight,
        document.documentElement.scrollHeight);
      if (window.scrollY + document.documentElement.clientHeight
         === document.documentElement.scrollHeight > 300) {
        if (hasMorePost && !loadPostsLoading) {
          const lastId = mainPosts[mainPosts.length - 1]?.id;
          dispatch({
            type: LOAD_POSTS_REQUEST,
            lastId,
          });
        }
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [hasMorePost, loadPostsLoading]);

  return (
    <AppLayout>
      {user && <PostForm />}
      {mainPosts.map((post) => <PostCard key={post.id} post={post} />)}
    </AppLayout>
  );
};
export default Home;
