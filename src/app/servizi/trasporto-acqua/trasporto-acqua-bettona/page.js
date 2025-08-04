import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Bettona",
  canonical: links.servizi["trasporto-acqua"]["bettona"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Bettona", 
    locationNames: {label: "Bettona", href: "bettona"}  
});