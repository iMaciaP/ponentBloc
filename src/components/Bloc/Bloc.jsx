import React from "react";
import "./Bloc.css";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import esperoTest from "../../imgs/castelldans/la-valleta/espero-cabro2.jpg";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { BiChair } from 'react-icons/bi';
import { FaHeart } from 'react-icons/fa';
import { CgDanger } from 'react-icons/cg';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  maxHeight: "80%",
  bgcolor: "#9badc9",
  border: "2px solid #000",
  overflow: "scroll",
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  // maxHeight: "100%",
});

const Bloc = (props) => {
  const { vies } = props;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Paper
        sx={{
          p: 2,
          margin: "16px",
          marginTop: "32px",
          maxWidth: "100%",
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        }}
      >
        <Grid container spacing={2}>
          <Grid item style={{ display: "flex" }}>
            <ButtonBase
              sx={{
                objectFit: "cover",
                width: "100%",
                height: 250,
              }}
              onClick={handleOpen}
            >
              <Img className="blocimg" alt="complex" src={!!props.img ? props.img : esperoTest} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  {props.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  COORDS: {props.coords}
                </Typography>

                <TableContainer component={Paper}>
                  {/* <Table sx={{ minWidth: 700 }} aria-label="customized table"> */}
                  <Table aria-label="customized table">
                    <TableBody>
                      {vies.map((row, index) => (
                        <StyledTableRow key={row.name}>
                          <StyledTableCell component="th" scope="row">
                            {index + 1}
                          </StyledTableCell>
                          <StyledTableCell component="th" scope="row">
                            {row.name}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {row.grau}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            <Tooltip title="Sit Start">
                              <IconButton>
                                <BiChair />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title="Caiguda fotuda">
                              <IconButton>
                                <CgDanger />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title="Blocarro">
                              <IconButton>
                                <FaHeart />
                              </IconButton>
                            </Tooltip>
                          </StyledTableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        onBackdropClick={handleClose}
      >
        <Box sx={style}>
          <Img className="blocimg" alt="complex" src={esperoTest} />
        </Box>
      </Modal>
    </>
  );
};

export default Bloc;
