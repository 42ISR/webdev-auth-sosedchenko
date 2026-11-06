import Button from './Button'
import TextArea from './TextArea'

const MessageField = () => {
    const handleSumbit = (e) => {
        e.preventDefault();
        const data = {
            content: e.target.content.value
        }

        console.log(data)
    };

    return (
        <div className="create-message-section">
            <div className="container">
                <div className="create-message-card">
                    <h2 className="create-message-title">Создать сообщение</h2>
                    <form
                        onSubmit={handleSumbit}
                        className="create-message-form">
                        <TextArea
                            name="content"
                            placeholder="Поделитесь мнением..."
                        />
                        <Button>Отправить</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default MessageField
