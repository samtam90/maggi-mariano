import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Trevi",
  canonical: links.servizi["trasporto-acqua"]["trevi"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Trevi", 
    locationNames: {label: "Trevi", href: "trevi"}  
});