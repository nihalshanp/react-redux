import { INCREMENT_COUNT, DECREAMENT_COUNT, RESET } from "./countType"

export const increamentCount = () => {
    return {
        type: INCREMENT_COUNT
    }
}

export const decreamentCount = () => {
    return {
        type: DECREAMENT_COUNT
    }
}

export const reset = () => {
    return {
        type: RESET
    }
}