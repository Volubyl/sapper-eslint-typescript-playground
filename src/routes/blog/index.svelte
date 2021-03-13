<script context="module" lang="ts">
  import type { Preload } from "@sapper/common";

  type Post = {
    slug: string;
    title: string;
    html: unknown;
  };
  export const preload: Preload = async function (this) {
    const result = await this.fetch(`blog.json`);
    const posts = (await result.json()) as Array<Post>;
    return {
      posts,
    };
  };
</script>

<script lang="ts">
  export let posts: Array<Post>;
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<h1>Recent posts</h1>

<ul>
  {#each posts as post}
    <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
    <li><a rel="prefetch" href="blog/{post.slug}">{post.title}</a></li>
  {/each}
</ul>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
</style>
