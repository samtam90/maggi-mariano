import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Reggio Calabria",
  canonical: links.servizi["spurgo-pozzi-neri"]["reggio-calabria"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Reggio Calabria", 
    locationNames: {label: "Reggio Calabria", href: "reggio-calabria"}  
});