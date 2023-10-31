for i in {000..100}; do
    echo "---
title: ${i} Post
description: This is my ${i} post
date: '2023-8-24'
categories:
  - sveltekit
  - svelte
  - linux
  - apache
  - php
published: true
---
" > "${i}.md"
done

