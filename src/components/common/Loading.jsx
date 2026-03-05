import '../../styles/loading.css';

const Loading = ({ text = 'Đang tải...' }) => {
  return (
    <div className='loading-wrapper'>
      <div className='loading-spinner' />
      <p className='loading-text'>{text}</p>
    </div>
  );
};

export default Loading;
