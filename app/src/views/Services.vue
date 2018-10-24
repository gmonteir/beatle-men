<template>
  <div class="services">
    <div class="banner">
      <img src="../assets/services-banner.jpg" width="100%">
    </div>
    <h1>Foxcycle Services</h1>
    <div class="services-row">
      <div class="services-col">
        <div class="services-card">
          <h3>Basic Tune</h3>
          <h4>$100</h4>
          <ul>
            <li>Adjust brakes</li>
            <li>Adjust shifting</li>
            <li>Tension wheels</li>
            <li>Adjust hubs</li>
            <li>Install brake pads</li>
          </ul>
          <button>Call Now</button>
        </div>
      </div>
      <div class="services-col">
        <div class="services-card">
          <h3>Gold Tune</h3>
          <h4>$150</h4>
          <ul>
            <li>Full drivetrain replacement</li>
            <li>Inject new grease</li>
            <li>Adjust brakes</li>
            <li>Adjust shifting</li>
            <li>Tension wheels</li>
            <li>Adjust hubs</li>
            <li>Install brake pads</li>
          </ul>
          <button>Call Now</button>
        </div>
      </div>
      <div class="services-col">
        <div class="services-card">
          <h3>Platinum Tune</h3>
          <h4>$200</h4>
          <ul>
            <li>Hydraulic brake bleed</li>
            <li>Overhaul bottom bracket, headset, hubs</li>
            <li>Suspension shock seals, wipers, oil</li>
            <li>Pivot component replacement</li>
            <li>Full drivetrain replacement</li>
            <li>Inject new grease</li>
            <li>Adjust brakes</li>
            <li>Adjust shifting</li>
            <li>Tension wheels</li>
            <li>Adjust hubs</li>
            <li>Install brake pads</li>
          </ul>
          <button>Call Now</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .banner {
    width: 100%;
    height: 350px;
    overflow: hidden;
    position: relative;
    color: white;
    padding: 10px 0px;
  }

  .services-row {
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
  }

  .services-col {
    float: left;
    width: 25%;
    padding: 0 20px;
  }

  .services-card {
    text-align: center;
    height: 450px;
    border: 1px solid #1B2222;
  }

  ul {
    list-style-type: none;
    height: 250px;
    margin: 5px 0;
    padding: 0;
  }

  button {
    margin: 10% 0;
    background-color: #4CAF50; /* Green */
    border: 2px solid #4CAF50;
    color: white;
    padding: 10px 25px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
  }

  button:hover {
    border: 2px solid #4CAF50;
    background-color: white;
    color: black;
  }
</style>

