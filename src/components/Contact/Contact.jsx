import phone from "../../assets/phone.PNG";
import mail from "../../assets/mail.PNG";
import location from "../../assets/location.PNG";
import facebook from "../../assets/facebook.PNG";
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const position = [13.7265341, 100.7748818];

const customMarker = new L.Icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41], // size of the icon
  iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
  popupAnchor: [1, -34], // point from which the popup should open relative to the iconAnchor
  shadowSize: [41, 41] // size of the shadow
});

const Contact = () => {
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
          .then(() => {
            alert(`${text} copied to clipboard!`);
          })
          .catch(() => {
            alert('Failed to copy to clipboard.');
          });
      };

    return (
        <>
        <div className="container3">
            <div className="child-container left-container">
            <br />
            <p className="contact-font">CONTACT US</p>
            <hr className="custom-separator" />
            <br />
            
            <div className="map-container">
            <MapContainer
                center={position}
                zoom={13}
                style={{ 
                height: '300px', 
                width: '100%', 
                borderRadius: '15px'
                }}
            >
                <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position} icon={customMarker}>
                <Popup>
                    <strong>KMITL</strong> <br /> King Mongkut's Institute of Technology Ladkrabang
                </Popup>
                </Marker>
            </MapContainer>
            </div>
            
            <br />
            <div className={'hover-link icon-text copy-button'} onClick={() => copyToClipboard('1 Chalong Krung 1 Alley, Lat Krabang, Khet Lat Krabang, Krung Thep Maha Nakhon 10520')} >
                <img src={location} alt="Location Icon" className="icon"/>
                <p>1 Chalong Krung 1 Alley, Lat Krabang, Khet Lat Krabang, Krung Thep Maha Nakhon 10520</p>
                </div>
            </div>

            <div className="child-container right-container">
            <div className="contact-info">
                <div className={'hover-link icon-text copy-button'} onClick={() => copyToClipboard('02-329-8000')}>
                <img src={phone} alt="Phone Icon" className="icon" />
                <p>02-329-8000</p>
                </div>
                <div className={'hover-link icon-text copy-button'} onClick={() => copyToClipboard('02-329-8321')}>
                <img src={phone} alt="Phone Icon2" className="icon" />
                <p>02-329-8321</p>
                </div>
                <div className="icon-text">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=siie@kmitl.ac.th&su=Subject%20Here&body=Message%20body" target="_blank" className={'hover-link contact-links'}>
                    <img src={mail} alt="Mail Icon" className="icon" />
                    <p>siie@kmitl.ac.th</p>
                </a>
                </div>
                <div className="icon-text">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=wiboon.pr@kmitl.ac.th&su=Subject%20Here&body=Message%20body" target="_blank" className={'hover-link contact-links'}>
                    <img src={mail} alt="Mail Icon2" className="icon" />
                    <p>wiboon.pr@kmitl.ac.th</p>
                </a>
                </div>
                <div className="icon-text">
                <a href="https://www.facebook.com/sekmitl/?locale=th_TH" target="_blank" className={'hover-link contact-links'} >
                    <img src={facebook} alt="Facebook Icon" className="icon" />
                    <p>Software Engineering KMITL</p>
                </a> 
                </div>
            </div>
            </div>
        </div>
        </>
    );
};

export default Contact;