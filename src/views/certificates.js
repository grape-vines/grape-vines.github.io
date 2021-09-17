import { html,until } from "../lib.js";
import { spinner } from "./common.js";

const certificatesTemplate = () => html`
<div class="certificates-page">
    <h1 class="certificates-title">
        Сертификати
    </h1>
    <h3 class="certificates-subtitle">
        ВСИЧКИ НАШИ ПРОДУКТИ СА СЪПРОВОДЕНИ СЪС СЛЕДНИТЕ СЕРТИФИКАТИ:
    </h3>
    <section class="certificates-content">
        <article class="certificates-info">
            <div>
                <article class="certificates-info-img license">
                    <img src="/images/certificate1.jpg" alt="Certificate">
                </article>
                <p class="certificates-info-organization">
                    <a href="https://www.mzh.government.bg/bg/"><i class="fas fa-angle-double-right"></i> Министерство на земеделието и горите</a>
                </p>
            </div>
            <p class="certificates-info-title">
                Разрешение за производство на посадъчен материал от лозови и овощни култури
            </p>
        </article>
        <article class="certificates-info">
            <div>
                <article class="certificates-info-img">
                    <img src="/images/certificate2.jpg" alt="Certificate">
                </article>
                <p class="certificates-info-organization">
                    <a href="https://iasas.government.bg/"><i class="fas fa-angle-double-right"></i> Изпълнителна агенция по сортоизпитване,
                        апробация и семеконтрол</a>
                </p>
            </div>
            <p class="certificates-info-title">
                Удостоверение за вписване в регистър на производители, заготвители и търговци на посадъчен материал
            </p>
        </article>
    </section>
    <section class="redirect-to-home certificates">
    <a href="/home">НАЧАЛО</a>
    </section>
</div>`;

export default function certificatesView(context) {
    context.render(until(fillTemplate(), spinner()));

    function fillTemplate() {
        return certificatesTemplate();
    }
}

