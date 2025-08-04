import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Reggio Calabria",
  canonical: links.servizi["trasporto-acqua"]["reggio-calabria"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Reggio Calabria", 
    locationNames: {label: "Reggio Calabria", href: "reggio-calabria"}  
});