import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Pietralunga",
  canonical: links.servizi["trasporto-rifiuti"]["pietralunga"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Pietralunga", 
    locationNames: {label: "Pietralunga", href: "pietralunga"}  
});