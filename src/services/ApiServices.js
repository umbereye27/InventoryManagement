import instance from "../config/Axios";
import jwt from "jsonwebtoken";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const userLogin = async (username, password) => {
  try {
    const response = await instance.post("/signin", {
      username: username,
      password: password,
    });
    const token = response.data.token;
    localStorage.setItem("token", token);
    const decodeToken = jwt.decode(token);
    const userRole = decodeToken.role;
    localStorage.setItem("role", userRole);
    localStorage.setItem("username", decodeToken.email);
    return true;
  } catch (error) {
    toast.error("error happened: " + error.response.data.error);
    return false;
  }
};

const userSignUp = async (username, email, password, role) => {
  try {
    await instance.post("/addUser", {
      username: username,
      email: email,
      password: password,
      role: role,
    });
    return true;
  } catch (error) {
    toast.error("error happened: " + error.response.data.error);
    return error;
  }
};

const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
};

const addRequest = async (productsData) => {
  try {
    const response = await instance.post("/requests/create", productsData);
    console.log(productsData);
    return true;
  } catch (error) {
    toast.error("error happened: " + error.response.data.error);
  }
};
const getAllProducts = async () => {
  try {
    const response = await instance.get("/products/getAll");
    const products = response.data.products;

    const productDetails = products.map(({ _id, productName }) => ({
      id: _id,
      name: productName,
    }));
    return productDetails;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

const getAllRequest = async () => {
  try {
    const response = await instance.get("/requests/getAll");
    return response;
  } catch (e) {
    return false;
  }
};
const addAmount = async (balanced) => {
  try {
    const response = await instance.post("/account/balance", {
      balance: balanced,
    });
    return response;
  } catch (e) {
    return false;
  }
};
const getReportFinance = async (balanced) => {
  try {
    const response = await instance.get("/account/balance");
    return response;
  } catch (e) {
    return false;
  }
};

const approveRequest = async (data, status, description) => {
  try {
    const response = await instance.patch(`/requests/${data}`, {
      status: status,
      description: description,
    });
    if (response) {
      toast.success(response.data.message);
    }
  } catch (error) {
    toast.error(error.response.data.error);
    return error;
  }
};
export {
  userLogin,
  logout,
  userSignUp,
  addRequest,
  getAllProducts,
  getAllRequest,
  addAmount,
  approveRequest,
  getReportFinance,
};
