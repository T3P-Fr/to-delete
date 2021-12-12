import './App.css';
import List from './modules/Book';
import { books } from './Library';

function App() {
	return (
		<section className='bookList'>
			{books.map((infos, index) => (
				<List key={index} {...infos}></List>
			))}
		</section>
	);
}

export default App;
