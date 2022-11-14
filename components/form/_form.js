import Phone from "../icons/_phone"
import Mail from "../icons/_mail";
import MapIcon from "../icons/_map-icon";

export default function Form() {
    return (
        <div>
            <div>
            <h2>LURER DU PÅ NOE?</h2>
            <p>Ta gjerne kontakt med oss om du har noen spørsmål om våre tjenester.</p>
            <Phone/><p>98 10 00 11</p>
            <Mail/><p>Post@hairways.no</p>
            <MapIcon/><p>Sartorveien 10, 5353 Straume</p>
            </div>
            <div>
            <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Navn</label>
            <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="name"/>
            </div>
            <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email </label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="navn@eksempel.no"/>
            </div>
            <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Melding</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            </div>
        </div>
    );
   }