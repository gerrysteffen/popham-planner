<script lang="ts">
  import { page } from '$app/stores';
  import { fly } from 'svelte/transition';

  import NavBarLink from '../lib/components/navbar/NavBarLink.svelte';
  import FadeOut from '$lib/components/navbar/FadeOut.svelte';

  import { colors } from '$lib/UIdata/cssSelectors';

  $: path = $page.url.pathname;
  $: selectedCategory = path.split('/')[1];

  let menuOpen = false;
  function toggleCatMenu() {
    menuOpen = !menuOpen;
  }
  function selectCat(id: string) {
    selectedCategory = id;
    toggleCatMenu();
  }

  $: menuOptions = [
    {
      id: 'meals',
      title: 'Meals',
      href: '/meals',
      selected: selectedCategory === 'meals',
      subMenus: {
        overview: {
          title: 'Overview',
          href: '/meals',
          icon: 'overview',
        },
        search: {
          title: 'Adv. Search and Filter',
          href: '/meals/search',
          icon: 'search',
        },
        add: {
          title: 'Add New',
          href: '/meals/add-new',
          icon: 'add',
        },
      },
    },
    {
      id: 'restaurants',
      title: 'Restaurants',
      href: '/restaurants',
      selected: selectedCategory === 'restaurants',
      subMenus: {
        overview: {
          title: 'Overview',
          href: '/restaurants',
          icon: 'overview',
        },
        search: {
          title: 'Adv. Search and Filter',
          href: '/restaurants/search',
          icon: 'search',
        },
        add: {
          title: 'Add New',
          href: '/restaurants/add-new',
          icon: 'add',
        },
      },
    },
    {
      id: 'planner',
      title: 'Planner',
      href: '/planner?pw=-1&fw=1#week0',
      selected: selectedCategory === 'planner',
      subMenus: {
        calendar: {
          title: 'Meal Calendar',
          href: '/planner?pw=-1&fw=1#week0',
          icon: 'calendar',
        },
        shopping: {
          title: 'Shopping List',
          href: '/planner/shopping',
          icon: 'shopping',
        },
        notes: {
          title: 'Notes',
          href: '/planner/notes',
          icon: 'notes',
        },
      },
    },
  ];

  $: selected = menuOptions.find((option) => option.selected)!;
  $: unselected = menuOptions.filter((option) => !option.selected);
</script>

{#if path !== '/'}
  <div id="content">
    <slot />
  </div>
  <nav>
    <FadeOut />
    <div
      id="lower-color-block"
      style="box-shadow: 0 30px 0 0 {colors[selected.id].selected}"
    />
    <div id="sub-cats" style="background-color: {colors[selected.id].selected}">
      {#each Object.values(selected.subMenus) as subMenu, i}
        <NavBarLink icon={subMenu.icon} {i} link={subMenu.href} />
      {/each}
    </div>
    <div id="main-cats">
      {#each menuOpen ? unselected : [] as option, i (option.id)}
        <a
          href={option.href}
          style="top: {-60 - i * 60}px;"
          transition:fly={{ y: 60 + i * 60, duration: 500, opacity: 1 }}
        >
          <button
            on:click={() => selectCat(option.id)}
            style="background-color: {colors[option.id].selected}"
          >
            {option.title}
          </button>
        </a>
      {/each}
      <a href={path}>
        <button
          on:click={() => toggleCatMenu()}
          style="background-color: {colors[selected.id].selected}"
        >
          {selected.title}
        </button>
      </a>
    </div>
  </nav>
{:else}
  <slot />
{/if}

<style>
  #content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: scroll;
    padding: 10px 20px 110px 20px;
  }
  nav {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 80px;
    z-index: 40;
    background-color: transparent;
  }
  #lower-color-block {
    content: '';
    position: absolute;
    left: 0;
    bottom: 20px;
    width: 40%;
    height: 60px;
    border-bottom-right-radius: 10px;
    background-color: transparent;
  }
  #main-cats {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 100%;
    width: 40%;
  }
  #sub-cats {
    position: absolute;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 60%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 10px;
    padding-bottom: 20px;
    border-top-left-radius: 10px;
  }
  @media only screen and (max-device-height: 667px) {
    #content {
      padding-bottom: 100px;
    }
    nav {
      height: 70px;
    }
    #lower-color-block {
      bottom: 10px;
    }
    #sub-cats {
      padding-bottom: 10px;
    }
  }
  a {
    position: absolute;
    color: black;
    text-decoration: none;
    top: 0;
    left: 10px;
    right: 10px;
    height: 50px;
  }
  button {
    height: 100%;
    width: 100%;
    border: none;
    border-radius: 10px;
    font-size: large;
    font-weight: bold;
  }
</style>
