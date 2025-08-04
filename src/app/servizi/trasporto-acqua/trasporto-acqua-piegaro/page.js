import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Piegaro",
  canonical: links.servizi["trasporto-acqua"]["piegaro"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Piegaro", 
    locationNames: {label: "Piegaro", href: "piegaro"}  
});