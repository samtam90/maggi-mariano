import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Montefalco",
  canonical: links.servizi["trasporto-acqua"]["montefalco"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Montefalco", 
    locationNames: {label: "Montefalco", href: "montefalco"}  
});