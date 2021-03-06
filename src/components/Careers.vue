<template>
  <div class="careers-wrap">
    <div class="careers container">
      <div class="careers-title">
        {{ t('careers.head') }}
      </div>
      <div class="careers-text">
        {{ t('careers.text') }}
      </div>
      <div class="careers-jobs">
        <div
          v-for="(job, index) in jobs"
          :key="job.title"
          :ref="skipUnwrap.el"
          class="careers-job"
        >
          <div class="careers-job-inner">
            <div class="careers-job-title-wrap">
              <PlusAnimate :open="index === selectedJob" />
              <div class="careers-job-title" @click="toggleJob(index)">
                {{ job.title }}
              </div>
            </div>
            <transition name="animate-height" @enter="enter(index)" @leave="leave">
              <CareersJobInfo
                v-if="index === selectedJob"
                :job="job"
                :style="{ 'max-height': jobHeights[index], height: jobHeights[index] }"
                class="careers-job-text"
              />
            </transition>
            <CareersJobInfo :job="job" class="careers-job-pseudo-text" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, Ref, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import CareersJobInfo from './CareersJobInfo.vue';

const { t, tm } = useI18n();

// Workaround for v-for ref bug: https://github.com/vuejs/core/issues/5525
const skipUnwrap = { el: ref<HTMLDivElement[]>([]) };
const jobRefs = computed(() => skipUnwrap.el.value);

const jobs = tm('careers.jobs') as Record<string, string>[];

const selectedJob = ref();
const jobHeights = ref(jobs.map((_item) => '0'));

const toggleJob = (index: number) => {
  if (selectedJob.value === index) {
    selectedJob.value = null;
  } else {
    selectedJob.value = index;
  }
};
const enter = (index: number) => {
  const job = jobRefs.value[index].querySelector('.careers-job-pseudo-text');
  if (job) {
    const height = parseInt(getComputedStyle(job).height);
    jobHeights.value[index] = `${height + 24}px`;
  }
};
const leave = () => {
  jobHeights.value = jobs.map((_item) => '0');
};
</script>

<style lang="postcss">
@import '/src/assets/css/global.css';

.careers {
  background-color: $dark1;
  min-height: 600px;
  color: $light1;
  padding: 170px 0 80px;
  .careers-title {
    @mixin semibold 24px;
    text-align: center;
  }
  .careers-text {
    @mixin medium 16px;
    line-height: 140%;
    margin-top: 40px;
  }
  .careers-jobs {
    margin-top: 24px;

    .careers-job {
      display: flex;
      text-align: left;
      box-sizing: border-box;
      padding: 0 0 8px;
      .careers-job-title-wrap {
        display: flex;
        align-items: center;
        position: relative;
      }
      .plus-animate {
        position: absolute;
        pointer-events: none;
        top: 31px;
        left: 20px;
      }
      .careers-job-title {
        @mixin medium 19px;
        cursor: pointer;
        color: white;
        border-bottom: 1px solid white;
        padding: 16px 0 24px 48px;
        width: 100%;
      }
      &.opened {
        opacity: 1;
        .careers-job-title {
          color: white;
        }
        .careers-caret-vertical {
          transform: rotate(90deg);
          background-color: white;
        }
        .careers-caret-horizontal {
          transform: rotate(90deg);
          opacity: 0;
        }
      }
      .careers-job-inner {
        margin-left: 48px;
        position: relative;
        width: 100%;
      }
      .careers-job-text,
      .careers-job-pseudo-text {
        @mixin text 15px;
        line-height: 24px;
        color: white;
        white-space: pre-line;
        word-break: break-word;
        transition: all 0.5s;
        overflow: hidden;
        position: relative;
      }
      .careers-job-pseudo-text {
        position: absolute;
        visibility: hidden;
        width: 100%;
      }
      .animate-height-enter,
      .animate-height-leave-to {
        max-height: 0 !important;
      }
    }
  }
  @media (max-width: 760px) {
  }
}
</style>
