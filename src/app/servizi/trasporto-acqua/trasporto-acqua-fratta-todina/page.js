import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Fratta Todina",
  canonical: links.servizi["trasporto-acqua"]["fratta-todina"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Fratta Todina", 
    locationNames: {label: "Fratta Todina", href: "fratta-todina"}  
});