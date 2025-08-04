import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Sondrio",
  canonical: links.servizi["trasporto-acqua"]["sondrio"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Sondrio", 
    locationNames: {label: "Sondrio", href: "sondrio"}  
});