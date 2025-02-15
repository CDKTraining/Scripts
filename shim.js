





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  <link rel="dns-prefetch" href="https://assets-cdn.github.com">
  <link rel="dns-prefetch" href="https://avatars0.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars1.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars2.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars3.githubusercontent.com">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">



  <link crossorigin="anonymous" media="all" integrity="sha512-PkbtxdWDpLChpxtWQ0KbvJoef4XMYPq5pfd/ZmylYZTzXYpCfGwN9d+bsSKcmOJLwTkfjFkfj5wz3poDrhJoSQ==" rel="stylesheet" href="https://assets-cdn.github.com/assets/frameworks-f6e6ce21346c0d2eb22def1e8534afcb.css" />
  <link crossorigin="anonymous" media="all" integrity="sha512-1CmlOJVksikgx0sPR+jQCDB4sZpzk91dtq60pfLxfhrc9qQEwHOwPZy3KIXxEQk1PQuwW1EVCUuiR5MJ5oPydg==" rel="stylesheet" href="https://assets-cdn.github.com/assets/github-13a139644c8f0a159ef4ef3ceb0011d6.css" />
  
  
  <link crossorigin="anonymous" media="all" integrity="sha512-zyxweUSm/NG+juywqcMFSS4HbKjLWCZyEM2JjoCqnQUU6RVrHpHMwH66xreiaeMIRoA6vYuk0hm8S1X42r/YWQ==" rel="stylesheet" href="https://assets-cdn.github.com/assets/site-220df28424b63d1e24f3bd909efebe81.css" />
  

  <meta name="viewport" content="width=device-width">
  
  <title>js-xlsx/shim.js at master · SheetJS/js-xlsx · GitHub</title>
    <meta name="description" content="GitHub is where people build software. More than 28 million people use GitHub to discover, fork, and contribute to over 85 million projects.">
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    
    <meta property="og:image" content="https://avatars2.githubusercontent.com/u/5826089?s=400&amp;v=4" /><meta property="og:site_name" content="GitHub" /><meta property="og:type" content="object" /><meta property="og:title" content="SheetJS/js-xlsx" /><meta property="og:url" content="https://github.com/SheetJS/js-xlsx" /><meta property="og:description" content="js-xlsx - :green_book: SheetJS Community Edition -- Spreadsheet Parser and Writer" />

  <link rel="assets" href="https://assets-cdn.github.com/">
  
  <meta name="pjax-timeout" content="1000">
  
  <meta name="request-id" content="E95D:4B1C:40A180E:64423B5:5B23D2D6" data-pjax-transient>


  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
  <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
  <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">
    <meta name="google-analytics" content="UA-3769691-2">

<meta name="octolytics-host" content="collector.githubapp.com" /><meta name="octolytics-app-id" content="github" /><meta name="octolytics-event-url" content="https://collector.githubapp.com/github-external/browser_event" /><meta name="octolytics-dimension-request_id" content="E95D:4B1C:40A180E:64423B5:5B23D2D6" /><meta name="octolytics-dimension-region_edge" content="iad" /><meta name="octolytics-dimension-region_render" content="iad" />
<meta name="analytics-location" content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" />




  <meta class="js-ga-set" name="dimension1" content="Logged Out">


  

      <meta name="hostname" content="github.com">
    <meta name="user-login" content="">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="YjdiZWZjYzI4MDBkMWUxMzVmZDc5MGI3NGEyM2QwNzdmMTVkZjljM2FhNTUzNWM2NWIwZGJlNzkwMzU3ZTJkMHx7InJlbW90ZV9hZGRyZXNzIjoiNDYuMjM1LjE1Mi44MCIsInJlcXVlc3RfaWQiOiJFOTVEOjRCMUM6NDBBMTgwRTo2NDQyM0I1OjVCMjNEMkQ2IiwidGltZXN0YW1wIjoxNTI5MDc0NDE0LCJob3N0IjoiZ2l0aHViLmNvbSJ9">

    <meta name="enabled-features" content="UNIVERSE_BANNER,FREE_TRIALS,MARKETPLACE_INSIGHTS,MARKETPLACE_INSIGHTS_CONVERSION_PERCENTAGES">

  <meta name="html-safe-nonce" content="65fd5be5aa87d4e33d94adb2b056553c1e43d331">

  <meta http-equiv="x-pjax-version" content="318519c18b39d92d4cfd91f7d78ce8b6">
  

      <link href="https://github.com/SheetJS/js-xlsx/commits/master.atom" rel="alternate" title="Recent Commits to js-xlsx:master" type="application/atom+xml">

  <meta name="description" content="js-xlsx - :green_book: SheetJS Community Edition -- Spreadsheet Parser and Writer">
  <meta name="go-import" content="github.com/SheetJS/js-xlsx git https://github.com/SheetJS/js-xlsx.git">

  <meta name="octolytics-dimension-user_id" content="5826089" /><meta name="octolytics-dimension-user_login" content="SheetJS" /><meta name="octolytics-dimension-repository_id" content="6988020" /><meta name="octolytics-dimension-repository_nwo" content="SheetJS/js-xlsx" /><meta name="octolytics-dimension-repository_public" content="true" /><meta name="octolytics-dimension-repository_is_fork" content="false" /><meta name="octolytics-dimension-repository_network_root_id" content="6988020" /><meta name="octolytics-dimension-repository_network_root_nwo" content="SheetJS/js-xlsx" /><meta name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" content="false" />


    <link rel="canonical" href="https://github.com/SheetJS/js-xlsx/blob/master/shim.js" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" class="js-site-favicon" href="https://assets-cdn.github.com/favicon.ico">

<meta name="theme-color" content="#1e2327">


  <meta name="u2f-support" content="true">

<link rel="manifest" href="/manifest.json" crossOrigin="use-credentials">

  </head>

  <body class="logged-out env-production page-blob">
    

  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="px-2 py-4 bg-blue text-white show-on-focus js-skip-to-content">Skip to content</a>
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>

    
    
    



        <header class="Header header-logged-out  position-relative f4 py-3" role="banner">
  <div class="container-lg d-flex px-3">
    <div class="d-flex flex-justify-between flex-items-center">
      <a class="header-logo-invertocat my-0" href="https://github.com/" aria-label="Homepage" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
        <svg height="32" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
      </a>

    </div>

    <div class="HeaderMenu HeaderMenu--bright d-flex flex-justify-between flex-auto">
        <nav class="mt-0">
          <ul class="d-flex list-style-none">
              <li class="ml-2">
                <a class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:features" data-selected-links="/features /features/project-management /features/code-review /features/project-management /features/integrations /features" href="/features">
                  Features
</a>              </li>
              <li class="ml-4">
                <a class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:business" data-selected-links="/business /business/security /business/customers /business" href="/business">
                  Business
</a>              </li>

              <li class="ml-4">
                <a class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship showcases showcases_search showcases_landing /explore" href="/explore">
                  Explore
</a>              </li>

              <li class="ml-4">
                    <a class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:marketplace" data-selected-links=" /marketplace" href="/marketplace">
                      Marketplace
</a>              </li>
              <li class="ml-4">
                <a class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:pricing" data-selected-links="/pricing /pricing/developer /pricing/team /pricing/business-hosted /pricing/business-enterprise /pricing" href="/pricing">
                  Pricing
</a>              </li>
          </ul>
        </nav>

      <div class="d-flex">
          <div class="d-lg-flex flex-items-center mr-3">
            <div class="header-search scoped-search site-scoped-search js-site-search position-relative js-jump-to"
  role="search combobox"
  aria-owns="jump-to-results"
  aria-label="Search or jump to"
  aria-haspopup="listbox"
  aria-expanded="true"
>
  <div class="position-relative">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-site-search-form" data-scope-type="Repository" data-scope-id="6988020" data-scoped-search-url="/SheetJS/js-xlsx/search" data-unscoped-search-url="/search" action="/SheetJS/js-xlsx/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
      <label class="form-control header-search-wrapper header-search-wrapper-jump-to position-relative d-flex flex-justify-between flex-items-center js-chromeless-input-container">
        <input type="text"
          class="form-control header-search-input jump-to-field js-jump-to-field js-site-search-focus js-site-search-field is-clearable"
          data-hotkey="s,/"
          name="q"
          value=""
          placeholder="Search"
          data-unscoped-placeholder="Search GitHub"
          data-scoped-placeholder="Search"
          autocapitalize="off"
          aria-autocomplete="list"
          aria-controls="jump-to-results"
          data-jump-to-suggestions-path="/_graphql/GetSuggestedNavigationDestinations#csrf-token=pq7G1TM07yID9ck46n4+BG0yGvOTTivSpGUCsO9TTMwh+XeE3cGN/toGNHuCDxfPsCfl4Zrj0jkUprNibN8ueQ=="
          spellcheck="false"
          autocomplete="off"
          >
          <input type="hidden" class="js-site-search-type-field" name="type" >
            <img src="https://assets-cdn.github.com/images/search-shortcut-hint.svg" alt="" class="mr-2 header-search-key-slash">

            <div class="Box position-absolute overflow-hidden d-none jump-to-suggestions js-jump-to-suggestions-container">
              <ul class="d-none js-jump-to-suggestions-template-container">
                <li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item">
                  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center p-2 jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open" href="">
                    <div class="jump-to-octicon js-jump-to-octicon mr-2 text-center d-none"></div>
                    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar" alt="" aria-label="Team" src="" width="28" height="28">

                    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden no-wrap css-truncate css-truncate-target">
                    </div>

                    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
                      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
                        In this repository
                      </span>
                      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
                        All GitHub
                      </span>
                      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
                    </div>

                    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
                      Jump to
                      <span class="d-inline-block ml-1 v-align-middle">↵</span>
                    </div>
                  </a>
                </li>
                <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-repo-octicon-template" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
                <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-project-octicon-template" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
                <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-search-octicon-template" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
              </ul>
              <ul class="d-none js-jump-to-no-results-template-container">
                <li class="d-flex flex-justify-center flex-items-center p-3 f5 d-none">
                  <span class="text-gray">No suggested jump to results</span>
                </li>
              </ul>

              <ul id="jump-to-results" class="js-navigation-container jump-to-suggestions-results-container js-jump-to-suggestions-results-container" >
                <li class="d-flex flex-justify-center flex-items-center p-0 f5">
                  <img src="https://assets-cdn.github.com/images/spinners/octocat-spinner-128.gif" alt="Octocat Spinner Icon" class="m-2" width="28">
                </li>
              </ul>
            </div>
      </label>
</form>  </div>
</div>

          </div>

        <span class="d-inline-block">
            <div class="HeaderNavlink px-0 py-2 m-0">
              <a class="text-bold text-white no-underline" href="/login?return_to=%2FSheetJS%2Fjs-xlsx%2Fblob%2Fmaster%2Fshim.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
                <span class="text-gray">or</span>
                <a class="text-bold text-white no-underline" href="/join?source=header-repo" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
            </div>
        </span>
      </div>
    </div>
  </div>
</header>

  </div>

  <div id="start-of-content" class="show-on-focus"></div>

    <div id="js-flash-container">
</div>



  <div role="main" class="application-main ">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode" class="">
    <div id="js-repo-pjax-container" data-pjax-container >
      





  



  <div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav  ">
    <div class="repohead-details-container clearfix container">

      <ul class="pagehead-actions">
  <li>
      <a href="/login?return_to=%2FSheetJS%2Fjs-xlsx"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to watch a repository" rel="nofollow">
    <svg class="octicon octicon-eye" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
    Watch
  </a>
  <a class="social-count" href="/SheetJS/js-xlsx/watchers"
     aria-label="371 users are watching this repository">
    371
  </a>

  </li>

  <li>
      <a href="/login?return_to=%2FSheetJS%2Fjs-xlsx"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <svg class="octicon octicon-star" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/></svg>
    Star
  </a>

    <a class="social-count js-social-count" href="/SheetJS/js-xlsx/stargazers"
      aria-label="10839 users starred this repository">
      10,839
    </a>

  </li>

  <li>
      <a href="/login?return_to=%2FSheetJS%2Fjs-xlsx"
        class="btn btn-sm btn-with-count tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <svg class="octicon octicon-repo-forked" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
        Fork
      </a>

    <a href="/SheetJS/js-xlsx/network" class="social-count"
       aria-label="2369 users forked this repository">
      2,369
    </a>
  </li>
</ul>

      <h1 class="public ">
  <svg class="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a class="url fn" rel="author" href="/SheetJS">SheetJS</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a data-pjax="#js-repo-pjax-container" href="/SheetJS/js-xlsx">js-xlsx</a></strong>

</h1>

    </div>
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax container"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a class="js-selected-navigation-item selected reponav-item" itemprop="url" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /SheetJS/js-xlsx" href="/SheetJS/js-xlsx">
      <svg class="octicon octicon-code" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a itemprop="url" data-hotkey="g i" class="js-selected-navigation-item reponav-item" data-selected-links="repo_issues repo_labels repo_milestones /SheetJS/js-xlsx/issues" href="/SheetJS/js-xlsx/issues">
        <svg class="octicon octicon-issue-opened" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="Counter">88</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a data-hotkey="g p" itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_pulls checks /SheetJS/js-xlsx/pulls" href="/SheetJS/js-xlsx/pulls">
      <svg class="octicon octicon-git-pull-request" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">6</span>
      <meta itemprop="position" content="3">
</a>  </span>

    <a data-hotkey="g b" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /SheetJS/js-xlsx/projects" href="/SheetJS/js-xlsx/projects">
      <svg class="octicon octicon-project" viewBox="0 0 15 16" version="1.1" width="15" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      Projects
      <span class="Counter" >0</span>
</a>
    <a class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /SheetJS/js-xlsx/wiki" href="/SheetJS/js-xlsx/wiki">
      <svg class="octicon octicon-book" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"/></svg>
      Wiki
</a>

  <a class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors dependency_graph pulse /SheetJS/js-xlsx/pulse" href="/SheetJS/js-xlsx/pulse">
    <svg class="octicon octicon-graph" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
    Insights
</a>

</nav>


  </div>

<div class="container new-discussion-timeline experiment-repo-nav  ">
  <div class="repository-content ">

    
  <a class="d-none js-permalink-shortcut" data-hotkey="y" href="/SheetJS/js-xlsx/blob/64798fd1f9cbdf1483a70c6e232422b71ffdbea4/shim.js">Permalink</a>

  <!-- blob contrib key: blob_contributors:v21:fe98c5d8e5721e0956f7bfafd18ca91d -->

  <div class="file-navigation">
    
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class=" btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" aria-expanded="false" aria-haspopup="true">
      <i>Branch:</i>
      <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg class="octicon octicon-x js-menu-close" role="img" aria-label="Close" viewBox="0 0 12 16" version="1.1" width="12" height="16"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/SheetJS/js-xlsx/blob/gh-pages/shim.js"
               data-name="gh-pages"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                gh-pages
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/SheetJS/js-xlsx/blob/master/shim.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.13.0/shim.js"
              data-name="v0.13.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.13.0">
                v0.13.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.12.13/shim.js"
              data-name="v0.12.13"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.12.13">
                v0.12.13
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.12.12/shim.js"
              data-name="v0.12.12"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.12.12">
                v0.12.12
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.12.11/shim.js"
              data-name="v0.12.11"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.12.11">
                v0.12.11
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.12.10/shim.js"
              data-name="v0.12.10"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.12.10">
                v0.12.10
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.12.9/shim.js"
              data-name="v0.12.9"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.12.9">
                v0.12.9
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.12.8/shim.js"
              data-name="v0.12.8"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.12.8">
                v0.12.8
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.12.7/shim.js"
              data-name="v0.12.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.12.7">
                v0.12.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.12.6/shim.js"
              data-name="v0.12.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.12.6">
                v0.12.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.12.5/shim.js"
              data-name="v0.12.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.12.5">
                v0.12.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.12.4/shim.js"
              data-name="v0.12.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.12.4">
                v0.12.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.12.3/shim.js"
              data-name="v0.12.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.12.3">
                v0.12.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.12.2/shim.js"
              data-name="v0.12.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.12.2">
                v0.12.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.12.1/shim.js"
              data-name="v0.12.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.12.1">
                v0.12.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.12.0/shim.js"
              data-name="v0.12.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.12.0">
                v0.12.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.11.19/shim.js"
              data-name="v0.11.19"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.11.19">
                v0.11.19
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.11.18/shim.js"
              data-name="v0.11.18"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.11.18">
                v0.11.18
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.11.17/shim.js"
              data-name="v0.11.17"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.11.17">
                v0.11.17
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.11.16/shim.js"
              data-name="v0.11.16"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.11.16">
                v0.11.16
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.11.15/shim.js"
              data-name="v0.11.15"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.11.15">
                v0.11.15
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.11.14/shim.js"
              data-name="v0.11.14"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.11.14">
                v0.11.14
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.11.13/shim.js"
              data-name="v0.11.13"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.11.13">
                v0.11.13
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.11.12/shim.js"
              data-name="v0.11.12"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.11.12">
                v0.11.12
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.11.11/shim.js"
              data-name="v0.11.11"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.11.11">
                v0.11.11
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.11.10/shim.js"
              data-name="v0.11.10"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.11.10">
                v0.11.10
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.11.9/shim.js"
              data-name="v0.11.9"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.11.9">
                v0.11.9
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.11.8/shim.js"
              data-name="v0.11.8"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.11.8">
                v0.11.8
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.11.7/shim.js"
              data-name="v0.11.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.11.7">
                v0.11.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.11.6/shim.js"
              data-name="v0.11.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.11.6">
                v0.11.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.11.5/shim.js"
              data-name="v0.11.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.11.5">
                v0.11.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.11.4/shim.js"
              data-name="v0.11.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.11.4">
                v0.11.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.11.3/shim.js"
              data-name="v0.11.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.11.3">
                v0.11.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.11.2/shim.js"
              data-name="v0.11.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.11.2">
                v0.11.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.11.1/shim.js"
              data-name="v0.11.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.11.1">
                v0.11.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.11.0/shim.js"
              data-name="v0.11.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.11.0">
                v0.11.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.10.9/shim.js"
              data-name="v0.10.9"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.10.9">
                v0.10.9
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.10.8/shim.js"
              data-name="v0.10.8"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.10.8">
                v0.10.8
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.10.7/shim.js"
              data-name="v0.10.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.10.7">
                v0.10.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.10.6/shim.js"
              data-name="v0.10.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.10.6">
                v0.10.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.10.5/shim.js"
              data-name="v0.10.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.10.5">
                v0.10.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.10.4/shim.js"
              data-name="v0.10.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.10.4">
                v0.10.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.10.3/shim.js"
              data-name="v0.10.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.10.3">
                v0.10.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.10.2/shim.js"
              data-name="v0.10.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.10.2">
                v0.10.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.10.1/shim.js"
              data-name="v0.10.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.10.1">
                v0.10.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.10.0/shim.js"
              data-name="v0.10.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.10.0">
                v0.10.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.9.13/shim.js"
              data-name="v0.9.13"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.9.13">
                v0.9.13
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.9.12/shim.js"
              data-name="v0.9.12"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.9.12">
                v0.9.12
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.9.11/shim.js"
              data-name="v0.9.11"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.9.11">
                v0.9.11
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.9.10/shim.js"
              data-name="v0.9.10"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.9.10">
                v0.9.10
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.9.9/shim.js"
              data-name="v0.9.9"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.9.9">
                v0.9.9
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.9.8/shim.js"
              data-name="v0.9.8"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.9.8">
                v0.9.8
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.9.7/shim.js"
              data-name="v0.9.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.9.7">
                v0.9.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.9.6/shim.js"
              data-name="v0.9.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.9.6">
                v0.9.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.9.5/shim.js"
              data-name="v0.9.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.9.5">
                v0.9.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.9.4/shim.js"
              data-name="v0.9.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.9.4">
                v0.9.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.9.3/shim.js"
              data-name="v0.9.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.9.3">
                v0.9.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.9.2/shim.js"
              data-name="v0.9.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.9.2">
                v0.9.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.9.1/shim.js"
              data-name="v0.9.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.9.1">
                v0.9.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.9.0/shim.js"
              data-name="v0.9.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.9.0">
                v0.9.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.8.8/shim.js"
              data-name="v0.8.8"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.8.8">
                v0.8.8
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.8.7/shim.js"
              data-name="v0.8.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.8.7">
                v0.8.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.8.6/shim.js"
              data-name="v0.8.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.8.6">
                v0.8.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.8.5/shim.js"
              data-name="v0.8.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.8.5">
                v0.8.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.8.4/shim.js"
              data-name="v0.8.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.8.4">
                v0.8.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.8.3/shim.js"
              data-name="v0.8.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.8.3">
                v0.8.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.8.2/shim.js"
              data-name="v0.8.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.8.2">
                v0.8.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.8.1/shim.js"
              data-name="v0.8.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.8.1">
                v0.8.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.8.0/shim.js"
              data-name="v0.8.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.8.0">
                v0.8.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.7.11/shim.js"
              data-name="v0.7.11"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.7.11">
                v0.7.11
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.7.10/shim.js"
              data-name="v0.7.10"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.7.10">
                v0.7.10
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.7.9/shim.js"
              data-name="v0.7.9"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.7.9">
                v0.7.9
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.7.7/shim.js"
              data-name="v0.7.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.7.7">
                v0.7.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.7.6/shim.js"
              data-name="v0.7.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.7.6">
                v0.7.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.7.6-i/shim.js"
              data-name="v0.7.6-i"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.7.6-i">
                v0.7.6-i
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.7.6-h/shim.js"
              data-name="v0.7.6-h"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.7.6-h">
                v0.7.6-h
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.7.6-a/shim.js"
              data-name="v0.7.6-a"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.7.6-a">
                v0.7.6-a
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.7.5/shim.js"
              data-name="v0.7.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.7.5">
                v0.7.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.7.4/shim.js"
              data-name="v0.7.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.7.4">
                v0.7.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.7.3/shim.js"
              data-name="v0.7.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.7.3">
                v0.7.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.7.2/shim.js"
              data-name="v0.7.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.7.2">
                v0.7.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.7.1/shim.js"
              data-name="v0.7.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.7.1">
                v0.7.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.5.10/shim.js"
              data-name="v0.5.10"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.5.10">
                v0.5.10
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.5.9/shim.js"
              data-name="v0.5.9"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.5.9">
                v0.5.9
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.5.8/shim.js"
              data-name="v0.5.8"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.5.8">
                v0.5.8
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.5.7/shim.js"
              data-name="v0.5.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.5.7">
                v0.5.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.5.0/shim.js"
              data-name="v0.5.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.5.0">
                v0.5.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SheetJS/js-xlsx/tree/v0.4.3/shim.js"
              data-name="v0.4.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.4.3">
                v0.4.3
              </span>
            </a>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

    <div class="BtnGroup float-right">
      <a href="/SheetJS/js-xlsx/find/master"
            class="js-pjax-capture-input btn btn-sm BtnGroup-item"
            data-pjax
            data-hotkey="t">
        Find file
      </a>
      <clipboard-copy for="blob-path" class="btn btn-sm BtnGroup-item">
        Copy path
      </clipboard-copy>
    </div>
    <div id="blob-path" class="breadcrumb">
      <span class="repo-root js-repo-root"><span class="js-path-segment"><a data-pjax="true" href="/SheetJS/js-xlsx"><span>js-xlsx</span></a></span></span><span class="separator">/</span><strong class="final-path">shim.js</strong>
    </div>
  </div>


  
  <div class="commit-tease">
      <span class="float-right">
        <a class="commit-tease-sha" href="/SheetJS/js-xlsx/commit/64798fd1f9cbdf1483a70c6e232422b71ffdbea4" data-pjax>
          64798fd
        </a>
        <relative-time datetime="2018-06-01T16:32:08Z">Jun 1, 2018</relative-time>
      </span>
      <div>
        <a rel="contributor" data-skip-pjax="true" data-hovercard-user-id="6070939" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/SheetJSDev"><img class="avatar" src="https://avatars2.githubusercontent.com/u/6070939?s=40&amp;v=4" width="20" height="20" alt="@SheetJSDev" /></a>
        <a class="user-mention" rel="contributor" data-hovercard-user-id="6070939" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/SheetJSDev">SheetJSDev</a>
          <a data-pjax="true" title="version bump 0.13.0: AMD support

- library reshaped to support requirejs / amd without shim
- control comment visibility (fixes #998, h/t @cmuruganmsc)
- fixed README code sample error (fixes #1118 h/t @iahmedani)" class="message" href="/SheetJS/js-xlsx/commit/64798fd1f9cbdf1483a70c6e232422b71ffdbea4">version bump 0.13.0: AMD support</a>
      </div>

    <div class="commit-tease-contributors">
      <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
        <strong>2</strong>
         contributors
      </button>
          <a class="avatar-link" data-hovercard-user-id="6070939" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/SheetJS/js-xlsx/commits/master/shim.js?author=SheetJSDev">
      <img class="avatar" src="https://avatars2.githubusercontent.com/u/6070939?s=40&amp;v=4" width="20" height="20" alt="@SheetJSDev" /> 
</a>    <a class="avatar-link" data-hovercard-user-id="9006227" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/SheetJS/js-xlsx/commits/master/shim.js?author=Finesse">
      <img class="avatar" src="https://avatars0.githubusercontent.com/u/9006227?s=40&amp;v=4" width="20" height="20" alt="@Finesse" /> 
</a>

    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="6070939" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/SheetJSDev"><img src="https://avatars3.githubusercontent.com/u/6070939?s=48&amp;v=4" width="24" height="24" alt="@SheetJSDev" /></a>
            <a data-hovercard-user-id="6070939" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/SheetJSDev">SheetJSDev</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="9006227" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/Finesse"><img src="https://avatars1.githubusercontent.com/u/9006227?s=48&amp;v=4" width="24" height="24" alt="@Finesse" /></a>
            <a data-hovercard-user-id="9006227" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/Finesse">Finesse</a>
          </li>
      </ul>
    </div>
  </div>



  <div class="file">
    <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a id="raw-url" class="btn btn-sm BtnGroup-item" href="/SheetJS/js-xlsx/raw/master/shim.js">Raw</a>
        <a class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b" href="/SheetJS/js-xlsx/blame/master/shim.js">Blame</a>
      <a rel="nofollow" class="btn btn-sm BtnGroup-item" href="/SheetJS/js-xlsx/commits/master/shim.js">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="https://desktop.github.com"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <svg class="octicon octicon-device-desktop" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
        </a>

        <button type="button" class="btn-octicon disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg class="octicon octicon-pencil" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
        </button>
        <button type="button" class="btn-octicon btn-octicon-danger disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg class="octicon octicon-trashcan" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
        </button>
  </div>

  <div class="file-info">
      155 lines (137 sloc)
      <span class="file-info-divider"></span>
    7.4 KB
  </div>
</div>

    

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">/*</span>! shim.js (C) 2013-present SheetJS -- http://sheetjs.com <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">/*</span> ES3/5 Compatibility shims and other utilities for older browsers. <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-c1">Object</span>.<span class="pl-smi">keys</span>) <span class="pl-c1">Object</span>.<span class="pl-smi">keys</span> <span class="pl-k">=</span> (<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> hasOwnProperty <span class="pl-k">=</span> <span class="pl-c1">Object</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">hasOwnProperty</span>,</td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line">      hasDontEnumBug <span class="pl-k">=</span> <span class="pl-k">!</span>({toString<span class="pl-k">:</span> <span class="pl-c1">null</span>}).<span class="pl-en">propertyIsEnumerable</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>toString<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line">      dontEnums <span class="pl-k">=</span> [</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>toString<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>toLocaleString<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>valueOf<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>hasOwnProperty<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>isPrototypeOf<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>propertyIsEnumerable<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>constructor<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line">      ],</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line">      dontEnumsLength <span class="pl-k">=</span> <span class="pl-smi">dontEnums</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">return</span> <span class="pl-k">function</span>(<span class="pl-smi">obj</span>) {</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span>(<span class="pl-k">typeof</span> obj <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">typeof</span> obj <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span> <span class="pl-k">||</span> obj <span class="pl-k">===</span> <span class="pl-c1">null</span>) <span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">TypeError</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Object.keys called on non-object<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> result <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span>(<span class="pl-k">var</span> prop <span class="pl-k">in</span> obj) <span class="pl-k">if</span>(<span class="pl-smi">hasOwnProperty</span>.<span class="pl-c1">call</span>(obj, prop)) <span class="pl-smi">result</span>.<span class="pl-c1">push</span>(prop);</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span>(hasDontEnumBug)</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">for</span>(<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> dontEnumsLength; <span class="pl-k">++</span>i)</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span>(<span class="pl-smi">hasOwnProperty</span>.<span class="pl-c1">call</span>(obj, dontEnums[i])) <span class="pl-smi">result</span>.<span class="pl-c1">push</span>(dontEnums[i]);</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> result;</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line">})();</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-c1">String</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">trim</span>) <span class="pl-c1">String</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">trim</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> s <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-c1">\s</span><span class="pl-k">+</span><span class="pl-pds">/</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">for</span>(<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-smi">s</span>.<span class="pl-c1">length</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>; i <span class="pl-k">&gt;=</span><span class="pl-c1">0</span> ; <span class="pl-k">--</span>i) <span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-smi">s</span>.<span class="pl-c1">charAt</span>(i).<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-c1">\s</span><span class="pl-pds">/</span></span>)) <span class="pl-k">return</span> <span class="pl-smi">s</span>.<span class="pl-c1">slice</span>(<span class="pl-c1">0</span>,i<span class="pl-k">+</span><span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line">};</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-c1">Array</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">forEach</span>) <span class="pl-c1">Array</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">forEach</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">cb</span>) {</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> len <span class="pl-k">=</span> (<span class="pl-c1">this</span>.<span class="pl-c1">length</span><span class="pl-k">&gt;&gt;&gt;</span><span class="pl-c1">0</span>), self <span class="pl-k">=</span> (<span class="pl-c1">arguments</span>[<span class="pl-c1">1</span>]<span class="pl-k">||</span><span class="pl-k">void</span> <span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">for</span>(<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>; i<span class="pl-k">&lt;</span>len; <span class="pl-k">++</span>i) <span class="pl-k">if</span>(i <span class="pl-k">in</span> <span class="pl-c1">this</span>) self <span class="pl-k">?</span> <span class="pl-smi">cb</span>.<span class="pl-c1">call</span>(self, <span class="pl-c1">this</span>[i], i, <span class="pl-c1">this</span>) <span class="pl-k">:</span> <span class="pl-en">cb</span>(<span class="pl-c1">this</span>[i], i, <span class="pl-c1">this</span>);</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">};</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-c1">Array</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">map</span>) <span class="pl-c1">Array</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">map</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">cb</span>) {</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> len <span class="pl-k">=</span> (<span class="pl-c1">this</span>.<span class="pl-c1">length</span><span class="pl-k">&gt;&gt;&gt;</span><span class="pl-c1">0</span>), self <span class="pl-k">=</span> (<span class="pl-c1">arguments</span>[<span class="pl-c1">1</span>]<span class="pl-k">||</span><span class="pl-k">void</span> <span class="pl-c1">0</span>), <span class="pl-c1">A</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Array</span>(len);</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">for</span>(<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>; i<span class="pl-k">&lt;</span>len; <span class="pl-k">++</span>i) <span class="pl-k">if</span>(i <span class="pl-k">in</span> <span class="pl-c1">this</span>) <span class="pl-c1">A</span>[i] <span class="pl-k">=</span> self <span class="pl-k">?</span> <span class="pl-smi">cb</span>.<span class="pl-c1">call</span>(self, <span class="pl-c1">this</span>[i], i, <span class="pl-c1">this</span>) <span class="pl-k">:</span> <span class="pl-en">cb</span>(<span class="pl-c1">this</span>[i], i, <span class="pl-c1">this</span>);</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">return</span> <span class="pl-c1">A</span>;</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line">};</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-c1">Array</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">indexOf</span>) <span class="pl-c1">Array</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">indexOf</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">needle</span>) {</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> len <span class="pl-k">=</span> (<span class="pl-c1">this</span>.<span class="pl-c1">length</span><span class="pl-k">&gt;&gt;&gt;</span><span class="pl-c1">0</span>), i <span class="pl-k">=</span> ((<span class="pl-c1">arguments</span>[<span class="pl-c1">1</span>]<span class="pl-k">|</span><span class="pl-c1">0</span>)<span class="pl-k">||</span><span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">for</span>(i<span class="pl-k">&lt;</span><span class="pl-c1">0</span> <span class="pl-k">&amp;&amp;</span> (i<span class="pl-k">+=</span>len)<span class="pl-k">&lt;</span><span class="pl-c1">0</span> <span class="pl-k">&amp;&amp;</span> (i<span class="pl-k">=</span><span class="pl-c1">0</span>); i<span class="pl-k">&lt;</span>len; <span class="pl-k">++</span>i) <span class="pl-k">if</span>(<span class="pl-c1">this</span>[i] <span class="pl-k">===</span> needle) <span class="pl-k">return</span> i;</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">return</span> <span class="pl-k">-</span><span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line">};</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-c1">Array</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">lastIndexOf</span>) <span class="pl-c1">Array</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">lastIndexOf</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">needle</span>) {</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> len <span class="pl-k">=</span> (<span class="pl-c1">this</span>.<span class="pl-c1">length</span><span class="pl-k">&gt;&gt;&gt;</span><span class="pl-c1">0</span>), i <span class="pl-k">=</span> len <span class="pl-k">-</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">for</span>(; i<span class="pl-k">&gt;=</span><span class="pl-c1">0</span>; <span class="pl-k">--</span>i) <span class="pl-k">if</span>(<span class="pl-c1">this</span>[i] <span class="pl-k">===</span> needle) <span class="pl-k">return</span> i;</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">return</span> <span class="pl-k">-</span><span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line">};</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-c1">Array</span>.<span class="pl-smi">isArray</span>) <span class="pl-c1">Array</span>.<span class="pl-en">isArray</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">obj</span>) { <span class="pl-k">return</span> <span class="pl-c1">Object</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">toString</span>.<span class="pl-c1">call</span>(obj) <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>[object Array]<span class="pl-pds">&quot;</span></span>; };</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-c1">Date</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">toISOString</span>) <span class="pl-c1">Date</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">toISOString</span> <span class="pl-k">=</span> (<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">function</span> <span class="pl-en">p</span>(<span class="pl-smi">n</span>,<span class="pl-smi">i</span>) { <span class="pl-k">return</span> (<span class="pl-s"><span class="pl-pds">&#39;</span>0000000<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> n).<span class="pl-c1">slice</span>(<span class="pl-k">-</span>(i<span class="pl-k">||</span><span class="pl-c1">2</span>)); }</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">return</span> <span class="pl-k">function</span> <span class="pl-en">_toISOString</span>() {</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> y <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-c1">getUTCFullYear</span>(), yr <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span>(y<span class="pl-k">&gt;</span><span class="pl-c1">9999</span>)   yr <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>+<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">p</span>( y, <span class="pl-c1">6</span>);</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">else</span> <span class="pl-k">if</span>(y<span class="pl-k">&lt;</span><span class="pl-c1">0</span>) yr <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>-<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">p</span>(<span class="pl-k">-</span>y, <span class="pl-c1">6</span>);</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">else</span>         yr <span class="pl-k">=</span>       <span class="pl-en">p</span>( y, <span class="pl-c1">4</span>);</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> [</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line">      yr, <span class="pl-en">p</span>(<span class="pl-c1">this</span>.<span class="pl-c1">getUTCMonth</span>()<span class="pl-k">+</span><span class="pl-c1">1</span>), <span class="pl-en">p</span>(<span class="pl-c1">this</span>.<span class="pl-c1">getUTCDate</span>())</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line">    ].<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>-<span class="pl-pds">&#39;</span></span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>T<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> [</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">p</span>(<span class="pl-c1">this</span>.<span class="pl-c1">getUTCHours</span>()), <span class="pl-en">p</span>(<span class="pl-c1">this</span>.<span class="pl-c1">getUTCMinutes</span>()), <span class="pl-en">p</span>(<span class="pl-c1">this</span>.<span class="pl-c1">getUTCSeconds</span>())</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line">    ].<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>:<span class="pl-pds">&#39;</span></span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">p</span>(<span class="pl-c1">this</span>.<span class="pl-c1">getUTCMilliseconds</span>(),<span class="pl-c1">3</span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Z<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line">}());</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">typeof</span> <span class="pl-c1">ArrayBuffer</span> <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-c1">ArrayBuffer</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">slice</span>) <span class="pl-c1">ArrayBuffer</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">slice</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">start</span>, <span class="pl-smi">end</span>) {</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span>(start <span class="pl-k">==</span> <span class="pl-c1">null</span>) start <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span>(start <span class="pl-k">&lt;</span> <span class="pl-c1">0</span>) { start <span class="pl-k">+=</span> <span class="pl-c1">this</span>.<span class="pl-smi">byteLength</span>; <span class="pl-k">if</span>(start <span class="pl-k">&lt;</span> <span class="pl-c1">0</span>) start <span class="pl-k">=</span> <span class="pl-c1">0</span>; }</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span>(start <span class="pl-k">&gt;=</span> <span class="pl-c1">this</span>.<span class="pl-smi">byteLength</span>) <span class="pl-k">return</span> <span class="pl-k">new</span> <span class="pl-en">Uint8Array</span>(<span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span>(end <span class="pl-k">==</span> <span class="pl-c1">null</span>) end <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">byteLength</span>;</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span>(end <span class="pl-k">&lt;</span> <span class="pl-c1">0</span>) { end <span class="pl-k">+=</span> <span class="pl-c1">this</span>.<span class="pl-smi">byteLength</span>; <span class="pl-k">if</span>(end <span class="pl-k">&lt;</span> <span class="pl-c1">0</span>) end <span class="pl-k">=</span> <span class="pl-c1">0</span>; }</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span>(end <span class="pl-k">&gt;</span> <span class="pl-c1">this</span>.<span class="pl-smi">byteLength</span>) end <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">byteLength</span>;</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span>(start <span class="pl-k">&gt;</span> end) <span class="pl-k">return</span> <span class="pl-k">new</span> <span class="pl-en">Uint8Array</span>(<span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> out <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">ArrayBuffer</span>(end <span class="pl-k">-</span> start);</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> view <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Uint8Array</span>(out);</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> data <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Uint8Array</span>(<span class="pl-c1">this</span>, start, end <span class="pl-k">-</span> start)</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">/*</span> IE10 should have Uint8Array#set <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span>(<span class="pl-smi">view</span>.<span class="pl-smi">set</span>) <span class="pl-smi">view</span>.<span class="pl-c1">set</span>(data); <span class="pl-k">else</span> <span class="pl-k">while</span>(start <span class="pl-k">&lt;=</span> <span class="pl-k">--</span>end) view[end <span class="pl-k">-</span> start] <span class="pl-k">=</span> data[end];</td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">return</span> out;</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line">};</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">typeof</span> <span class="pl-c1">Uint8Array</span> <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-c1">Uint8Array</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">slice</span>) <span class="pl-c1">Uint8Array</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">slice</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">start</span>, <span class="pl-smi">end</span>) {</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span>(start <span class="pl-k">==</span> <span class="pl-c1">null</span>) start <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span>(start <span class="pl-k">&lt;</span> <span class="pl-c1">0</span>) { start <span class="pl-k">+=</span> <span class="pl-c1">this</span>.<span class="pl-c1">length</span>; <span class="pl-k">if</span>(start <span class="pl-k">&lt;</span> <span class="pl-c1">0</span>) start <span class="pl-k">=</span> <span class="pl-c1">0</span>; }</td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span>(start <span class="pl-k">&gt;=</span> <span class="pl-c1">this</span>.<span class="pl-c1">length</span>) <span class="pl-k">return</span> <span class="pl-k">new</span> <span class="pl-en">Uint8Array</span>(<span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span>(end <span class="pl-k">==</span> <span class="pl-c1">null</span>) end <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span>(end <span class="pl-k">&lt;</span> <span class="pl-c1">0</span>) { end <span class="pl-k">+=</span> <span class="pl-c1">this</span>.<span class="pl-c1">length</span>; <span class="pl-k">if</span>(end <span class="pl-k">&lt;</span> <span class="pl-c1">0</span>) end <span class="pl-k">=</span> <span class="pl-c1">0</span>; }</td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span>(end <span class="pl-k">&gt;</span> <span class="pl-c1">this</span>.<span class="pl-c1">length</span>) end <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span>(start <span class="pl-k">&gt;</span> end) <span class="pl-k">return</span> <span class="pl-k">new</span> <span class="pl-en">Uint8Array</span>(<span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> out <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Uint8Array</span>(end <span class="pl-k">-</span> start);</td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">while</span>(start <span class="pl-k">&lt;=</span> <span class="pl-k">--</span>end) out[end <span class="pl-k">-</span> start] <span class="pl-k">=</span> <span class="pl-c1">this</span>[end];</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">return</span> out;</td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code blob-code-inner js-file-line">};</td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> VBScript + ActiveX fallback for IE5+</span></td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> IE_SaveFile <span class="pl-k">=</span> (<span class="pl-k">function</span>() { <span class="pl-k">try</span> {</td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span>(<span class="pl-k">typeof</span> IE_SaveFile_Impl <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span>) <span class="pl-c1">document</span>.<span class="pl-c1">write</span>([</td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code blob-code-inner js-file-line"><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;script type=&quot;text/vbscript&quot; language=&quot;vbscript&quot;&gt;<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code blob-code-inner js-file-line"><span class="pl-s"><span class="pl-pds">&#39;</span>IE_GetProfileAndPath_Key = &quot;HKEY_CURRENT_USER<span class="pl-cce">\\</span>Software<span class="pl-cce">\\</span>Microsoft<span class="pl-cce">\\</span>Windows<span class="pl-cce">\\</span>CurrentVersion<span class="pl-cce">\\</span>Explorer<span class="pl-cce">\\</span>User Shell Folders<span class="pl-cce">\\</span>&quot;<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code blob-code-inner js-file-line"><span class="pl-s"><span class="pl-pds">&#39;</span>Function IE_GetProfileAndPath(key): Set wshell = CreateObject(&quot;WScript.Shell&quot;): IE_GetProfileAndPath = wshell.RegRead(IE_GetProfileAndPath_Key &amp; key): IE_GetProfileAndPath = wshell.ExpandEnvironmentStrings(&quot;%USERPROFILE%&quot;) &amp; &quot;!&quot; &amp; IE_GetProfileAndPath: End Function<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code blob-code-inner js-file-line"><span class="pl-s"><span class="pl-pds">&#39;</span>Function IE_SaveFile_Impl(FileName, payload): Dim data, plen, i, bit: data = CStr(payload): plen = Len(data): Set fso = CreateObject(&quot;Scripting.FileSystemObject&quot;): fso.CreateTextFile FileName, True: Set f = fso.GetFile(FileName): Set stream = f.OpenAsTextStream(2, 0): For i = 1 To plen Step 3: bit = Mid(data, i, 2): stream.write Chr(CLng(&quot;&amp;h&quot; &amp; bit)): Next: stream.Close: IE_SaveFile_Impl = True: End Function<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code blob-code-inner js-file-line"><span class="pl-s"><span class="pl-pds">&#39;</span>|/script&gt;<span class="pl-pds">&#39;</span></span>.<span class="pl-c1">replace</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>|<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>&lt;<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code blob-code-inner js-file-line">  ].<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\r\n</span><span class="pl-pds">&quot;</span></span>));</td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span>(<span class="pl-k">typeof</span> IE_SaveFile_Impl <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span>) <span class="pl-k">return</span> <span class="pl-k">void</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> IE_GetPath <span class="pl-k">=</span> (<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> <span class="pl-c1">DDP1</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">try</span> { <span class="pl-c1">DDP1</span> <span class="pl-k">=</span> <span class="pl-en">IE_GetProfileAndPath</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>{374DE290-123F-4565-9164-39C4925E467B}<span class="pl-pds">&quot;</span></span>); } <span class="pl-k">catch</span>(e) { <span class="pl-k">try</span> { <span class="pl-c1">DDP1</span> <span class="pl-k">=</span> <span class="pl-en">IE_GetProfileAndPath</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Personal<span class="pl-pds">&quot;</span></span>); } <span class="pl-k">catch</span>(e) { <span class="pl-k">try</span> { <span class="pl-c1">DDP1</span> <span class="pl-k">=</span> <span class="pl-en">IE_GetProfileAndPath</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Desktop<span class="pl-pds">&quot;</span></span>); } <span class="pl-k">catch</span>(e) { <span class="pl-k">throw</span> e; }}}</td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> o <span class="pl-k">=</span> <span class="pl-c1">DDP1</span>.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>!<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">DDP</span> <span class="pl-k">=</span> o[<span class="pl-c1">1</span>].<span class="pl-c1">replace</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>%USERPROFILE%<span class="pl-pds">&quot;</span></span>, o[<span class="pl-c1">0</span>]);</td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-k">function</span>(<span class="pl-smi">path</span>) { <span class="pl-k">return</span> <span class="pl-c1">DDP</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\\</span><span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> path; };</td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code blob-code-inner js-file-line">  })();</td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">function</span> <span class="pl-en">fix_data</span>(<span class="pl-smi">data</span>) {</td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> out <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> <span class="pl-c1">T</span> <span class="pl-k">=</span> <span class="pl-k">typeof</span> data <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>string<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span>(<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">data</span>.<span class="pl-c1">length</span>; <span class="pl-k">++</span>i) <span class="pl-smi">out</span>.<span class="pl-c1">push</span>((<span class="pl-s"><span class="pl-pds">&quot;</span>00<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>(<span class="pl-c1">T</span> <span class="pl-k">?</span> <span class="pl-smi">data</span>.<span class="pl-c1">charCodeAt</span>(i) <span class="pl-k">:</span> data[i]).<span class="pl-c1">toString</span>(<span class="pl-c1">16</span>)).<span class="pl-c1">slice</span>(<span class="pl-k">-</span><span class="pl-c1">2</span>));</td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> o <span class="pl-k">=</span> <span class="pl-smi">out</span>.<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>|<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> o;</td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">return</span> <span class="pl-k">function</span>(<span class="pl-smi">data</span>, <span class="pl-smi">filename</span>) { <span class="pl-k">return</span> <span class="pl-en">IE_SaveFile_Impl</span>(<span class="pl-en">IE_GetPath</span>(filename), <span class="pl-en">fix_data</span>(data)); };</td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code blob-code-inner js-file-line">} <span class="pl-k">catch</span>(e) { <span class="pl-k">return</span> <span class="pl-k">void</span> <span class="pl-c1">0</span>; }})();</td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> IE_LoadFile <span class="pl-k">=</span> (<span class="pl-k">function</span>() { <span class="pl-k">try</span> {</td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span>(<span class="pl-k">typeof</span> IE_LoadFile_Impl <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span>) <span class="pl-c1">document</span>.<span class="pl-c1">write</span>([</td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code blob-code-inner js-file-line"><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;script type=&quot;text/vbscript&quot; language=&quot;vbscript&quot;&gt;<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code blob-code-inner js-file-line"><span class="pl-s"><span class="pl-pds">&#39;</span>Function IE_LoadFile_Impl(FileName): Dim out(), plen, i, cc: Set fso = CreateObject(&quot;Scripting.FileSystemObject&quot;): Set f = fso.GetFile(FileName): Set stream = f.OpenAsTextStream(1, 0): plen = f.Size: ReDim out(plen): For i = 1 To plen Step 1: cc = Hex(Asc(stream.read(1))): If Len(cc) &lt; 2 Then: cc = &quot;0&quot; &amp; cc: End If: out(i) = cc: Next: IE_LoadFile_Impl = Join(out,&quot;&quot;): End Function<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code blob-code-inner js-file-line"><span class="pl-s"><span class="pl-pds">&#39;</span>|/script&gt;<span class="pl-pds">&#39;</span></span>.<span class="pl-c1">replace</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>|<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>&lt;<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code blob-code-inner js-file-line">  ].<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\r\n</span><span class="pl-pds">&quot;</span></span>));</td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span>(<span class="pl-k">typeof</span> IE_LoadFile_Impl <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span>) <span class="pl-k">return</span> <span class="pl-k">void</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">function</span> <span class="pl-en">fix_data</span>(<span class="pl-smi">data</span>) {</td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> out <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span>(<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">data</span>.<span class="pl-c1">length</span>; i<span class="pl-k">+=</span><span class="pl-c1">2</span>) <span class="pl-smi">out</span>.<span class="pl-c1">push</span>(<span class="pl-c1">String</span>.<span class="pl-c1">fromCharCode</span>(<span class="pl-c1">parseInt</span>(<span class="pl-smi">data</span>.<span class="pl-c1">slice</span>(i, i<span class="pl-k">+</span><span class="pl-c1">2</span>), <span class="pl-c1">16</span>)));</td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> o <span class="pl-k">=</span> <span class="pl-smi">out</span>.<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> o;</td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">return</span> <span class="pl-k">function</span>(<span class="pl-smi">filename</span>) { <span class="pl-k">return</span> <span class="pl-en">fix_data</span>(<span class="pl-en">IE_LoadFile_Impl</span>(filename)); };</td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code blob-code-inner js-file-line">} <span class="pl-k">catch</span>(e) { <span class="pl-k">return</span> <span class="pl-k">void</span> <span class="pl-c1">0</span>; }})();</td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> getComputedStyle polyfill from https://gist.github.com/8HNHoFtE/5891086</span></td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">typeof</span> <span class="pl-c1">window</span> <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">typeof</span> <span class="pl-c1">window</span>.<span class="pl-smi">getComputedStyle</span> <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">window</span>.<span class="pl-en">getComputedStyle</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">e</span>,<span class="pl-smi">t</span>){<span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-smi">el</span><span class="pl-k">=</span>e,<span class="pl-c1">this</span>.<span class="pl-en">getPropertyValue</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">t</span>){<span class="pl-k">var</span> n<span class="pl-k">=</span><span class="pl-sr"><span class="pl-pds">/</span>(<span class="pl-cce">\-</span>(<span class="pl-c1">[<span class="pl-c1">a-z</span>]</span>)<span class="pl-k">{1}</span>)<span class="pl-pds">/</span>g</span>;<span class="pl-k">return</span> t<span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&quot;</span>float<span class="pl-pds">&quot;</span></span><span class="pl-k">&amp;&amp;</span>(t<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>styleFloat<span class="pl-pds">&quot;</span></span>),<span class="pl-smi">n</span>.<span class="pl-c1">test</span>(t)<span class="pl-k">&amp;&amp;</span>(t<span class="pl-k">=</span><span class="pl-smi">t</span>.<span class="pl-c1">replace</span>(n,<span class="pl-k">function</span>(){<span class="pl-k">return</span> <span class="pl-c1">arguments</span>[<span class="pl-c1">2</span>].<span class="pl-c1">toUpperCase</span>()})),<span class="pl-smi">e</span>.<span class="pl-smi">currentStyle</span>[t]<span class="pl-k">?</span><span class="pl-smi">e</span>.<span class="pl-smi">currentStyle</span>[t]<span class="pl-k">:</span><span class="pl-c1">null</span>},<span class="pl-c1">this</span>}</td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
</table>

  <div class="BlobToolbar position-absolute js-file-line-actions dropdown js-menu-container js-select-menu d-none" aria-hidden="true">
    <button class="btn-octicon ml-0 px-2 p-0 bg-white border border-gray-dark rounded-1 dropdown-toggle js-menu-target" type="button" aria-expanded="false" aria-haspopup="true" aria-label="Inline file action toolbar" aria-controls="inline-file-actions">
      <svg class="octicon octicon-kebab-horizontal" viewBox="0 0 13 16" version="1.1" width="13" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM13 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg>
    </button>
    <div class="dropdown-menu-content js-menu-content" id="inline-file-actions">
      <ul class="BlobToolbar-dropdown dropdown-menu dropdown-menu-se mt-2">
        <li><clipboard-copy class="dropdown-item" id="js-copy-lines" style="cursor:pointer;" data-original-text="Copy lines">Copy lines</clipboard-copy></li>
        <li><clipboard-copy class="dropdown-item" id="js-copy-permalink" style="cursor:pointer;" data-original-text="Copy permalink">Copy permalink</clipboard-copy></li>
        <li><a class="dropdown-item js-update-url-with-hash" id="js-view-git-blame" href="/SheetJS/js-xlsx/blame/64798fd1f9cbdf1483a70c6e232422b71ffdbea4/shim.js">View git blame</a></li>
          <li><a class="dropdown-item" id="js-new-issue" href="/SheetJS/js-xlsx/issues/new">Open new issue</a></li>
      </ul>
    </div>
  </div>

  </div>

  </div>

  <button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="d-none">Jump to Line</button>
  <div id="jump-to-line" style="display:none">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-jump-to-line-form" action="" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
      <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
      <button type="submit" class="btn">Go</button>
</form>  </div>


  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>

    </div>
  </div>

  </div>

      
<div class="footer container-lg px-3" role="contentinfo">
  <div class="position-relative d-flex flex-justify-between pt-6 pb-2 mt-6 f6 text-gray border-top border-gray-light ">
    <ul class="list-style-none d-flex flex-wrap ">
      <li class="mr-3">&copy; 2018 <span title="0.29969s from unicorn-684fcd4765-lb85r">GitHub</span>, Inc.</li>
        <li class="mr-3"><a data-ga-click="Footer, go to terms, text:terms" href="https://github.com/site/terms">Terms</a></li>
        <li class="mr-3"><a data-ga-click="Footer, go to privacy, text:privacy" href="https://github.com/site/privacy">Privacy</a></li>
        <li class="mr-3"><a href="https://help.github.com/articles/github-security/" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li class="mr-3"><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a data-ga-click="Footer, go to help, text:help" href="https://help.github.com">Help</a></li>
    </ul>

    <a aria-label="Homepage" title="GitHub" class="footer-octicon" href="https://github.com">
      <svg height="24" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
   <ul class="list-style-none d-flex flex-wrap ">
        <li class="mr-3"><a data-ga-click="Footer, go to contact, text:contact" href="https://github.com/contact">Contact GitHub</a></li>
      <li class="mr-3"><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li class="mr-3"><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li class="mr-3"><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li class="mr-3"><a href="https://blog.github.com" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a data-ga-click="Footer, go to about, text:about" href="https://github.com/about">About</a></li>

    </ul>
  </div>
  <div class="d-flex flex-justify-center pb-6">
    <span class="f6 text-gray-light"></span>
  </div>
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
    </button>
    You can’t perform that action at this time.
  </div>


    
    <script crossorigin="anonymous" integrity="sha512-/+pkpBQ4DDFOUT8uX6Dbla+41M4Vom3TMEl4repg2iD+ObxYlMFlg753ZkQTsney36h43DjiRu7WcKrvajXLpA==" type="application/javascript" src="https://assets-cdn.github.com/assets/frameworks-6dccd67c7251fe9a33ed7221404a7921.js"></script>
    
    <script crossorigin="anonymous" async="async" integrity="sha512-shc42TA35NIwMAhkkpwSfZYS3byHhb3yfMFY8KptF9+upHxGTri1jGSF6Zmu/SnaTAi4R8BiBSX4x8DUYxWQ8w==" type="application/javascript" src="https://assets-cdn.github.com/assets/github-4df79f614f2d9d3eeadc414203387573.js"></script>
    
    
    
  <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
    </button>
  </div>
</div>

  <div class="Popover js-hovercard-content position-absolute" style="display: none; outline: none;" tabindex="0">
  <div class="Popover-message Popover-message--bottom-left Popover-message--large Box box-shadow-large" style="width:360px;">
  </div>
</div>

<div id="hovercard-aria-description" class="sr-only">
  Press h to open a hovercard with more details.
</div>


  </body>
</html>

