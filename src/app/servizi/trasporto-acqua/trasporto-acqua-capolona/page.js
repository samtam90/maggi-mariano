import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Capolona",
  canonical: links.servizi["trasporto-acqua"]["capolona"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Capolona", 
    locationNames: {label: "Capolona", href: "capolona"}  
});