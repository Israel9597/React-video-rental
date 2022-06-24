import React, { Component } from "react";
import Like from "./common/like";
import Table from "./common/table"
import {Link} from 'react-router-dom'


class MoviesTable extends Component {


  columns = [
    { path: "title", lable: "Title", content: movie => <Link to={`/movies/${movie._id}`}>{ movie.title}</Link>},
    { path: "genre.name", lable: "Genere" },
    { path: "numberInstock", lable: "Stock" },
    { path: "dailyRentalRate", lable: "Rate" },
    {
      key: "like",
      content: movie=><Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />,
    },
    {
      key: "delete",
      content:movie=> (
        <button
          onClick={() => this.props.onDelete(movie)}
          type="button"
          class="btn btn-danger"
        >
          Delete
        </button>
      ),
    },
  ];

  raiseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };
  render() {
    const { movies,  sortColumn, onSort } = this.props;

    return (
     <Table columns={this.columns} data={movies} sortColumn={sortColumn} onSort={onSort}/>
    );
  }
}

export default MoviesTable;
