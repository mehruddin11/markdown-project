import {useState} from 'react';
import ReactMarkdown from 'react-markdown'
const Markdown =() =>{
	const [markdown, setMarkdown] = useState('##defaultValue')
	return (
		<section className='markdown'>
		<textarea className='input' 
		value = {markdown} onChange= {(e) =>setMarkdown(e.target.value) } >
		 </textarea>
		 <article className='result'>
		 <ReactMarkdown>{markdown}</ReactMarkdown>
		 </article>
		</section>

		)
}
export default Markdown;