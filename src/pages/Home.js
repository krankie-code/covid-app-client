import React, { Component } from "react";
import Cards from "../components/Cards/Cards";
import Country from "../components/Country/Country";
import styles from "../App.module.css";
import { getData } from "../api/index";
import { withAuth } from "../lib/AuthProvider";
import Navbar from "../components/Navbar/Navbar";

class Home extends Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const data = await getData();
    const finalData = data.data;

    this.setState({ data: finalData });
  }

  handleCountryChange = async (country) => {
    const getCountryData = await getData(country);
    const finalData = getCountryData.data;

    this.setState({ data: finalData });
  };
  render() {
    const { data } = this.state;
    return (
      <div>
        <Navbar />
        <div className={styles.container}>
          <h1>Welcome</h1>
          <Country handleCountryChange={this.handleCountryChange} />
          <Cards data={data} className={styles.container} />
          {/* <Chart/> */}
        </div>
      </div>
    );
  }
}

export default withAuth(Home);
