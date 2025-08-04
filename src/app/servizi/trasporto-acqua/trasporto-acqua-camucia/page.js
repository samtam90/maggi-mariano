import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Camucia",
  canonical: links.servizi["trasporto-acqua"]["camucia"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Camucia", 
    locationNames: {label: "Camucia", href: "camucia"}  
});