<template>
    <footer class="app-footer">
        <div class="float-end d-none d-sm-inline-block">
        <strong>
            <span>{{ $t("labels.copyright") }} &copy; {{currentYear}}</span>
            <a href="https://raidmen.ru" target="_blank" rel="noopener noreferrer">
                <span>raidmen.ru</span>
            </a>
            <span>.</span>
        </strong>
        <b>{{ $t("labels.version") }}</b>
        <span>версия</span>
    </div>
</footer>

</template>

<script setup lang="ts">
    import { computed } from "vue";
    const currentYear = computed(() => new Date().getFullYear())

</script>