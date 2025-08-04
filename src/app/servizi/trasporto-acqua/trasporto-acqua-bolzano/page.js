import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Bolzano",
  canonical: links.servizi["trasporto-acqua"]["bolzano"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Bolzano", 
    locationNames: {label: "Bolzano", href: "bolzano"}  
});