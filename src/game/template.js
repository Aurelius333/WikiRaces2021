/* I put all the css in this file because loading css
  files was acting weird and I don't feel like debugging it right now.  */
const htmlTemplate = `
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]>      <html class="no-js">        <![endif]-->

<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Interalliance Wiki Races</title>
    <meta name="description"
        content="A website to host challenges where people try to get from one wikipedia page to another, as quick as possible.">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="wiki.css">
</head>

<style>
.client-js #mw-subcategories ul {
    list-style: none none;
    margin-left: 0.25em
}

#mw-panel .portal .body .CategoryTreeTag {
    margin: 0;
    font-size: 0.75em;
    line-height: 1.125em
}

#mw-panel .portal .body .CategoryTreeItem {
    padding: 0.25em 0
}

.CategoryTreeChildren {
    margin-left: 1.25em
}

.CategoryTreeBullet, .CategoryTreeEmptyBullet {
    cursor: default;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}

.CategoryTreeEmptyBullet {
    color: #c0c0c0
}

.CategoryTreeBullet a, .CategoryTreeBullet a:link, .CategoryTreeBullet a:active, .CategoryTreeBullet a:visited {
    text-decoration: none;
    color: inherit;
    speak: none
}

.client-nojs .CategoryTreeBullet, .client-nojs .CategoryTreeEmptyBullet {
    display: none
}

.CategoryTreeToggle {
    color: #0645ad
}

.CategoryTreeLabelPage {
    font-style: italic
}

.CategoryTreeParents {
    margin-top: 1.5ex;
    font-style: italic
}

.CategoryTreeResult {
    margin-top: 1.5ex
}

.CategoryTreeTag {
    margin-top: 0.5ex;
    margin-bottom: 0.5ex
}

.CategoryTreeNotice {
    font-style: italic
}

.CategoryTreeSection {
    direction: ltr
}

.mw-cite-backlink, .cite-accessibility-label {
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none
}

.mw-references-columns {
    -webkit-column-width: 30em;
    -moz-column-width: 30em;
    column-width: 30em
}

.mw-references-columns li {
    -webkit-column-break-inside: avoid;
    page-break-inside: avoid;
    break-inside: avoid-column
}

ol.references {
    counter-reset: mw-ref-extends-parent list-item
}

ol.references>li {
    counter-increment: mw-ref-extends-parent;
    counter-reset: mw-ref-extends-child
}

ol.references .mw-extended-references {
    list-style: none;
    margin-left: 2em
}

.mw-extended-references>li:before {
    counter-increment: mw-ref-extends-child;
    content: counter(mw-ref-extends-parent, decimal) '.' counter(mw-ref-extends-child, decimal) '. '
}

sup.reference {
    unicode-bidi: -moz-isolate;
    unicode-bidi: -webkit-isolate;
    unicode-bidi: isolate;
    white-space: nowrap;
    font-weight: normal;
    font-style: normal
}

ol.references li:target, sup.reference:target {
    background-color: #eaf3ff
}

.mw-ext-cite-error {
    font-weight: bold;
    unicode-bidi: embed
}

.mw-ext-cite-error code {
    background-color: transparent;
    color: inherit;
    padding: 1px 2px
}

.mw-cite-dir-ltr .reference-text {
    direction: ltr;
    unicode-bidi: embed
}

.mw-cite-dir-rtl .reference-text {
    direction: rtl;
    unicode-bidi: embed
}

@media print {
    .mw-cite-backlink {
        display: none
    }
}

.mediaContainer, .PopUpMediaTransform {
    position: relative;
    display: block
}

.thumb .mediaContainer, .thumb .PopUpMediaTransform {
    margin: 0 auto
}

#p-lang .uls-settings-trigger {
    background: transparent url(/w/extensions/UniversalLanguageSelector/resources/images/cog-sprite.svg?c3fa1) no-repeat center top;
    border: 0;
    min-height: 16px;
    min-width: 16px;
    float: right;
    cursor: pointer
}

#p-lang .uls-settings-trigger::-moz-focus-inner {
    border: 0
}

#p-lang .uls-settings-trigger:focus {
    outline: 1px solid #36c
}

.skin-vector #p-lang .uls-settings-trigger {
    margin-top: 8px
}

#p-lang .uls-settings-trigger:hover {
    background-position: center -16px
}

.client-nojs #ca-ve-edit, .client-nojs .mw-editsection-divider, .client-nojs .mw-editsection-visualeditor, .ve-not-available #ca-ve-edit, .ve-not-available .mw-editsection-divider, .ve-not-available .mw-editsection-visualeditor {
    display: none
}

.client-js .mw-content-ltr .mw-editsection-bracket:first-of-type, .client-js .mw-content-rtl .mw-editsection-bracket:not(:first-of-type) {
    margin-right: 0.25em;
    color: #54595d
}

.client-js .mw-content-rtl .mw-editsection-bracket:first-of-type, .client-js .mw-content-ltr .mw-editsection-bracket:not(:first-of-type) {
    margin-left: 0.25em;
    color: #54595d
}

.badge-goodarticle, .badge-goodlist, .badge-recommendedarticle {
    list-style-image: url(/w/extensions/WikimediaBadges/resources/images/badge-silver-star.png?70a8c)
}

.badge-featuredarticle, .badge-featuredportal, .badge-featuredlist {
    list-style-image: url(/w/extensions/WikimediaBadges/resources/images/badge-golden-star.png?ed948)
}

.badge-problematic {
    list-style-image: url(/w/extensions/WikimediaBadges/resources/images/badge-problematic.png?f3177)
}

.badge-proofread {
    list-style-image: url(/w/extensions/WikimediaBadges/resources/images/badge-proofread.png?e81f9)
}

.badge-validated {
    list-style-image: url(/w/extensions/WikimediaBadges/resources/images/badge-validated.png?6232c)
}

.badge-digitaldocument {
    list-style-image: url(/w/extensions/WikimediaBadges/resources/images/badge-digitaldocument.png?d1c50)
}

.firstHeading:before {
    content: url(/static/images/mobile/copyright/wikipedia-wordmark-en.svg);
    display: block;
    height: 18px;
    left: -9999px;
    line-height: 0;
    margin-bottom: 20px;
    position: absolute;
    width: 119px
}

.messagebox, .errorbox, .warningbox, .successbox {
    color: #000;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    margin-bottom: 16px;
    border: 1px solid;
    padding: 12px 24px;
    word-wrap: break-word;
    overflow-wrap: break-word;
    overflow: hidden
}

.messagebox :only-child, .errorbox :only-child, .warningbox :only-child, .successbox :only-child {
    margin: 0
}

.messagebox h2, .errorbox h2, .warningbox h2, .successbox h2 {
    color: inherit;
    display: inline;
    margin: 0 0.5em 0 0;
    border: 0;
    font-size: 1em;
    font-weight: bold
}

.messagebox {
    background-color: #eaecf0;
    border-color: #a2a9b1
}

.errorbox {
    background-color: #fee7e6;
    border-color: #d33
}

.warningbox {
    background-color: #fef6e7;
    border-color: #fc3
}

.successbox {
    background-color: #d5fdf4;
    border-color: #14866d
}

.toctogglecheckbox:checked~ul {
    display: none
}

@media screen {
    html, body {
        height: 100%
    }
    :focus {
        outline-color: #3366cc
    }
    body {
        background-color: #f6f6f6;
        overflow-y: scroll
    }
    .mw-body, .parsoid-body {
        background-color: #ffffff;
        color: #202122;
        direction: ltr;
        padding: 1em
    }
    #p-personal {
        position: absolute;
        top: 6px;
        right: 0.75em;
        z-index: 100
    }
    #p-personal ul {
        padding-left: 10em
    }
    #p-personal li {
        float: left
    }
    .mw-body, #mw-data-after-content {
        margin-left: 10em
    }
    .mw-body {
        margin-top: -1px;
        border: 1px solid #a7d7f9;
        border-right-width: 0
    }
    .mw-body .firstHeading {
        overflow: visible
    }
    .mw-indicators {
        float: right;
        z-index: 1
    }
    .mw-body-content {
        position: relative;
        z-index: 0
    }
    #bodyContent:after {
        clear: both;
        content: '';
        display: block
    }
    #mw-page-base {
        background-color: #fbfbfb;
        background-image: -webkit-gradient(linear, right top, right bottom, color-stop(50%, #ffffff), color-stop(100%, #f6f6f6));
        background-image: -webkit-linear-gradient(top, #ffffff 50%, #f6f6f6 100%);
        background-image: -moz-linear-gradient(top, #ffffff 50%, #f6f6f6 100%);
        background-image: linear-gradient(to bottom, #ffffff 50%, #f6f6f6 100%);
        background-position: bottom left;
        height: 5em
    }
    #mw-head-base {
        margin-top: -5em;
        margin-left: 10em;
        height: 5em
    }
    #mw-navigation h2 {
        position: absolute;
        top: -9999px
    }
    #mw-head {
        position: absolute;
        top: 0;
        right: 0;
        width: 100%
    }
    #left-navigation {
        float: left;
        margin-left: 10em;
        margin-top: 2.5em;
        margin-bottom: -2.5em
    }
    #right-navigation {
        float: right;
        margin-top: 2.5em
    }
    #p-search {
        float: left;
        margin-right: 0.5em;
        margin-left: 0.5em
    }
    #p-search form {
        margin: 0.5em 0 0
    }
    #simpleSearch {
        min-width: 5em;
        width: 13.2em;
        width: 20vw;
        max-width: 20em
    }
    #mw-panel {
        position: absolute;
        top: 0;
        width: 10em;
        left: 0
    }
    .mw-footer {
        margin-left: 10em;
        margin-top: 0
    }
    html {
        font-size: 100%
    }
    html, body {
        font-family: sans-serif
    }
    ul {
        list-style-image: url(/w/skins/Vector/resources/skins.vector.styles/images/bullet-icon.svg?d4515)
    }
    pre, .mw-code {
        line-height: 1.3
    }
    .mw-jump-link:not(:focus) {
        display: block;
        position: absolute !important;
        clip: rect(1px, 1px, 1px, 1px);
        width: 1px;
        height: 1px;
        margin: -1px;
        border: 0;
        padding: 0;
        overflow: hidden
    }
    #p-personal li {
        font-size: 0.75em
    }
    .mw-editsection, .mw-editsection-like {
        font-family: sans-serif
    }
    .mw-body h1, .mw-body-content h1, .mw-body-content h2 {
        margin-bottom: 0.25em;
        padding: 0;
        font-family: 'Linux Libertine', 'Georgia', 'Times', serif;
        line-height: 1.3
    }
    .mw-body h1:lang(ja), .mw-body-content h1:lang(ja), .mw-body-content h2:lang(ja), .mw-body h1:lang(he), .mw-body-content h1:lang(he), .mw-body-content h2:lang(he), .mw-body h1:lang(ko), .mw-body-content h1:lang(ko), .mw-body-content h2:lang(ko) {
        font-family: sans-serif
    }
    .mw-body h1:lang(my), .mw-body-content h1:lang(my), .mw-body-content h2:lang(my) {
        line-height: normal
    }
    .mw-body h1, .mw-body-content h1 {
        font-size: 1.8em
    }
    .mw-body-content {
        font-size: 0.875em;
        font-size: calc(1em * 0.875);
        line-height: 1.6
    }
    .mw-body-content h1 {
        margin-top: 1em
    }
    .mw-body-content h2 {
        margin-top: 1em;
        font-size: 1.5em
    }
    .mw-body-content h3, .mw-body-content h4, .mw-body-content h5, .mw-body-content h6 {
        margin-top: 0.3em;
        margin-bottom: 0;
        padding-bottom: 0;
        line-height: 1.6
    }
    .mw-body-content h3 {
        font-size: 1.2em
    }
    .mw-body-content h3, .mw-body-content h4 {
        font-weight: bold
    }
    .mw-body-content h4, .mw-body-content h5, .mw-body-content h6 {
        font-size: 100%
    }
    .mw-body-content .toc h2 {
        font-family: sans-serif;
        font-size: 100%
    }
    .mw-body-content p {
        margin: 0.5em 0
    }
    .mw-body-content blockquote {
        border-left: 4px solid #eaecf0;
        padding: 8px 32px
    }
    .mw-body-content blockquote> :first-child {
        margin-top: 0
    }
    .mw-body-content blockquote> :last-child {
        margin-bottom: 0
    }
    .mw-parser-output .external {
        background-image: url(/w/skins/Vector/resources/skins.vector.styles/images/external-link-ltr-icon.svg?b4b84);
        background-position: center right;
        background-repeat: no-repeat;
        padding-right: 13px
    }
    .mw-body .mw-indicators {
        font-size: 0.875em;
        line-height: 1.6;
        position: relative
    }
    .mw-body .mw-indicator {
        display: inline-block
    }
    #siteNotice {
        font-size: 0.8em
    }
    #p-personal .vector-menu-content-list {
        display: flex;
        flex-wrap: wrap;
        flex-grow: 1;
        justify-content: flex-end;
        align-items: baseline
    }
    .mw-portlet h3 {
        display: none
    }
    .mw-portlet ul {
        list-style: none none;
        margin: 0
    }
    .mw-portlet li {
        margin-left: 0.75em;
        padding-top: 0.5em;
        line-height: 1.16666667
    }
    #pt-anonuserpage, #pt-userpage a {
        background-image: url(/w/skins/Vector/resources/skins.vector.styles/images/user-avatar.svg?b7f58);
        background-position: left 0.33333333em;
        background-repeat: no-repeat;
        background-size: 1.16666667em 1.16666667em;
        padding-top: 0.5em !important;
        padding-left: 16px !important
    }
    #pt-userpage {
        padding-top: 0 !important
    }
    #pt-userpage a {
        display: inline-block
    }
    #pt-anonuserpage {
        color: #54595d
    }
    #p-search h3 {
        display: block;
        position: absolute !important;
        clip: rect(1px, 1px, 1px, 1px);
        width: 1px;
        height: 1px;
        margin: -1px;
        border: 0;
        padding: 0;
        overflow: hidden
    }
    #simpleSearch {
        position: relative;
        height: 100%
    }
    #searchInput {
        background-color: rgba(255, 255, 255, 0.5);
        color: #000000;
        width: 100%;
        height: 2.15384615em;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        border: 1px solid #a2a9b1;
        border-radius: 2px;
        padding: 5px 2.15384615em 5px 0.4em;
        -webkit-box-shadow: inset 0 0 0 1px transparent;
        box-shadow: inset 0 0 0 1px transparent;
        font-family: inherit;
        font-size: 0.8125em;
        direction: ltr;
        -webkit-transition: border-color 250ms, box-shadow 250ms;
        -moz-transition: border-color 250ms, box-shadow 250ms;
        transition: border-color 250ms, box-shadow 250ms;
        -webkit-appearance: none;
        -moz-appearance: textfield
    }
    #simpleSearch:hover #searchInput {
        border-color: #72777d
    }
    #searchInput:focus, #simpleSearch:hover #searchInput:focus {
        outline: 0;
        border-color: #3366cc;
        -webkit-box-shadow: inset 0 0 0 1px #3366cc, inset 0 0 0 2px #ffffff;
        box-shadow: inset 0 0 0 1px #3366cc, inset 0 0 0 2px #ffffff
    }
    #searchInput::-webkit-input-placeholder {
        color: #72777d;
        opacity: 1
    }
    #searchInput:-ms-input-placeholder {
        color: #72777d;
        opacity: 1
    }
    #searchInput::-moz-placeholder {
        color: #72777d;
        opacity: 1
    }
    #searchInput:-moz-placeholder {
        color: #72777d;
        opacity: 1
    }
    #searchInput::placeholder {
        color: #72777d;
        opacity: 1
    }
    #searchInput::-webkit-search-decoration, #searchInput::-webkit-search-cancel-button, #searchInput::-webkit-search-results-button, #searchInput::-webkit-search-results-decoration {
        display: none
    }
    #searchButton, #mw-searchButton {
        background-color: transparent;
        position: absolute;
        top: 1px;
        bottom: 1px;
        right: 1px;
        min-width: 28px;
        width: 2.15384615em;
        border: 0;
        padding: 0;
        cursor: pointer;
        font-size: 0.8125em;
        direction: ltr;
        text-indent: -99999px;
        white-space: nowrap;
        overflow: hidden;
        z-index: 1
    }
    #searchButton {
        background: no-repeat center / 1.23076923em url(/w/skins/Vector/resources/skins.vector.styles/images/search.svg?cd211);
        opacity: 0.67
    }
    .vector-menu-tabs {
        background-position: left bottom;
        float: left;
        height: 2.5em;
        padding-left: 1px
    }
    .vector-menu-tabs h3 {
        display: none
    }
    .vector-menu-tabs ul {
        float: left;
        height: 100%;
        list-style: none none;
        margin: 0;
        padding: 0
    }
    .vector-menu-tabs li {
        background-image: url(/w/skins/Vector/resources/skins.vector.styles/images/tab-normal-fade.png?1cc52);
        background-image: linear-gradient(to top, #77c1f6 0, #e8f2f8 1px, #ffffff 100%);
        background-position: left bottom;
        background-repeat: repeat-x;
        float: left;
        display: block;
        height: 100%;
        margin: 0;
        padding: 0;
        line-height: 1.125em;
        white-space: nowrap
    }
    .vector-menu-tabs li a {
        background-position: right bottom;
        color: #0645ad;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        display: block;
        float: left;
        height: 3.07692308em;
        position: relative;
        padding-top: 1.25em;
        padding-left: 8px;
        padding-right: 8px;
        font-size: 0.8125em;
        cursor: pointer
    }
    .vector-menu-tabs .new a, .vector-menu-tabs .new a:visited {
        color: #a55858
    }
    .vector-menu-tabs .selected {
        background: #ffffff
    }
    .vector-menu-tabs .selected a, .vector-menu-tabs .selected a:visited {
        color: #202122;
        text-decoration: none
    }
    .vector-menu-tabs .icon a {
        background-position: right bottom;
        background-repeat: no-repeat
    }
    @-webkit-keyframes rotate {
        from {
            -webkit-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            transform: rotate(0deg)
        }
        to {
            -webkit-transform: rotate(360deg);
            -moz-transform: rotate(360deg);
            transform: rotate(360deg)
        }
    }
    @-moz-keyframes rotate {
        from {
            -webkit-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            transform: rotate(0deg)
        }
        to {
            -webkit-transform: rotate(360deg);
            -moz-transform: rotate(360deg);
            transform: rotate(360deg)
        }
    }
    @keyframes rotate {
        from {
            -webkit-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            transform: rotate(0deg)
        }
        to {
            -webkit-transform: rotate(360deg);
            -moz-transform: rotate(360deg);
            transform: rotate(360deg)
        }
    }
    .vector-menu-tabs .mw-watchlink.icon a {
        width: 2.15384615em;
        height: 0;
        padding: 3.07692308em 0 0 0;
        overflow: hidden
    }
    .vector-menu-tabs .mw-watchlink.icon a:before {
        background-repeat: no-repeat;
        background-position: 50% 50%;
        content: '';
        display: block;
        position: absolute;
        top: 1.07692308em;
        left: 0.38461538em;
        width: 1.23076923em;
        height: 1.23076923em
    }
    .vector-menu-tabs #ca-unwatch.icon a:before {
        background-image: linear-gradient(transparent, transparent), url(/w/skins/Vector/resources/skins.vector.styles/images/unwatch-icon.svg?3de3e)
    }
    .vector-menu-tabs #ca-unwatch.mw-watchlink-temp.icon a:before {
        background-image: linear-gradient(transparent, transparent), url(/w/skins/Vector/resources/skins.vector.styles/images/unwatch-temp-icon.svg?b7b09)
    }
    .vector-menu-tabs #ca-watch.icon a:before {
        background-image: linear-gradient(transparent, transparent), url(/w/skins/Vector/resources/skins.vector.styles/images/watch-icon.svg?0e9fa)
    }
    .vector-menu-tabs #ca-unwatch.icon a:hover:before, .vector-menu-tabs #ca-unwatch.icon a:focus:before {
        background-image: linear-gradient(transparent, transparent), url(/w/skins/Vector/resources/skins.vector.styles/images/unwatch-icon-hl.svg?c58d6)
    }
    .vector-menu-tabs #ca-unwatch.mw-watchlink-temp.icon a:hover:before, .vector-menu-tabs #ca-unwatch.mw-watchlink-temp.icon a:focus:before {
        background-image: linear-gradient(transparent, transparent), url(/w/skins/Vector/resources/skins.vector.styles/images/unwatch-temp-icon-hl.svg?06c6c)
    }
    .vector-menu-tabs #ca-watch.icon a:hover:before, .vector-menu-tabs #ca-watch.icon a:focus:before {
        background-image: linear-gradient(transparent, transparent), url(/w/skins/Vector/resources/skins.vector.styles/images/watch-icon-hl.svg?84b7e)
    }
    .vector-menu-tabs #ca-unwatch.icon .loading:before, .vector-menu-tabs #ca-watch.icon .loading:before {
        -webkit-animation: rotate 700ms infinite linear;
        -moz-animation: rotate 700ms infinite linear;
        animation: rotate 700ms infinite linear;
        outline: 0;
        cursor: default;
        pointer-events: none;
        -webkit-transform-origin: 50% 50%;
        -moz-transform-origin: 50% 50%;
        -ms-transform-origin: 50% 50%;
        transform-origin: 50% 50%
    }
    .vector-menu-dropdown {
        direction: ltr;
        float: left;
        cursor: pointer;
        position: relative;
        line-height: 1.125em
    }
    .vector-menu-dropdown h3 {
        color: #54595d;
        position: relative;
        display: block;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        padding-top: 1.25em;
        padding-left: 8px;
        padding-right: 1.84615385em;
        font-size: 0.8125em;
        font-weight: normal
    }
    .vector-menu-dropdown h3:after {
        content: '';
        background-image: url(/w/skins/Vector/resources/skins.vector.styles/images/arrow-down.svg?e7827);
        background-position: 100% 50%;
        background-repeat: no-repeat;
        position: absolute;
        top: 0.76923077em;
        right: 8px;
        bottom: 0;
        width: 1.23076923em;
        opacity: 0.84
    }
    .vector-menu-dropdown h3:hover, .vector-menu-dropdown h3:focus {
        color: #202122
    }
    .vector-menu-dropdown h3:hover:after, .vector-menu-dropdown h3:focus:after {
        opacity: 1
    }
    .vector-menu-dropdown .vector-menu-content-list {
        background-color: #ffffff;
        list-style: none none;
        min-width: 100%;
        position: absolute;
        top: 2.5em;
        left: -1px;
        margin: 0;
        border: 1px solid #a2a9b1;
        border-top-width: 0;
        padding: 0;
        box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
        text-align: left;
        opacity: 0;
        visibility: hidden;
        -webkit-transition: opacity 100ms;
        -moz-transition: opacity 100ms;
        transition: opacity 100ms;
        z-index: 2
    }
    .vector-menu-dropdown:hover .vector-menu-content-list, .vector-menu-dropdown .vector-menu-checkbox:checked~.vector-menu-content .vector-menu-content-list {
        opacity: 1;
        visibility: visible
    }
    .vector-menu-dropdown li {
        padding: 0;
        margin: 0;
        text-align: left;
        line-height: 1em
    }
    .vector-menu-dropdown li a {
        color: #0645ad;
        display: block;
        padding: 0.625em;
        white-space: nowrap;
        cursor: pointer;
        font-size: 0.8125em
    }
    .vector-menu-dropdown .selected a, .vector-menu-dropdown .selected a:visited {
        color: #202122;
        text-decoration: none
    }
    #mw-head .vector-menu-dropdown h3 {
        background-position: right bottom;
        float: left;
        height: 3.07692308em;
        margin: 0 -1px 0 0;
        padding-right: 1.84615385em
    }
    .vector-menu-tabs, .vector-menu-tabs a, #mw-head .vector-menu-dropdown h3 {
        background-image: url(/w/skins/Vector/resources/skins.vector.styles/images/tab-separator.png?09d4b);
        background-image: linear-gradient(to bottom, rgba(167, 215, 249, 0) 0, #a7d7f9 100%);
        background-repeat: no-repeat;
        background-size: 1px 100%
    }
    .vector-menu-checkbox {
        cursor: pointer;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        opacity: 0;
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        display: none
    }
    :not(:checked)>.vector-menu-checkbox {
        display: block
    }
    .vector-menu-checkbox:checked+h3:after {
        transform: scaleY(-1)
    }
    .vector-menu-checkbox:focus+h3 {
        outline: dotted 1px;
        outline: auto -webkit-focus-ring-color
    }
    .vector-menu-portal {
        margin: 0 0.6em 0 0.7em;
        padding: 0.25em 0;
        direction: ltr
    }
    .vector-menu-portal h3 {
        display: block;
        background-image: url(/w/skins/Vector/resources/skins.vector.styles/images/portal-separator.png?4ab04);
        background-image: linear-gradient(to right, rgba(200, 204, 209, 0) 0, #c8ccd1 33%, #c8ccd1 66%, rgba(200, 204, 209, 0) 100%);
        background-position: center bottom;
        background-repeat: no-repeat;
        background-size: 100% 1px;
        color: #54595d;
        margin: 0.5em 0 0 0.66666667em;
        border: 0;
        padding: 0.25em 0;
        font-size: 0.75em;
        font-weight: normal;
        cursor: default
    }
    .vector-menu-portal .body, .vector-menu-portal .vector-menu-content {
        margin-left: 0.5em;
        padding-top: 0
    }
    .vector-menu-portal .body ul, .vector-menu-portal .vector-menu-content ul {
        list-style: none none;
        margin: 0;
        padding-top: 0.3em
    }
    .vector-menu-portal .body li, .vector-menu-portal .vector-menu-content li {
        margin: 0;
        padding: 0.25em 0;
        font-size: 0.75em;
        line-height: 1.125em;
        word-wrap: break-word
    }
    .vector-menu-portal .body li a, .vector-menu-portal .vector-menu-content li a {
        color: #0645ad
    }
    .vector-menu-portal .body li a:visited, .vector-menu-portal .vector-menu-content li a:visited {
        color: #0b0080
    }
    #mw-panel {
        font-size: inherit
    }
    #mw-panel .portal-first {
        background-image: none
    }
    #mw-panel .portal-first h3 {
        display: none
    }
    #mw-panel .portal-first .body, #mw-panel .portal-first .vector-menu-content {
        margin-left: 0.5em
    }
    #p-logo {
        width: 10em;
        height: 160px;
        margin-bottom: 1em
    }
    #p-logo a {
        background-position: center center;
        background-repeat: no-repeat;
        display: block;
        width: 10em;
        height: 160px;
        text-decoration: none
    }
    .mw-footer {
        padding: 0.75em;
        direction: ltr
    }
    .mw-footer ul {
        list-style: none none;
        margin: 0;
        padding: 0
    }
    .mw-footer li {
        color: #202122;
        margin: 0;
        padding: 0.5em 0;
        font-size: 0.75em
    }
    #footer-icons {
        float: right
    }
    #footer-icons li {
        float: left;
        margin-left: 0.5em;
        line-height: 2;
        text-align: right
    }
    #footer-info li {
        line-height: 1.4
    }
    #footer-places li {
        float: left;
        margin-right: 1em;
        line-height: 2
    }
}

@media screen and (min-width:982px) {
    .mw-body, #mw-head-base, #left-navigation, #mw-data-after-content, .mw-footer {
        margin-left: 11em
    }
    .mw-body {
        padding: 1.25em 1.5em 1.5em 1.5em
    }
    .mw-footer {
        padding: 1.25em
    }
    #mw-panel {
        padding-left: 0.5em
    }
    #p-search {
        margin-right: 1em
    }
    #p-personal {
        right: 1em
    }
}

@media print {
    .toc, body {
        padding: 10px;
        font-family: 'Linux Libertine', 'Georgia', 'Times', serif
    }
    .printfooter, .mw-footer, .thumb, table, ol, dl, ul, h3, h4, h5, h6 {
        font-family: sans-serif
    }
    img {
        font-family: 'Linux Libertine', 'Georgia', 'Times', serif
    }
    .mw-body a:not(.image) {
        border-bottom: 1px solid #aaa
    }
    .firstHeading {
        font-size: 25pt;
        line-height: 28pt;
        margin-bottom: 20px;
        padding-bottom: 5px
    }
    .firstHeading, h2 {
        overflow: hidden;
        border-bottom: 2px solid #000000
    }
    h3, h4, h5, h6 {
        margin: 30px 0 0
    }
    h2, h3, h4, h5, h6 {
        padding: 0;
        position: relative
    }
    h2 {
        font-size: 18pt;
        line-height: 24pt;
        margin-bottom: 0.25em
    }
    h3 {
        font-size: 14pt;
        line-height: 20pt
    }
    h4, h5, h6 {
        font-size: 12pt;
        line-height: 16pt
    }
    p {
        font-size: 12pt;
        line-height: 16pt;
        margin-top: 5px;
        text-align: justify
    }
    p:before {
        content: '';
        display: block;
        width: 120pt;
        overflow: hidden
    }
    blockquote {
        border-left: 2px solid #000000;
        padding-left: 20px
    }
    ol, ul {
        margin: 10px 0 0 1.6em;
        padding: 0
    }
    ol li, ul li {
        padding: 2px 0;
        font-size: 12pt
    }
    table ol li, table ul li {
        font-size: inherit
    }
    .toc {
        page-break-before: avoid;
        page-break-after: avoid;
        background: none;
        border: 0;
        display: table
    }
    .toc a {
        border: 0;
        font-weight: normal
    }
    .toc>ul>li {
        margin-bottom: 4px;
        font-weight: bold
    }
    .toc ul {
        margin: 0;
        list-style: none
    }
    .toc ul ul {
        padding-left: 30px
    }
    .toc li.toclevel-1>a {
        font-size: 12pt;
        font-weight: bold
    }
    .mw-jump-link, .toc .tocnumber {
        display: none
    }
    .printfooter {
        margin-top: 10px;
        border-top: 3px solid #000000;
        padding-top: 10px;
        font-size: 10pt;
        clear: both
    }
    .mw-footer {
        margin-top: 12px;
        border-top: 1px solid #eeeeee;
        padding-top: 5px
    }
    #footer-info {
        margin: 0;
        padding: 0
    }
    #footer-info li {
        color: #999;
        list-style: none;
        display: block;
        padding-bottom: 10px;
        font-size: 10pt
    }
    #footer-info li a {
        color: #999 !important
    }
    #footer-info-lastmod {
        color: #000000;
        font-size: 12pt;
        font-weight: bold
    }
}

.mw-wiki-logo {
    background-image: url(/static/images/project-logos/enwiki.png)
}

@media screen {
    body {
        margin: 0
    }
    main {
        display: block
    }
    hr {
        box-sizing: content-box;
        height: 0;
        overflow: visible
    }
    abbr[title] {
        border-bottom: 1px dotted;
        cursor: help
    }
    @supports (text-decoration:underline dotted) {
        abbr[title] {
            border-bottom: 0;
            text-decoration: underline dotted
        }
    }
    pre, code, tt, kbd, samp {
        font-family: monospace, monospace
    }
    sub, sup {
        line-height: 1
    }
    img {
        border: 0
    }
    button::-moz-focus-inner, [type='button']::-moz-focus-inner, [type='reset']::-moz-focus-inner, [type='submit']::-moz-focus-inner {
        border-style: none;
        padding: 0
    }
    legend {
        color: inherit;
        padding: 0
    }
    a {
        text-decoration: none;
        color: #0645ad;
        background: none
    }
    a:not([href]) {
        cursor: pointer
    }
    a:visited {
        color: #0b0080
    }
    a:active {
        color: #faa700
    }
    a:hover, a:focus {
        text-decoration: underline
    }
    a:lang(ar), a:lang(kk-arab), a:lang(mzn), a:lang(ps), a:lang(ur) {
        text-decoration: none
    }
    a.stub {
        color: #723
    }
    a.new, #p-personal a.new {
        color: #d33
    }
    a.mw-selflink {
        color: inherit;
        font-weight: bold;
        text-decoration: inherit
    }
    a.mw-selflink:hover {
        cursor: inherit;
        text-decoration: inherit
    }
    a.mw-selflink:active, a.mw-selflink:visited {
        color: inherit
    }
    a.new:visited, #p-personal a.new:visited {
        color: #a55858
    }
    .mw-parser-output a.extiw, .mw-parser-output a.external {
        color: #36b
    }
    .mw-parser-output a.extiw:visited, .mw-parser-output a.external:visited {
        color: #636
    }
    .mw-parser-output a.extiw:active, .mw-parser-output a.external:active {
        color: #b63
    }
    .mw-parser-output a.external.free {
        word-wrap: break-word
    }
    img {
        border: 0;
        vertical-align: middle
    }
    hr {
        height: 1px;
        background-color: #a2a9b1;
        border: 0;
        margin: 0.2em 0
    }
    h1, h2, h3, h4, h5, h6 {
        color: #000;
        margin: 0;
        padding-top: 0.5em;
        padding-bottom: 0.17em;
        overflow: hidden
    }
    h1, h2 {
        margin-bottom: 0.6em;
        border-bottom: 1px solid #a2a9b1
    }
    h3, h4, h5 {
        margin-bottom: 0.3em
    }
    h1 {
        font-size: 188%;
        font-weight: normal
    }
    h2 {
        font-size: 150%;
        font-weight: normal
    }
    h3 {
        font-size: 128%
    }
    h4 {
        font-size: 116%
    }
    h5 {
        font-size: 108%
    }
    h6 {
        font-size: 100%
    }
    p {
        margin: 0.4em 0 0.5em 0
    }
    p img {
        margin: 0
    }
    ul {
        margin: 0.3em 0 0 1.6em;
        padding: 0
    }
    ol {
        margin: 0.3em 0 0 3.2em;
        padding: 0;
        list-style-image: none
    }
    li {
        margin-bottom: 0.1em
    }
    dt {
        font-weight: bold;
        margin-bottom: 0.1em
    }
    dl {
        margin-top: 0.2em;
        margin-bottom: 0.5em
    }
    dd {
        margin-left: 1.6em;
        margin-bottom: 0.1em
    }
    pre, code, tt, kbd, samp, .mw-code {
        font-family: monospace, monospace
    }
    code {
        color: #000;
        background-color: #f8f9fa;
        border: 1px solid #eaecf0;
        border-radius: 2px;
        padding: 1px 4px
    }
    pre, .mw-code {
        color: #000;
        background-color: #f8f9fa;
        border: 1px solid #eaecf0;
        padding: 1em;
        white-space: pre-wrap;
        overflow-x: hidden;
        word-wrap: break-word
    }
    table {
        font-size: 100%
    }
    fieldset {
        border: 1px solid #2a4b8d;
        margin: 1em 0 1em 0;
        padding: 0 1em 1em
    }
    legend {
        padding: 0.5em;
        font-size: 95%
    }
    form {
        border: 0;
        margin: 0
    }
    textarea {
        width: 100%;
        padding: 0.1em;
        display: block;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box
    }
    .center {
        width: 100%;
        text-align: center
    }
    *.center * {
        margin-left: auto;
        margin-right: auto
    }
    .small {
        font-size: 94%
    }
    table.small {
        font-size: 100%
    }
    .toc, .toccolours {
        border: 1px solid #a2a9b1;
        background-color: #f8f9fa;
        padding: 5px;
        font-size: 95%
    }
    .toc {
        display: table;
        padding: 7px
    }
    table.toc {
        border-collapse: collapse
    }
    table.toc td {
        padding: 0
    }
    .toc h2 {
        display: inline;
        border: 0;
        padding: 0;
        font-size: 100%;
        font-weight: bold
    }
    .toc .toctitle {
        text-align: center
    }
    .toc ul {
        list-style-type: none;
        list-style-image: none;
        margin-left: 0;
        padding: 0;
        text-align: left
    }
    .toc ul ul {
        margin: 0 0 0 2em
    }
    .tocnumber, .toctext {
        display: table-cell;
        text-decoration: inherit
    }
    .tocnumber {
        color: #202122;
        padding-left: 0;
        padding-right: 0.5em
    }
    .mw-content-ltr .tocnumber {
        padding-left: 0;
        padding-right: 0.5em
    }
    .mw-content-rtl .tocnumber {
        padding-left: 0.5em;
        padding-right: 0
    }
    div.floatright, table.floatright {
        margin: 0 0 0.5em 0.5em
    }
    div.floatleft, table.floatleft {
        margin: 0 0.5em 0.5em 0
    }
    div.thumb {
        margin-bottom: 0.5em;
        width: auto;
        background-color: transparent
    }
    div.thumbinner {
        border: 1px solid #c8ccd1;
        padding: 3px;
        background-color: #f8f9fa;
        font-size: 94%;
        text-align: center;
        overflow: hidden
    }
    html .thumbimage {
        background-color: #fff;
        border: 1px solid #c8ccd1
    }
    html .thumbcaption {
        border: 0;
        line-height: 1.4em;
        padding: 3px;
        font-size: 94%;
        text-align: left
    }
    .magnify {
        float: right;
        margin-left: 3px
    }
    .magnify a {
        display: block;
        text-indent: 15px;
        white-space: nowrap;
        overflow: hidden;
        width: 15px;
        height: 11px;
        background-image: url(/w/resources/src/mediawiki.skinning/images/magnify-clip-ltr.png?4f704);
        background-image: linear-gradient(transparent, transparent), url(/w/resources/src/mediawiki.skinning/images/magnify-clip-ltr.svg?8330e);
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none
    }
    img.thumbborder {
        border: 1px solid #eaecf0
    }
    .mw-content-ltr .thumbcaption {
        text-align: left
    }
    .mw-content-ltr .magnify {
        float: right;
        margin-left: 3px;
        margin-right: 0
    }
    .mw-content-ltr .magnify a {
        background-image: url(/w/resources/src/mediawiki.skinning/images/magnify-clip-ltr.png?4f704);
        background-image: linear-gradient(transparent, transparent), url(/w/resources/src/mediawiki.skinning/images/magnify-clip-ltr.svg?8330e)
    }
    .mw-content-rtl .thumbcaption {
        text-align: right
    }
    .mw-content-rtl .magnify {
        float: left;
        margin-left: 0;
        margin-right: 3px
    }
    .mw-content-rtl .magnify a {
        background-image: url(/w/resources/src/mediawiki.skinning/images/magnify-clip-rtl.png?a9fb3);
        background-image: linear-gradient(transparent, transparent), url(/w/resources/src/mediawiki.skinning/images/magnify-clip-rtl.svg?38fd5)
    }
    div.tright {
        margin: 0.5em 0 1.3em 1.4em
    }
    div.tleft {
        margin: 0.5em 1.4em 1.3em 0
    }
    body.mw-hide-empty-elt .mw-empty-elt {
        display: none
    }
    .catlinks {
        border: 1px solid #a2a9b1;
        background-color: #f8f9fa;
        padding: 5px;
        margin-top: 1em;
        clear: both
    }
    textarea {
        border: 1px solid #c8ccd1
    }
    .editOptions {
        background-color: #eaecf0;
        color: #202122;
        border: 1px solid #c8ccd1;
        border-top: 0;
        padding: 1em 1em 1.5em 1em;
        margin-bottom: 2em
    }
    .usermessage {
        background-color: #ffce7b;
        border: 1px solid #ffa500;
        color: #000;
        font-weight: bold;
        margin: 2em 0 1em;
        padding: 0.5em 1em;
        vertical-align: middle
    }
    #siteNotice {
        position: relative;
        text-align: center;
        margin: 0
    }
    #localNotice {
        margin-bottom: 0.9em
    }
    #siteSub {
        display: none
    }
    #contentSub, #contentSub2 {
        font-size: 84%;
        line-height: 1.2em;
        margin: 0 0 1.4em 1em;
        color: #54595d;
        width: auto
    }
    span.subpages {
        display: block
    }
    .emptyPortlet {
        display: none
    }
    .printfooter, .client-nojs #t-print {
        display: none
    }
    .mw-editsection {
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none
    }
    .mw-editsection, .mw-editsection-like {
        font-size: small;
        font-weight: normal;
        margin-left: 1em;
        vertical-align: baseline;
        line-height: 1em
    }
    .mw-content-ltr .mw-editsection, .mw-content-rtl .mw-content-ltr .mw-editsection {
        margin-left: 1em
    }
    .mw-content-rtl .mw-editsection, .mw-content-ltr .mw-content-rtl .mw-editsection {
        margin-right: 1em
    }
    .mw-content-ltr {
        direction: ltr
    }
    .mw-content-rtl {
        direction: rtl
    }
    .sitedir-ltr textarea, .sitedir-ltr input, textarea[dir='ltr'][dir='ltr'], input[dir='ltr'][dir='ltr'] {
        direction: ltr
    }
    .sitedir-rtl textarea, .sitedir-rtl input, textarea[dir='rtl'][dir='rtl'], input[dir='rtl'][dir='rtl'] {
        direction: rtl
    }
    .mw-userlink {
        word-wrap: break-word;
        -webkit-hyphens: auto;
        -moz-hyphens: auto;
        -ms-hyphens: auto;
        hyphens: auto;
        unicode-bidi: embed
    }
    mark {
        background-color: #ff0;
        color: #000
    }
    wbr {
        display: inline-block
    }
    input[type='submit'], input[type='button'], input[type='reset'], input[type='file'] {
        direction: ltr
    }
    abbr[title], .explain[title] {
        border-bottom: 1px dotted;
        cursor: help
    }
    @supports (text-decoration:underline dotted) {
        abbr[title], .explain[title] {
            border-bottom: 0;
            text-decoration: underline dotted
        }
    }
    span.comment {
        font-style: italic;
        unicode-bidi: -moz-isolate;
        unicode-bidi: isolate
    }
    #editform, #toolbar, #wpTextbox1 {
        clear: both
    }
    #toolbar {
        height: 22px
    }
    .mw-underline-always a {
        text-decoration: underline
    }
    .mw-underline-never a {
        text-decoration: none
    }
    li span.deleted, span.history-deleted {
        text-decoration: line-through;
        color: #72777d;
        font-style: italic
    }
    .not-patrolled {
        background-color: #ffa
    }
    .unpatrolled {
        font-weight: bold;
        color: #d33
    }
    div.patrollink {
        font-size: 75%;
        text-align: right
    }
    td.mw-label {
        text-align: right;
        vertical-align: middle
    }
    td.mw-input {
        text-align: left
    }
    td.mw-submit {
        text-align: left;
        white-space: nowrap
    }
    .mw-input-with-label {
        white-space: nowrap;
        display: inline-block
    }
    .mw-content-ltr .thumbcaption {
        text-align: left
    }
    .mw-content-ltr .magnify {
        float: right
    }
    .mw-content-rtl .thumbcaption {
        text-align: right
    }
    .mw-content-rtl .magnify {
        float: left
    }
    #catlinks {
        text-align: left
    }
    .catlinks ul {
        display: inline;
        margin: 0;
        padding: 0;
        list-style: none none
    }
    .catlinks li {
        display: inline-block;
        line-height: 1.25em;
        border-left: 1px solid #a2a9b1;
        margin: 0.125em 0;
        padding: 0 0.5em
    }
    .catlinks li:first-child {
        padding-left: 0.25em;
        border-left: 0
    }
    .catlinks li a.mw-redirect {
        font-style: italic
    }
    .mw-hidden-cats-hidden {
        display: none
    }
    .catlinks-allhidden {
        display: none
    }
    p.mw-protect-editreasons, p.mw-filedelete-editreasons, p.mw-delete-editreasons {
        font-size: 90%;
        text-align: right
    }
    .autocomment, .autocomment a, .autocomment a:visited {
        color: #72777d
    }
    .newpage, .minoredit, .botedit {
        font-weight: bold
    }
    .mw-warning-with-logexcerpt {
        clear: both
    }
    .mw-warning-with-logexcerpt ul li {
        font-size: 90%
    }
    span.mw-revdelundel-link, strong.mw-revdelundel-link {
        font-size: 90%
    }
    span.mw-revdelundel-hidden, input.mw-revdelundel-hidden {
        visibility: hidden
    }
    td.mw-revdel-checkbox, th.mw-revdel-checkbox {
        padding-right: 10px;
        text-align: center
    }
    a.new {
        color: #ba0000
    }
    .plainlinks a.external {
        background: none !important;
        padding: 0 !important
    }
    .rtl a.external.free, .rtl a.external.autonumber {
        direction: ltr;
        unicode-bidi: embed
    }
    .wikitable {
        background-color: #f8f9fa;
        color: #202122;
        margin: 1em 0;
        border: 1px solid #a2a9b1;
        border-collapse: collapse
    }
    .wikitable>tr>th, .wikitable>tr>td, .wikitable>*>tr>th, .wikitable>*>tr>td {
        border: 1px solid #a2a9b1;
        padding: 0.2em 0.4em
    }
    .wikitable>tr>th, .wikitable>*>tr>th {
        background-color: #eaecf0;
        text-align: center
    }
    .wikitable>caption {
        font-weight: bold
    }
    .error, .warning, .success {
        font-size: larger
    }
    .error {
        color: #d33
    }
    .warning {
        color: #ac6600
    }
    .success {
        color: #14866d
    }
    .mw-infobox {
        border: 2px solid #fc3;
        margin: 0.5em;
        clear: left;
        overflow: hidden
    }
    .mw-infobox-left {
        margin: 7px;
        float: left;
        width: 35px
    }
    .mw-infobox-right {
        margin: 0.5em 0.5em 0.5em 49px
    }
    .previewnote {
        margin-bottom: 1em
    }
    .visualClear {
        clear: both
    }
    .mw-datatable {
        border: 1px solid #a2a9b1;
        border-collapse: collapse
    }
    .mw-datatable td, .mw-datatable th {
        border: 1px solid #a2a9b1;
        padding: 0.2em 0.4em
    }
    .mw-datatable th {
        background-color: #eaeeff
    }
    .mw-datatable td {
        background-color: #fff
    }
    .mw-datatable tr:hover td {
        background-color: #eaf3ff
    }
    .mw-ajax-loader {
        background-image: url(/w/resources/src/mediawiki.skinning/images/ajax-loader.gif?57f34);
        background-position: center center;
        background-repeat: no-repeat;
        padding: 16px;
        position: relative;
        top: -16px
    }
    .mw-small-spinner {
        padding: 10px !important;
        margin-right: 0.6em;
        background-image: url(/w/resources/src/mediawiki.skinning/images/spinner.gif?ca65b);
        background-position: center center;
        background-repeat: no-repeat
    }
    .mw-content-ltr ul, .mw-content-rtl .mw-content-ltr ul {
        margin: 0.3em 0 0 1.6em;
        padding: 0
    }
    .mw-content-rtl ul, .mw-content-ltr .mw-content-rtl ul {
        margin: 0.3em 1.6em 0 0;
        padding: 0
    }
    .mw-content-ltr ol, .mw-content-rtl .mw-content-ltr ol {
        margin: 0.3em 0 0 3.2em;
        padding: 0
    }
    .mw-content-rtl ol, .mw-content-ltr .mw-content-rtl ol {
        margin: 0.3em 3.2em 0 0;
        padding: 0
    }
    .mw-content-ltr dd, .mw-content-rtl .mw-content-ltr dd {
        margin-left: 1.6em;
        margin-right: 0
    }
    .mw-content-rtl dd, .mw-content-ltr .mw-content-rtl dd {
        margin-right: 1.6em;
        margin-left: 0
    }
    h1:lang(anp), h1:lang(as), h1:lang(bh), h1:lang(bho), h1:lang(bn), h1:lang(gu), h1:lang(hi), h1:lang(kn), h1:lang(ks), h1:lang(ml), h1:lang(mr), h1:lang(my), h1:lang(mai), h1:lang(ne), h1:lang(new), h1:lang(or), h1:lang(pa), h1:lang(pi), h1:lang(sa), h1:lang(ta), h1:lang(te) {
        line-height: 1.6em !important
    }
    h2:lang(anp), h3:lang(anp), h4:lang(anp), h5:lang(anp), h6:lang(anp), h2:lang(as), h3:lang(as), h4:lang(as), h5:lang(as), h6:lang(as), h2:lang(bho), h3:lang(bho), h4:lang(bho), h5:lang(bho), h6:lang(bho), h2:lang(bh), h3:lang(bh), h4:lang(bh), h5:lang(bh), h6:lang(bh), h2:lang(bn), h3:lang(bn), h4:lang(bn), h5:lang(bn), h6:lang(bn), h2:lang(gu), h3:lang(gu), h4:lang(gu), h5:lang(gu), h6:lang(gu), h2:lang(hi), h3:lang(hi), h4:lang(hi), h5:lang(hi), h6:lang(hi), h2:lang(kn), h3:lang(kn), h4:lang(kn), h5:lang(kn), h6:lang(kn), h2:lang(ks), h3:lang(ks), h4:lang(ks), h5:lang(ks), h6:lang(ks), h2:lang(ml), h3:lang(ml), h4:lang(ml), h5:lang(ml), h6:lang(ml), h2:lang(mr), h3:lang(mr), h4:lang(mr), h5:lang(mr), h6:lang(mr), h2:lang(my), h3:lang(my), h4:lang(my), h5:lang(my), h6:lang(my), h2:lang(mai), h3:lang(mai), h4:lang(mai), h5:lang(mai), h6:lang(mai), h2:lang(ne), h3:lang(ne), h4:lang(ne), h5:lang(ne), h6:lang(ne), h2:lang(new), h3:lang(new), h4:lang(new), h5:lang(new), h6:lang(new), h2:lang(or), h3:lang(or), h4:lang(or), h5:lang(or), h6:lang(or), h2:lang(pa), h3:lang(pa), h4:lang(pa), h5:lang(pa), h6:lang(pa), h2:lang(pi), h3:lang(pi), h4:lang(pi), h5:lang(pi), h6:lang(pi), h2:lang(sa), h3:lang(sa), h4:lang(sa), h5:lang(sa), h6:lang(sa), h2:lang(ta), h3:lang(ta), h4:lang(ta), h5:lang(ta), h6:lang(ta), h2:lang(te), h3:lang(te), h4:lang(te), h5:lang(te), h6:lang(te) {
        line-height: 1.4em
    }
    ol:lang(azb) li, ol:lang(bcc) li, ol:lang(bgn) li, ol:lang(bqi) li, ol:lang(fa) li, ol:lang(glk) li, ol:lang(kk-arab) li, ol:lang(lrc) li, ol:lang(luz) li, ol:lang(mzn) li {
        list-style-type: persian
    }
    ol:lang(ckb) li, ol:lang(sdh) li {
        list-style-type: arabic-indic
    }
    ol:lang(hi) li, ol:lang(mai) li, ol:lang(mr) li, ol:lang(ne) li {
        list-style-type: devanagari
    }
    ol:lang(as) li, ol:lang(bn) li {
        list-style-type: bengali
    }
    ol:lang(or) li {
        list-style-type: oriya
    }
    .toc ul {
        margin: 0.3em 0
    }
    .mw-content-ltr .toc ul, .mw-content-rtl .mw-content-ltr .toc ul {
        text-align: left
    }
    .mw-content-rtl .toc ul, .mw-content-ltr .mw-content-rtl .toc ul {
        text-align: right
    }
    .mw-content-ltr .toc ul ul, .mw-content-rtl .mw-content-ltr .toc ul ul {
        margin: 0 0 0 2em
    }
    .mw-content-rtl .toc ul ul, .mw-content-ltr .mw-content-rtl .toc ul ul {
        margin: 0 2em 0 0
    }
    .toc .toctitle {
        direction: ltr
    }
    #mw-clearyourcache, #mw-sitecsspreview, #mw-sitejspreview, #mw-usercsspreview, #mw-userjspreview {
        direction: ltr;
        unicode-bidi: embed
    }
    #mw-revision-info, #mw-revision-info-current, #mw-revision-nav {
        direction: ltr
    }
    div.tright, div.floatright, table.floatright {
        clear: right;
        float: right
    }
    div.tleft, div.floatleft, table.floatleft {
        float: left;
        clear: left
    }
    #mw-credits a {
        unicode-bidi: embed
    }
    .printfooter {
        display: none
    }
    .xdebug-error {
        position: absolute;
        z-index: 99
    }
    .mw-editsection {
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none
    }
    .mw-editsection, .mw-editsection-like {
        font-size: small;
        font-weight: normal;
        margin-left: 1em;
        vertical-align: baseline;
        line-height: 1em
    }
    .mw-content-ltr .mw-editsection, .mw-content-rtl .mw-content-ltr .mw-editsection {
        margin-left: 1em
    }
    .mw-content-rtl .mw-editsection, .mw-content-ltr .mw-content-rtl .mw-editsection {
        margin-right: 1em
    }
    sup, sub {
        line-height: 1
    }
    :not(:checked)>.toctogglecheckbox {
        display: inline !important;
        position: absolute;
        opacity: 0;
        z-index: -1
    }
    .toctogglespan {
        font-size: 94%
    }
    :not(:checked)>.toctogglespan:before {
        content: ' ['
    }
    :not(:checked)>.toctogglespan:after {
        content: ']'
    }
    .toctogglelabel {
        cursor: pointer;
        color: #0645ad
    }
    .toctogglelabel:hover {
        text-decoration: underline
    }
    .toctogglecheckbox:focus+.toctitle .toctogglelabel {
        text-decoration: underline;
        outline: dotted 1px;
        outline: auto -webkit-focus-ring-color
    }
    .toctogglecheckbox:checked+.toctitle .toctogglelabel:after {
        content: 'show'
    }
    .toctogglecheckbox:not(:checked)+.toctitle .toctogglelabel:after {
        content: 'hide'
    }
}

@media print {
    .firstHeading:before {
        left: auto;
        position: relative
    }
    .noprint, .catlinks, .magnify, .mw-cite-backlink, .mw-editsection, .mw-editsection-like, .mw-hidden-catlinks, .mw-indicators, .mw-redirectedfrom, .patrollink, .usermessage, #column-one, #footer-places, #mw-navigation, #siteNotice, #f-poweredbyico, #f-copyrightico, li#about, li#disclaimer, li#mobileview, li#privacy {
        display: none
    }
    body {
        background: #fff;
        color: #000;
        margin: 0;
        padding: 0
    }
    a {
        background: none !important;
        padding: 0 !important
    }
    a, a.external, a.new, a.stub {
        color: inherit !important;
        text-decoration: inherit !important
    }
    .mw-parser-output a.external.text:after, .mw-parser-output a.external.autonumber:after {
        content: ' (' attr(href) ')';
        word-break: break-all;
        word-wrap: break-word
    }
    .mw-parser-output a.external.text[href^='//']:after, .mw-parser-output a.external.autonumber[href^='//']:after {
        content: ' (https:' attr(href) ')'
    }
    dt {
        font-weight: bold
    }
    h1, h2, h3, h4, h5, h6 {
        font-weight: bold;
        page-break-after: avoid;
        page-break-before: avoid
    }
    p {
        margin: 1em 0;
        line-height: 1.2;
        orphans: 3;
        widows: 3
    }
    img, figure, .wikitable, .thumb {
        page-break-inside: avoid
    }
    img {
        border: 0;
        vertical-align: middle
    }
    pre, .mw-code {
        background: #fff;
        color: #000;
        border: 1pt dashed #000;
        padding: 1em;
        font-size: 8pt;
        white-space: pre-wrap;
        overflow-x: hidden;
        word-wrap: break-word
    }
    sup, sub {
        line-height: 1
    }
    ul {
        list-style-type: square
    }
    #globalWrapper {
        width: 100% !important;
        min-width: 0 !important
    }
    .mw-body {
        background: #fff;
        color: #000;
        border: 0 !important;
        padding: 0 !important;
        margin: 0 !important;
        direction: ltr
    }
    #column-content {
        margin: 0 !important
    }
    #column-content .mw-body {
        padding: 1em;
        margin: 0 !important
    }
    .toc {
        background-color: #f9f9f9;
        border: 1pt solid #aaa;
        padding: 5px;
        display: table
    }
    .tocnumber, .toctext {
        display: table-cell
    }
    .tocnumber {
        padding-left: 0;
        padding-right: 0.5em
    }
    .mw-content-ltr .tocnumber {
        padding-left: 0;
        padding-right: 0.5em
    }
    .mw-content-rtl .tocnumber {
        padding-left: 0.5em;
        padding-right: 0
    }
    table.floatright, div.floatright, div.tright {
        float: right;
        clear: right
    }
    table.floatleft, div.floatleft, div.tleft {
        float: left;
        clear: left
    }
    div.tleft {
        margin: 0.5em 1.4em 1.3em 0
    }
    div.tright {
        margin: 0.5em 0 1.3em 1.4em
    }
    table.floatright, div.floatright {
        margin: 0 0 0.5em 0.5em;
        border: 0
    }
    table.floatleft, div.floatleft {
        margin: 0 0.5em 0.5em 0;
        border: 0
    }
    .center {
        text-align: center
    }
    div.thumb {
        background-color: transparent;
        width: auto
    }
    div.thumb a {
        border-bottom: 0
    }
    div.thumbinner {
        background-color: #fff;
        border: 0;
        border-radius: 2px;
        padding: 5px;
        font-size: 10pt;
        color: #666;
        text-align: center;
        overflow: hidden;
        min-width: 100px
    }
    html .thumbcaption {
        text-align: left;
        line-height: 1.4;
        padding: 3px
    }
    img.thumbborder {
        border: 1pt solid #ddd
    }
    .wikitable, .mw_metadata {
        background: #fff;
        margin: 1em 0;
        border: 1pt solid #aaa;
        border-collapse: collapse;
        font-size: 10pt
    }
    .wikitable>caption, .mw_metadata caption {
        padding: 5px;
        font-size: 10pt
    }
    .wikitable>tr>th, .wikitable>tr>td, .wikitable>*>tr>th, .wikitable>*>tr>td, .mw_metadata th, .mw_metadata td {
        background: #fff !important;
        color: #000 !important;
        border: 1pt solid #aaa;
        padding: 0.4em 0.6em
    }
    .wikitable>tr>th, .wikitable>*>tr>th, .mw_metadata th {
        text-align: center
    }
    table.listing, table.listing td {
        border: 1pt solid #000;
        border-collapse: collapse
    }
    .catlinks ul {
        display: inline;
        padding: 0;
        list-style: none none
    }
    .catlinks li {
        display: inline-block;
        line-height: 1.15;
        margin: 0.1em 0;
        border-left: 1pt solid #aaa;
        padding: 0 0.4em
    }
    .catlinks li:first-child {
        border-left: 0;
        padding-left: 0.2em
    }
    .printfooter {
        padding: 1em 0
    }
    #footer {
        background: #fff;
        color: #000;
        margin-top: 1em;
        border-top: 1pt solid #aaa;
        padding-top: 5px;
        direction: ltr
    }
    .toctogglecheckbox:checked+.toctitle {
        display: none
    }
}

@media (-webkit-min-device-pixel-ratio:1.5), (min--moz-device-pixel-ratio:1.5), (min-resolution:1.5dppx), (min-resolution:144dpi) {
    .mw-wiki-logo {
        background-image: url(/static/images/project-logos/enwiki-1.5x.png);
        background-size: 135px auto
    }
}

@media (-webkit-min-device-pixel-ratio:2), (min--moz-device-pixel-ratio:2), (min-resolution:2dppx), (min-resolution:192dpi) {
    .mw-wiki-logo {
        background-image: url(/static/images/project-logos/enwiki-2x.png);
        background-size: 135px auto
    }
}

.wb-langlinks-link {
    line-height: 1.125em;
    font-size: 0.75em;
    float: right
}

.wb-langlinks-link {
    list-style: none none;
    text-align: right;
    padding-right: 0.5em !important
}

.wb-langlinks-link>a:before {
    content: '';
    background-image: url(/w/extensions/Wikibase/client/resources/images/edit.png?52328);
    background-image: linear-gradient(transparent, transparent), url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22 viewBox=%220 0 12 12%22%3E %3Cpath fill=%22%230645ad%22 d=%22M10.5 4.7l1.3-1.3c.3-.3.3-.7 0-.9L9.6.2c-.3-.3-.7-.3-.9 0L7.3 1.5l3.2 3.2zM6.6 2.2L0 8.8V12h3.2l6.6-6.6-3.2-3.2z%22/%3E %3C/svg%3E");
    background-position: left top;
    background-repeat: no-repeat;
    -webkit-background-size: 10px 10px;
    background-size: 10px 10px;
    display: inline-block;
    width: 10px;
    height: 10px;
    margin-right: 2px;
    vertical-align: top
}

.wb-langlinks-link>a:link, .wb-langlinks-link>a:visited {
    color: #54595d !important
}

.wb-langlinks-link>a:link:before, .wb-langlinks-link>a:visited:before {
    -webkit-filter: grayscale(1);
    filter: grayscale(1);
    opacity: 0.73
}

.wb-langlinks-link>a:hover {
    color: #0645ad !important
}

.wb-langlinks-link>a:hover:before {
    -webkit-filter: none;
    filter: none;
    opacity: 1
}

div.after-portlet-lang:after {
    content: '';
    clear: both;
    display: block
}
</style>

<body>
    <div id="content">This is the content</div>
</body>
`

module.exports = {
    htmlTemplate
}