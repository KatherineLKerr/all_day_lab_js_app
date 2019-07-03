<template lang="html">
  <form id="bookings-form" v-on:submit="handleSubmit">
    <h2>Add a booking</h2>
    <div class="formwrap">
      <label for="firstName">First Name:</label>
      <input type="text" id="firstName" v-model="firstName"/>
    </div>
    <div class="formwrap">
      <label for="secondName">Second Name:</label>
      <input type="text" id="secondName" v-model="secondName"/>
    </div>
    <div class="formwrap">
      <label for="email">E-mail Address:</label>
      <input type="text" id="email" v-model="email"/>
    </div>
    <div class="formwrap">
      <label for="bookedInStatus">Booked In?</label>
      <input type="checkbox" id="bookedInStatus" v-model="bookedInStatus"/>
    </div>
    <div class="formwrap">
      <label for="bookedInDate">Booked In Date:</label>
      <input type="date" id="bookedInDate" v-model="bookedInDate"/>
    </div>

    <input type="submit" name="Save" id="save"/>
    </form>


</template>

<script>

import { eventBus } from "../main";
import BookingsService from '../services/BookingService';

export default {
    name: "bookings-form",
    data() {
      return {
        firstName: '',
        secondName: '',
        email: '',
        bookedInStatus: false,
        bookedInDate: ""
      }
    },
  methods: {
    handleSubmit(evt) {
      evt.preventDefault();

      const payload = {
        firstName: this.firstName,
        secondname: this.secondName,
        email: this.email,
        bookedInStatus: this.bookedInStatus,
        bookedInDate: this.bookedInDate
      };
      BookingsService.postBooking(payload)
      .then(booking => {
        eventBus.$emit('booking-added', booking)
        });
    }
  }
}
</script>

<style lang="css" scoped>
#bookings-form {
  width: 275px;
}
.formwrap{
  display: flex;
  justify-content: space-between;
}
</style>
