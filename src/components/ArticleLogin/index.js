import "./ArticleLogin.css";
import Button from "../shared/Button";
function ArticleLogin() {
  return (
    <div className="login">
      <form>
        <div className="login_controll">
          <label>Tên đăng nhập</label>
          <input placeholder="username" />
        </div>
        <div className="login_controll">
          <label>Mật khẩu</label>
          <input type="password" placeholder="password" />
        </div>
        <Button size="large">Đăng nhập</Button>
      </form>
    </div>
  );
}

export default ArticleLogin;
