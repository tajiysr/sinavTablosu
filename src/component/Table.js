import React, { Component } from "react";
import moment from "moment";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exams: [
        {
          id: 1,
          name: "Banka ve Sigorta Muhasebesi",
          date: new Date(2020, 0, 5, 16)
        },
        { id: 2, name: "Pazarlama ilkeleri", date: new Date(2020, 0, 7, 9) },
        { id: 3, name: "Stratejik Yönetim", date: new Date(2020, 0, 9, 11) },
        { id: 4, name: "Marka Yönetimi", date: new Date(2020, 0, 10, 11) },
        { id: 5, name: "Yönetim Muhasebesi", date: new Date(2020, 0, 11, 13) },
        {
          id: 6,
          name: "Tüketici Davranışları",
          date: new Date(2020, 0, 12, 12)
        }
      ]
    };
  }
  renderTableData() {
    return this.state.exams
      .filter(x => moment(x.date).isAfter(new Date()))
      .map(({ id, name, date }) => (
        <tr key={id}>
          <td>{name}</td>
          <td>{moment(date).format("YYYY/MM/DD")}</td>
          <td>{moment(date).format("HH:mm")}</td>
          <td>{moment(date).fromNow()}</td>
        </tr>
      ));
  }
  renderTableHeader() {
    return (
      <>
        <th>Sınav</th>
        <th>Tarih</th>
        <th>Saat</th>
        <th>Kalan Süre</th>
      </>
    );
  }
  render() {
    return (
      <div>
        <div>
        <h2>Sınavlar Tablosu</h2>
        <table id="exams">
          <tbody>
            <tr>{this.renderTableHeader()}</tr>
            {this.renderTableData()}
          </tbody>
        </table>
        </div>
        <div className="clearfix"></div>
        <div className="footer">
        <div className="cop">
          <div>
            <p>
              Muhammed Tayyip Taji <br /> İçin Hazırlanmıştır
            </p>
            <img src="./logo.svg" />
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Table;
