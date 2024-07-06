<template>
    <footer class="main-footer">
    <strong>
        <span>{{ $t("labels.copyright") }} &copy; {{currentYear}}</span>
        <a href="https://erdkse.com" target="_blank" rel="noopener noreferrer">
            <span>&nbsp;erdkse.com</span>
        </a>
        <span>.</span>
    </strong>
    <div class="float-right d-none d-sm-inline-block">
        <b>{{ $t("labels.version") }}</b>
        <span>версия</span>
    </div>
</footer>

    </template>

<script setup lang="ts">
    import { useI18n } from "vue-i18n";
    import { computed } from "vue";
    const currentYear = computed(() => new Date().getFullYear());

    const i18n = useI18n();
</script>