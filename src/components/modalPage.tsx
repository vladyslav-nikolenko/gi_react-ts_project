import React from 'react';
import {
  Typography,
  Box,
  Button,
  Modal,
  Table,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { ICard } from '../models';

interface ModalPageProps {
  open: boolean;
  handleClose: any;
  film: ICard;
}

const baseUrlImg = 'https://image.tmdb.org/t/p/w500';

function ModalPage({ open, handleClose, film }: ModalPageProps): JSX.Element {
  const style = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '814px',
    height: '558px',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: 'flex',
  };

  function createData(
    rowName: string,
    rowValue: any,
  ): {
    rowName: string;
    rowValue: any;
  } {
    return { rowName, rowValue };
  } // ? неудобный синтаксис

  const rows = [
    createData('Vote / Votes', film.vote_average),
    createData('Popularity', film.popularity),
    createData('Original Title', film.original_title),
  ];

  console.log(open, 'openModels');

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img
            src={baseUrlImg + film.poster_path}
            alt={film.title}
            loading="lazy"
            width="375px"
            height="478px"
          />
          <Box sx={{ width: '375px', height: '478px' }}>
            <Typography variant="h3" gutterBottom>
              {film?.name || film?.original_name || film?.original_title}
            </Typography>
            <Table aria-label="simple table">
              <TableBody>
                {rows.map(row => (
                  <TableRow
                    key={row.rowName}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.rowName}
                    </TableCell>
                    <TableCell align="right">{row.rowValue}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Typography gutterBottom>{film?.overview}</Typography>
            <Button variant="contained">Add to Watched</Button>
            <Button variant="contained">Add to Queue</Button>
          </Box>
          <CloseIcon onClick={handleClose} />
        </Box>
      </Modal>
    </div>
  );
}

export default ModalPage;
