<script lang="ts">
    import { page } from "$app/stores";
</script>

<div class="container mx-auto my-5 alert alert-danger">
    <strong>Error {$page.status}</strong>: {$page.error?.message}
</div>