import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Badia Prataglia",
  canonical: links.servizi["trasporto-acqua"]["badia-prataglia"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Badia Prataglia", 
    locationNames: {label: "Badia Prataglia", href: "badia-prataglia"}  
});