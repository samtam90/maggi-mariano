import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Fucecchio",
  canonical: links.servizi["trasporto-rifiuti"]["fucecchio"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Fucecchio", 
    locationNames: {label: "Fucecchio", href: "fucecchio"}  
});