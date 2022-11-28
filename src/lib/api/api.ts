import axios from "axios";

// const base = "http://localhost:3500";
const base = "https://jpex-backend.onrender.com";
export function api(requestType: string, subpath: string, data?: any) {
  console.log("Calling api");

  if (requestType == "get") {
	  console.log(base+"/"+subpath);
	  
    const res = axios.get(base + "/" + subpath, {
      headers: {
        "Content-Type": "application/json",
      },
    });
	return res;
  } else {
    return axios.post(base + "/" + subpath, JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
