<template lang="html">
  <div>
    <h1>Hotel Booking</h1>
    <div class="main-container">
      <div class="formwrap"><bookings-form></bookings-form></div>
      <div class="formwrap"><bookings-grid :bookings="bookings" ></bookings-grid></div>
    </div>
  </div>
</template>

<script>
import BookingsForm from '@/components/BookingsForm';
import BookingsGrid from '@/components/BookingsGrid';
import BookingService from '@/services/BookingService';
import { eventBus } from '@/main';

export default {
  name: 'app',
  data() {
    return {
      bookings: []
    }
  },
  components: {
    'bookings-form': BookingsForm,
    'bookings-grid': BookingsGrid,
  },
  mounted(){
    this.fetchData();

    eventBus.$on('booking-added', booking => this.bookings.push(booking));

    eventBus.$on('booking-deleted', id => {
      const index = this.bookings.findIndex(booking => booking.id === id);
      this.bookings.splice(index, 1);
    })
  },
  methods: {
    fetchData(){
        BookingService.getBookings()
        .then(bookings => this.bookings = bookings);
    }
  }
}
</script>

<style lang="css" scoped>
h1{
  text-align: center;
}

.main-container {
  display: flex;
}
.formwrap {
  padding: 30px;
}
</style>
