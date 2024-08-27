import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "First name must contain at least 3 characters!"],
        maxLength: [30, "First name cannot exceed 30 characters!"],
    },

    lastName: {
        type: String,
        required: true,
        minLength: [3, "Last name must contain at least 3 characters!"],
        maxLength: [30, "Last name cannot exceed 30 characters!"],
    },

    email: {
        type: String,
        required: true,
        validate: {
            validator: validator.isEmail,
            message: "Provide a valid email"
        },
    },

    phone: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^\d{10}$/.test(v);
            },
            message: "Phone number must be exactly 10 digits!"
        },
    },

    time: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^([01]\d|2[0-3]):?([0-5]\d)$/.test(v);
            },
            message: "Time must be in the format HH:MM (24-hour)!"
        }
    },

    date: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^\d{4}-\d{2}-\d{2}$/.test(v);
            },
            message: "Date must be in the format YYYY-MM-DD!"
        }
    },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);
