import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Vicchio",
  canonical: links.servizi["trasporto-acqua"]["vicchio"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Vicchio", 
    locationNames: {label: "Vicchio", href: "vicchio"}  
});