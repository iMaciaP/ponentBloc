import React from "react";
import "./SectorPage.css";
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
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const SectorPage = (props) => {
  return (
    <>
    {/* WIP REFACTOR THIS A UN COMPONENT QUE SIGUI BLOC I MAPEJAR */}
      <Typography gutterBottom variant="title1" component="div">
        ZONA - SECTOR
      </Typography>
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
            <ButtonBase sx={{ width: 420, height: 420 }}>
              <Img alt="complex" src={boulder1} />
            </ButtonBase>
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
                    <TableHead>
                      <TableRow>
                        <StyledTableCell>
                          Dessert (100g serving)
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          Calories
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          Fat&nbsp;(g)
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          Carbs&nbsp;(g)
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          Protein&nbsp;(g)
                        </StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                          <StyledTableCell component="th" scope="row">
                            {row.name}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {row.calories}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {row.fat}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {row.carbs}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {row.protein}
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
export default SectorPage;
