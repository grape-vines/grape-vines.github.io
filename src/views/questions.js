import { html,until } from "../lib.js";
import { spinner } from "./common.js";


const questionsTemplate = (onClick) => html`
<div @click=${onClick} class="questions-page">
    <h1 class="technology-title questions">
        Често задавани въпроси
    </h1>
    <section class="technology-content questions">
        <h3 class="techology-content-subtitle questions">
            Защо да изберем сертифициран посадъчен материал
        </h3>
        <p>
            Предимства на сертифицирания посадъчен материал:
        </p>
        <div class="technology-content-text-main questions">
            
            <ul>
                <li>
                    <p>
                        Добър здравен статут и висока степен на сигурност за качество на посадъчния материал.
                    </p>
                </li>
            </ul>
            </div>
            <div class="technology-content-text-details questions">
            <ul>
                <li>
                    <p>
                        По - добри резултати на прихващане и при присаждане.
                    </p>
                </li>
                <li>
                    <p>
                        По - бързо навлизане в период на плододаване и гарантиранодълголетие.
                    </p>
                </li>
                <li>
                    <p>
                        Възможност за редуциране на торенето и разходите за растителна защита.
                    </p>
                </li>
                <li>
                    <p>
                        Възможност за прилагане на целеви мероприятия за растителна защита при нисък дял на
                        отклоненията.
                    </p>
                </li>
            </ul>
        </div>
        <button class="detailsBtn">
            Още...
        </button>
    </section>
    <section class="technology-content questions">
        <h3 class="techology-content-subtitle questions">
            Кои са качествата, на които трябва да отговаря лозовият посадъчен материал
        </h3>
        <p>
            При покупката на лозов посадъчен материал трябва да се обръща внимание на следното:
        </p>
        <div class="technology-content-text-main questions">
            <ul>
                <li>
                    <p>
                        Снопчетата да имат етикети с означение на сорта и подложката.
                    </p>
                </li>
            </ul>

        </div>
        <div class="technology-content-text-details questions">
            <ul>
                <li>
                    <p>
                        Лозите да са първокласни, т.е. да имат най-малко три добре развити стъпални корена, излизащи от
                        три различни страни на подложката с дължина на здравата им част поне 7 см. Дължината на
                        подложката от стъпалото до основата на едногодишния летораст да бъде 32 плюс 2 см.
                    </p>
                </li>
                <li>
                    <p>
                        Срастването между присадката и подложката да бъде много добро, без цепнатини. Спойката се
                        изпитва чрез извиване на лозата в мястото на присаждането.
                    </p>
                </li>
                <li>
                    <p>
                        Узрялата част на едногодишната пръчка да бъде дълга най-малко 15 см, а когато пръчките са повече
                        от една - поне по 12 см.
                    </p>
                </li>
                <li>
                    <p>
                        Присадникът и подложката да бъдат здрави.
                    </p>
                </li>
            </ul>
        </div>
        <button class="detailsBtn">
            Още...
        </button>
    </section>
    <section class="technology-content questions">
        <h3 class="techology-content-subtitle questions">
            Как да съхраним правилно закупения посадъчен материал
        </h3>
        <p>
            Особености на съхранението според сезона на закупуване:
        </p>
        <div class="technology-content-text-main questions">
            <ul>
                <li>
                    <p>
                        Правилно е присадените лози да се набавят през пролетта. Закупените през пролетта лози се
                        съхраняват кратко време, но така че да не се допусне засъхването им. Най-добре е лозите да се
                        съхраняват във влажен пясък, като се поставят отвесно и се покриват с пясък до спойката. Когато
                        материалът ще се засажда наскоро, може временно да се съхрани на открито във влажна почва, но на
                        отцедливо място.
                    </p>
                </li>
            </ul>

        </div>
        <div class="technology-content-text-details questions">
            <ul>
                <li>
                    <p>
                        По-трудно и с повече рискове е свързано съхраняването на лозите през зимата. Съхраняването става
                        в подходящи изби, мазета и др. За тази цел на пода на избраното помещение се насипва пласт
                        пясък, дебел 10-15 см. Върху него се поставя вертикално един ред снопчета лози, като корените и
                        подложката до спойката се засипват с пласт пясък с 10% влажност. Нарежда се втори ред лози и се
                        засипва по същия начин. Всички празнини се запълват добре с пясък. Мястото на спойката не бива
                        да се покрива с пясък.
                    </p>
                </li>
                <li>
                    <p>
                        През цялата зима се следи температурата да не пада под 0°С и да не се покачва над 6°С. При
                        засъхване пясъкът се навлажнява леко с лозарска пръскачка. Възможно е да се появи плесен, но тя
                        е повърхностна и не е опасна.
                    </p>
                </li>
                <li>
                    <p>
                        Присадените вкоренени лози се транспортират в топли дни, когато температурата е над 0°С. При
                        пренасянето на лозите не бива да се допуска засъхване на корените. За целта лозите се обвиват с
                        влажна слама или със зебло.
                    </p>
                </li>
            </ul>
        </div>
        <button class="detailsBtn">
            Още...
        </button>
    </section>
    <section class="technology-content questions">
        <h3 class="techology-content-subtitle questions">
            Какво представлява болестта чернилка
        </h3>
        <p>
            Признаци за разпознаване на болни лози:
        </p>
        <div class="technology-content-text-main questions">
            <ul>
                <li>
                    <p>
                        Много старателно трябва да се провери дали лозовият посадъчен материал не е засегнат от
                        болестта чернилка. Тя се появява по време на съхраняването на присадените лози. По дървесината
                        на болните т чернилка лози се появяват тъмнокафяви до черни петна с продълговата или овална
                        форма и големина от няколко милиметра до 2-3 см. Външно лозите изглеждат здрави.
                    </p>
                </li>
            </ul>

        </div>
        <div class="technology-content-text-details questions">
            <ul>
                <li>
                    <p>
                        За да се открие чернилката, трябва с ножче да се премахне мъртвата кора. Тогава при внимателно
                        преглеждане се откриват характерните черни петна, пръснати на различни места по подложката.
                        Засадените болни от чернилка лози се прихващат, но впоследствие петната, особено тези под
                        спойката, се разрастват, обхващат подложката от всички страни, прекъсват сокодвижението и лозите
                        през втората до четвъртата година загиват.
                    </p>
                </li>
                <li>
                    <p>
                        Тъй като не е възможно да се отделят болните от здравите лози, партидите, в които има болни
                        лози, се бракуват.
                    </p>
                </li>
            </ul>
        </div>
        <button class="detailsBtn">
            Още...
        </button>
    </section>
    <section class="redirect-to-home technology">
        <a href="/home">НАЧАЛО</a>
    </section>
</div>`;

export default function questionsView(context) {
    context.render(until(fillTemplate(), spinner()));

    async function fillTemplate() {
        return questionsTemplate(onClick);
    }

    function onClick(event) {
        if (event.target.textContent.trim() == 'Още...') {
            event.target.parentNode.querySelector('.technology-content-text-details.questions').style.display = "block";
            event.target.textContent = 'Скрий';
            return;
        }
        if (event.target.textContent.trim() == 'Скрий') {
            event.target.parentNode.querySelector('.technology-content-text-details.questions').style.display = "none";
            event.target.textContent = 'Още...';
            return;
        }
    }
}