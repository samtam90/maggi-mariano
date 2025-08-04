import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Savona",
  canonical: links.servizi["trasporto-acqua"]["savona"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Savona", 
    locationNames: {label: "Savona", href: "savona"}  
});