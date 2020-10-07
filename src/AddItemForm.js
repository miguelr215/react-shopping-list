import React from 'react';

class AddItemForm extends React.Component {
    render(){
        return(
            <form>
                <input 
                    type='text'
                    placeholder='carrots'
                    aria-label='Shopping List item'
                />
                <button type='submit'>Add Item</button>
            </form>
        )
    }
}

export default AddItemForm;