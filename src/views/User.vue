<template>
  <div class="page">
    <!-- User settings -->
    <div v-if="currentUser.hasUser" class="user-wrap flex-center">
      <form-user-data></form-user-data>
    </div>

    <!-- Sign in ui -->
    <div v-else class="user-wrap flex-center">
      <div class="panel signin flex-col animate__animated animate__bounceIn">
        <div class="flex-center">
          <img src="@/assets/playing.png" />
        </div>

        <div class="flex-center signin-area">
          <button
            role="btn"
            class="signin-btn flex-center"
            id="signin"
            @click="signinAction"
          >
            <img src="@/assets/google.png" height="30px" />
            Sign with Google
          </button>
        </div>
      </div>
    </div>
  </div>
</template>



<script src="./user.index.js"></script>