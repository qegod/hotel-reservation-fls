import {useEffect} from "react";
import {useAppDispatch} from "../../../app/providers/Redux/store/store.ts";
import {fetchHotelsThunk} from "../../../features/fetchHotels";
import HotelsComponent from "./HotelsComponent/HotelsComponent.tsx";

const MainPage = () => {
    const dispatch = useAppDispatch()


    useEffect(() => {
       dispatch(fetchHotelsThunk({page: 1, limit: 10}))
    })

    return (
        <div>
            <HotelsComponent/>
        </div>
    );
};

export default MainPage;
