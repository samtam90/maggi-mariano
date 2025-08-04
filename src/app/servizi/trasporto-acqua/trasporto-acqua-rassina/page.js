import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Rassina",
  canonical: links.servizi["trasporto-acqua"]["rassina"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Rassina", 
    locationNames: {label: "Rassina", href: "rassina"}  
});