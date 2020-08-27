import axios from "axios";

const baseUrl = process.env.REACT_APP_API_URI;

const gameService = async (count) => {
  try {
    const data = await axios.post(
      `${baseUrl}/api/result`,
      { score: count },
      { withCredentials: true }
    );

    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default gameService;
