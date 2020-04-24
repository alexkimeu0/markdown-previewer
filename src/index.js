import React from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';



const initialState = `
This is a paragraph
**This is bolded text**
# Heading
## Heading 2
> Block Quotes!
- list item 1
- list item 2
- list item 3

[Visit my site](https://codepen.io/alexkimeu)

This is an inline \`<div></div>\`

This is a block of code
\`\`\`
let x = 1;
let y = 24;
let z = x + y;

\`\`\`

![React Logo w/ Text](https://goo.gl/Umyytc)
`;
class App extends React.Component {

    state = {
        text: initialState
    }

    handleChange = (e) => {
        this.setState({
            text: e.target.value
        });
    }

    render(){
        const { text } = this.state;

        const markdown = marked(text, {breaks: true});

        return(
            <div>
                <h2 className="text-center m-4"><strong>Convert Your Markdown</strong></h2>
                <div className="row">
                    <div class="col-sm-6">
                        <h6 className="text-center"><strong>Enter your markdown:</strong></h6>
                        <textarea className="form-control p-2" id="editor" value={text} onChange={this.handleChange}/>
                    </div>

                    <div className="col-sm-6">
                        <h6 className="text-center"><strong>Results:</strong></h6>
                        <div className="preview rounded p-2" dangerouslySetInnerHTML={{__html: markdown}} id="preview"/>

                    </div>

                </div>
            </div>

        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));