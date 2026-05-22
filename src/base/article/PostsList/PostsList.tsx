import { FC } from 'react';

import { listStyle } from './styles';
import { Post, PostPropType } from '@/base/article/Post';

type PostsListPropType = {
  postsList: PostPropType[];
};

export const PostsList: FC<PostsListPropType> = ({ postsList }) => (
  <ul style={listStyle}>
    {postsList.map((post) => (
      <Post
        key={post.title}
        datetime={post.datetime}
        link={post.link}
        title={post.title}
      />
    ))}
  </ul>
);
