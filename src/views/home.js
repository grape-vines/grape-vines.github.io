import { html, until } from "../lib.js";
import { spinner } from "./common.js";

const homeTemplate = () => html` 
<div class="entry-page">
    <section class="entry-main">
        <h1 class="entry-main-name">Разсадник за лози - КЪНЧО РАДКОВ</h1>
        <h1 class="entry-main-title">Лозов посадъчен материал</h1>
        <div class="entry-main-content">
            <article class="entry-main-content-card">
                <div class="entry-main-content-card-img">
                    <span><img src="/images/field2.jfif" alt="Grapevine_Nursery_Pic"></span>
                </div>
                <p class="entry-main-content-card-text">
                    Нашата основна дейност е производството на качествен
                    стандартизиран и сертифициран лозов посадъчен материал.
                </p>
                <p class="entry-main-content-card-text">
                    За произведения лозов посадъчен материал се издават:
                </p>
                <p class="entry-main-content-card-text">
                    >> ФИТОСАНИТАРЕН ПАСПОРТ
                </p>
                <p class="entry-main-content-card-text">
                    >> УДОСТОВЕРЕНИЕ ЗА КАЧЕСТВО
                </p>
            </article>
            <article class="entry-main-content-card">
                <div class="entry-main-content-card-img">
                    <span><img src="/images/centerPic.jpg" alt="Grapevine_Nursery_Pic"></span>
                </div>
                <p class="entry-main-content-card-text">
                    За производството на винени и десертни сортове с високи вкусови качества, ние сме наследили знанията
                    и уменията на поколения производители и успешно използваме традициите в тази област, като ги
                    съчетаваме с редица нови технологии.
                </p>
                <p class="entry-main-content-card-text">
                    С много труд, усилия и внимание постигаме отлични резултати.
                </p>
            </article>
            <article class="entry-main-content-card">
                <div class="entry-main-content-card-img">
                    <span><img src="/images/logo.JPG" alt="Grapevine_Nursery_Pic"></span>
                </div>
                <p class="entry-main-content-card-text">
                    Разсадникът разполага със собствен маточник - базов материал SO4 и всички необходими документи.
                </p>
                <p class="entry-main-content-card-text offer">
                    ЗЕМЕДЕЛСКИ ПРОИЗВОДИТЕЛ КЪНЧО РАДКОВ ПРЕДЛАГА ВЪЗМОЖНОСТ ЗА ПРОИЗВОДСТВО НА СПЕЦИФИЧНИ СОРТОВЕ С
                    ПРИСАДНИЦИ (КАЛЕМИ) НА КЛИЕНТА.
                </p>
            </article>
        </div>
        <a class="entrybtn" href="/sorts">СОРТОВО РАЗНООБРАЗИЕ</a>
    </section>
    <section class="entry-summary">
        <article class="entry-summary-info">
            <article class="entry-summary-info-img">
                <i class="fas fa-seedling"></i>
            </article>
            <p class="entry-summary-info-count">
                27
            </p>
            <p class="entry-summary-info-title">
                ВИДОВЕ СОРТОВЕ
            </p>
        </article>
        <article class="entry-summary-info">
            <article class="entry-summary-info-img">
                <i class="fas fa-user"></i>
            </article>
            <p class="entry-summary-info-count" id="infoName">
                КЪНЧО РАДКОВ
            </p>
            <p class="entry-summary-info-title">
                ПРОИЗВОДИТЕЛ
            </p>
        </article>
        <article class="entry-summary-info">
            <article class="entry-summary-info-img">
                <i class="fas fa-hourglass-end"></i>
            </article>
            <p class="entry-summary-info-count">
                2002
            </p>
            <p class="entry-summary-info-title">
                ГОДИНА НА ОСНОВАВАНЕ
            </p>
        </article>
        <article class="entry-summary-info">
            <article class="entry-summary-info-img">
                <i class="fas fa-sitemap"></i>
            </article>
            <p class="entry-summary-info-count">
                <a href="https://azpb.org/">АЗПБ</a>
            </p>
            <p class="entry-summary-info-title">
                ПАРТНЬОР
            </p>
        </article>
    </section>
</div>`;

export default async function homeView(context) {
    context.render(until(fillTemplate(), spinner()));

    function fillTemplate() {
        return homeTemplate();
    }
}