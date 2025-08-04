import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Cavriglia",
  canonical: links.servizi["trasporto-acqua"]["cavriglia"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Cavriglia", 
    locationNames: {label: "Cavriglia", href: "cavriglia"}  
});