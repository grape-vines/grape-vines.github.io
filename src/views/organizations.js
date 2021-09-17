import { html,until } from "../lib.js";
import { spinner } from "./common.js";


const organizationsTemplate = () => html`
<div class="organizations-page">
    <section class="organizations">
        <article class="organizations-info">
            <h1 class="organizations-info-title">
                <i class="fas fa-angle-double-down"></i> Браншови организации
            </h1>
            <div class="organizations-info-link">
                <a href="https://azpb.org/">Асоциация на земеделските производители в България (АЗПБ)</a>
            </div>
            <div class="organizations-info-link">
                <p>Национално сдружение на производителите на лозов посадъчен материал (НСПЛПМ)</p>
            </div>
        </article>
        <article class="organizations-info">
            <h1 class="organizations-info-title">
                <i class="fas fa-angle-double-down"></i> Дейността на производителите на лозов посадъчен материал се
                регулират и проследяват ежегодно от следните институции:
            </h1>
            <div class="organizations-info-link">
                <a href="https://www.mzh.government.bg/bg/">Министерство на земеделието и храните (МНЗХ)</a>
            </div>
            <div class="organizations-info-link">
                <a href="https://iasas.government.bg/"> Изпълнителна агенция по лозата и виното (ИАЛВ)</a>
            </div>
        </article>
        <article class="organizations-info-notes">
            <p class="text-notes">
             Посадъчният материал, който произвеждаме е в съответствие с Националната сортова листа,
                постоянно
                контролиран и окачествяван от семеконтролните органи към Министерство на земеделието и Национална
                служба за растителна защита.
            </p>
            <p class="text-notes">
                Готовият материал е свободен от вируси. Сертифицирането на посадъчния материал гарантира качеството и
                чистотата му.
            </p>
        </article>
    </section>
    <section class="redirect-to-home organizations">
        <a href="/home">НАЧАЛО</a>
    </section>
</div>`;

export default function organizationsView(context) {
    context.render(until(fillTemplate(), spinner()));

    async function fillTemplate() {
        return organizationsTemplate();
    };
}
