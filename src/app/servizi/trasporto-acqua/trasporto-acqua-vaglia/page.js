import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Vaglia",
  canonical: links.servizi["trasporto-acqua"]["vaglia"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Vaglia", 
    locationNames: {label: "Vaglia", href: "vaglia"}  
});