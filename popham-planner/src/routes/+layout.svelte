<script lang="ts">
  import { page } from '$app/stores';
  import { colors } from '$lib/UIdata/cssSelectors';
  import NavBar from '$lib/components/navbar/NavBar.svelte';
  import MainCat from '$lib/components/navbar/MainCat.svelte';
  import MainCatWrapper from '$lib/components/navbar/MainCatWrapper.svelte';
  import SubCat from '$lib/components/navbar/SubCat.svelte';
  import SubCatWrapper from '$lib/components/navbar/SubCatWrapper.svelte';

  $: path = $page.url.pathname;

  type SubMenu = {
    href: string;
    icon: string;
  };

  type MenuCat = {
    id: string;
    title: string;
    href: string;
    subMenus: SubMenu[];
  };

  let menuOptions: { [key: string]: MenuCat } = {
    meals: {
      id: 'meals',
      title: 'Meals',
      href: '/meals',
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
    restaurants: {
      id: 'restaurants',
      title: 'Restaurants',
      href: '/restaurants',
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
    planner: {
      id: 'planner',
      title: 'Planner',
      href: '/planner?pw=-1&fw=1#week0',
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
  };

  $: selected = menuOptions[path.split('/')[1]];
  $: unselected = Object.values(menuOptions).filter(
    (option) => option.id !== selected.id
  );

  let menuOpen = false;
  function toggleCatMenu() {
    menuOpen = !menuOpen;
  }

  function selectCat(id: string) {
    // Could do without the below (url change will trigger change of selected),
    // but to make sure UI is responsive/change is quick I keep manual assignment
    selected = menuOptions[id];
    toggleCatMenu();
  }
</script>

{#if path !== '/'}
  <div id="content">
    <slot />
  </div>
  <NavBar>
    {#each Object.values(menuOptions) as menuOption}
      {#if menuOption.id === selected.id}
        <SubCatWrapper color={colors[selected.id].selected}>
          {#each Object.values(menuOption.subMenus) as subMenu, i}
            <SubCat
              category={selected.id}
              icon={subMenu.icon}
              {i}
              link={subMenu.href}
            />
          {/each}
        </SubCatWrapper>
      {/if}
    {/each}

    <MainCatWrapper>
      {#each menuOpen ? unselected : [] as option, i (option.id)}
        <MainCat
          href={option.href}
          topPosition={-60 - i * 60}
          transitionY={60 + i * 60}
          clickHandler={() => selectCat(option.id)}
          color={colors[option.id].selected}
          title={option.title}
        />
      {/each}
      <MainCat
        href={path}
        topPosition={0}
        transitionY={0}
        clickHandler={() => toggleCatMenu()}
        color={colors[selected.id].selected}
        title={selected.title}
      />
    </MainCatWrapper>
    <!-- <div id="sub-menus" slot="sub-menus">
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
        <MainCat
          href={option.href}
          topPosition={-60 - i * 60}
          transitionY={60 + i * 60}
          clickHandler={() => selectCat(option.id)}
          color={colors[option.id].selected}
          title={option.title}
        />
      {/each}
      <MainCat
        href={path}
        topPosition={0}
        transitionY={0}
        clickHandler={() => toggleCatMenu()}
        color={colors[selected.id].selected}
        title={selected.title}
      />
    </div> -->
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
  /* 
  #sub-menus {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 10px;
  } */

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
