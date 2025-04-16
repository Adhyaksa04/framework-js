import axios from "axios";

async function getAxios() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const result = response.data;
    console.log(result);
  } catch (error) {
    console.error("Error fetching:", error);
  }
}

getAxios();
