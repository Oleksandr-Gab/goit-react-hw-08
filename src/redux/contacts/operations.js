import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("/contacts");
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (id, thunkAPI) => {
        try {
            const response = await axios.post("/contacts", id);
            toast.info("New contact added");
            return response.data;
        } catch (error) {
            toast.error("Oops! error! try again!");
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (id, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${id}`);
            toast.info(`Сontact deleted`);
            return response.data;
        } catch (error) {
            toast.error("Oops! error! try again!");
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
