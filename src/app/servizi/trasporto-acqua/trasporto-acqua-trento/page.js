import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Trento",
  canonical: links.servizi["trasporto-acqua"]["trento"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Trento", 
    locationNames: {label: "Trento", href: "trento"}  
});