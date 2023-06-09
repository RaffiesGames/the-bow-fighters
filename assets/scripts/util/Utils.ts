import { EventTarget, Vec2, sys, v2 } from "cc";

export const customEvent = new EventTarget();

export const clampMagnitude = (vector: Vec2, maxLength: number): Vec2 => {
    let magnitude = vector.length();

    if (magnitude > maxLength) {
        let normalized = v2(vector.x / magnitude, vector.y / magnitude)
        return v2(normalized.x * maxLength, normalized.y * maxLength)
    }

    return vector;
}

export const interpolate = (inputValue: number, minInput, maxInput, minOutput, maxOutput): number => {
    let x1 = minInput;
    let x2 = maxInput;
    let y1 = minOutput;
    let y2 = maxOutput;

    let slope = (y2 - y1) / (x2 - x1);
    let intercept = y1 - slope * x1;

    let outputValue = slope * inputValue + intercept;

    if (outputValue < y1) {
        return y1;
    }
    if (outputValue > y2) {
        return y2;
    }
    return outputValue;
}

export let playerName: string = 'PLAYER';
export const setPlayerName = (name: string) => {
    playerName = name.toUpperCase();
}

export let audioMute: boolean = false;
export const setAudioMute = (mute: boolean) => {
    audioMute = mute;
    sys.localStorage.setItem('mute', String(audioMute));
}

export const checkLocalStorage = () => {

    let mute = sys.localStorage.getItem('mute');
    if (mute == null) {
        setAudioMute(false);
    } else {
        audioMute = (mute === 'true');
    }

}

