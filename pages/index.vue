<template>
  <div>
    <hero />
    <section class="section">
      <div class="container">
        <h1 class="title">Featured Courses</h1>
        <div class="columns">
          <div class="column is-one-quarter">
            <course-card />
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h1 class="title">Featured Articles</h1>
        <div class="columns">
          <div class="column is-one-quarter">
            <blog-card />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Hero from '~/components/shared/Hero'
import CourseCard from '~/components/CourseCard'
import BlogCard from '~/components/BlogCard'

export default {
  components: {
    Hero,
    CourseCard,
    BlogCard
  }
}
</script>

<style scoped lang="scss">
  .links {
    padding-top: 15px;
  }
</style>
