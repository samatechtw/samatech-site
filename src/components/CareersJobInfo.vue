<template>
<div v-if="job" class="job-wrap">
  <div class="job-description" v-html="job.description" />
  <div class="job-section">
    {{ $t('careers.responsibilities') }}
  </div>
  <ul class="job-requirements">
    <li
      v-for="(resp, index) in job.responsibilities"
      :key="index"
      class="job-list-item"
    >
      {{ resp }}
    </li>
  </ul>
  <div class="job-section">
    {{ $t('careers.requirements') }}
  </div>
  <ul class="job-qualifications">
    <li
      v-for="(req, index) in job.requirements"
      :key="index"
      class="job-list-item"
    >
      {{ req }}
    </li>
  </ul>
  <a v-if="job.link" class="job-link" :href="job.link" target="_blank">
    <div>
      {{ $t('careers.apply') }}
    </div>
  </a>
</div>
</template>

<script>
export default {
  props: {
    job: {
      type: Object,
      default: null,
    },
  },
  setup() {

  },
};
</script>

<style lang="postcss">
@import '/src/assets/css/global.css';

.job-wrap {
  padding: 0 24px;
  border-left: 1px solid $light1;
  border-right: 1px solid $light1;
  border-bottom: 1px solid $light1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .job-description {
    @mixin medium 17px;
    line-height: 32px;
    margin-top: 16px;
    width: 90%;
  }
  .job-section {
    @mixin semibold 16px;
    margin-top: 16px;
  }
  ul {
    width: 85%;
  }
  li {
    @mixin light 18px;
    line-height: 32px;
    margin-bottom: 16px;
    list-style: disc outside;
    width: 85%;
  }
  a {
    text-decoration: none;
    color: $purple;
  }
  .job-link {
    margin: 4px 0 8px 24px;
    div {
      padding: 10px 32px 9px;
      @mixin semibold 16px;
      border: 1px solid $purple;
      color: $purple;
      align-self: flex-start;
      position: relative;
      &:hover {
        top: -1px;
        box-shadow: 0 2px 12px 6px rgba($purple, 0.3);
      }
    }
  }
}

</style>
