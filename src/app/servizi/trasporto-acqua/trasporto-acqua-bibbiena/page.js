import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Bibbiena",
  canonical: links.servizi["trasporto-acqua"]["bibbiena"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Bibbiena", 
    locationNames: {label: "Bibbiena", href: "bibbiena"}  
});