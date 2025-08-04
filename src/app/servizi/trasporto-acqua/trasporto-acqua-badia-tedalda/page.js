import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Badia Tedalda",
  canonical: links.servizi["trasporto-acqua"]["badia-tedalda"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Badia Tedalda", 
    locationNames: {label: "Badia Tedalda", href: "badia-tedalda"}  
});