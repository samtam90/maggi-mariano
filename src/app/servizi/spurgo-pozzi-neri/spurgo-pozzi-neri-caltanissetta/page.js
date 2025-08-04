import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Caltanissetta",
  canonical: links.servizi["spurgo-pozzi-neri"]["caltanissetta"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Caltanissetta", 
    locationNames: {label: "Caltanissetta", href: "caltanissetta"}  
});