import { MovePreview } from '../MovePreview/MovePreview';
import './MoveList.scss'

export const MoveList = ({ contactMoves }) => {
    return (
        <div>
            <h3>Your last 3 moves:</h3>
            <ul>
                {contactMoves.map((move, idx) => (
                    <MovePreview move={move} key={idx} />
                ))}
            </ul>
        </div>
    )
}

