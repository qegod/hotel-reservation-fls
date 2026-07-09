import cls from './HotelsDetailsPage.module.scss'
import {useParams} from "react-router";


const HotelsDetailsPage = () => {
    const {id} = useParams();


    return (
        <div className={cls.HotelsDetailsPage}>
            <h5>{id}</h5>
        </div>
    );
};

export default HotelsDetailsPage;
