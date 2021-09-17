import { html, until } from "../lib.js";
import populateMap from "./map.js";
import { spinner } from "./common.js";
import { createMessage } from "../api/data.js";

const contactTemplate = (map, onSubmit) => html` 
<div class="contacts-page">
    <section class="contacts-map-wrapper">
        <div class="contacts-map-subwrapper" >
        <!-- <div class="contacts-map-subwrapper" style="width: 600px; height: 500px;"> -->

            ${map}
        </div>
    </section>
    <section  class="contacts-form-info-wrapper">
        <article class="contacts-form-wrapper">
            <h2 class="contacts-form-title">Пишете ни</h2>
            <form @submit=${onSubmit} action="/contacts" method="post" novalidate="novalidate">
                <div class="contacts-form-subsection-field">
                    <i class="fas fa-user form" aria-hidden="true"></i>
                    <input class="form-control" id="sender" name="sender" placeholder="Име" type="text" value="">
                </div>
                <p class="invalid-username">Името трябва да е между 2 и 50 символа</p>
                <div class="contacts-form-subsection-field">
                    <i class="fas fa-envelope " aria-hidden="true"></i>
                    <input class="form-control" id="email" name="email" placeholder="Имейл адрес" type="text" value="">
                </div>
                <p class="invalid-email">Невалиден имейл адрес.</p>
                <div class="contacts-form-subsection-field">
                    <i class="fas fa-pen" aria-hidden="true"></i>
                    <textarea class="form-control" cols="20" rows="10" id="content" name="content"
                        placeholder="Съдържание"></textarea>
                </div>
                <p class="invalid-content" data-valmsg-for="content" data-valmsg-replace="true">Съдържанието трябва между 10
                    и 200 символа</p>
                <div class="contacts-form-subsection-field">
                    <input type="submit" class="entrybtn form" value="Изпрати">
                </div>
            </form>
        </article>
        <article class="contacts-info-wrapper">
            <div class="contacts-info-pic">
                <img src="/images/vkorenilishte4.jfif" alt="K_Radkov">
            </div>
            <div class="contacts-info-phone">
                <h4>Обадете ни се </h4>
                <p><i class="fas fa-phone-alt"></i>+359889576888</p>
            </div>
            <div class="contacts-info-address">
                <h4>Посетете ни </h4>
                <p><i class="fas fa-map-marker"></i>с. Тополчане, </p>
                <p class="additional">Стопански двор</p>
            </div>
            <div class="response">
               <p>Благодарим Ви за запитването, очаквайте отговор от нас.</p>
            </div>
        </article>
    </section>
</div>`;


function createMap() {
    const mapDiv = document.createElement('div');
    mapDiv.id = 'map';
    mapDiv.style.width = "100%";
    mapDiv.style.height = "100%";
    const mapObj = populateMap(mapDiv);
    setTimeout(() => mapObj.invalidateSize(), 100);

    return mapDiv;
}

export default function contactView(context) {
    context.render(until(fillTemplate(), spinner()));

    async function fillTemplate() {
        const map = createMap();
        return contactTemplate(map, onSubmit);
    }
}

async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const sender = formData.get('sender');
    const email = formData.get('email');
    const content = formData.get('content');

    const pattern = new RegExp("^[A-Za-z0-9]+[\._A-Za-z0-9-]+@([A-Za-z0-9]+[-\.]?[A-Za-z0-9]+)+(\.[A-Za-z0-9]+[-\.]?[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$");

    if (sender.length < 2) {
        document.querySelector('.invalid-username').style.display = "block";
        return;
    } else {
        document.querySelector('.invalid-username').style.display = "none";
    }
    if (!pattern.test(email)) {
        document.querySelector('.invalid-email').style.display = "block";
        return;
    } else {
        document.querySelector('.invalid-email').style.display = "none";
    }
    if (content.length < 12) {
        document.querySelector('.invalid-content').style.display = "block";
        return;
    } else {
        document.querySelector('.invalid-content').style.display = "none";
    }

    await createMessage({ sender, email, content });
    event.target.reset();
   document.querySelector('.contacts-form-wrapper').style.display = "none";
   document.querySelector('.response').style.display = "inline-block";

}
