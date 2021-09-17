import { getAll } from "../api/data.js";
import { html, until } from "../lib.js";
import { spinner } from "./common.js";

const sortTemplate = (sort) => html`
<article class="sort-info">
    <span class="sort-info-img">
        <img src="${sort.image.url}" alt="GRAPE_PIC">
    </span>
    <p class="sort-info-name">
        Сорт: <span>${sort.name}</span>
    </p>
    <p class="sort-info-type">
        Вид: <span>${sort.type == 'wine' ? 'винен' : 'десертен'}</span>
    </p>
    <p class="sort-info-maturation">
        Период на зреене: <span>${sort.maturation}</span>
    </p>
</article>`;

const sortsTemplate = (sorts, onSearch, name) => html`
<div class="sorts-page">
    <section class="sorts-search">
        <div>
            <h1 class="sorts-search-title logo-content-text">RADKOV GRAPE VINES</h1>
            <h1 class="sorts-search-title">СОРТОВО РАЗНООБРАЗИЕ</h1>
        </div>
        <form @submit=${onSearch} class="sorts-search-form" action="" method="GET">
            <input type="text" class="search" name="name" placeholder="Име на сорта...">
            <select id="type" name="type" placeholder="Изберете вид">
                <option value="">Всички видове</option>
                <option value="wine">Винени сортове</option>
                <option value="dessert">Десертни сортове</option>
            </select>
            <input type="submit" value="ТЪРСИ">
        </form>
    </section>
    <section class="sorts-wrapper">
        ${sorts.length > 0
        ? html`${sorts.map(sortTemplate)}`
        : html`<h4 class="no-sorts">Разсадник КЪНЧО РАДКОВ не разполага с търсения от вас сорт.</h4>`}
    </section>
    <section class="redirect-to-home sorts">
        <a href="/home">НАЧАЛО</a>
    </section>
</div>`;

export default async function sortsView(context) {

    context.render(until(fillTemplate(), spinner()));

    async function fillTemplate() {
        const searchParams = context.querystring.split('&');
        let name = '';
        let type = '';
        if (searchParams.length > 1) {
            name = searchParams[0].split('=')[1].toLocaleUpperCase();
            type = searchParams[1].split('=')[1];
        }
        const sorts = await getAll(name, type);
        return sortsTemplate(sorts, onSearch, name);

    }

    function onSearch(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const name = formData.get('name');
        const type = formData.get('type');
        context.page.redirect(`/search?name=${name}&type=${type}`);
    }
}