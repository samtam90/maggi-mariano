import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Fiesole",
  canonical: links.servizi["trasporto-acqua"]["fiesole"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Fiesole", 
    locationNames: {label: "Fiesole", href: "fiesole"}  
});