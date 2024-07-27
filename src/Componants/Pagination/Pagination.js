import React, { useEffect, useState } from 'react';
import * as Styled from './style';
import { getVisiblePages } from './PaginationSetting';

export default function Pagination(props) {
	const [visiblePages, setVisiblePages] = useState(null);

	const { currentPage, totalPages, setCurrentPage } = props;

	useEffect(() => {
		const visible = getVisiblePages(currentPage, totalPages);
		setVisiblePages(visible);
		
	}, [props]);

	const changePage = (page) => {
		setCurrentPage(page);
	};

	const prevPage = () => {
		if (currentPage  > 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	const NextPage = () => {
		if (totalPages > currentPage ) {
			setCurrentPage(currentPage + 1);
		}
	};

	return (
		<>
			{totalPages > 1 ? (
				<Styled.pagination>
					<button onClick={prevPage} className={currentPage < 2 ? 'prev-btn disabled pagination-nav' : 'prev-btn pagination-nav'} type="button">
					<svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 1L1 5L5 9" stroke="#475467" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

					</button>
					{visiblePages &&
						visiblePages.map((page, i) => {
							if (visiblePages[i] - visiblePages[i + 1] < -1) {
								return (
									<>
										<button onClick={() => changePage(page)} key={i} type="button" className={currentPage == page ? 'pagination-nav active' : 'pagination-nav'}>
											{page}
										</button>{' '}
										<span>...</span>{' '}
									</>
								);
							} else {
								return (
									<button onClick={() => changePage(page)} key={i} type="button" className={currentPage  == page ? 'pagination-nav active' : 'pagination-nav'}>
										{page}
									</button>
								);
							}
						})}

					<button onClick={NextPage} className={totalPages <= currentPage ? 'next-btn pagination-nav disabled' : 'next-btn pagination-nav'} type="button">
					<svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1L5 5L1 9" stroke="#475467" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

					</button>
				</Styled.pagination>
			) : (
				''
			)}
		</>
	);
}
