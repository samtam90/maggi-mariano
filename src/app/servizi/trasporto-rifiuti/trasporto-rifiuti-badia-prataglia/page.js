import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Badia Prataglia",
  canonical: links.servizi["trasporto-rifiuti"]["badia-prataglia"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Badia Prataglia", 
    locationNames: {label: "Badia Prataglia", href: "badia-prataglia"}  
});