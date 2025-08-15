import './PostInfo.scss';
import { UserInfo } from '../UserInfo';

export const PostInfo = ({ post }) => {
  if (!post) {
    return null;
  }

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>
        <UserInfo user={post.user} />
        <p>{'Posted by '}</p>
      </div>
      <p className="PostInfo__body">{post.body}</p>
    </div>
  );
};
