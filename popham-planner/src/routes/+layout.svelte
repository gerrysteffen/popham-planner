<script lang="ts">
  import { page } from '$app/stores';
  import { colors } from '$lib/UIdata/cssSelectors';
  import MainMenuCat from '$lib/components/navbar/MainMenuCat.svelte';
  import NavBar from '$lib/components/navbar/NavBar.svelte';
  import SubMenuCat from '$lib/components/navbar/SubMenuCat.svelte';

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
      subMenus: [
        {
          href: '/meals',
          icon: 'overview',
        },
        {
          href: '/meals/search',
          icon: 'search',
        },
        { href: '/meals/add-new', icon: 'add' },
      ],
    },
    {
      id: 'restaurants',
      title: 'Restaurants',
      href: '/restaurants',
      selected: selectedCategory === 'restaurants',
      subMenus: [
        {
          href: '/restaurants',
          icon: 'overview',
        },
        {
          href: '/restaurants/search',
          icon: 'search',
        },
        { href: '/restaurants/add-new', icon: 'add' },
      ],
    },
    {
      id: 'planner',
      title: 'Planner',
      href: '/planner?pw=-1&fw=1#week0',
      selected: selectedCategory === 'planner',
      subMenus: [
        {
          href: '/planner?pw=-1&fw=1#week0',
          icon: 'calendar',
        },
        {
          href: '/planner/shopping',
          icon: 'shopping',
        },
        { href: '/planner/notes', icon: 'notes' },
      ],
    },
  ];

  $: selected = menuOptions.find((option) => option.selected)!;
  $: unselected = menuOptions.filter((option) => !option.selected);
</script>

{#if path !== '/'}
  <div id="content">
    <slot />
  </div>
  <NavBar color={colors[selectedCategory].selected}>
    <div id="sub-menus" slot="sub-menus">
      {#each Object.values(selected.subMenus) as subMenu, i}
        <SubMenuCat
          category={selected.id}
          icon={subMenu.icon}
          {i}
          link={subMenu.href}
        />
      {/each}
    </div>
    <div slot="main-menus">
      {#each menuOpen ? unselected : [] as option, i (option.id)}
        <MainMenuCat
          href={option.href}
          topPosition={-60 - i * 60}
          transitionY={60 + i * 60}
          clickHandler={() => selectCat(option.id)}
          color={colors[option.id].selected}
          title={option.title}
        />
      {/each}
      <MainMenuCat
        href={path}
        topPosition={0}
        transitionY={0}
        clickHandler={() => toggleCatMenu()}
        color={colors[selected.id].selected}
        title={selected.title}
      />
    </div>
  </NavBar>
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
    padding: 10px 20px 100px 20px;
  }

  #sub-menus {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 10px;
  }

  /* Covering all the iphone screen sizes to add padding at the bottom */
  @media only screen and (device-height: 812px),
    (device-height: 844px),
    (device-height: 852px),
    (device-height: 896px),
    (device-height: 926px),
    (device-height: 932px) and (device-width: 375px),
    (device-width: 390px),
    (device-width: 393px),
    (device-width: 414px),
    (device-width: 428px),
    (device-width: 430px) and (-webkit-device-pixel-ratio: 3) {
    #content {
      padding-bottom: 110px;
    }
  }
</style>
