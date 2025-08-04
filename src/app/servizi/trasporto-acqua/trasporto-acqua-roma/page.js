import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Roma",
  canonical: links.servizi["trasporto-acqua"]["roma"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Roma", 
    locationNames: {label: "Roma", href: "roma"}  
});