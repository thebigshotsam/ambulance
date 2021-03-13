import axios from "axios";
const baseurl = "https://health-express.herokuapp.com";
export const getOTP = async (contact) => {
  try {
    const { data } = await axios.get(
      `${baseurl}/auth/getOTP?phno=${contact}&sms=channel`
    );
    return data;
  } catch (err) {
    console.log(err);
    return { error: "Error occured" };
  }
};
export const verifyOTP = async (otp, contact) => {
  try {
    const {
      data,
    } = await axios.get(
      `${baseurl}/auth/verifyOTP?phno=${contact}&otp=${otp}`,
      { headers: { "Access-Control-Allow-Origin": "*" } }
    );
    return data;
  } catch (err) {
    console.log(err);
    return { error: "Error occured" };
  }
};
