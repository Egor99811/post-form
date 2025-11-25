import { useState } from 'react'
import './postForm.css'

export function PostForm() {
    const [draft, setDraft] = useState(null);

    const submit = (e) => {
        e.preventDefault();
        document.getElementById('textArea').disabled = true;
        setTimeout(() => {
            let randomNumber = Math.floor(Math.random() * 10) + 1;
            if(randomNumber <= 3){
                const messageBox = document.getElementById('message-box');
                messageBox.innerHTML = 'Ошибка соединения с сервером';
            } else {
                let result
                if(draft)
                    result = draft + " " + e.target.textArea.value;
                else
                    result = e.target.textArea.value;
                setDraft(null);
                console.log(result);
                document.getElementById('message-box').innerText = 'Пост опубликован'
            }               
        }, 1500);
    }

    const reset = () => {
        document.getElementById('message-box').innerText = '';
        document.getElementById('textArea').disabled = false;
        document.getElementById('post-form').reset();
    }

    const saveDraft = () => {
        const text = document.getElementById('textArea');
        if(text.value.length !== 0)
            setDraft(text.value);
        text.value = '';
        document.getElementById('message-box').innerText = 'Черновик сохранен';
    }

    return (
        <form className='post-form' onSubmit={submit} id='post-form'>
            <div>
                <h4>Создание поста</h4>
                <h5>Создайте ноывй пост, созраните как черновик или опубликуйте</h5>
            </div>
            <div className="text-area">
                <label for='textArea'>Текст поста</label>
                <textarea id="textArea" name="textArea" rows="8" cols="40" className='text-area__text'></textarea>
            </div>
            <div className="buttons-container">
                <button className='save-button' onClick={saveDraft} type='button'>Сохранить как черновик</button>
                <button className='submit-button'>submit</button>
                <button className='reset-button' onClick={reset} type='button'>Сбросить</button>
            </div>
            <div id='message-box'>

            </div>
        </form>
    )
}