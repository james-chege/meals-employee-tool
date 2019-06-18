import React, {Component} from 'react'; 
import './querySection.scss';

export class QuerySection extends Component {

    emails = ['jonathan.doeson@andela.com', 'jonathan.doeson@andela.com', 'jonathan.doeson@andela.com', 'jonathan.doeson@andela.com', 'jonathan.doeson@andela.com'];

    renderChoiceBox (){
        let visibility;

        if (this.emails.length === 0) {
            visibility = 'hidden';
        } 
        else {
            visibility = 'display';
        }

        return(
        <div className={`choice-box-${visibility}`}>
            {this.emails.map( (emailItem) => (
                <div className='email-item'> {emailItem} </div>
            ) )}
        </div>
        )
    }

    renderEmailField (){
        return(
            <>
                <div className='input-label'>
                    Email
                </div>
                <div className='input-field' contenteditable='true'>
                    
                </div>
                {this.renderChoiceBox()}
            </>
        )
    }

    render() {
        return (
        <div className='query-section'>
            <div className='email-input-container'>
                {this.renderEmailField()}
            </div>
        </div>
        );
    }
}