import './PostInfo.scss';

export const PostInfo = ({ info }) => {
  if (!info) {
    return null;
  }

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{info.title}</h3>
        <p>{'Posted by '}</p>
      </div>
      <p className="PostInfo__body">{info.body}</p>
    </div>
  );
};
