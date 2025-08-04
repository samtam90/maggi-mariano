import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Taranto",
  canonical: links.servizi["trasporto-acqua"]["taranto"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Taranto", 
    locationNames: {label: "Taranto", href: "taranto"}  
});