<script lang="ts">
  import { navigating, page } from '$app/stores';
  import { colors } from '$lib/UIdata/cssSelectors';
  import NavBar from '$lib/components/navigation/NavBar.svelte';
  import MainCat from '$lib/components/navigation/MainCat.svelte';
  import MainCatWrapper from '$lib/components/navigation/MainCatWrapper.svelte';
  import SubCat from '$lib/components/navigation/SubCat.svelte';
  import SubCatWrapper from '$lib/components/navigation/SubCatWrapper.svelte';
  import Spinner from '$lib/components/basicUI/Spinner.svelte';

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
      href: '/planner?pw=-2&fw=2#week0',
      subMenus: [
        {
          href: '/planner?pw=-2&fw=2#week0',
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

  $: selected = menuOptions[path.split('/')[1]] || menuOptions.planner;
  $: unselected = Object.values(menuOptions).filter(
    (option) => option.id !== selected.id
  );

  let menuOpen = false;
  let log: number = 0;
  function toggleCatMenu() {
    menuOpen = !menuOpen;
    // below closes cat menu after 5s inactivity:
    if (menuOpen) {
      log++;
      let current = log;
      setTimeout(() => {
        if (current === log) {
          menuOpen = false;
        }
      }, 5000);
    }
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
    {#if $navigating}
      <Spinner />
    {/if}
  </div>

  <NavBar>
    {#each Object.values(menuOptions) as menuOption}
      {#if menuOption.id === selected.id}
        <!-- Change code here to have Z-index by selected -->
        <SubCatWrapper color={colors[selected.id]}>
          {#each Object.values(menuOption.subMenus) as subMenu, i}
            <!-- {#if menuOption.id === selected.id} -->
            <SubCat
              category={selected.id}
              icon={subMenu.icon}
              {i}
              link={subMenu.href}
            />
            <!-- {/if} -->
          {/each}
        </SubCatWrapper>
      {/if}
    {/each}

    <MainCatWrapper>
      {#each menuOpen ? unselected : [] as option, i (option.id)}
        <!-- Change code here to have Z-index by selected -->
        <MainCat
          href={option.href}
          topPosition={-55 - i * 55}
          transitionY={55 + i * 55}
          clickHandler={() => selectCat(option.id)}
          color={colors[option.id]}
          title={option.title}
        />
      {/each}
      <MainCat
        href={path}
        topPosition={0}
        transitionY={0}
        clickHandler={() => toggleCatMenu()}
        color={colors[selected.id]}
        title={selected.title}
      />
    </MainCatWrapper>
  </NavBar>
{:else}
  <slot />
  {#if $navigating}
    <Spinner top="0" />
  {/if}
{/if}

<style>
  #content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 70px;
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
      bottom: 80px;
    }
  }
</style>
