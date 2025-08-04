import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Reggio Calabria",
  canonical: links.servizi["spurgo-fosse-biologiche"]["reggio-calabria"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Reggio Calabria", 
    locationNames: {label: "Reggio Calabria", href: "reggio-calabria"}  
});
