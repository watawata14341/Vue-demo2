<template>
    <slot name="title">デフォルトのタイトル</slot>
    <slot></slot>
</template>

<script>
export default {
    props: ["headerText"]
}
</script>