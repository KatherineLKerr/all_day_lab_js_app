<template lang="html">
  <div id="bookingsGrid">
    <div class="booking" v-for="booking in bookings">
      <h2> {{booking.firstName}} {{booking.secondName}} </h2>
      <p>{{ booking.email }}</p>
      <p>Booked In? {{booking.bookedInStatus}} on {{booking.bookedInDate}}</p>
      <button type="button" v-on:click="handleDelete(booking._id)">Delete!</button>
    </div>
  </div>



</template>

<script>
import { eventBus } from "../main";
import BookingService from  "../services/BookingService"

export default {
  name: "bookings-grid",
  props: ['bookings'],
  methods: {
    handleDelete(id) {
      BookingService.deleteBooking(id)
      .then(response => eventBus.$emit('booking-deleted', id));
    }
  }
}

</script>

<style lang="css" scoped>
#bookingsGrid{
  display: flex;
  flex-wrap: wrap;
}

.booking{
  border-style: solid;
  border-width: 1px;
  margin: 10px;
  padding: 10px;
}

</style>
