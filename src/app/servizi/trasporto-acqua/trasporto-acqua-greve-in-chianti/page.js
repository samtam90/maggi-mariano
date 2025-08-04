import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Greve in Chianti",
  canonical: links.servizi["trasporto-acqua"]["greve-in-chianti"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Greve in Chianti", 
    locationNames: {label: "Greve in Chianti", href: "greve-in-chianti"}  
});