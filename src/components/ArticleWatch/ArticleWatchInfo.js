import { formatDate } from "../../helpers";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {  setReload,setProductType } from "../../store/movie/action"
function ArticleWatchInfo({data}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleClickw(type,id,title){
    navigate(`/`);
    dispatch(setReload(0))
    dispatch(setProductType(type, id, title));
  }
  return (
    <div className="info">
      <ul>
        <li className="line-clamp">
          * Name: <span >{data?.name}</span>
        </li>
        <li className="line-clamp">
          * Diễn viên:<span onClick={()=>handleClickw('actor',data.ActorId,data?.Actor?.name)}>{data?.Actor?.name === 'No name' ? 'Đang cập nhập':data?.Actor?.name}</span>
        </li>
        <li className="line-clamp">
          * Thể loại:<span onClick={()=>handleClickw('genre',data.GenreId,data?.Genre?.name)}>{data?.Genre?.name ==='NO'?"Đang cập nhập":data?.Genre?.name}</span>
        </li>
        <li className="line-clamp">
          * Ngày phát hành:<span>{formatDate(data?.createdAt)}</span>
        </li>
        <li className="line-clamp">
          * Quốc gia:<span onClick={()=>handleClickw('country',data.CountryId,data?.Country?.name)}>{data?.Country?.name}</span>
        </li>
        <li className="line-clamp">
          * Image:<span>{data.imageUrl}</span>
        </li>
        <li className="line-clamp">
          * View:<span>{data.view}</span>
        </li>
      </ul>
    </div>
  );
}

export default ArticleWatchInfo;
