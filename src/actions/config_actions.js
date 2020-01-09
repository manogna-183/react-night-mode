import {
    DARK_MODE
} from './types';

export default function darkModeAction(variable) {
    return {
        type: DARK_MODE,
        payload: variable
    }
}
