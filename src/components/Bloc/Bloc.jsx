import React from "react";
import "./Bloc.css"
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import boulder1 from "../../imgs/albages/el-roc-de-la-duna/boulder-1.JPG";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { SectorsVies } from "../../data/data"

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
function createData(name, grau, icones) {
  return { name, grau, icones };
}
const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const rows = [
  createData("Menys migidiades i mes dominades", "6a+"),
  createData("El bong", "7a+"),
  createData("La del retorn", "6b"),
  createData("Hi havia una vegada", "5"),
  createData("Tortellada", "8c+"),
];

const rowsB = Object.keys(SectorsVies).map((element) => {
  createData(element.title, )
});

const Bloc = (props) => {
  return (
    <>
      {/* WIP REFACTOR THIS A UN COMPONENT QUE SIGUI BLOC I MAPEJAR */}

      <Paper
        sx={{
          p: 2,
          margin: "auto",
          marginTop: "32px",
          maxWidth: "80%",
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        }}
      >
        <Grid container spacing={2}>
          <Grid item>
            {/* <ButtonBase sx={{ width: 420, height: 420 }}> */}
              <Img className="blocimg" sx={{
                maxWidth: '512px',
                maxHeight: '512px'
              }} alt="complex" src={boulder1} />
            {/* </ButtonBase> */}
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  BOULDER 1 (NOM)
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  COORDS: 42,324432 53,234543
                </Typography>

                <TableContainer component={Paper}>
                  {/* <Table sx={{ minWidth: 700 }} aria-label="customized table"> */}
                  <Table aria-label="customized table">
                    <TableBody>
                      {rows.map((row, index) => (
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
                            {/* {WIP ICONES} */}
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
    </>
  );
};

export default Bloc;
