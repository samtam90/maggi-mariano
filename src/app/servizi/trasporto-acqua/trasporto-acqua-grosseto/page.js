import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Grosseto",
  canonical: links.servizi["trasporto-acqua"]["grosseto"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Grosseto", 
    locationNames: {label: "Grosseto", href: "grosseto"}  
});