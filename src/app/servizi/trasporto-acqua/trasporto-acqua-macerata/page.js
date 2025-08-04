import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Macerata",
  canonical: links.servizi["trasporto-acqua"]["macerata"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Macerata", 
    locationNames: {label: "Macerata", href: "macerata"}  
});