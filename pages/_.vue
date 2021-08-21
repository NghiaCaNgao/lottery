<template>
  <div
    class="
      page-404
      w-screen
      h-screen
      justify-center
      items-center
      flex
      overflow-hidden
    "
  >
    <div class="h-2/4 flex flex-row">
      <div class="h-full object-scale-down">
        <img class="h-full" src="../static/images/detective.png" />
      </div>
      <div class="mx-7 my-auto">
        <div>
          <h1 class="text-gray-600 text-9xl text-center font-mono font-bold">
            404
          </h1>
          <p class="font-semibold">Oop! We can't find the page you ordered</p>
        </div>
        <div>
          <a
            href="/"
            class="link-to-home text-gray-500 font-semibold flex items-center"
          >
            Back to <span class="text-blue-500 mx-2">homepage</span>
            <client-only><unicon name="arrow-right"></unicon></client-only>
          </a>
          <div class="social w-full flex justify-center my-3">
            <client-only>
              <a href="/"><unicon name="facebook-f" class="mx-3"></unicon></a>
              <a href="/"><unicon name="youtube" class="mx-3"></unicon></a>
              <a href="/"><unicon name="linkedin" class="mx-3"></unicon></a>
            </client-only>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFoundPage",
};
</script>

<style lang="scss">
.page-404 {
  background-color: #eaebed;
}
.link-to-home {
  &:hover {
    svg {
      transform: translateX(4px);
    }
  }
  svg {
    fill: #4b5563;
  }
}
.social {
  svg {
    fill: #4b5563;
  }
  .unicon:hover {
    cursor: pointer;
    svg {
      transform: translateY(-3px);
    }
  }
}
</style>
