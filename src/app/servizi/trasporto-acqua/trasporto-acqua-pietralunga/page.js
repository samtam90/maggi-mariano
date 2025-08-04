import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Pietralunga",
  canonical: links.servizi["trasporto-acqua"]["pietralunga"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Pietralunga", 
    locationNames: {label: "Pietralunga", href: "pietralunga"}  
});