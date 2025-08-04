import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Caltanissetta",
  canonical: links.servizi["spurgo-fosse-biologiche"]["caltanissetta"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Caltanissetta", 
    locationNames: {label: "Caltanissetta", href: "caltanissetta"}  
});
