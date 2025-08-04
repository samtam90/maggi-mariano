import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Scheggino",
  canonical: links.servizi["trasporto-acqua"]["scheggino"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Scheggino", 
    locationNames: {label: "Scheggino", href: "scheggino"}  
});