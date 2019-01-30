import React from 'react';

class AddItemForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
        }
    }

    onSubmitForm = (event) => {
        event.preventDefault();
        this.props.onAddItem(this.state.inputValue);
        this.setState({
            inputValue: '',
        })
    }

    updateInputValue(event) {
        this.setState({
            inputValue: event.target.value,
        })
    }

    render() {
        return (
            <form 
                className='add-item-form'
                onSubmit={(event) => this.onSubmitForm(event)}
            >
              <section className='input-section'>
                <input 
                    type='text' 
                    id='add-item-input' 
                    placeholder='Add Item' 
                    value={this.state.inputValue}
                    onChange={event => this.updateInputValue(event)}/>
                <input 
                    type='submit' 
                    id='add-item-submit' 
                    value='Add Item'/>
              </section>
            </form>
        )
    }
}

export default AddItemForm;