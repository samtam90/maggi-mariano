import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Caltanissetta",
  canonical: links.servizi["pulizia-fognature"]["caltanissetta"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Caltanissetta", 
    locationNames: {label: "Caltanissetta", href: "caltanissetta"}  
});
