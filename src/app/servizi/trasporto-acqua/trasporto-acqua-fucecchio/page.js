import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Fucecchio",
  canonical: links.servizi["trasporto-acqua"]["fucecchio"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Fucecchio", 
    locationNames: {label: "Fucecchio", href: "fucecchio"}  
});