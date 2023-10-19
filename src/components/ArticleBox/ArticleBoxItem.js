import { useState } from "react";
import { Link } from "react-router-dom";

function ArticleBoxItem(data) {
    const {onClick,item,type} =data
    const [active, setActive] = useState(false);
    function handleActive(){
        setActive(!active)
      }
    return  <li
    className={`box-list-item ${active ? 'active':''} `}
    onClick={() => {
      onClick(type, item.id, item.name)
      handleActive()
    } }
  >
    <Link to="/">{item.name}</Link>
  </li>
}

export default ArticleBoxItem;