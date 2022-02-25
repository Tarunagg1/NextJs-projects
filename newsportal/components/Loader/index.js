
import style from "./loader.module.css";

const Loader = ({ message }) => {
    return (
        <div className={style.loader}>{message}</div>
    );
}

export default Loader;