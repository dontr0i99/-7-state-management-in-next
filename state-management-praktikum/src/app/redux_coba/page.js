import ReduxProvider from "../../providers/ReduxProvider";
import ReduxCounter from "../../components/ReduxCounter";


export default function ReduxCoba() {
    return (
        <ReduxProvider>
            <ReduxCounter />
        </ReduxProvider>
    );
}