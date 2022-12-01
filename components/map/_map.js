export default function Map() {
    return (
    <div className="map-container">
        <div className="openinghours">
            <h2 >Åpningstider</h2>
            <pre>
            <p>Mandag - Fredag:  10:00 - 18:00</p>
            <p>Lørdag:                   10:00 - 15:00</p>
            <p>Søndag:                             Stengt</p>
            </pre>
        </div>
        <iframe className ="google-map"src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d986.6362881867931!2d5.1237638584168295!3d60.35813557206702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sSartorvegen%2010%2C%205353%20Straume!5e0!3m2!1sno!2sno!4v1668162264719!5m2!1sno!2sno" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    );
   }