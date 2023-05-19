import Button from '../Button';
import './style.scss';

export default function Form(){
    return(
        <form className='novaTarefa'>
            <div className='inputContainer'>
                <label htmlFor='task'>Insert a new task here!</label>
                <input type="text" name="task" id="task"
                placeholder="What Thou Shall Do?" required/>
            </div>

            <div>
                <label htmlFor='time'>Time</label>
                <input type="time" name="time" id='time'
                step="1" min="00:00:00" max="24:00:00" required/>
            </div>

            <Button/>
        </form>
    )
}