import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Pavia",
  canonical: links.servizi["trasporto-acqua"]["pavia"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Pavia", 
    locationNames: {label: "Pavia", href: "pavia"}  
});