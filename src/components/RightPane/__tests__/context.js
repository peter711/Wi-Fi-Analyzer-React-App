import { context } from './test-helper';

export const AppContext = ({
    Consumer(props) {
        return props.children(context)
    }
});