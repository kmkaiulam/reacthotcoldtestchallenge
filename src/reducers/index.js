
import { RESTART_GAME, MAKE_GUESS, UPDATE_AURAL_STATUS } from '../actions';



const initialState = {
    guesses: [],
    feedback: 'Make your guess!',
    auralStatus: '',
    correctAnswer: Math.floor(Math.random() * 100) + 1
}


export const gameReducer = (state=initialState, action) => {
    if (action.type === RESTART_GAME) {
        return Object.assign({}, initialState, {correctAnswer: Math.floor(Math.random() * 100) + 1}
        )}
    else if(action.type === MAKE_GUESS) {
        let guess = parseInt(action.guess, 10);
        if (isNaN(guess)) {
            return Object.assign({}, state, {feedback: 'Please enter a valid number'});
        }
        else{

            const difference = Math.abs(guess - state.correctAnswer);

            let feedback;
            if (difference >= 50) {
            feedback = 'You\'re Ice Cold...';
            } else if (difference >= 30) {
            feedback = 'You\'re Cold...';
            } else if (difference >= 10) {
            feedback = 'You\'re Warm.';
            } else if (difference >= 1) {
            feedback = 'You\'re Hot!';
            } else {
            feedback = 'You got it!';
            }

            return Object.assign({}, state, { feedback: feedback, guesses: [...state.guesses, action.guess]})
        }
    }
    else if (action.type === UPDATE_AURAL_STATUS) {
        const { guesses, feedback } = state;
        const pluralize = guesses.length !== 1;
        let  auralStatus = `Here's the status of the game right now: ${feedback} You've made ${guesses.length} ${pluralize ? 'guesses' : 'guess'}.`;

        if (guesses.length > 0) {
        auralStatus += ` ${pluralize ? 'In order of most- to least-recent, they are' : 'It was'}: ${guesses.reverse().join(', ')}`;
        }
        return Object.assign({}, state, {auralStatus})
    } 
    return state
}


