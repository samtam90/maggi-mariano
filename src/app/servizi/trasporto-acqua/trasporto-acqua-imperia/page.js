import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Imperia",
  canonical: links.servizi["trasporto-acqua"]["imperia"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Imperia", 
    locationNames: {label: "Imperia", href: "imperia"}  
});