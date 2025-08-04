import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Reggio Calabria",
  canonical: links.servizi["pulizia-fognature"]["reggio-calabria"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Reggio Calabria", 
    locationNames: {label: "Reggio Calabria", href: "reggio-calabria"}  
});
