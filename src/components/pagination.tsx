import React from 'react';
import { Pagination } from '@mui/material';

interface PropsPaginationComponent {
  setCurrentPage: (page: number) => void;
  pages: number;
}

function PaginationComponent({
  setCurrentPage,
  pages,
}: PropsPaginationComponent): JSX.Element {
  const handleChange: (page: number) => void = (page: number) => {
    setCurrentPage(page);
    window.scroll(0, 0);
  };

  return (
    <Pagination
      onChange={(e: any) => handleChange(e.target.textContent)} // ?!
      count={pages}
      shape="rounded"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: '20px',
      }}
    />
  );
}

export default PaginationComponent;
