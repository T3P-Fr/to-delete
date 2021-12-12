import React from 'react';

function Book(props) {
	const { img, title, author } = props;

	const clickHandler = (e) => {
		console.log(title);
	};
	return (
		<article className='book'>
			<img width='200' src=' alt=' src={img} />
			<h1 onClick={clickHandler}>{title}</h1>
			<p>{author}</p>
		</article>
	);
}

export default Book;
